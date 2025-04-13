import Article from '@/src/components/Article'
import { getDetail } from '@/src/libs/microcms'
// biome-ignore lint/style/useImportType: <explanation>
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string
  }
  searchParams: {
    dk: string
  }
}

export const revalidate = 60

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk
  })

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || '']
    }
  }
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk
  })

  return <Article data={data} />
}
