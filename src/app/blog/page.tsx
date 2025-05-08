import BlogItem from '@/components/BlogItem'
import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import type { BlogList } from '@/models/blog.dto'
import { Client } from '@/models/schema'
import Link from 'next/link'

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

  return (
    <div className='px-4 md:px-8 flex flex-col justify-between h-[calc(100vh-76px-48px-36px)]'>
      <div className='flex-1'>
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
      </div>
      <div className='mt-4'>
        <Pagination>
          <PaginationContent>
            <PaginationPrevious
              href={currentPage > 1 ? `/blog?p=${currentPage - 1}` : undefined}
              aria-disabled={currentPage <= 1}
              className={currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
            />
            {/* ページ番号リンクを最大5つまで表示 */}
            {(() => {
              let start = Math.max(1, page - 2)
              const end = Math.min(pageCount, start + 4)
              if (end - start < 4) start = Math.max(1, end - 4)
              return Array.from({ length: Math.min(5, pageCount) }, (_, i) => {
                const pageNum = start + i
                const isActive = pageNum === page
                return (
                  <Link
                    key={pageNum}
                    href={`/blog?p=${pageNum}`}
                    className={`mx-1 px-3 py-1 rounded ${isActive ? 'bg-primary text-white' : 'bg-muted'}${isActive ? ' pointer-events-none opacity-70' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    tabIndex={isActive ? -1 : 0}
                  >
                    {pageNum}
                  </Link>
                )
              })
            })()}
            <PaginationNext
              href={pageCount && currentPage < pageCount ? `/blog?p=${currentPage + 1}` : undefined}
              aria-disabled={pageCount ? currentPage >= pageCount : false}
              className={pageCount && currentPage >= pageCount ? 'pointer-events-none opacity-50' : ''}
            />
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
