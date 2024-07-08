import { ShoppingCartSimple } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.navItem}>
          <Link href=''>Entre ou cadastre-se</Link>
        </li>
        <li className={styles.navItem}>
          <Link href=''>
            <ShoppingCartSimple size={32} weight='fill' />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
