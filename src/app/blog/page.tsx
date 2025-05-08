import BlogItem from '@/components/BlogItem'
import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import type { BlogList } from '@/models/blog.dto'
import { Client } from '@/models/schema'

export const revalidate = 10

export default async function Page({ searchParams }: { searchParams: Promise<{ p?: string }> }) {
  const { p } = await searchParams
  const pageNum = Number(p)
  const currentPage = Number.isNaN(pageNum) || pageNum < 1 ? 1 : pageNum
  const response: BlogList = await Client.get('/blogs', {
    queries: {
      populate: 'categories',
      sort: 'createdAt:desc',
      'pagination[page]': currentPage,
      'pagination[pageSize]': 5
    }
  })
  const { page, pageSize, pageCount, total } = response.meta.pagination

  // console.log(page, pageSize, pageCount, total)

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
      <div className='mt-4'>
        <Pagination>
          <PaginationContent>
            <PaginationPrevious
              href={currentPage > 1 ? `/blog?p=${currentPage - 1}` : undefined}
              aria-disabled={currentPage <= 1}
            />
            {/* ページ番号リンクを追加 */}
            {Array.from({ length: pageCount }, (_, i) => {
              const pageNum = i + 1
              return (
                <a
                  key={pageNum}
                  href={`/blog?p=${pageNum}`}
                  className={`mx-1 px-3 py-1 rounded ${pageNum === page ? 'bg-primary text-white' : 'bg-muted'}`}
                  aria-current={pageNum === page ? 'page' : undefined}
                >
                  {pageNum}
                </a>
              )
            })}
            <PaginationNext
              href={
                response.meta?.pagination?.pageCount && currentPage < response.meta.pagination.pageCount
                  ? `/blog?p=${currentPage + 1}`
                  : undefined
              }
              aria-disabled={
                response.meta?.pagination?.pageCount ? currentPage >= response.meta.pagination.pageCount : false
              }
            />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
