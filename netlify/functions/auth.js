// netlify/functions/auth.js
import jwt from "jsonwebtoken";

// Wenn deine Node-Version kein fetch global hat, dann:
// import fetch from "node-fetch";

const {
  AUTH0_DOMAIN,           // z.B. dev-xxxxxx.eu.auth0.com
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_AUDIENCE,         // optional, wenn du eine API in Auth0 nutzt
  SITE_URL,               // z.B. https://kita-grossweil.netlify.app
} = process.env;

const baseUrl = SITE_URL?.replace(/\/$/, "") || ""; // ohne trailing slash

const auth0Issuer = `https://${AUTH0_DOMAIN}`;
const auth0AuthorizeUrl = `${auth0Issuer}/authorize`;
const auth0TokenUrl = `${auth0Issuer}/oauth/token`;
const auth0LogoutUrl = `${auth0Issuer}/v2/logout`;

// Helper: JSON Response
const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json" },
});

// Helper: Redirect
const redirect = (location) => new Response(null, {
  status: 302,
  headers: { Location: location },
});

export default async (req) => {
  try {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // Decap CMS erwartet 3 Endpunkte:
    // 1) GET /.netlify/functions/auth (Start Auth) -> redirect zu Auth0 /authorize
    // 2) GET /.netlify/functions/auth/callback (Callback von Auth0) -> tauscht Code gegen Token, liefert CMS-konforme JSON
    // 3) POST /.netlify/functions/auth/logout (optional)

    if (pathname.endsWith("/auth")) {
      // Start Auth-Flow
      const state = cryptoRandomString();
      const redirectUri = `${baseUrl}/.netlify/functions/auth/callback`;

      const authorizeParams = new URLSearchParams({
        response_type: "code",
        client_id: AUTH0_CLIENT_ID,
        redirect_uri: redirectUri,
        scope: "openid profile email",
        // Hinweis: Für GitHub-Token über Auth0 brauchst du eine "GitHub Connection" und ggf. passende scope in Auth0
        state,
      });

      // State in Cookie legen zur Validierung (einfacher Ansatz)
      const res = redirect(`${auth0AuthorizeUrl}?${authorizeParams.toString()}`);
      res.headers.append("Set-Cookie", `oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`);
      return res;
    }

    if (pathname.endsWith("/auth/callback")) {
      // Callback: Code gegen Token tauschen
      const code = new URL(req.url).searchParams.get("code");
      const cookieHeader = req.headers.get("cookie") || "";
      const cookies = parseCookies(cookieHeader);
      const stateParam = new URL(req.url).searchParams.get("state");
      const stateCookie = cookies["oauth_state"];

      if (!code) return json({ error: "Missing code" }, 400);
      if (!stateParam || !stateCookie || stateParam !== stateCookie) {
        return json({ error: "Invalid state" }, 400);
      }

      const redirectUri = `${baseUrl}/.netlify/functions/auth/callback`;

      // Token bei Auth0 holen
      const tokenRes = await fetch(auth0TokenUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          client_id: AUTH0_CLIENT_ID,
          client_secret: AUTH0_CLIENT_SECRET,
          code,
          redirect_uri: redirectUri,
          ...(AUTH0_AUDIENCE ? { audience: AUTH0_AUDIENCE } : {}),
        }),
      });

      if (!tokenRes.ok) {
        const err = await tokenRes.text();
        return json({ error: "Token exchange failed", details: err }, 400);
      }
      const tokenData = await tokenRes.json();

      // tokenData enthält id_token, access_token (Auth0)
      // Decap CMS im GitHub-Backend erwartet am Ende eine Struktur:
      // { token: <github_access_token> } oder { token: <jwt>, provider: "github" }
      //
      // Variante über Auth0-Connection „GitHub“:
      // - Du kannst das GitHub-Access-Token als "access_token" in einem Auth0 Rule/Action an das id_token anhängen (custom claim),
      //   ODER du nutzt Auth0 Management API, um user identities auszulesen (aufwendiger).
      //
      // Für eine einfache, lauffähige Lösung nutzen wir einen "JWT Service Token" für Decap-GitHub-Proxy ist nicht trivial ohne zusätzliches Backend.
      // Best Practice: Verwende die decapcms-oauth "GitHub" Proxy-Logik. Hier skizzieren wir eine Minimal-Implementierung:

      // OPTION A (empfohlen): Du hast in Auth0 eine Rule/Action, die GitHub access_token als custom claim hinzufügt:
      //   custom claim z.B. "https://kita-grossweil/token_github"
      // Dann extrahieren wir diesen Wert aus id_token:
      const idToken = tokenData.id_token;
      let githubAccessToken = null;
      try {
        const decoded = jwt.decode(idToken);
        // Passe den Claim-Namen an deine Action/Rule an
        githubAccessToken = decoded?.["https://kita-grossweil/token_github"] || null;
      } catch (_) {}

      if (!githubAccessToken) {
        // Falls noch nicht vorhanden, gib eine klare Fehlermeldung aus.
        // Alternativ: Hier könntest du eine weitere Function/Logik hinzufügen, die über Auth0 Management API
        // das verbundene GitHub-Token holt (setzt aber Management API Token voraus).
        return json({
          error: "Missing GitHub token from Auth0",
          nextSteps: "Füge in Auth0 eine Action/Rule hinzu, die das GitHub access_token als Custom Claim ins ID Token schreibt, z.B. https://kita-grossweil/token_github",
        }, 500);
      }

      // Erfolg: Für Decap CMS reicht ein JSON mit "token"
      // Zusätzlich können wir provider und backend angeben.
      const cmsResponse = {
        token: githubAccessToken,
        // provider: "github",
        // backend: "github",
      };

      // Cookie löschen
      const res = json(cmsResponse, 200);
      res.headers.append("Set-Cookie", `oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`);
      return res;
    }

    if (pathname.endsWith("/auth/logout") && req.method === "POST") {
      // Optional: Logout
      const returnTo = `${baseUrl}/admin/`;
      const logoutUrl = `${auth0LogoutUrl}?${new URLSearchParams({
        client_id: AUTH0_CLIENT_ID,
        returnTo,
      }).toString()}`;
      return redirect(logoutUrl);
    }

    return json({ error: "Not found" }, 404);
  } catch (e) {
    return json({ error: "Server error", details: e.message }, 500);
  }
};

function parseCookies(header) {
  return header.split(";").map(v => v.trim()).filter(Boolean).reduce((acc, v) => {
    const [k, ...rest] = v.split("=");
    acc[k] = decodeURIComponent(rest.join("="));
    return acc;
  }, {});
}

function cryptoRandomString() {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const buf = new Uint8Array(16);
    crypto.getRandomValues(buf);
    return Array.from(buf).map(b => b.toString(16).padStart(2, "0")).join("");
  }
  return Math.random().toString(36).slice(2);
}
