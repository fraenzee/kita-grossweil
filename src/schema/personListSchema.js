export const siteUrl = "https://kita-grossweil.netlify.app/";

export const teamMembers = [
  {
    name: "Max Mustermann",
    jobTitle: "Erzieher",
    image: `${siteUrl}assets/team/max-mustermann.jpg`
  },
  {
    name: "Erika Beispiel",
    jobTitle: "Leitung",
    image: `${siteUrl}assets/team/erika-beispiel.jpg`
  }
];

export const personListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Team – Kita Großweil",
  "itemListElement": teamMembers.map(m => ({
    "@type": "Person",
    "name": m.name,
    "jobTitle": m.jobTitle,
    "image": m.image,
    "worksFor": {
      "@type": "ChildCare",
      "name": "Kita St. Georg Großweil",
      "url": siteUrl
    }
  }))
};