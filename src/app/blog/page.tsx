import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import BlogItem from '@/src/components/BlogItem'
import type { BlogList } from '@/src/models/blog.dto'
import { Client } from '@/src/models/schema'

// const PaginationLink = ({ ...props }) => (
//   <PaginationItem>
//     <Link href={props.href}>{props.children}</Link>
//   </PaginationItem>
// )

export default async function Page() {
  const response: BlogList = await Client.get('/blogs', {
    queries: {
      populate: 'categories'
    }
  })
  return (
    <>
      <h1 className='text-4xl font-bold mb-4'>Blog</h1>
      {response.data.map((item) => {
        return <BlogItem key={item.id} item={item} />
      })}
      <Pagination>
        <PaginationContent>
          <PaginationPrevious href='#' />
          <PaginationNext href='#' />
        </PaginationContent>
      </Pagination>
    </>
  )
}
