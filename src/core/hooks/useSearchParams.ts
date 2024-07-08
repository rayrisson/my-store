import {
  useSearchParams as useNextSearchParams,
  usePathname,
  useRouter
} from 'next/navigation'
import { useCallback } from 'react'
import { useSearchParamsReturn, useSearchParamsType } from './types'

export const useSearchParams: useSearchParamsType = (): useSearchParamsReturn => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useNextSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const addParam = (key: string, value: string) => {
    router.push(`${pathname}?${createQueryString(key, value)}`)
  }

  const deleteParam = (key: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete(key)

    if (params.size == 0) {
      router.push(pathname)
      return
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  return { addParam, deleteParam, params: searchParams } as const
}
