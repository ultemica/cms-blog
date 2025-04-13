import ArticleList from '@/src/components/ArticleList'
import Pagination from '@/src/components/Pagination'
import { LIMIT } from '@/src/constants'
import { getList, getTag } from '@/src/libs/microcms'

type Props = {
  params: {
    tagId: string
  }
}

export const revalidate = 60

export default async function Page({ params }: Props) {
  const { tagId } = params
  const data = await getList({
    limit: LIMIT,
    filters: `tags[contains]${tagId}`
  })
  const tag = await getTag(tagId)
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath={`/tags/${tagId}`} />
    </>
  )
}
