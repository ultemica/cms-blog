import Image from 'next/image'
import Link from 'next/link'
import { BsTwitterX } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FaBluesky } from 'react-icons/fa6'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100'>
            Projects
          </h1>
        </div>
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center space-x-2 pt-8'>
            <Image
              src='https://cdn.bsky.app/img/avatar/plain/did:plc:3hpgxglzqzzfviegqamesrfd/bafkreidxlsyktzb7gzcrmhjawzcfrfxanf7wlq3x62s5ukwpucnp2v7ffe@jpeg'
              alt='avatar'
              width={192}
              height={192}
              className='h-48 w-48 rounded-full'
            />
            <h3 className='pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight'>{'tkgstrator'}</h3>
            <div className='text-gray-500 dark:text-gray-400'>{'Rakunan Senior & Junior High School'}</div>
            <div className='text-gray-500 dark:text-gray-400'>{'Quantumleap'}</div>
            <div className='flex space-x-3 pt-6'>
              <Link href='https://bsky.app/profile/tkgstrator.work'>
                <FaBluesky size={'2rem'} />
              </Link>
              <Link href='https://x.com/tkgling'>
                <BsTwitterX size={'2rem'} />
              </Link>
              <Link href='https://github.com/tkgstrator'>
                <BsGithub size={'2rem'} />
              </Link>
            </div>
          </div>
          <div className='prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2'>{children}</div>
        </div>
      </div>
    </>
  )
}
