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
      <body className='bg-white min-h-screen flex flex-col pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <section className='mx-auto w-full flex-1 px-4 sm:px-6 xl:max-w-7xl xl:px-0'>
            <Header />
            {children}
          </section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
