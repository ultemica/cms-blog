import { Space_Grotesk } from 'next/font/google'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export default function Page() {
  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-400'>404 - Page Not Found</h1>
        <p className='mt-4 text-gray-700 dark:text-gray-600'>The page you&apos;re looking for does not exist.</p>
      </div>
    </>
  )
}
