'use client'
import type React from 'react'
import { useEffect, useState } from 'react'

export const ReactTerminal: React.FC = () => {
  const [message, setMessage] = useState('Connecting...')
  useEffect(() => {
    const timer = setTimeout(() => {
      const lines = [
        'Welcome to Ubuntu 22.04.5 LTS (GNU/Linux 6.8.0-52-generic x86_64)',
        '',
        ' * Documentation:  https://help.ubuntu.com',
        ' * Management:     https://landscape.canonical.com',
        ' * Support:        https://ubuntu.com/pro',
        '',
        "New release '24.04.2 LTS' available.",
        "Run 'do-release-upgrade' to upgrade to it.",
        '',
        'Last login: Sun Mar 30 08:26:48 2025 from 172.18.0.7'
      ]
      setMessage(lines.join('\n'))
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return <pre>{message}</pre>
}

export default async function Page() {
  return (
    <>
      <ReactTerminal />
    </>
  )
}
