'use client'
import { themeAtom } from '@/atoms/theme.atom'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useAtom } from 'jotai/react'
import { Code2, FolderGit2, Info, ListTodo, Moon, Sun, TerminalSquare } from 'lucide-react'
import Link from 'next/link'
import type React from 'react'

const MobileMenu: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button aria-label='Toggle Menu' type='button'>
          <TerminalSquare className='h-7 w-7' />
        </button>
      </DialogTrigger>
      <DialogContent className='md:hidden bg-gray-50 dark:bg-gray-900 p-8 border border-gray-400 dark:border-gray-700 rounded-none [&>button:last-child]:hidden'>
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
  const [theme, setTheme] = useAtom(themeAtom)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <header className='flex items-center w-full bg-[#EDE8F7] dark:bg-gray-950 justify-between px-4 md:px-8 py-6 md:py-10'>
      <Link className='break-words' aria-label='Under→Ground' href='/'>
        <div className='flex items-center justify-center h-6'>
          <span className='text-2xl font-semibold'>Under+Ground</span>
        </div>
      </Link>
      <div className='flex items-center space-x-4 leading-5'>
        <div className='no-scrollbar hidden items-center gap-x-4 overflow-x-auto md:flex'>
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
                {theme === 'dark' ? <Sun className='h-7 w-7' /> : <Moon className='h-7 w-7' />}
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
