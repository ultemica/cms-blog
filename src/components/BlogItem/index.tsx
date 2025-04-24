import type { Datum } from '@/models/blog.dto'
import Link from 'next/link'

type Props = {
  item: Datum
}

export default function BlogItem({ item }: Props) {
  return (
    <article className='flex flex-col space-y-2 xl:space-y-0'>
      <dl>
        <dt className='sr-only'>Published on</dt>
        <dd className='text-base leading-6 font-medium text-gray-500 dark:text-gray-400'>
          <time dateTime={item.createdAt.toDateString()}>{item.createdAt.toDateString()}</time>
        </dd>
      </dl>
      <div className='space-y-3'>
        <div>
          <h2 className='text-2xl leading-8 font-bold tracking-tight'>
            <Link className='text-gray-900 dark:text-gray-100' href={`blog/${item.documentId}`}>
              {item.title}
            </Link>
          </h2>
          <div className='flex flex-wrap'>
            {item.categories.map((category) => (
              <a
                key={category.documentId}
                className='text-red-500 hover:text-red-600 dark:hover:text-red-400 mr-3 text-sm font-medium uppercase'
                href={`/tags/${category.documentId}`}
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
        <div className='prose max-w-none text-gray-500 dark:text-gray-400'>{item.description}</div>
      </div>
    </article>
  )
}
