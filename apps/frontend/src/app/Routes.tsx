import { Routes, Route } from 'react-router'

import { Root } from '@/pages/root'
import { Clients } from '@/pages/clients'
import { Client } from '@/pages/client'
import { Page404 } from '@/pages/Page404'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />

      <Route path="clients" element={<Clients />} />

      <Route path="/client" element={<Client />} />
      <Route path="/client/:slug" element={<Client />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
