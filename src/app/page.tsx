import styles from './page.module.css'
import Header from '@/core/components/Header'
import ProductList from '@/core/components/ProductList'
import FilterSection from '@/core/components/FilterSection'
import { objectToSearchParamString } from '@/core/utils/searchParamsUtils'
import { Suspense } from 'react'
import { ProductListSkeleton } from '@/core/components/Skeleton'

export default async function Home({
  searchParams
}: {
  searchParams: SearchParamsObject
}) {
  const query = objectToSearchParamString(searchParams)
  return (
    <>
      <Header />
      <div className={styles.mainWrapper}>
        <Suspense key={query} fallback={<ProductListSkeleton />}>
          <FilterSection />
          <ProductList query={query} />
        </Suspense>
      </div>
    </>
  )
}
