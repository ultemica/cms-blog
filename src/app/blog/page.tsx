import BlogItem from '@/components/BlogItem'
import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import type { BlogList } from '@/models/blog.dto'
import { Client } from '@/models/schema'

export const revalidate = 10

export default async function Page() {
  const response: BlogList = await Client.get('/blogs', {
    queries: {
      populate: 'categories',
      sort: 'createdAt:desc',
      'pagination[page]': 0,
      'pagination[pageSize]': 10
    }
  })
  return (
    <div className='px-4 md:px-8'>
      <h1 className='text-4xl font-bold mb-4'>Blog</h1>
      <ul className='space-y-4'>
        {response.data.map((item) => {
          return (
            <li key={item.id}>
              <BlogItem item={item} />
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
