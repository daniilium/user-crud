import { useLocation, useNavigate } from 'react-router'

import { useGetOneById } from '../api'
import { ClientForm, updateClientData } from '@/widgets/ClientForm'
import { Client } from '@/entities/client'
import { toast } from '@/shared/hooks/use-toast'

type Props = {
  slug: string
}

export function ClientReadAndUpdate({ slug }: Props) {
  const navigate = useNavigate()
  const location = useLocation()
  const { isDisabled } = location.state || {}

  const { data, isLoading, error } = useGetOneById(slug)

  if (error) navigate('/404')
  if (isLoading || !data) return <div>Loading...</div>

  function handleUpdate(data: Omit<Client, 'id'>) {
    updateClientData({ id: slug, ...data })
      .then(() => navigate(-1))
      .then(() => {
        toast({
          title: 'Успешно!',
          description: 'Карточка клиента успешно обновлена.',
        })
      })
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <ClientForm data={data} isDisabled={isDisabled} onSubmit={handleUpdate} />
    </div>
  )
}
