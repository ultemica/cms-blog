import SearchField from '@/src/components/SearchField'
import TagList from '@/src/components/TagList'
import type { Tag } from '@/src/libs/microcms'
import styles from './index.module.css'

type Props = {
  tags: Tag[]
}

export default function Nav({ tags }: Props) {
  return (
    <nav className={styles.nav}>
      <SearchField />
      <TagList tags={tags} />
    </nav>
  )
}
