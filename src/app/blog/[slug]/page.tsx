import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { FaBluesky } from 'react-icons/fa6'
import markdownToHtml from 'zenn-markdown-html'
import { TableOfContents } from '@/components/ToC'
import { GetBlogDocument, type GetBlogQuery, GetBlogsDocument, type GetBlogsQuery } from '@/gql/graphql'
import { client } from '@/lib/client'

export const revalidate = 10

export async function generateStaticParams() {
  // とりあえず最大100記事分だけ静的ビルドする
  const response = await client.request<GetBlogsQuery>(GetBlogsDocument, {
    page: 1,
    pageSize: 100
  })
  const blogs = response.blogs.filter((blog): blog is NonNullable<typeof blog> => blog !== null)
  return blogs.map((blog) => ({
    slug: blog.documentId
  }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { blog } = await client.request<GetBlogQuery>(GetBlogDocument, {
    documentId: slug
  })
  if (blog === undefined || blog === null) {
    return null
  }
  const html = markdownToHtml(blog.content)

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
                {blog.title}
              </span>
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>{dayjs(blog.publishedAt).format('ddd MMM DD YYYY')}</p>
          </div>
        </div>
      </header>
      <div className='m-w-6xl mx-auto px-0 sm:px-[40px]'>
        <div className='block'>
          <div className='relative'>
            <div className='flex justify-between'>
              <section className='lg:w-[calc(100%-330px)] w-full'>
                <div className='py-[40px] bg-white dark:bg-gray-900 rounded-md'>
                  <div className='m-w-4xl px-[25px] md:px-[40px] text-lg'>
                    <div
                      className='znc'
                      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </div>
                </div>
              </section>
              <aside className='hidden lg:block lg:w-[300px]'>
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
                    <TableOfContents content={blog.content} />
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
