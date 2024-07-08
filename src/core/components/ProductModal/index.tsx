import { useModalStateReturn } from '@/core/hooks/types'
import * as Dialog from '@radix-ui/react-dialog'
import styles from './styles.module.css'
import Image from 'next/image'
import { X } from '@phosphor-icons/react/dist/ssr/X'
import { numberToBrCurrency } from '@/core/utils/formatter'
import { AddToCartButton, BuyButton } from '../Buttons'
import SizeSelector from '../SizeSelector'
import Tag from '../Tag'

interface ProductModalProps {
  product: Product
  state: useModalStateReturn
}

export default function ProductModal({ product, state }: ProductModalProps) {
  const isAvailable = product.available_sizes.length > 0

  return (
    <Dialog.Root open={state.visible} onOpenChange={state.setVisible}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        <Dialog.Content className={styles.dialogContent}>
          <div className={styles.imageWrapper}>
            <div className={styles.priceWrapper}>
              <h3>{numberToBrCurrency(product.price)}</h3>
            </div>
            <Image src={product.image_url} fill alt='Product image' />
          </div>

          <div className={styles.productWrapper}>
            <section className={styles.productSection}>
              <div>
                <Dialog.Title>{product.name}</Dialog.Title>
                <span>Vendido por {product.seller}</span>
                <div className={styles.tagsContainer}>
                  <Tag>{product.type}</Tag>
                  <Tag>{product.sport}</Tag>
                </div>
              </div>

              <div className={styles.productDetails}>
                <p>{product.details}</p>
              </div>

              {isAvailable ? (
                <SizeSelector sizes={product.available_sizes} />
              ) : (
                <p className={styles.unavailableText}>Produto indisponível</p>
              )}
            </section>

            {isAvailable && (
              <section className={styles.buySection}>
                <BuyButton />
                <AddToCartButton />
              </section>
            )}
          </div>

          <Dialog.Close asChild>
            <button className={styles.closeButton}>
              <X size={16} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
