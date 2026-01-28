import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { ImagePlus, X } from 'lucide-react';
import { ChangeEvent, useRef } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface UploadImagesFieldProps {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  className?: string;
}

export function UploadImagesField({
  form,
  name,
  label,
  className,
}: UploadImagesFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        // Garante que o valor seja sempre um array
        const images = Array.isArray(field.value) ? field.value : [];

        const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          if (files && files.length > 0) {
            const newFiles = Array.from(files).map((file) => ({
              preview: URL.createObjectURL(file),
              file: file,
            }));

            // Adiciona as novas imagens ao array existente (append)
            field.onChange([...images, ...newFiles]);
          }

          // Limpa o input para permitir selecionar o mesmo arquivo novamente se necessário
          if (inputRef.current) {
            inputRef.current.value = '';
          }
        };

        const handleRemove = (indexToRemove: number) => {
          // Filtra o array removendo o item pelo índice
          const newImages = images.filter(
            (_, index) => index !== indexToRemove,
          );
          field.onChange(newImages);
        };

        const handleTriggerClick = () => {
          inputRef.current?.click();
        };

        return (
          <FormItem className={cn('flex flex-col gap-2', className)}>
            <div className="flex items-center justify-between">
              <FormLabel>{label}</FormLabel>
              {images.length > 0 && (
                <span className="text-xs text-muted-foreground">
                  {images.length} {images.length === 1 ? 'imagem' : 'imagens'}
                </span>
              )}
            </div>

            <FormControl>
              <div className="space-y-4">
                {/* Grid de Preview */}
                {images.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {images.map((image: any, index: number) => (
                      <div
                        key={index}
                        className="group relative aspect-square overflow-hidden rounded-md border bg-background"
                      >
                        <img
                          src={image.preview}
                          alt={`Preview ${index}`}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />

                        {/* Botão de Remover */}
                        <div className="absolute top-1 right-1 opacity-0 transition-opacity group-hover:opacity-100">
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="h-6 w-6 rounded-full"
                            onClick={() => handleRemove(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Área de Upload */}
                <div
                  onClick={handleTriggerClick}
                  className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 p-8 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-muted/50"
                >
                  <div className="rounded-full bg-background p-3 shadow-sm">
                    <ImagePlus className="h-6 w-6" />
                  </div>
                  <div className="text-center">
                    <span className="font-semibold text-foreground">
                      Clique para adicionar
                    </span>{' '}
                    ou arraste imagens
                  </div>
                  <p className="text-xs">
                    Suporta múltiplos arquivos (JPG, PNG, WEBP)
                  </p>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  multiple // Permite selecionar vários arquivos
                  className="hidden"
                  ref={inputRef}
                  onChange={handleFileChange}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
