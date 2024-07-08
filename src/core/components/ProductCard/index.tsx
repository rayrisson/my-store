'use client'

import { useModalState } from '@/core/hooks/useModalState'
import { numberToBrCurrency } from '@/core/utils/formatter'
import Image from 'next/image'
import { MouseEvent } from 'react'
import ProductModal from '../ProductModal'
import styles from './styles.module.css'

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
            placeholder='blur'
            blurDataURL='/image-placeholder.png'
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
