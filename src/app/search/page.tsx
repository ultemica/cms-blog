import ArticleList from '@/src/components/ArticleList'
import Pagination from '@/src/components/Pagination'
import { getList } from '@/src/libs/microcms'

type Props = {
  searchParams: {
    q?: string
  }
}

export const revalidate = 60

export default async function Page({ searchParams }: Props) {
  const data = await getList({
    q: searchParams.q
  })

  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath='/search' q={searchParams.q} />
    </>
  )
}
