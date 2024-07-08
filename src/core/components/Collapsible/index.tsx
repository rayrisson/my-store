import { CaretDown } from '@phosphor-icons/react/dist/ssr'
import { ReactNode } from 'react'
import styles from './styles.module.css'

interface CollapsibleProps {
  title: string
  children: ReactNode
}

export default function Collapsible({ title, children }: CollapsibleProps) {
  return (
    <details className={styles.collapsible} open>
      <summary className={styles.header}>
        {title} <CaretDown size={24} className={styles.carrotIcon} />
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  )
}
