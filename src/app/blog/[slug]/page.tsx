import type { BlogList, Datum } from '@/src/models/blog.dto'
import { Client } from '@/src/models/schema'

export const revalidate = 10

export async function generateStaticParams() {
  const response: BlogList = await Client.get('/blogs')

  return response.data.map((blog: Datum) => ({
    slug: blog.documentId
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const response = await Client.get('/blogs/:id', {
    params: {
      id: slug
    }
  })

  return <div>{response.data.title}</div>
}
