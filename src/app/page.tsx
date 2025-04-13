import ArticleList from '@/src/components/ArticleList'
import Pagination from '@/src/components/Pagination'
import { LIMIT } from '@/src/constants'
import { getList } from '@/src/libs/microcms'

export const revalidate = 0

export default async function Page() {
  const data = await getList({
    limit: LIMIT
  })
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  )
}
