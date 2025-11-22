// src/scripts/navigation.js
export const navItems = [
  {
    title: "Über uns",
    href: "/ueber-uns/",
    children: [
      { title: "Unser Team", href: "/team/" },
      { title: "Unsere Kita-Gruppen", href: "/gruppen/" },
      { title: "Elternbeirat", href: "/elternbeirat/" },
      { title: "Pädagogik-Konzept", href: "/paedagogik/" },
      { title: "Unser Träger", href: "/traeger/" },
      { title: "FAQ", href: "/faq/" },
    ],
  },
  { title: "Anmeldung", href: "/anmeldung-kosten/" },
  { title: "Aktuelles", href: "/aktuelles/" },
  { title: "Galerie", href: "/galerie/" },
  { title: "Kontakt", href: "/kontakt/" },
  { title: "Karriere", href: "/stellenanzeigen/", isButton: true },
  // { title: "Instagram", href: "https://www.instagram.com/kindertagesstaettegrossweil/", isExternal: true},
];
