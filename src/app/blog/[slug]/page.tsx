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

// 目次用型
type Heading = {
  id: string
  text: string
  level: number
  children?: Heading[]
}

// Markdownの見出し配列を階層構造に変換する関数
function nestHeadings(flatHeadings: Omit<Heading, 'children'>[]): Heading[] {
  const result: Heading[] = []
  const stack: Heading[] = []

  for (const h of flatHeadings) {
    const heading: Heading = { ...h, children: [] }
    while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
      stack.pop()
    }
    if (stack.length === 0) {
      result.push(heading)
      stack.push(heading)
    } else {
      stack[stack.length - 1].children?.push(heading)
      stack.push(heading)
    }
  }
  return result
}

// Markdownから見出しを抽出する関数
function extractHeadings(markdown: string): Omit<Heading, 'children'>[] {
  const lines = markdown.split('\n')
  const headings: Omit<Heading, 'children'>[] = []
  for (const line of lines) {
    const match = /^(#{1,6})\s+(.+)$/.exec(line)
    if (match) {
      const level = match[1].length
      const text = match[2].trim()
      // id生成: Zenn風に小文字化・空白を-に・記号除去
      const id = encodeURIComponent(
        text
          .toLowerCase()
          .replace(/[^\w\s\-ぁ-んァ-ヶ一-龠々ー]/g, '')
          .replace(/\s+/g, '-')
      )
      headings.push({ id, text, level })
    }
  }
  return headings
}

// 目次レンダリング用リスト
function renderTocList(headings: Heading[], depth = 1) {
  return (
    <ol
      className={
        depth === 1
          ? 'pl-0 list-none font-bold relative before:absolute before:top-[17px] before:bottom-[8px] before:left-[5px] before:w-[2px] before:content-[""] before:bg-blue-400 before:rounded-b-[5px]'
          : 'pl-0 list-none font-normal'
      }
    >
      {headings.map((heading) => (
        <li key={heading.id} className={depth === 1 ? 'relative pl-[21px] mt-1' : 'relative mt-1'}>
          <span
            className={
              depth === 1
                ? 'absolute top-[4px] left-0 w-3 h-3 bg-blue-200 border-2 border-gray-50 dark:border-gray-900 rounded-full'
                : 'absolute top-[6px] left-[-19px] w-2 h-2 bg-blue-100 border-2 border-gray-50 dark:border-gray-900 rounded-full'
            }
          />
          <a
            href={`#${heading.id}`}
            className='block max-h-[3.05em] my-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'
          >
            {heading.text}
          </a>
          {heading.children && heading.children.length > 0 && renderTocList(heading.children, depth + 1)}
        </li>
      ))}
    </ol>
  )
}

// 目次レンダリング関数
function TableOfContents({ headings }: { headings: Heading[] }) {
  return (
    <div
      className='
        max-h-[calc(100vh-50px)] p-5 pb-6 overflow-auto
        bg-gray-50 dark:bg-gray-900
      '
    >
      <div className='text-base font-bold tracking-wider mb-2'>目次</div>
      <div className='text-sm leading-[1.5]'>{renderTocList(headings)}</div>
    </div>
  )
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
  // Markdownから見出しを抽出し階層構造に変換
  const flatHeadings = extractHeadings(markdown)
  const headings = nestHeadings(flatHeadings)

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
                <div className='py-[40px] bg-white dark:bg-gray-900'>
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
                <span className='block h-[1.5rem]' />
                <div className='sticky top-[1.5rem]'>
                  <div>
                    <TableOfContents headings={headings} />
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
