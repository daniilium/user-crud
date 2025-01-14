import { mutate } from 'swr'

import { ENV } from '@/shared/config'
import { Client } from '@/entities/client'

export async function createOne(data: Omit<Client, 'id'>) {
  const response = await fetch(`${ENV.API_URL}/client`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to fetch')
  }

  const newClient = await response.json()

  mutate(
    `${ENV.API_URL}/client`,
    (currentData) => {
      if (!currentData) return []
      return [newClient, ...currentData]
    },
    false
  )

  return true
}
