import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Client } from '@/entities/client'

import { Button } from '@/shared/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'

const FormSchema: z.ZodType<Omit<Client, 'id'>> = z.object({
  name: z.string().min(3, {
    message: 'Username must be at least 3 characters.',
  }),
  company: z.string().min(3, {
    message: 'Company must be at least 3 characters.',
  }),
  contactInfo: z.string().min(3, {
    message: 'Contact info must be at least 3 characters.',
  }),
})

type ClientFormProps = {
  data?: Client
  isDisabled?: boolean
  onSubmit: (data: z.infer<typeof FormSchema>) => void
}

export default function ClientForm({
  data,
  isDisabled: propIsDisabled,
  onSubmit,
}: ClientFormProps) {
  const [isDisabled, setIsDisabled] = useState(propIsDisabled || false)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: data?.name || '',
      company: data?.company || '',
      contactInfo: data?.contactInfo || '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <p className="text-2xl">Карточка клиента</p>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя</FormLabel>
              <FormControl>
                <Input disabled={isDisabled} placeholder="Иван" {...field} />
              </FormControl>
              <FormDescription>Имя клиента</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Компания</FormLabel>
              <FormControl>
                <Input disabled={isDisabled} placeholder="ИП Иван" {...field} />
              </FormControl>
              <FormDescription>Компания клиента</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contactInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Контактная информация</FormLabel>
              <FormControl>
                <Input
                  disabled={isDisabled}
                  placeholder="СТО в Москве, любитель путешествий, +7 (999) 999-99-99"
                  {...field}
                />
              </FormControl>
              <FormDescription>Контактная информация клиента</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {!isDisabled && <Button type="submit">Submit</Button>}

        {isDisabled && (
          <Button variant={'outline'} onClick={() => setIsDisabled(false)}>
            Редактировать
          </Button>
        )}
      </form>
    </Form>
  )
}
