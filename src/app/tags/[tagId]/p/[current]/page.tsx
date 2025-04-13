import ArticleList from '@/src/components/ArticleList'
import Pagination from '@/src/components/Pagination'
import { LIMIT } from '@/src/constants'
import { getList } from '@/src/libs/microcms'

type Props = {
  params: {
    tagId: string
    current: string
  }
}

export const revalidate = 60

export default async function Page({ params }: Props) {
  const { tagId } = params
  const current = Number.parseInt(params.current as string, 10)
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    filters: `tags[contains]${tagId}`
  })
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} basePath={`/tags/${tagId}`} />
    </>
  )
}
