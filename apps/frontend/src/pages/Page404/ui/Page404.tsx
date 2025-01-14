import { Button } from '@/shared/components/ui/button'
import { NavLink } from 'react-router'

export default function Page404() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <p className="text-9xl">404</p>

      <Button size={'lg'} asChild>
        <NavLink to="/">На главную</NavLink>
      </Button>
    </div>
  )
}
