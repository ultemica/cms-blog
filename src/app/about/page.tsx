import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Client } from '@/models/schema'
import markdownToHtml from 'zenn-markdown-html'

export default async function Page() {
  const response = await Client.get('/about')

  const html = markdownToHtml(response.data.description, {})
  return (
    <div className='px-4 md:px-8'>
      <h1 className='text-4xl font-bold mb-4'>About</h1>
      <div className='font-mono flex flex-col md:flex-row p-[40px] gap-8 items-start'>
        <div className='flex flex-col items-center justify-center mx-auto my-0 md:my-4'>
          <Avatar className='w-[140px] h-[140px] mb-2 border-gray-400 dark:border-gray-200 border-3'>
            <AvatarImage src='/avatar.png' alt='@tkgstrator' />
          </Avatar>
          <p className='font-mono text-xl'>{response.data.name}</p>
        </div>
        <div className='text-gray-900 dark:text-gray-300'>
          {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
          <div className='znc' dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  )
}
