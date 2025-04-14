import * as z from 'zod'

export const DatumSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  publishedAt: z.coerce.date()
})
export type Datum = z.infer<typeof DatumSchema>

export const PaginationSchema = z.object({
  page: z.number(),
  pageSize: z.number(),
  pageCount: z.number(),
  total: z.number()
})
export type Pagination = z.infer<typeof PaginationSchema>

export const MetaSchema = z.object({
  pagination: PaginationSchema
})
export type Meta = z.infer<typeof MetaSchema>

export const CategorySchema = z.object({
  data: z.array(DatumSchema),
  meta: MetaSchema
})
export type Category = z.infer<typeof CategorySchema>
