import * as RadixSwitch from '@radix-ui/react-switch'
import { ComponentPropsWithoutRef } from 'react'
import styles from './styles.module.css'

type SwitchProps = Omit<ComponentPropsWithoutRef<typeof RadixSwitch.Root>, 'className'>

export default function Switch(props: SwitchProps) {
  return (
    <RadixSwitch.Root className={styles.switchRoot} {...props}>
      <RadixSwitch.Thumb className={styles.switchThumb} />
    </RadixSwitch.Root>
  )
}
