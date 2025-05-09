import type { GetBlogsQuery } from '@/gql/graphql'
import dayjs from 'dayjs'
import Link from 'next/link'

export default function BlogItem(blog: NonNullable<GetBlogsQuery['blogs'][number]>) {
  const categories = blog.categories.filter((category): category is NonNullable<typeof category> => category !== null)
  return (
    <>
      <article className='flex flex-col space-y-2 xl:space-y-0'>
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='text-base leading-6 font-medium text-gray-500 dark:text-gray-400'>
            <time dateTime={dayjs(blog.publishedAt).format('ddd MMM DD YYYY')}>
              {dayjs(blog.publishedAt).format('ddd MMM DD YYYY')}
            </time>
          </dd>
        </dl>
        <div className='space-y-3'>
          <div>
            <h2 className='text-2xl leading-8 font-bold tracking-tight'>
              <Link className='text-gray-900 dark:text-gray-100' href={`/blog/${blog.documentId}`}>
                {blog.title}
              </Link>
            </h2>
            <div className='flex flex-wrap'>
              {categories.map((category) => (
                <Link key={category.documentId} href={`/categories/${category.documentId}`} className='mr-3'>
                  <span className='text-red-500 hover:text-red-600 dark:hover:text-red-400 text-sm font-medium uppercase'>
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className='prose max-w-none text-gray-500 dark:text-gray-400'>{blog.description}</div>
        </div>
      </article>
    </>
  )
}
