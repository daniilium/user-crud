import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
      <BrowserRouter>{children}</BrowserRouter>
    </StrictMode>
  )
}
