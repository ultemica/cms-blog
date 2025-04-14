import { Client } from '@/src/models/schema'
import { Space_Grotesk } from 'next/font/google'
import markdownToHtml from 'zenn-markdown-html'

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export default async function Page() {
  const res = await Client.get('/about')
  // @ts-ignore
  const html = markdownToHtml(res.data.description)
  return (
    <>
      <div className={grotesk.className}>
        <div className='text-gray-900 dark:text-gray-300 py-8 prose font-grotesk'>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <div className='' dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  )
}
