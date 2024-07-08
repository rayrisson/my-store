import { ReactNode } from 'react'
import styles from './styles.module.css'

interface TagProps {
  children: ReactNode
}

export default function Tag({ children }: TagProps) {
  return (
    <div className={styles.tag}>
      <span className={styles.tagText}>{children}</span>
    </div>
  )
}
