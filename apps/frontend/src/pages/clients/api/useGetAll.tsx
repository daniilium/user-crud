import useSWR from 'swr'

import { ENV } from '@/shared/config'
import { Client } from '@/entities/client'

const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch')
  }
  return response.json()
}

export const useGetAll = () => {
  return useSWR<Client[]>(`${ENV.API_URL}/client`, fetcher)
}
