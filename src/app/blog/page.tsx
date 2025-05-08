import BlogItem from '@/components/BlogItem'
import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import type { BlogList } from '@/models/blog.dto'
import { Client } from '@/models/schema'

export const revalidate = 10

export default async function Page({ params }: { params: Promise<{ p: number }> }) {
  const { p } = await params
  const response: BlogList = await Client.get('/blogs', {
    queries: {
      populate: 'categories',
      sort: 'createdAt:desc',
      'pagination[page]': p || 1,
      'pagination[pageSize]': 5
    }
  })
  const { page, pageSize, pageCount, total } = response.meta.pagination

  console.log('response', response)

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
          <PaginationPrevious href={p > 1 ? `/blog?p=${p - 1}` : undefined} aria-disabled={p <= 1} />
          <PaginationNext
            href={
              response.meta?.pagination?.pageCount && p < response.meta.pagination.pageCount
                ? `/blog?p=${p + 1}`
                : undefined
            }
            aria-disabled={response.meta?.pagination?.pageCount ? p >= response.meta.pagination.pageCount : false}
          />
        </PaginationContent>
      </Pagination>
    </div>
  )
}
