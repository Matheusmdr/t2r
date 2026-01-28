import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Trash, UploadCloud } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import type {
  FieldValues,
  Path,
  PathValue,
  UseFormReturn,
} from 'react-hook-form';
import { UploadedImagePreview } from './components/uploaded-image-actions';

type FormValue = {
  preview: string;
  file: File | undefined;
};

interface UploadImageFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  className?: string;
  onDelete?: () => void;
}
export function UploadImageField<T extends FieldValues>({
  form,
  name,
  label,
  className,
  onDelete,
}: UploadImageFieldProps<T>) {
  const [preview, setPreview] = useState({ name: '', url: '', size: 0 });
  const formValue = form.watch(name) as FormValue;
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxFiles: 1,
    disabled: !!preview.url,
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      const acceptedFile = acceptedFiles[0];
      form.setValue(name, {
        preview: acceptedFile ? URL.createObjectURL(acceptedFile) : '',
        file: acceptedFile ?? undefined,
      } as PathValue<T, Path<T>>);
      setPreview({
        name: acceptedFile?.name ?? '',
        url: acceptedFile ? URL.createObjectURL(acceptedFile) : '',
        size: acceptedFile?.size ?? 0,
      });
    },
  });

  useEffect(() => {
    setPreview((prevState) => ({
      ...prevState,
      url: formValue?.preview ?? '',
    }));
  }, [form, formValue?.preview, name]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className={cn('flex flex-col', className)}>
          <FormLabel>{label}</FormLabel>
          <div
            className="flex flex-col items-center justify-center gap-4 border-2 border-dashed border-muted py-5"
            {...getRootProps()}
          >
            <Input {...getInputProps()} />
            <UploadCloud className="text-foreground" />
            <p>Arraste e solte sua imagem aqui ou</p>
            <div>
              <Button type="button">Clique para selecionar</Button>
            </div>
          </div>
          {!!preview.url && (
            <div className="flex items-center justify-between border-[1px] border-solid border-muted p-4">
              <UploadedImagePreview previewInfo={preview} />
              <div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant={'destructive'}>
                      <Trash size={18} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Deletar imagem</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                      Essa ação não pode ser desfeita. Tem certeza que deseja
                      deletar essa imagem?
                    </DialogDescription>
                    <DialogFooter>
                      <DialogClose>Cancelar</DialogClose>
                      <Button variant={'destructive'} onClick={onDelete}>
                        Deletar
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
