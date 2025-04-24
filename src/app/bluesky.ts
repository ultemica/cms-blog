import { type AppBskyFeedDefs, AtpAgent } from '@atproto/api'

// グローバルキャッシュ（プロセス内のみ有効）
const tokenCache: {
  token?: string
  expiresAt?: number // UNIXタイムスタンプ（ミリ秒）
  agent?: AtpAgent
} = {}

// BearerTokenを取得・キャッシュする関数（@atproto/api利用）
export async function getBearerToken(): Promise<string | undefined> {
  const handle = process.env.BLUESKY_HANDLE || 'your-handle.bsky.social'
  const appPassword = process.env.BLUESKY_APP_PASSWORD || 'YOUR_APP_PASSWORD'

  // キャッシュが有効ならそれを返す
  if (tokenCache.token && tokenCache.expiresAt && Date.now() < tokenCache.expiresAt - 60 * 1000 && tokenCache.agent) {
    return tokenCache.token
  }

  const agent = new AtpAgent({ service: 'https://bsky.social' })
  const res = await agent.login({ identifier: handle, password: appPassword })
  if (!res.success) return undefined

  // @atproto/apiはjwtの有効期限を返さないので1時間キャッシュ
  tokenCache.token = agent.session?.accessJwt
  tokenCache.expiresAt = Date.now() + 60 * 60 * 1000
  tokenCache.agent = agent
  return agent.session?.accessJwt
}

// 投稿取得（@atproto/api利用）
export async function fetchBlueskyPosts(): Promise<AppBskyFeedDefs.FeedViewPost[]> {
  const handle = process.env.BLUESKY_HANDLE || 'your-handle.bsky.social'
  const limit = 10

  // agentをキャッシュから取得または新規作成
  let agent = tokenCache.agent
  if (!agent) {
    await getBearerToken()
    agent = tokenCache.agent
  }
  if (!agent) return []

  const res = await agent.getAuthorFeed({ actor: handle, limit })
  if (!res.success) return []

  return res.data.feed
}
