import {} from '@/styles/font'
import type { AppBskyFeedDefs } from '@atproto/api'
import dayjs from 'dayjs'
import { fetchBlueskyPosts } from './bluesky'

export const revalidate = 10

function FeedPost({ post }: { post: AppBskyFeedDefs.FeedViewPost }) {
  const text = (post.post.record as { text?: string })?.text ?? 'No data'
  const createdAt = post.post.indexedAt
  const userHandle = post.post.author?.handle ?? ''
  // @ts-ignore
  const replyToHandle = post.reply?.parent.author?.handle

  return (
    <div className='text-[16px] bg-[#202040] dark:bg-[#202040] bg-[#f5f5fa] border-2 border-[#38c8ff] dark:border-[#38c8ff] border-[#007acc] rounded-none p-[14px] relative leading-[1.6] break-words select-none text-[#e0e0e0] dark:text-[#e0e0e0] text-[#222]'>
      {replyToHandle ? (
        <div className='text-[16px] mb-[6px] font-bold tracking-[0.5px]'>
          <span className='text-[16px] text-[#38c8ff] dark:text-[#38c8ff] text-[#007acc]'>
            [@{userHandle} ~]$ reply to{' '}
          </span>
          <span className='text-[#ffb347] dark:text-[#ffb347] text-[#ff9800]'>@{replyToHandle}</span>
        </div>
      ) : (
        <div className='text-[16px] text-[#38c8ff] dark:text-[#38c8ff] text-[#007acc] mb-[6px] font-bold tracking-[0.5px]'>
          [@{userHandle} ~]$
        </div>
      )}
      <div className='mb-2 whitespace-pre-wrap text-[16px] text-[#222] dark:text-[#e0e0e0]'>{text}</div>
      <div className='text-[16px] text-[#005fa3] dark:text-[#38c8ff] text-right font-bold tracking-[1px] mt-1'>
        {createdAt ? dayjs(createdAt).format('YYYY/MM/DD HH:mm:ss') : ''}
      </div>
    </div>
  )
}

export default async function Page() {
  let posts: AppBskyFeedDefs.FeedViewPost[] = []
  try {
    posts = await fetchBlueskyPosts()
  } catch {
    return (
      <>
        <main className='font-[pixelMplus10] text-[16px] max-w-[540px] mx-auto mt-8 mb-8 bg-[#181818] dark:bg-[#181818] bg-[#fff] text-[#e0e0e0] dark:text-[#e0e0e0] text-[#222] min-h-screen p-5 rounded-none border-[4px] border-double border-[#b8b8b8] dark:border-[#b8b8b8] border-[#bbb] [font-smooth:none] select-none'>
          <h2 className='font-bold text-[16px] mb-[18px] tracking-[1px] text-[#38c8ff] border-b-2 border-[#b8b8b8] pb-[6px] bg-[#282828] dark:bg-[#282828] bg-[#e3f6fd] pl-2 pt-1 pr-2 dark:text-[#38c8ff] text-[#005fa3]'>
            $ bluesky-cli timeline --user=tkgstrator.work
          </h2>
          <div className='text-[16px] text-[#ff5959] bg-[#282828] p-3 rounded-none border-2 border-[#ff5959]'>
            # 投稿の取得に失敗しました（認証エラーまたはネットワークエラー）
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <main className='font-[pixelMplus10] max-w-[540px] mx-auto mt-8 mb-8 bg-[#181818] dark:bg-[#181818] bg-[#fff] text-[#e0e0e0] dark:text-[#e0e0e0] text-[#222] min-h-screen p-5 rounded-none border-[4px] border-double border-[#b8b8b8] dark:border-[#b8b8b8] border-[#bbb] [font-smooth:none] select-none'>
        <h2 className='font-bold text-[16px] mb-[18px] tracking-[1px] text-[#38c8ff] border-b-2 border-[#b8b8b8] pb-[6px] bg-[#282828] dark:bg-[#282828] bg-[#e3f6fd] pl-2 pt-1 pr-2 dark:text-[#38c8ff] text-[#005fa3]'>
          $ bluesky-cli timeline --user=tkgstrator.work
        </h2>
        <div className='flex flex-col gap-[14px]'>
          {posts.length === 0 && (
            <div className='text-[16px] text-[#ff5959] bg-[#282828] p-3 rounded-none border-2 border-[#ff5959]'>
              # 投稿がありません
            </div>
          )}
          {posts.map((post) => (
            <FeedPost key={post.post.cid} post={post} />
          ))}
        </div>
      </main>
    </>
  )
}
