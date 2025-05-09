import BlogItem from '@/components/BlogItem'
import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import {
  GetCategoriesDocument,
  type GetCategoriesQuery,
  GetCategoryDocument,
  type GetCategoryQuery
} from '@/gql/graphql'
import { client } from '@/lib/client'

export const revalidate = 10

export async function generateStaticParams() {
  const response = await client.request<GetCategoriesQuery>(GetCategoriesDocument, {})
  const categories = response.categories.filter(
    (category): category is NonNullable<typeof category> => category !== null
  )

  return categories.map((category) => ({
    slug: category.documentId
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { category } = await client.request<GetCategoryQuery>(GetCategoryDocument, {
    documentId: slug
  })
  if (category === undefined || category === null) {
    return null
  }
  const blogs = category.blogs.filter((blog): blog is NonNullable<typeof blog> => blog !== null)
  return (
    <div className='px-4 md:px-8'>
      <h1 className='text-4xl font-bold mb-4'>Blog</h1>
      <ul className='space-y-4'>
        {blogs.map((blog) => {
          return (
            <li key={blog.documentId}>
              <BlogItem {...blog} />
            </li>
          )
        })}
      </ul>
      <Pagination>
        <PaginationContent>
          <PaginationPrevious href='#' />
          <PaginationNext href='#' />
        </PaginationContent>
      </Pagination>
    </div>
  )
}
