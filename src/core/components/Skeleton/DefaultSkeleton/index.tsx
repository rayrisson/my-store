import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.css'

interface DefaultSkeleton extends ComponentPropsWithoutRef<'div'> {}

export function DefaultSkeleton({ className, ...props }: DefaultSkeleton) {
  const cn = `${styles.skeleton} ${className ? className : ''}`
  return <div className={cn} {...props} />
}
