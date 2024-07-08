import Collapsible from '../Collapsible'
import { CategoryFilters, SportFilters } from '../FilterLists'
import styles from './styles.module.css'

export default function FilterSection() {
  return (
    <aside className={styles.filterSection}>
      <h2>FILTROS</h2>
      <Collapsible title='Categoria'>
        <CategoryFilters />
      </Collapsible>
      <Collapsible title='Esporte'>
        <SportFilters />
      </Collapsible>
    </aside>
  )
}
