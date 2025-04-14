'use client'
import type {} from '@/src/models/blog.dto'
import { Client } from '@/src/models/schema'
import markdownToHtml from 'zenn-markdown-html'

export const runtime = 'edge'
export const revalidate = 10

// export async function generateStaticParams() {
//   const response: BlogList = await Client.get('/blogs', {
//     queries: {
//       populate: 'categories'
//     }
//   })

//   return response.data.map((blog: Datum) => ({
//     slug: blog.documentId
//   }))
// }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const response = await Client.get('/blogs/:id', {
    params: {
      id: slug
    },
    queries: {
      populate: 'categories'
    }
  })
  const html = markdownToHtml(response.data.content)

  return (
    <div>
      <div className='pb-2 mb-2 border-b'>
        <h1 className='text-3xl font-bold mb-1'>{response.data.title}</h1>
        <p className='text-gray-500 dark:text-gray-400'>{response.data.publishedAt.toDateString()}</p>
      </div>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <div className='znc' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
