import { createRoot } from 'react-dom/client'
import { Toaster } from '@/shared/components/ui/toaster'

import './index.css'
import Providers from './Providers'
import AppRoutes from './Routes'

createRoot(document.getElementById('root')!).render(
  <Providers>
    <AppRoutes />

    <Toaster />
  </Providers>
)
