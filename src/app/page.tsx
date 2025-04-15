'use client'
import { format } from 'date-fns'
import type React from 'react'
import { useEffect, useState } from 'react'

const ReactTerminal: React.FC = () => {
  const [message, setMessage] = useState<string>('')
  const lines = [
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
  ]
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessage((prev) => {
        if (prev.length >= lines.join('\n').length) {
          clearInterval(intervalId)
          return prev
        }
        return lines.join('\n').slice(0, prev.length + 1)
      })
    }, 10)
    return () => clearInterval(intervalId)
  }, [])
  return (
    <div className='font-mono p-4 bg-gray-900 text-gray-200 overflow-auto max-w-4xl m-auto'>
      <pre>{message}</pre>
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
