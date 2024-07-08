import { DefaultSkeleton } from '../DefaultSkeleton'
import styles from './styles.module.css'

export function ProductListSkeleton() {
  return (
    <>
      <DefaultSkeleton className={styles.skeleton1} />
      <DefaultSkeleton className={styles.skeleton2} />
    </>
  )
}
