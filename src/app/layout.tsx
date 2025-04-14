import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/src/components/Footer'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'Under+Ground',
  description: 'NextJS+MicroCMS+TailwindCSS+Cusdis'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white'>
        <section className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-7xl xl:px-0'>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </section>
      </body>
    </html>
  )
}
