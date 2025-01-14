import { Client } from '@/entities/client'
import { ENV } from '@/shared/config'
import { mutate } from 'swr'

export async function updateClientData(data: Client) {
  const response = await fetch(`${ENV.API_URL}/client/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to fetch')
  }

  mutate(
    `${ENV.API_URL}/client`,
    (currentData) => {
      if (!currentData) return []
      return currentData.map((client: Client) => {
        if (client.id === data.id) {
          return data
        }
        return client
      })
    },
    false
  )

  mutate(
    `${ENV.API_URL}/client/${data.id}`,
    () => {
      return data
    },
    false
  )
}
