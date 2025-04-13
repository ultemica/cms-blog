import type { Article } from '@/src/libs/microcms'
import { format } from 'date-fns'
import Link from 'next/link'
import styles from './index.module.css'

type Props = {
  article: Article
}

export default function ArticleListItem({ article }: Props) {
  return (
    <li className={styles.list}>
      <article className='flex flex-col space-y-2 xl:space-y-0'>
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='text-base leading-6 font-medium text-gray-500 dark:text-gray-400'>
            <time dateTime={format(new Date(article.createdAt), 'MMMM d, yyyy')}>
              {format(new Date(article.createdAt), 'MMMM d, yyyy')}
            </time>
          </dd>
        </dl>
        <div className='space-y-3'>
          <div>
            <h2 className='text-2xl leading-8 font-bold tracking-tight'>
              <Link href={`/blog/${article.id}`} className='text-gray-900 dark:text-gray-100'>
                {article.title}
              </Link>
            </h2>
            {article.tags && (
              <div className='flex flex-wrap'>
                {article.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/tags/${tag}`}
                    className='text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase'
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className='prose max-w-none text-gray-500 dark:text-gray-400'>{article.description}</div>
        </div>
      </article>
    </li>
  )
}
