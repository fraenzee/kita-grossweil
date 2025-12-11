export const siteUrl = "https://kita-grossweil.netlify.app/";

import { Image } from 'astro:assets';
const fallbackimage = 'https://placehold.co/150x150/eeeeee/333333?text=Foto';
import annaM from '../assets/bilder/testimonial-mama-mit-sohn.png';

export const teamMembers = [
  {
    name: "Maria Sanner",
    jobTitle: "Leitung",
    // image: `${siteUrl}assets/team/max-mustermann.jpg`
    image: fallbackimage,
    description: "Seit 20XX bei uns"
  },
  {
    name: "Max Mustermann",
    jobTitle: "Erzieher",
    // image: `${siteUrl}assets/team/erika-beispiel.jpg`
    image: fallbackimage,
    description: "Spezialgebiet: Naturpädagogik"
  },
  {
    name: "Erika Musterfrau",
    jobTitle: "Kinderpflegerin",
    // image: `${siteUrl}assets/team/erika-beispiel.jpg`
    image: annaM,
    description: "Spezialgebiet: Kreativität"
  }
];

        // <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        //     <div class="team-member-card">
        //         <img src="https://placehold.co/150x150/eeeeee/333333?text=Foto" alt="Teammitglied Foto" class="rounded-full mx-auto mb-4">
        //         <h3 class="text-xl font-semibold">Frau Maria Sanner</h3>
        //         <p class="">Leitung</p>
        //         <p class="text-brand-textGray text-sm mt-2">Seit 20XX bei uns</p>
        //     </div>
        //     <div class="team-member-card">
        //         <img src="https://placehold.co/150x150/eeeeee/333333?text=Foto" alt="Teammitglied Foto" class="rounded-full mx-auto mb-4">
        //         <h3 class="text-xl font-semibold">Max Mustermann</h3>
        //         <p class="">Erzieher</p>
        //         <p class="text-brand-textGray text-sm mt-2">Spezialgebiet: Naturpädagogik</p>
        //     </div>
        //     <div class="team-member-card">
        //         <img src="https://placehold.co/150x150/eeeeee/333333?text=Foto" alt="Teammitglied Foto" class="rounded-full mx-auto mb-4">
        //         <h3 class="text-xl font-semibold">Erika Musterfrau</h3>
        //         <p class="">Kinderpflegerin</p>
        //         <p class="text-brand-textGray text-sm mt-2">Spezialgebiet: Kreativität</p>
        //     </div>
        // </div>

export const createPersonListSchema = {
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