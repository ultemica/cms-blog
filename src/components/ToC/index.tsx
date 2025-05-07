import { type Heading, getHeadings } from '@/lib/headings'

// 目次レンダリング用リスト
function RenderList({ headings, depth = 1 }: { headings: Heading[]; depth?: number }) {
  if (!headings.length) return null
  return (
    <ol className='text-[16px]'>
      {headings.map((heading) => (
        <li key={heading.id}>
          <div className='flex items-center gap-2 min-h-[1.5em]'>
            <div className='flex w-3 items-center text-center justify-center'>
              <span
                className={
                  depth === 1
                    ? 'inline-block w-[10px] h-[10px] rounded-full bg-blue-300 flex-shrink-0'
                    : 'inline-block w-[6px] h-[6px] rounded-full bg-blue-300 flex-shrink-0'
                }
              />
            </div>
            <a className={depth === 1 ? 'font-[700]' : 'font-[300]'} href={`#${heading.id}`}>
              {heading.text}
            </a>
          </div>
          {heading.children && heading.children.length > 0 && (
            <RenderList headings={heading.children} depth={depth + 1} />
          )}
        </li>
      ))}
    </ol>
  )
}

// 目次レンダリング関数
export function TableOfContents({ content }: { content: string }) {
  return (
    <div
      className='
        max-h-[calc(100vh-50px)] p-5 pb-6 overflow-auto
        bg-gray-50 dark:bg-gray-900
        rounded-md
      '
    >
      <div className='text-base font-bold tracking-wider mb-2'>目次</div>
      <div className='text-sm leading-[1.5]'>
        <RenderList headings={getHeadings(content)} />
      </div>
    </div>
  )
}
