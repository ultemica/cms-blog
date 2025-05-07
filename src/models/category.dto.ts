import * as z from 'zod'
import { BlogDatumSchema } from './blog.dto'

export const CategoryDatumSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  publishedAt: z.coerce.date(),
  blogs: z.array(BlogDatumSchema)
})
export type Datum = z.infer<typeof CategoryDatumSchema>

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
  data: z.array(CategoryDatumSchema),
  meta: MetaSchema
})
export type Category = z.infer<typeof CategorySchema>

export const ItemSchema = (S: z.ZodSchema) =>
  z.object({
    data: S,
    meta: MetaSchema
  })

export const ListSchema = (S: z.ZodSchema) =>
  z.object({
    data: z.array(S),
    meta: MetaSchema
  })
