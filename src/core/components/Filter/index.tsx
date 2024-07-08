'use client'

import { useSearchParams } from '@/core/hooks/useSearchParams'
import Switch from '../Switch'
import styles from './styles.module.css'

interface FilterProps {
  id: string
  label: string
  param: string
  value: string
}

export default function Filter({ id, label, param, value }: FilterProps) {
  const searchParams = useSearchParams()

  const handleChange = (checked: boolean) => {
    const paramIsAdded = searchParams.params.has(param)

    if (checked) {
      const currentValue = paramIsAdded
        ? `${searchParams.params.get(param)},${value}`
        : value

      searchParams.addParam(param, currentValue)
      return
    }

    if (paramIsAdded) {
      const filteredValue =
        searchParams.params
          .get(param)
          ?.split(',')
          .filter((currentValue) => currentValue !== value)
          .join(',') ?? ''

      if (filteredValue) {
        searchParams.addParam(param, filteredValue)
        return
      }

      searchParams.deleteParam(param)
    }
  }

  const isValueInParams = () =>
    searchParams.params.has(param)
      ? searchParams.params.get(param)?.split(',').includes(value)
      : false

  return (
    <div className={styles.filter}>
      <label htmlFor={id}>{label}</label>
      <Switch id={id} onCheckedChange={handleChange} defaultChecked={isValueInParams()} />
    </div>
  )
}
