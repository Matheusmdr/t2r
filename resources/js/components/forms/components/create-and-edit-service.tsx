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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { MdEditorField } from './fields/md-editor-field';
import { UploadImageField } from './fields/upload-image-field.tsx';

const serviceSchema = z.object({
  title: z.string().min(1, 'Campo obrigatório'),
  short_description: z.string().max(255, 'Máximo 255 caracteres'),
  content: z.string().min(1, 'O conteúdo é obrigatório'),
  features_raw: z.string().optional(),
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
      coverImage: { preview: data?.cover_image ?? '', file: undefined },
    },
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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

        {/* [ADICIONADO] Campo de Imagem */}
        <UploadImageField
          form={form}
          name="coverImage"
          label="Imagem de Capa do Serviço"
        />

        <MdEditorField
          form={form}
          name="content"
          label="Conteúdo Principal"
          htmlValue={data?.content}
        />

        <Button type="submit">Salvar Serviço</Button>
      </form>
    </Form>
  );
}
