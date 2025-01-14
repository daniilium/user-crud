import { useParams } from 'react-router'

import { ClientReadAndUpdate } from './ClientReadAndUpdate'
import { ClientCreate } from './ClientCreate'

export default function Client() {
  const { slug } = useParams()

  if (!slug) return <ClientCreate />
  if (slug) return <ClientReadAndUpdate slug={slug} />
}
