'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import type React from 'react'

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
          <div className='mr-3'>
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
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button aria-label='Toggle Menu' className='sm:hidden'>
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='hover:text-primary-500 dark:hover:text-primary-400 h-8 w-8 text-gray-900 dark:text-gray-100'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
