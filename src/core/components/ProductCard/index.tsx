'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import ProductModal from '../ProductModal'
import { useModalState } from '@/core/hooks/useModalState'
import { MouseEvent } from 'react'
import { numberToBrCurrency } from '@/core/utils/formatter'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, price, image_url } = product
  const modalState = useModalState()

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault()
    modalState.show()
  }

  return (
    <>
      <li className={styles.productCard} onClick={handleClick}>
        <div className={styles.imageWrapper}>
          <Image
            src={image_url}
            alt='Product image'
            className={styles.productImage}
            fill
          />
        </div>
        <div className={styles.productDetails}>
          <h3>{name}</h3>
          <p>{numberToBrCurrency(price)}</p>
        </div>
      </li>
      <ProductModal product={product} state={modalState} />
    </>
  )
}
