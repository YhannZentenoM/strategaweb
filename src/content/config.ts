import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
    type: 'content', // v2.5.0 y posteriores
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
    }),
});

const equipoCollection = defineCollection({
  type: 'content', // v2.5.0 y posteriores
  schema: z.object({
      name: z.string(),
      social: z.object({
          instagram: z.string(),
          linkedin: z.string(),
          facebook: z.string(),
      }),
      image: z.string(),
      job: z.string(),
      skills: z.array(z.object({
          name: z.string(),
          porcent: z.number(),
          description: z.string()
      })),
  }),
});

const consultoresCollection = defineCollection({
  type: 'content', // v2.5.0 y posteriores
  schema: z.object({
      name: z.string(),
      social: z.object({
          instagram: z.string(),
          linkedin: z.string(),
          facebook: z.string(),
      }),
      image: z.string(),
      job: z.string(),
  }),
});

export const collections = {
    'servicios': servicesCollection,
    'equipo': equipoCollection,
    'consultores': consultoresCollection,
};