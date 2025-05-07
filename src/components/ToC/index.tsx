import { type Heading, getHeadings } from '@/lib/headings'

// 目次レンダリング用リスト
function RenderList({ headings, depth = 1 }: { headings: Heading[]; depth?: number }) {
  if (!headings.length) return null
  return (
    <ol className='text-lg'>
      {headings.map((heading) => (
        <li key={heading.id}>
          <div className={depth === 1 ? 'flex items-center gap-2 font-bold' : 'flex items-center gap-2'}>
            <span
              className={
                depth === 1
                  ? 'inline-block w-3 h-3 rounded-full bg-blue-400'
                  : 'inline-block w-2 h-2 rounded-full bg-blue-400'
              }
            />
            <a href={`#${heading.id}`}>{heading.text}</a>
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
      '
    >
      <div className='text-base font-bold tracking-wider mb-2'>目次</div>
      <div className='text-sm leading-[1.5]'>
        <RenderList headings={getHeadings(content)} />
      </div>
    </div>
  )
}
