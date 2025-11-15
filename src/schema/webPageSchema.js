export const siteUrl = "https://kita-grossweil.netlify.app/";

export const createWebPageSchema = ({ title, description, url }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": url,
  "inLanguage": "de",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Kita St. Georg Großweil",
    "url": siteUrl
  }
});


// export const webPageSchema = {
//   "@context": "https://schema.org",
//   "@type": "WebPage",
//   "name": "Über uns – Kita Großweil",
//   "url": `${siteUrl}ueber-uns/`,
//   "description": "Erfahren Sie mehr über unsere pädagogische Arbeit, unser Team und unsere Kita-Gruppen.",
//   "inLanguage": "de",
//   "isPartOf": {
//     "@type": "WebSite",
//     "name": "Kita Großweil",
//     "url": siteUrl
//   }
// };