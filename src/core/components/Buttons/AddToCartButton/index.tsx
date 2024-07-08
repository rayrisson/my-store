import { ShoppingCartSimple } from '@phosphor-icons/react/dist/ssr/ShoppingCartSimple'
import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.css'

interface AddToCartButtonProps extends ComponentPropsWithoutRef<'button'> {}

export function AddToCartButton(props: AddToCartButtonProps) {
  return (
    <button className={styles.addToCartButton} {...props}>
      <ShoppingCartSimple size={32} />
      CARRINHO
    </button>
  )
}
