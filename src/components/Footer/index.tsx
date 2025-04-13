import Link from 'next/link'
import { BsTwitterX } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaBluesky } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer>
      <div className='mt-16 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <Link href='https://bsky.app/profile/tkgstrator.work'>
            <FaBluesky />
          </Link>
          <Link href='https://x.com/tkgling'>
            <BsTwitterX />
          </Link>
          <Link href='https://github.com/tkgstrator'>
            <BsGithub />
          </Link>
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <div>Powered by Next.js</div>
        </div>
      </div>
    </footer>
  )
}
