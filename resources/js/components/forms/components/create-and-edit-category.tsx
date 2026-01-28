import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ProductCategory } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const categorySchema = z.object({
  title: z.string().min(1, 'O título é obrigatório'),
  description: z.string().optional(),
  is_active: z.boolean().default(true).optional(),
});

type CategoryValues = z.infer<typeof categorySchema>;

export function CreateAndEditCategory({ data }: { data?: ProductCategory }) {
  const form = useForm<CategoryValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      title: data?.title ?? '',
      description: data?.description ?? '',
      is_active: data?.is_active ?? true,
    },
  });

  function onSubmit(values: CategoryValues) {
    const url = data
      ? `/admin/product-categories/${data.id}`
      : '/admin/product-categories';
    router.post(
      url,
      {
        ...values,
        _method: data ? 'put' : 'post',
      },
      {
        onSuccess: () =>
          toast(`Categoria ${data ? 'editada' : 'criada'} com sucesso!`),
      },
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 rounded-lg border bg-white p-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título da Categoria</FormLabel>
              <FormControl>
                <Input placeholder="Ex: Drones" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="is_active"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Categoria Ativa</FormLabel>
                <FormDescription>
                  Ficará visível no site para os clientes.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {data ? 'Salvar Alterações' : 'Criar Categoria'}
        </Button>
      </form>
    </Form>
  );
}
