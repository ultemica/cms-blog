import BlogItem from '@/components/BlogItem'
import { Pagination, PaginationContent } from '@/components/ui/pagination'
import { GetBlogsDocument, type GetBlogsQuery } from '@/gql/graphql'
import { client } from '@/lib/client'

export const revalidate = 10

export default async function Page() {
  const response = await client.request<GetBlogsQuery>(GetBlogsDocument, {
    page: 1,
    pageSize: 5
  })
  const blogs = response.blogs.filter((blog): blog is NonNullable<typeof blog> => blog !== null)

  return (
    <>
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
      </div>
      <div className='mt-4'>
        <Pagination>
          <PaginationContent />
        </Pagination>
      </div>
    </>
  )
}
