import { TableOfContents } from '@/components/ToC'
import type { BlogList, Datum } from '@/models/blog.dto'
import { Client } from '@/models/schema'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { FaBluesky } from 'react-icons/fa6'
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

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const response = await Client.get('/blogs/:id', {
    params: {
      id: slug
    },
    queries: {
      populate: 'categories'
    }
  })
  const markdown = response.data.content
  const html = markdownToHtml(markdown)

  return (
    <div>
      <header className='pt-[0.0rem] pb-[3.2rem] px-0 text-center'>
        <div className='m-w-6xl mx-auto px-[40px]'>
          <div className='relative'>
            <h1
              className='inline-block max-w-[780px] my-[1.2rem] md:text-[33px] text-[24px] text-center'
              style={{
                fontSize: '33px',
                width: '100%',
                wordBreak: 'break-word'
              }}
            >
              <span
                style={{
                  fontSize: '0.84em'
                }}
              >
                {response.data.title}
              </span>
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>{response.data.publishedAt.toDateString()}</p>
          </div>
        </div>
      </header>
      <div className='m-w-6xl mx-auto px-0 sm:px-[40px]'>
        <div className='block'>
          <div className='relative flex'>
            <div className='flex justify-between'>
              <section className='w-full lg:w-[calc(100%-330px)]'>
                <div className='py-[40px] bg-white dark:bg-gray-900 rounded-md'>
                  <div
                    className='m-w-4xl px-[14px] md:px-[40px]'
                    style={{
                      fontSize: '1.15em'
                    }}
                  >
                    <div
                      className='znc'
                      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </div>
                </div>
              </section>
              <aside className='hidden lg:block md:w-[300px]'>
                <div className='p-[20px] bg-white dark:bg-gray-900 rounded-md'>
                  <div className='flex items-center justify-between'>
                    <Image src='/author.webp' width={60} height={60} alt='tkgstrator' className='rounded-full' />
                    <div className='w-[calc(100%-70px)]'>
                      <span className='mt-[3px] text-[1.2rem] font-bold'>tkgstrator</span>
                      <div className='flex gap-[10px] items-center mt-[7px]'>
                        <Link href='https://bsky.app/profile/tkgstrator.work'>
                          <FaBluesky />
                        </Link>
                        <Link href='https://x.com/tkgling'>
                          <BsTwitterX />
                        </Link>
                        <Link href='https://github.com/tkgstrator'>
                          <BsGithub />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <span className='block h-[1.5rem]' />
                  <p>美少女JKエンジニア</p>
                </div>
                <span className='block h-[1.5rem]' />
                <div className='sticky top-[1.5rem]'>
                  <div>
                    <TableOfContents content={markdown} />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
