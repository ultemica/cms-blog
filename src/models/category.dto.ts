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
export type CategoryDatum = z.infer<typeof CategoryDatumSchema>

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

export const ItemSchema = <T extends z.ZodSchema>(S: T) =>
  z.object({
    data: S
  })
export type Item<S extends z.ZodSchema> = z.infer<ReturnType<typeof ItemSchema<S>>>

export const ListSchema = <T extends z.ZodSchema>(S: T) =>
  z.object({
    data: z.array(S),
    meta: MetaSchema
  })
