import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import BlogItem from '@/src/components/BlogItem'
import type { BlogList } from '@/src/models/blog.dto'
import { Client } from '@/src/models/schema'

// const PaginationLink = ({ ...props }) => (
//   <PaginationItem>
//     <Link href={props.href}>{props.children}</Link>
//   </PaginationItem>
// )

export const revalidate = 10

export default async function Page() {
  const response: BlogList = await Client.get('/blogs', {
    queries: {
      populate: 'categories',
      sort: 'publishedAt:desc',
      'pagination[page]': 0,
      'pagination[pageSize]': 10
    }
  })
  return (
    <>
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
    </>
  )
}
