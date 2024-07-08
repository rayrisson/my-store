import Link from 'next/link'
import Navigation from '../Navigation'
import SearchInput from '../SearchInput'
import styles from './styles.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.homeLink} href='/'>
          <Image
            src='/logo.png'
            alt='Logo'
            width={64}
            height={32}
            className={styles.logo}
          />
        </Link>
        <SearchInput />
        <Navigation />
      </div>
    </header>
  )
}
