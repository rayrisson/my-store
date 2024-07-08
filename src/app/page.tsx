import FilterSection from '@/core/components/FilterSection'
import Header from '@/core/components/Header'
import ProductList from '@/core/components/ProductList'
import { objectToSearchParamString } from '@/core/utils/searchParamsUtils'
import styles from './page.module.css'

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
        <FilterSection />
        <ProductList query={query} />
      </div>
    </>
  )
}
