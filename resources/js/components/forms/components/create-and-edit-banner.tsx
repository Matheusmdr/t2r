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
import { Banner } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { UploadImageField } from './fields/upload-image-field.tsx';

const bannerSchema = z.object({
  title: z.string().min(1, 'Título obrigatório'),
  link_url: z.string().nullable().optional(),
  // Use coerce apenas se necessário, mas garanta que o tipo final seja number
  order: z.string(),
  desktopImage: z.object({
    // Validação direto no campo preview evita o .refine no objeto pai
    preview: z.string().min(1, 'Imagem Desktop obrigatória'),
    file: z.instanceof(File).optional(),
  }),
  mobileImage: z
    .object({
      preview: z.string().optional(),
      file: z.instanceof(File).optional(),
    })
    .optional(),
  is_active: z.boolean(),
});

type BannerFormValues = z.infer<typeof bannerSchema>;

export function CreateAndEditBanner({ data }: { data?: Banner }) {
  const form = useForm<BannerFormValues>({
    resolver: zodResolver(bannerSchema),
    defaultValues: {
      title: data?.title ?? '',
      link_url: data?.link_url ?? '',
      order: String(data?.order ?? 0),
      desktopImage: {
        preview: data?.image_path ?? '',
        file: undefined,
      },
      mobileImage: {
        preview: data?.image_path_mobile ?? '',
        file: undefined,
      },
      is_active: data?.is_active ?? true,
    },
  });
  function onSubmit(values: BannerFormValues) {
    const url = data ? `/admin/banners/${data.id}` : '/admin/banners';

    router.post(url, {
      ...values,
      image_path: values.desktopImage.file,
      image_path_mobile: values.mobileImage?.file,
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
                <FormLabel>Título do Banner</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Link de Destino (URL)</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="https://..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="order"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ordem de Exibição</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="is_active"
            render={({ field }) => (
              <FormItem className="mt-8 flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Ativo</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <UploadImageField
            form={form}
            name="desktopImage"
            label="Imagem Desktop (Obrigatória)"
          />

          <UploadImageField
            form={form}
            name="mobileImage"
            label="Imagem Mobile (Opcional)"
          />
        </div>

        <Button type="submit">{data ? 'Atualizar' : 'Cadastrar'} Banner</Button>
      </form>
    </Form>
  );
}
