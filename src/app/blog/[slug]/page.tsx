import type { BlogList, Datum } from '@/src/models/blog.dto'
import { Client } from '@/src/models/schema'
import markdownToHtml from 'zenn-markdown-html'

export const revalidate = 10

export async function generateStaticParams() {
  const response: BlogList = await Client.get('/blogs', {
    queries: {
      populate: 'categories'
    }
  })

  return response.data.map((blog: Datum) => ({
    slug: blog.documentId
  }))
}

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
      <header className='pt-[3.4rem] pb-[3.2rem] px-0 text-center'>
        <div className='m-w-6xl mx-auto px-[40px]'>
          <div className='relative'>
            <h1 className='inline-block max-w-[780px] my-[1.2rem] text-[33px] text-left'>
              <span className='text-[0.84em]'>{response.data.title}</span>
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>{response.data.publishedAt.toDateString()}</p>
          </div>
        </div>
      </header>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
      <div className='znc' dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
