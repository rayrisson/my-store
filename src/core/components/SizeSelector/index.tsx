import * as ToggleGroup from '@radix-ui/react-toggle-group'
import styles from './styles.module.css'

interface SizeSelectorProps {
  sizes: string[]
}

export default function SizeSelector({ sizes }: SizeSelectorProps) {
  return (
    <ToggleGroup.Root className={styles.toggleGroup} type='single' aria-label='Size'>
      {sizes.map((size, idx) => (
        <ToggleGroup.Item key={idx} value={size} className={styles.toggleItem}>
          {size}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  )
}
