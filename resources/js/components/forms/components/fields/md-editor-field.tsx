import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';
import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import TurndownService from 'turndown';

interface MdEditorFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  className?: string;
  htmlValue?: string;
}
export function MdEditorField<T extends FieldValues>({
  form,
  name,
  label,
  className,
  htmlValue,
}: MdEditorFieldProps<T>) {
  const { theme } = useTheme();
  const turndownService = useMemo(() => new TurndownService(), []);

  const mdTheme = useMemo(() => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return (theme as 'light' | 'dark') || 'light';
  }, [theme]);

  const [text, setText] = useState<string>(() => {
    const initialValue = form.getValues(name);
    if (initialValue) return initialValue;
    return htmlValue ? turndownService.turndown(htmlValue) : '';
  });

  useEffect(() => {
    if (htmlValue) {
      const converted = turndownService.turndown(htmlValue);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setText(converted);
    }
  }, [htmlValue, turndownService]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col', className)}>
          <FormLabel>{label}</FormLabel>
          <MdEditor
            editorId={name}
            language="en-US"
            theme={mdTheme}
            modelValue={text}
            onChange={(val) => {
              setText(val);
              // Opcional: se o MdEditor não disparar onHtmlChanged automaticamente no onChange
            }}
            onHtmlChanged={field.onChange}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
