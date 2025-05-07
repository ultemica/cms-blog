import * as z from 'zod'

export const CategorySchema = z.object({
  id: z.number(),
  documentId: z.string(),
  name: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  publishedAt: z.coerce.date()
})
export type Category = z.infer<typeof CategorySchema>

export const BlogDatumSchema = z.object({
  id: z.number(),
  documentId: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  categories: z.array(CategorySchema).optional(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  publishedAt: z.coerce.date()
})
export type BlogDatum = z.infer<typeof BlogDatumSchema>

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

export const BlogSchema = z.object({
  data: BlogDatumSchema,
  meta: z.any()
})

export type Blog = z.infer<typeof BlogSchema>

export const BlogListSchema = z.object({
  data: z.array(BlogDatumSchema),
  meta: MetaSchema
})
export type BlogList = z.infer<typeof BlogListSchema>
