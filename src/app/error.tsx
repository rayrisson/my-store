'use client'

import styles from './error.module.css'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className={styles.error}>
      <h1>Algo deu errado!</h1>
      <button onClick={() => reset()} className={styles.retryButton}>
        Tente novamente
      </button>
    </div>
  )
}
