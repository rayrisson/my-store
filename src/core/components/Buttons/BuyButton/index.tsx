import { HandbagSimple } from '@phosphor-icons/react/dist/ssr/HandbagSimple'
import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.css'

interface BuyButtonProps extends ComponentPropsWithoutRef<'button'> {}

export function BuyButton(props: BuyButtonProps) {
  return (
    <button className={styles.buyButton} {...props}>
      <HandbagSimple size={32} />
      COMPRAR
    </button>
  )
}
