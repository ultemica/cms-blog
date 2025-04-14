'use client'
import { format } from 'date-fns'
import type React from 'react'

export const ReactTerminal: React.FC = () => {
  return (
    <div className='font-mono p-4 bg-gray-900 text-gray-200 overflow-auto'>
      <pre>
        {[
          'Welcome to Under+Ground 22.04.5 LTS (GNU/Linux 6.8.0-52-generic x86_64)',
          '',
          ' * Documentation:  https://help.ubuntu.com',
          ' * Management:     https://landscape.canonical.com',
          ' * Support:        https://ubuntu.com/pro',
          '',
          "New release '24.04.2 LTS' available.",
          "Run 'do-release-upgrade' to upgrade to it.",
          '',
          `Last login: ${format(new Date(), 'EEE MMM dd HH:mm:ss yyyy')} from 172.18.0.7`,
          'root@ubuntu:~#'
        ].join('\n')}
      </pre>
    </div>
  )
}

export default async function Page() {
  return (
    <>
      <ReactTerminal />
    </>
  )
}
