import { Client } from '@/src/models/schema'

export async function generateStaticParams() {
  const response = await Client.get('/categories', {})

  return response.data.map((category) => ({
    slug: category.documentId
  }))
}

// biome-ignore lint/correctness/noUnusedVariables: <explanation>
export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-400'>404 - Page Not Found</h1>
        <p className='mt-4 text-gray-700 dark:text-gray-600'>The page you&apos;re looking for does not exist.</p>
      </div>
    </>
  )
}
