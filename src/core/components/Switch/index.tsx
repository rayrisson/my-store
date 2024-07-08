import * as RadixSwitch from '@radix-ui/react-switch'
import styles from './styles.module.css'
import { ComponentPropsWithoutRef } from 'react'

type SwitchProps = Omit<ComponentPropsWithoutRef<typeof RadixSwitch.Root>, 'className'>

export default function Switch(props: SwitchProps) {
  return (
    <RadixSwitch.Root className={styles.switchRoot} {...props}>
      <RadixSwitch.Thumb className={styles.switchThumb} />
    </RadixSwitch.Root>
  )
}
