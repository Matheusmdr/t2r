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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Product, ProductCategory } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { MdEditorField } from './fields/md-editor-field';
import { UploadImageField } from './fields/upload-image-field.tsx';
import { UploadImagesField } from './fields/upload-images-field';

const productSchema = z.object({
  title: z.string().min(1, 'Título obrigatório'),
  product_category_id: z.string().min(1, 'Selecione uma categoria'),
  sku: z.string().optional(),
  description: z.string().optional(),
  coverImage: z
    .object({
      preview: z.string(),
      file: z.instanceof(File).optional(),
    })
    .refine((val) => val.preview !== '', 'Imagem obrigatória'),
  // [ADICIONADO] Validação da galeria (Array de objetos de imagem)
  gallery_images: z
    .array(
      z.object({
        preview: z.string(),
        file: z.instanceof(File).optional(),
        // id opcional caso venha do backend para manter a referência
        id: z.number().optional(),
      }),
    )
    .optional(),
  is_active: z.boolean().optional(),
});

export function CreateAndEditProduct({
  data,
  categories,
}: {
  data?: Product;
  categories: ProductCategory[];
}) {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: data?.title ?? '',
      product_category_id: data?.product_category_id.toString() ?? '',
      sku: data?.sku ?? '',
      description: data?.description ?? '',
      coverImage: { preview: data?.cover_image ?? '', file: undefined },
      gallery_images: data?.gallery_images
        ? data.gallery_images.map((img: any) => ({
            preview: img.url || img,
            file: undefined,
            id: img.id,
          }))
        : [],
      is_active: data?.is_active ?? true,
    },
  });

  function onSubmit(values: z.infer<typeof productSchema>) {
    const url = data ? `/admin/products/${data.id}` : '/admin/products';

    // [ADICIONADO] Prepara os novos arquivos da galeria
    // Dependendo do seu backend, você pode enviar apenas os novos arquivos
    // ou arrays separados para deletar/manter.
    // Aqui estou extraindo apenas os arquivos novos (File objects).
    const newGalleryFiles = values.gallery_images
      ?.map((g) => g.file)
      .filter((f): f is File => f !== undefined);

    console.log(newGalleryFiles);

    router.post(url, {
      ...values,
      cover_image: values.coverImage.file,
      // Passa o array de novos arquivos.
      // O Laravel/Inertia entende gallery[] se for um array de Files
      gallery_images: newGalleryFiles,
      _method: data ? 'put' : 'post',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do Produto</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="product_category_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id.toString()}>
                        {cat.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <UploadImageField
            form={form}
            name="coverImage"
            label="Imagem Principal"
          />

          {/* [ADICIONADO] Campo de Galeria */}
          {/* Certifique-se de criar este componente ou adaptar o existente para suportar multiple={true} */}
          <UploadImagesField
            form={form}
            name="gallery_images"
            label="Galeria de Imagens"
          />
        </div>

        <MdEditorField
          form={form}
          name="description"
          label="Descrição Completa"
          htmlValue={data?.description || ''}
        />

        <Button type="submit">
          {data ? 'Atualizar' : 'Cadastrar'} Produto
        </Button>
      </form>
    </Form>
  );
}
