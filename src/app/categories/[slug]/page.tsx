import BlogItem from '@/components/BlogItem'
import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
import type { CategoryDatumSchema, Item } from '@/models/category.dto'
import { Client } from '@/models/schema'

export const revalidate = 10

export async function generateStaticParams() {
  const response = await Client.get('/categories', {
    queries: {
      'populate[blogs][populate]': 'categories'
    }
  })

  return response.data.map((category) => ({
    slug: category.documentId
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const response: Item<typeof CategoryDatumSchema> = await Client.get('/categories/:id', {
    params: {
      id: slug
    },
    queries: {
      'populate[blogs][populate]': 'categories'
    }
  })
  return (
    <div className='px-4 md:px-8'>
      <h1 className='text-4xl font-bold mb-4'>Blog</h1>
      <ul className='space-y-4'>
        {response.data.blogs.map((item) => {
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
