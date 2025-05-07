import type { BlogList, Datum } from '@/models/blog.dto'
import { Client } from '@/models/schema'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { FaBluesky } from 'react-icons/fa6'
import markdownToHtml from 'zenn-markdown-html'

// 目次用型
type TocItem = {
  id: string
  text: string
  level: number
  children?: TocItem[]
}

// 目次レンダリング関数
function renderToc(items: TocItem[]) {
  return (
    <ol className='ol-depth-1'>
      {items.map((item) => (
        <li key={item.id} className={item.id === items[0].id ? 'active' : undefined}>
          <a href={`#${item.id}`} className={item.id === items[0].id ? 'active' : undefined}>
            {item.text}
          </a>
          {item.children && item.children.length > 0 && (
            <ol className='ol-depth-2'>
              {item.children.map((child) => (
                <li key={child.id}>
                  <a href={`#${child.id}`}>{child.text}</a>
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </ol>
  )
}

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
  const html = markdownToHtml(response.data.content)
  // headings型: { id: string; text: string; level: number }[]

  // 目次データ
  const toc: TocItem[] = [
    { id: 'worker-セットアップ', text: 'Worker セットアップ', level: 1 },
    { id: 'd1-セットアップ', text: 'D1 セットアップ', level: 1 },
    { id: 'prisma-セットアップ', text: 'Prisma セットアップ', level: 1 },
    { id: 'prisma-スキーマ作成', text: 'Prisma スキーマ作成', level: 1 },
    { id: 'マイグレーション', text: 'マイグレーション', level: 1 },
    {
      id: 'prisma-操作',
      text: 'Prisma 操作',
      level: 1,
      children: [
        { id: 'レコード追加', text: 'レコード追加', level: 2 },
        { id: 'レコード取得', text: 'レコード取得', level: 2 }
      ]
    },
    { id: '所感', text: '所感', level: 1 }
  ]

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
              <section className='xl:w-[calc(100%-330px)] w-full'>
                <div className='py-[40px] bg-white dark:bg-gray-900'>
                  <div
                    className='m-w-4xl px-[14px] md:px-[40px]'
                    style={{
                      fontSize: '1.25em'
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
              <aside className='hidden md:block md:w-[300px]'>
                <div>
                  <div className='p-[20px] bg-white dark:bg-gray-900'>
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
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
