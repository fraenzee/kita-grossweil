import { defineCollection, z } from 'astro:content';

// Definiere die "pages"-Sammlung
const pagesCollection = defineCollection({
  type: 'content', // 'content' für Markdown-Dateien
  schema: z.object({
    title: z.string(), // Jede Seite hat einen Titel (String)
    // Hier könnten weitere Felder für deine Seiten definiert werden, falls nötig
    // z.B. description: z.string().optional(),
    subtitle: z.string().optional(),
    subheadlinedescription: z.string().optional(),
    intro: z.string().optional(),
    description: z.string().optional(),
    gruppen: z
      .array(
        z.object({
          name: z.string(),
          bild: z.string(),
          alt: z.string().optional(),
          svg: z.string().optional(),
          intro: z.string(),
          link: z.string().optional(),
          linkText: z.string().optional(),
        })
      )
      .optional(),
  }),
});

// Exportiere alle Sammlungen
export const collections = {
  'pages': pagesCollection,
};
