import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Post } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { MdEditorField } from './fields/md-editor-field';
import { UploadImageField } from './fields/upload-image-field.tsx';

// Simples conversão de string de tags para array
const stringToTags = (str: string) =>
  str
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

const postSchema = z.object({
  title: z.string().min(1, 'Título obrigatório'),
  content: z.string().optional(),
  tags: z.string().optional(), // Recebe string no input, converte no submit
  coverImage: z
    .object({
      preview: z.string().nullable().optional(),
      file: z.instanceof(File).optional(),
    })
    .optional(),
  is_published: z.boolean().optional(),
});

export function CreateAndEditPost({ data }: { data?: Post }) {
  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: data?.title ?? '',
      content: data?.content ?? '',
      // Se tags vierem como array do backend, converte para string para edição
      tags: Array.isArray(data?.tags) ? data.tags.join(', ') : '',
      coverImage: { preview: data?.cover_image ?? '', file: undefined },
      is_published: data?.is_published ?? false,
    },
  });

  function onSubmit(values: z.infer<typeof postSchema>) {
    const url = data ? `/admin/posts/${data.id}` : '/admin/posts';

    router.post(url, {
      ...values,
      cover_image: values.coverImage?.file,
      // Converte a string de tags de volta para array para o backend
      tags: values.tags ? stringToTags(values.tags) : [],
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
                <FormLabel>Título do Post</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags (separadas por vírgula)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Notícias, Tecnologia, Update"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          <UploadImageField
            form={form}
            name="coverImage"
            label="Imagem de Capa"
          />

          <FormField
            control={form.control}
            name="is_published"
            render={({ field }) => (
              <FormItem className="mt-8 flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Publicar Agora</FormLabel>
                  <p className="text-sm text-muted-foreground">
                    Se marcado, o post ficará visível publicamente.
                  </p>
                </div>
              </FormItem>
            )}
          />
        </div>

        <MdEditorField
          form={form}
          name="content"
          label="Conteúdo do Post"
          htmlValue={data?.content || ''}
        />

        <Button type="submit">{data ? 'Atualizar' : 'Criar'} Post</Button>
      </form>
    </Form>
  );
}
