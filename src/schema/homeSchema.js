export const siteUrl = "https://kita-grossweil.netlify.app/";

// Organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kita St. Georg Großweil",
  "description": "Kindergarten & Krippe St. Georg in Großweil - Ein Ort zum Spielen, Lernen und Wachsen für Kinder von der Krippe bis zur Einschulung.",
  "url": siteUrl,
  "logo": `${siteUrl}st-georg-kita-ritter-babydrache-favicon.png`,
  "sameAs": [
    "https://www.instagram.com/kindertagesstaettegrossweil/"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+49-8851-7173",
    "contactType": "customer service",
    "areaServed": "DE",
    "availableLanguage": ["de"]
  }]
};

// LocalBusiness: ChildCare
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  "name": "Kita St. Georg Großweil",
  "url": siteUrl,
  "image": `${siteUrl}kita-st-georg-grossweil-foto.jpg`,
  "telephone": "+49-8851-7173",
  "email": "kindergarten@grossweil.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Am Bad 6",
    "postalCode": "82439",
    "addressLocality": "Großweil",
    "addressRegion": "BY",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.67729821285803,
    "longitude": 11.299274726710639
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "07:15",
    "closes": "15:30"
  }],
  "priceRange": "€€",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Gemeinde Großweil",
    "url": "https://www.grossweil.de/",
    "logo": "https://grossweil.de/wp-content/uploads/2020/07/favicon.png",
    "sameAs": [
      "https://www.facebook.com/grossweil.de",
      "https://de.wikipedia.org/wiki/Gro%C3%9Fweil"
    ],
    "contactPoint": [{
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+49-8851-1210",
      "areaServed": "DE",
      "availableLanguage": ["de"]
    }]
  }
};

// WebSite (auf der Startseite oder im BaseLayout)
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Kita St. Georg Großweil",
  "url": siteUrl,
  "inLanguage": "de"
};