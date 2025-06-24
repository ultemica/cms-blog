import type { Metadata } from 'next'
import 'zenn-content-css'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'
import Background from '../components/Background'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'Under+Ground',
  description: 'Welcome to Under+Ground, a blog about web development, design, and technology.',
  keywords: ['tkgling', 'tkgstrator', 'えむいー', 'えいむー'],
  openGraph: {
    title: 'Under+Ground',
    description: 'Welcome to Under+Ground, a blog about web development, design, and technology.',
    url: 'https://tkgling.com',
    siteName: 'Under+Ground',
    images: [
      {
        url: 'https://blog.tkgstrator.work/og_underground.png',
        width: 1200,
        height: 630,
        alt: 'Under+Ground'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Under+Ground',
    description: 'Welcome to Under+Ground, a blog about web development, design, and technology.',
    images: ['https://blog.tkgstrator.work/og_underground.png']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
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
