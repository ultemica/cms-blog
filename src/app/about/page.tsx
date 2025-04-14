import { Client } from '@/src/models/schema'
import markdownToHtml from 'zenn-markdown-html'

export default async function Page() {
  const res = await Client.get('/about')
  // @ts-ignore
  const html = markdownToHtml(res.data.description)
  return (
    <>
      <div className='font-mono'>
        <div className='text-gray-900 dark:text-gray-300 py-8 prose font-grotesk'>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </>
  )
}
