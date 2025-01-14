import useSWR from 'swr'

import { Client } from '@/entities/client'
import { ENV } from '@/shared/config'

const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch')
  }

  return response.json()
}

export const useGetOneById = (id: string | undefined) => {
  const result = useSWR<Client>(`${ENV.API_URL}/client/${id}`, fetcher)
  if (!id) return { data: null, error: true, isLoading: false }
  return result
}
