import useSWR from 'swr'
import { Client } from '../model'
import { ENV } from '@/shared/config'

const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch')
  }

  return response.json()
}

export const useGetOneById = (id: string) => {
  return useSWR<Client[]>(`${ENV.API_URL}/client/${id}`, fetcher)
}
