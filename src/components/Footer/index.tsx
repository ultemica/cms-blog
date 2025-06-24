import Link from 'next/link'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { FaBluesky } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer>
      <div className='my-4 flex flex-col items-center justify-center'>
        <div className='flex space-x-4'>
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
      </div>
    </footer>
  )
}
