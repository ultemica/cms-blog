import { Pages } from '@/src/components/Pagination'
import { Client } from '@/src/models/schema'

export default async function Page() {
  const response = await Client.get('/blogs')
  return (
    <>
      {/* <BlogList blogs={response.data} /> */}
      {/* @ts-ignore */}
      <Pages />
      {/* <Pagination totalCount={response.meta.pagination.total} /> */}
    </>
  )
}
