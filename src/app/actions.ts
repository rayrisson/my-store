'use server'

import { redirect } from 'next/navigation'

export async function searchProduct(formData: FormData) {
  const search = formData.get('search')

  if (search) {
    redirect(`?search=${search.toString()}`)
  }

  redirect('/')
}
