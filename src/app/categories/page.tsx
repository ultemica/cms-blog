import type { Category } from '@/models/category.dto'
import { Client } from '@/models/schema'
import Link from 'next/link'

export const revalidate = 10

export default async function Page() {
  const category: Category = await Client.get('/categories', {
    queries: {
      populate: 'blogs'
      // sort: 'createdAt:desc',
      // 'pagination[page]': 0,
      // 'pagination[pageSize]': 10
    }
  })

  return (
    <div className='px-4 md:px-8'>
      <h1 className='text-4xl font-bold mb-8'>Categories</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
        {category.data
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((category) => (
            <Link
              key={category.documentId}
              href={`/categories/${category.documentId}`}
              className='block bg-white dark:bg-gray-800 rounded shadow p-4 hover:ring-2 hover:ring-blue-400 transition'
            >
              <h2 className='text-2xl font-semibold mb-2'>{category.name}</h2>
              <div className='text-gray-600 dark:text-gray-300'>
                {category.blogs.length === 0 ? 'No articles' : `${category.blogs.length} articles`}
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
