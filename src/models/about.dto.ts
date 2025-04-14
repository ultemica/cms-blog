import * as z from 'zod'

export const DataSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  organization: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  publishedAt: z.coerce.date(),
  thumbnail: z.string().url(),
  description: z.string()
})
export type Data = z.infer<typeof DataSchema>

export const MetaSchema = z.object({})
export type Meta = z.infer<typeof MetaSchema>

export const AboutSchema = z.object({
  data: DataSchema,
  meta: MetaSchema
})
export type About = z.infer<typeof AboutSchema>
