import ProductCard from '../ProductCard'
import styles from './styles.module.css'
import OrderBySelect from '../OrderBySelect'

const getProducts = async (searchParams?: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products${searchParams ? searchParams : ''}`
  )

  if (!res.ok) {
    throw new Error('Failed top fetch data')
  }

  return res.json()
}

interface ProductListProps {
  query: string
}

export default async function ProductList({ query }: ProductListProps) {
  const products: Product[] = await getProducts(query)
  const quantity = products.length

  return (
    <main className={styles.productsWrapper}>
      {products.length === 0 ? (
        <h1 style={{ margin: 'auto' }}>Nenhum produto encontrado</h1>
      ) : (
        <>
          <div className={styles.productsHeader}>
            <div className={styles.productsInfo}>
              <h2>PRODUTOS</h2>
              <span className={styles.productQuantity}>
                {`(${quantity} ${quantity === 1 ? 'produto encontrado' : 'produtos encontrados'})`}
              </span>
            </div>
            <OrderBySelect />
          </div>
          <ul className={styles.productsGrid}>
            {products.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </ul>
        </>
      )}
    </main>
  )
}
