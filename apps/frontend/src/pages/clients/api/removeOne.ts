import { mutate } from 'swr'

import { ENV } from '@/shared/config'

import { Client } from '../model'

export async function removeOne(id: string) {
  const response = await fetch(`${ENV.API_URL}/client/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to fetch')
  }

  mutate(
    `${ENV.API_URL}/client`,
    (currentData) => {
      if (!currentData) return []
      return currentData.filter((client: Client) => client.id !== id)
    },
    false
  )

  return true
}
