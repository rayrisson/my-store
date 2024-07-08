import styles from './styles.module.css'

interface TagProps {
  children: string
}

export default function Tag({ children }: TagProps) {
  return (
    <div className={styles.tag}>
      <span className={styles.tagText}>{children}</span>
    </div>
  )
}
