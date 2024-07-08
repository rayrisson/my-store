'use client'

import * as Select from '@radix-ui/react-select'
import { ComponentPropsWithoutRef } from 'react'
import { useSearchParams } from '@/core/hooks/useSearchParams'
import styles from './styles.module.css'
import { Check, Funnel } from '@phosphor-icons/react/dist/ssr'

const ORDER_BY_PARAM = 'orderBy'

const SelectItem = ({
  children,
  ...props
}: ComponentPropsWithoutRef<typeof Select.Item>) => (
  <Select.Item {...props} className={styles.selectItem}>
    <Select.ItemText>{children}</Select.ItemText>
    <Select.ItemIndicator>
      <Check size={12} />
    </Select.ItemIndicator>
  </Select.Item>
)

export default function OrderBySelect() {
  const searchParams = useSearchParams()

  const handleChange = (value: string) => {
    if (value === 'default') {
      searchParams.params.has(ORDER_BY_PARAM) && searchParams.deleteParam(ORDER_BY_PARAM)
      return
    }
    searchParams.addParam(ORDER_BY_PARAM, value)
  }

  return (
    <Select.Root
      onValueChange={handleChange}
      defaultValue={searchParams.params.get(ORDER_BY_PARAM) ?? 'default'}
    >
      <Select.Trigger className={styles.selectTrigger}>
        <div className={styles.triggerContent}>
          Ordenar por: <Select.Value placeholder='Ordenar por...' />
        </div>
        <Funnel size={32} className={styles.triggerIcon} />
        <Select.Portal>
          <Select.Content className={styles.selectContent} position='popper'>
            <Select.Viewport className={styles.selectViewport}>
              <SelectItem value='default'>Padrão</SelectItem>
              <SelectItem value='lowerPrice'>Menor preço</SelectItem>
              <SelectItem value='higherPrice'>Maior preço</SelectItem>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Trigger>
    </Select.Root>
  )
}
