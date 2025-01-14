import { Routes, Route } from 'react-router'

import { Root } from '@/pages/root'
import { Clients } from '@/pages/clients'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Root />} />

      <Route path="clients" element={<Clients />} />

      <Route path="*" element={<>404</>} />
    </Routes>
  )
}
