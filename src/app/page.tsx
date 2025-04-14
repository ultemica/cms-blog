'use client'
import { format } from 'date-fns'
import type React from 'react'
import { useEffect, useState } from 'react'

export const ReactTerminal: React.FC = () => {
  const [message, setMessage] = useState('Connecting...')
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500)
    const timer = setTimeout(() => {
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
        `Last login: ${format(new Date(), 'EEE MMM dd HH:mm:ss yyyy')} from 172.18.0.7`
      ]
      setMessage(lines.join('\n'))
    }, 3000)
    return () => {
      clearTimeout(timer)
      clearInterval(blinkInterval)
    }
  }, [])

  return (
    <div className='font-mono p-4 bg-gray-900 text-gray-200 overflow-auto'>
      <pre>{message.startsWith('Connecting') ? (blink ? 'Connecting...' : 'Connecting') : message}</pre>
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
