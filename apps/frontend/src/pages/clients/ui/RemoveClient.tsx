import { useState } from 'react'

import { DropdownMenuItem } from '@/shared/components/ui/dropdown-menu'

import { removeOne } from '../api'

type PropsRemoveClient = {
  id: string
}

export function RemoveClient({ id }: PropsRemoveClient) {
  const [isQuestion, setIsQuestion] = useState(false)

  const handleRemoveClientButton = (event: React.MouseEvent) => {
    setIsQuestion(!isQuestion)

    event.stopPropagation()
    event.preventDefault()
  }

  const removeClient = async () => {
    await removeOne(id).then(() => {})
  }

  if (isQuestion)
    return (
      <DropdownMenuItem>
        <p className="cursor-pointer" onClick={handleRemoveClientButton}>
          Отмена
        </p>{' '}
        <p
          className="text-red-500 hover:text-red-600 cursor-pointer"
          onClick={removeClient}
        >
          Удалить
        </p>
      </DropdownMenuItem>
    )

  return (
    <DropdownMenuItem onClick={handleRemoveClientButton}>
      Удалить клиента
    </DropdownMenuItem>
  )
}
