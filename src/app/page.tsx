'use server'
import type { AppBskyFeedDefs } from '@atproto/api'
import { fetchBlueskyPosts } from './bluesky'

export const revalidate = 10

function FeedPost({ post }: { post: AppBskyFeedDefs.FeedViewPost }) {
  const text = (post.post.record as { text?: string })?.text ?? 'No data'
  const createdAt = post.post.indexedAt
  const userHandle = post.post.author?.handle ?? ''
  // @ts-ignore
  const replyToHandle = post.reply?.parent.author?.handle

  return (
    <div className='bg-[#202040] dark:bg-[#202040] bg-[#f5f5fa] border-2 border-[#38c8ff] dark:border-[#38c8ff] border-[#007acc] rounded-none p-[14px] relative text-[15px] leading-[1.6] break-words font-dotgothic16 select-none text-[#e0e0e0] dark:text-[#e0e0e0] text-[#222]'>
      {replyToHandle ? (
        <div className='text-[12px] mb-[6px] font-bold tracking-[0.5px] font-dotgothic16'>
          <span className='text-[#38c8ff] dark:text-[#38c8ff] text-[#007acc]'>[@{userHandle} ~]$ reply to </span>
          <span className='text-[#ffb347] dark:text-[#ffb347] text-[#ff9800]'>@{replyToHandle}</span>
        </div>
      ) : (
        <div className='text-[12px] text-[#38c8ff] dark:text-[#38c8ff] text-[#007acc] mb-[6px] font-bold tracking-[0.5px] font-dotgothic16'>
          [@{userHandle} ~]$
        </div>
      )}
      <div className='mb-2 whitespace-pre-wrap text-[#222] dark:text-[#e0e0e0]'>{text}</div>
      <div className='text-[13px] text-[#005fa3] dark:text-[#38c8ff] text-right font-dotgothic16 font-bold tracking-[1px] mt-1'>
        {createdAt
          ? new Date(createdAt).toLocaleString('ja-JP', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false
            })
          : ''}
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
        <link href='https://fonts.googleapis.com/css2?family=DotGothic16&display=swap' rel='stylesheet' />
        <main
          className='max-w-[540px] mx-auto mt-8 mb-8 font-dotgothic16 bg-[#181818] dark:bg-[#181818] bg-[#fff] text-[#e0e0e0] dark:text-[#e0e0e0] text-[#222] min-h-screen p-5 rounded-none border-[4px] border-double border-[#b8b8b8] dark:border-[#b8b8b8] border-[#bbb] [font-smooth:none]'
          style={{
            fontFamily: "'DotGothic16', 'MS Gothic', 'VL Gothic', 'monospace'"
          }}
        >
          <h2 className='font-bold text-[20px] mb-[18px] tracking-[1px] text-[#38c8ff] border-b-2 border-[#b8b8b8] pb-[6px] bg-[#282828] dark:bg-[#282828] bg-[#e3f6fd] pl-2 pt-1 pr-2 font-dotgothic16 dark:text-[#38c8ff] text-[#005fa3]'>
            $ bluesky-cli tl --user=tkgstrator.work
          </h2>
          <div className='text-[#ff5959] bg-[#282828] p-3 rounded-none text-[15px] border-2 border-[#ff5959] font-dotgothic16'>
            # 投稿の取得に失敗しました（認証エラーまたはネットワークエラー）
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <link href='https://fonts.googleapis.com/css2?family=DotGothic16&display=swap' rel='stylesheet' />
      <main
        className='max-w-[540px] mx-auto mt-8 mb-8 font-dotgothic16 bg-[#181818] dark:bg-[#181818] bg-[#fff] text-[#e0e0e0] dark:text-[#e0e0e0] text-[#222] min-h-screen p-5 rounded-none border-[4px] border-double border-[#b8b8b8] dark:border-[#b8b8b8] border-[#bbb] [font-smooth:none]'
        style={{
          fontFamily: "'DotGothic16', 'MS Gothic', 'VL Gothic', 'monospace'"
        }}
      >
        <h2 className='font-bold text-[20px] mb-[18px] tracking-[1px] text-[#38c8ff] border-b-2 border-[#b8b8b8] pb-[6px] bg-[#282828] dark:bg-[#282828] bg-[#e3f6fd] pl-2 pt-1 pr-2 font-dotgothic16 dark:text-[#38c8ff] text-[#005fa3]'>
          $ bluesky-cli tl --user=tkgstrator.work
        </h2>
        <div className='flex flex-col gap-[14px]'>
          {posts.length === 0 && (
            <div className='text-[#ff5959] bg-[#282828] p-3 rounded-none text-[15px] border-2 border-[#ff5959] font-dotgothic16'>
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
