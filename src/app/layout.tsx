import type { Metadata } from 'next'
import 'zenn-content-css'
import './globals.css'
import Footer from '@/src/components/Footer'
import { ThemeProvider } from 'next-themes'
import Background from '../components/Background'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'Under+Ground',
  description: 'NextJS+MicroCMS+TailwindCSS+Cusdis',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body className='bg-[#EDE8F7] min-h-screen flex flex-col text-black antialiased dark:bg-gray-950 dark:text-white'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <section className='mx-auto w-full flex-1 xl:max-w-7xl relative'>
            <Header />
            <Background />
            {children}
          </section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
