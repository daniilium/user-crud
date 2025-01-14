import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/shared/components/ui/button'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'

import { RemoveClient } from '../ui'
import { Client } from '@/entities/client'
import { NavLink } from 'react-router'

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: 'name',
    header: 'Имя',
    cell: ({ row }) => <div className="capitalize">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'company',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Компания
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="">{row.getValue('company')}</div>,
  },
  {
    accessorKey: 'contactInfo',
    header: () => <div className="text">Информация о контакте</div>,
    cell: ({ row }) => {
      return (
        <div className="text font-medium">{row.getValue('contactInfo')}</div>
      )
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const { id } = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Действия</DropdownMenuLabel>

            <DropdownMenuItem>
              <NavLink to={`/client/${id}`} state={{ isDisabled: true }}>
                Подробнее
              </NavLink>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <RemoveClient id={id} />

            <DropdownMenuItem>
              <NavLink to={`/client/${id}`}>Редактировать</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
