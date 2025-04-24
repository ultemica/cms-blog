'use client'
// shadcn/uiのDialogを利用
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog'
// 追加: shadcn/uiのicons(lucide-react)をインポート
import { Code2, FolderGit2, Info, ListTodo, TerminalSquare } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type React from 'react'

const MobileMenu: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button aria-label='Toggle Menu' type='button'>
          <TerminalSquare className='h-7 w-7 text-gray-700 dark:text-gray-300' />
        </button>
      </DialogTrigger>
      <DialogContent className='sm:hidden bg-gray-50 dark:bg-gray-900 p-8 border border-gray-400 dark:border-gray-700 rounded-none [&>button:last-child]:hidden'>
        {/* Geeky Custom Close Button */}
        <DialogClose asChild>
          <button
            aria-label='Close'
            className='absolute right-4 top-4 flex items-center justify-center rounded border border-gray-400 dark:border-gray-700 p-2 hover:bg-black transition'
            type='button'
          >
            <Code2 className='h-5 w-5' />
          </button>
        </DialogClose>
        <div className='flex flex-col'>
          <div className='grid grid-cols-2 grid-rows-2 gap-8 mt-8 justify-items-center items-center'>
            <DialogClose asChild>
              <Link
                href='/blog'
                className='flex flex-col items-center justify-center w-28 h-28 border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-none transition-all'
              >
                <Code2 className='h-10 w-10 mb-2 text-gray-700 dark:text-gray-300' />
                <span className='text-gray-800 dark:text-gray-200 text-base font-semibold'>Blog</span>
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link
                href='/categories'
                className='flex flex-col items-center justify-center w-28 h-28 border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-none transition-all'
              >
                <ListTodo className='h-10 w-10 mb-2 text-gray-700 dark:text-gray-300' />
                <span className='text-gray-800 dark:text-gray-200 text-base font-semibold'>Categories</span>
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link
                href='/projects'
                className='flex flex-col items-center justify-center w-28 h-28 border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-none transition-all'
              >
                <FolderGit2 className='h-10 w-10 mb-2 text-gray-700 dark:text-gray-300' />
                <span className='text-gray-800 dark:text-gray-200 text-base font-semibold'>Projects</span>
              </Link>
            </DialogClose>
            <DialogClose asChild>
              <Link
                href='/about'
                className='flex flex-col items-center justify-center w-28 h-28 border border-gray-400 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-none transition-all'
              >
                <Info className='h-10 w-10 mb-2 text-gray-700 dark:text-gray-300' />
                <span className='text-gray-800 dark:text-gray-200 text-base font-semibold'>About</span>
              </Link>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (localTheme) {
      setTheme(localTheme)
      document.documentElement.classList.toggle('dark', localTheme === 'dark')
    } else {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(systemDark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', systemDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <header className='flex items-center w-full bg-[#EDE8F7] dark:bg-gray-950 justify-between py-10'>
      <Link className='break-words' aria-label='Under→Ground' href='/'>
        <div className='flex items-center justify-between'>
          <div className='mr-3 hidden sm:block'>
            {/* Logo SVG */}
            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='53.87'
              height='43.61'
              viewBox='344.564 330.278 111.737 91.218'
            >
              <defs>
                <linearGradient
                  id='logo_svg__b'
                  x1='420.97'
                  x2='420.97'
                  y1='331.28'
                  y2='418.5'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0%' style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  <stop offset='100%' style={{ stopColor: '#67e8f9', stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient
                  id='logo_svg__d'
                  x1='377.89'
                  x2='377.89'
                  y1='331.28'
                  y2='418.5'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop offset='0%' style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  <stop offset='100%' style={{ stopColor: '#67e8f9', stopOpacity: 1 }} />
                </linearGradient>
                <path id='logo_svg__a' d='M453.3 331.28v28.57l-64.66 58.65v-30.08z' />
                <path id='logo_svg__c' d='M410.23 331.28v28.57l-64.67 58.65v-30.08z' />
              </defs>
              <use xlinkHref='#logo_svg__a' fill='url(#logo_svg__b)' />
              <use xlinkHref='#logo_svg__c' fill='url(#logo_svg__d)' />
            </svg>
          </div>
          <div className='hidden h-6 text-2xl font-semibold sm:block'>Under+Ground</div>
        </div>
      </Link>
      <div className='flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6'>
        <div className='no-scrollbar hidden items-center gap-x-4 overflow-x-auto sm:flex'>
          <Link
            className='hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100'
            href='/blog'
          >
            Blog
          </Link>
          <Link
            className='hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100'
            href='/categories'
          >
            Categories
          </Link>
          <Link
            className='hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100'
            href='/projects'
          >
            Projects
          </Link>
          <Link
            className='hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100'
            href='/about'
          >
            About
          </Link>
        </div>
        <div className='flex items-center'>
          <div className='relative inline-block text-left'>
            <div className='hover:text-primary-500 dark:hover:text-primary-400 flex items-center justify-center'>
              <button aria-label='Theme switcher' type='button' onClick={toggleTheme}>
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='group:hover:text-gray-100 h-6 w-6'
                >
                  <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header
