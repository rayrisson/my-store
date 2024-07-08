'use client'

import { searchProduct } from '@/app/actions'
import { useSearchParams } from '@/core/hooks/useSearchParams'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './styles.module.css'

export default function SearchInput() {
  const [searchInput, setSearchInput] = useState('')
  const searchParams = useSearchParams()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (searchInput) {
      searchParams.addParam('search', searchInput)
      return
    }

    searchParams.deleteParam('search')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setSearchInput(value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={searchProduct}
      className={styles.searchContainer}
    >
      <input
        type='search'
        name='search'
        placeholder='Pesquisar produto...'
        defaultValue={searchParams.params.get('search') ?? ''}
        onChange={handleChange}
        className={styles.searchInput}
      />
      <button type='submit' className={styles.searchButton}>
        <MagnifyingGlass size={24} weight='bold' />
      </button>
    </form>
  )
}
