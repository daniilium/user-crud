import { Client } from '@/entities/client'
import { ClientForm } from '@/widgets/ClientForm'
import { createOne } from '../api'
import { toast } from '@/shared/hooks/use-toast'
import { useNavigate } from 'react-router'

export function ClientCreate() {
  const navigate = useNavigate()

  const handleCreateClient = (data: Omit<Client, 'id'>) => {
    createOne(data)
      .then(() => {
        toast({
          title: 'Создано!',
          description: 'Карточка клиента успешно создана.',
        })
      })
      .then(() => navigate(-1))
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <ClientForm onSubmit={handleCreateClient} />
    </div>
  )
}
