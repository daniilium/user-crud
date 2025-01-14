import { NavLink } from 'react-router'

import { Button } from '@/shared/components/ui/button'

function Root() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Button size={'lg'} asChild>
          <NavLink to="/clients">Мои Клиенты</NavLink>
        </Button>
      </div>
    </>
  )
}

export default Root
