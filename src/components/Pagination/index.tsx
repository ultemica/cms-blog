import { LIMIT } from '@/src/constants'
import Link from 'next/link'
import styles from './index.module.css'

type Props = {
  totalCount: number
  current?: number
  basePath?: string
  q?: string
}

export default function Pagination({ totalCount, current = 1, basePath = '', q }: Props) {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map((_, i) => i + 1)
  return (
    <ul className={styles.container}>
      {pages.map((p) => (
        <li className={styles.list} key={p}>
          {current !== p ? (
            // biome-ignore lint/style/useTemplate: <explanation>
            <Link href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')} className={styles.item}>
              {p}
            </Link>
          ) : (
            <span className={`${styles.item} ${styles.current}`}>{p}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
