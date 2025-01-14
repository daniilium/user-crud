import { useGetAll } from '../api'

import DataTable from './DataTable'

export default function Clients() {
  const { data, error, isLoading } = useGetAll()

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error: {error.message}</div>

  if (data)
    return (
      <div className="m-4">
        <DataTable data={data} />
      </div>
    )
}
