import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Service } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { Plus, Trash2 } from 'lucide-react'; // Ícones para melhor UX
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { MdEditorField } from './fields/md-editor-field';
import { UploadImageField } from './fields/upload-image-field.tsx';

const serviceSchema = z.object({
  title: z.string().min(1, 'Campo obrigatório'),
  short_description: z.string().max(255, 'Máximo 255 caracteres'),
  content: z.string().min(1, 'O conteúdo é obrigatório'),
  features_raw: z.string().optional(),
  plans: z
    .array(
      z.object({
        name: z.string().min(1, 'Nome do plano é obrigatório'),
        link: z.string().min(1, 'Link é obrigatório'),
      }),
    )
    .optional(),
  coverImage: z
    .object({
      preview: z.string(),
      file: z.instanceof(File).optional(),
    })
    .optional(),
});

export function CreateAndEditService({ data }: { data?: Service }) {
  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      title: data?.title ?? '',
      short_description: data?.short_description ?? '',
      content: data?.content ?? '',
      features_raw: data?.features_list?.join(', ') ?? '',
      plans: data?.plans ?? [],
      coverImage: { preview: data?.cover_image ?? '', file: undefined },
    },
  });

  // Hook para gerenciar a lista dinâmica de planos
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'plans',
  });

  function onSubmit(values: z.infer<typeof serviceSchema>) {
    const features_list = values.features_raw
      ?.split(',')
      .map((f) => f.trim())
      .filter((f) => f !== '');

    router.post(data ? `/admin/services/${data.id}` : '/admin/services', {
      ...values,
      features_list,
      cover_image: values.coverImage?.file,
      _method: data ? 'put' : 'post',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Serviço</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Consultoria PPK" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="features_raw"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vantagens (separadas por vírgula)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Suporte 24h, Relatórios, etc"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <UploadImageField
          form={form}
          name="coverImage"
          label="Imagem de Capa do Serviço"
        />

        {/* SEÇÃO DE PLANOS */}
        <div className="space-y-4 border-t pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">
              Planos de Serviço (Opcional)
            </h3>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => append({ name: '', link: '' })}
            >
              <Plus className="mr-2 h-4 w-4" /> Adicionar Plano
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex items-end gap-4 rounded-lg border bg-gray-50/50 p-4"
              >
                <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name={`plans.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome do Plano</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Anual" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`plans.${index}.link`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Link/URL de Solicitação</FormLabel>
                        <FormControl>
                          <Input placeholder="https://wa.me/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            ))}
            {fields.length === 0 && (
              <p className="text-sm text-muted-foreground italic">
                Nenhum plano adicionado. O serviço será exibido sem opções de
                planos.
              </p>
            )}
          </div>
        </div>

        <MdEditorField
          form={form}
          name="content"
          label="Conteúdo Principal"
          htmlValue={data?.content}
        />

        <Button type="submit" className="w-full md:w-auto">
          Salvar Serviço
        </Button>
      </form>
    </Form>
  );
}
