import type { Metadata } from 'next'
import 'zenn-content-css'
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
      <body className='bg-[#EDE8F7] min-h-screen flex flex-col pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <section className='mx-auto w-full flex-1 px-8 sm:px-8 xl:max-w-7xl xl:px-0'>
            <Header />
            {children}
          </section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
