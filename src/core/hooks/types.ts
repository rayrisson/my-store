import { ReadonlyURLSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

export type useModalStateInput = Maybe<{ initialState: boolean }>

export type useModalStateReturn = Readonly<{
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  show: () => void
  hide: () => void
}>

export type useModalStateType = (input?: useModalStateInput) => useModalStateReturn

export type useSearchParamsReturn = Readonly<{
  addParam: (key: string, value: string) => void
  deleteParam: (key: string) => void
  params: ReadonlyURLSearchParams
}>

export type useSearchParamsType = () => useSearchParamsReturn
