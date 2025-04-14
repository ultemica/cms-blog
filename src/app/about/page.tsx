'use client'
import { Client } from '@/src/models/schema'
import { useEffect, useState } from 'react'
import markdownToHtml from 'zenn-markdown-html'

export default function Page() {
  const [html, setHtml] = useState('')
  useEffect(() => {
    ;(async () => {
      const res = await Client.get('/about')
      const fullHtml = markdownToHtml(res.data.description)
      let i = 0
      const intervalId = setInterval(() => {
        i++
        setHtml(fullHtml.slice(0, i))
        if (i >= fullHtml.length) clearInterval(intervalId)
      }, 10)
    })()
  }, [])
  return (
    <>
      <div className='font-mono'>
        <div className='text-gray-900 dark:text-gray-300'>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  )
}
