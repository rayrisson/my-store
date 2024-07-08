import { useState } from 'react'
import { useModalStateReturn, useModalStateType } from './types'

export const useModalState: useModalStateType = (input): useModalStateReturn => {
  const [visible, setVisible] = useState(input?.initialState ?? false)

  const show = () => setVisible(true)

  const hide = () => setVisible(false)

  return { visible, setVisible, show, hide }
}
