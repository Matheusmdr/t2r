import HCaptcha from '@hcaptcha/react-hcaptcha';
import { zodResolver } from '@hookform/resolvers/zod';
import { Head, router, usePage } from '@inertiajs/react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import MainLayout from '@/layouts/main-layout';
import { SharedData } from '@/types';

// Importação da rota conforme seu padrão
import { store } from '@/routes/public/contact';

// Schema de validação
const contactSchema = z.object({
  first_name: z.string().min(1, 'Nome é obrigatório'),
  last_name: z.string().min(1, 'Sobrenome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Assunto é obrigatório'),
  message: z
    .string()
    .min(10, 'A mensagem deve conter pelo menos 10 caracteres'),
  captcha_token: z.string().min(1, 'A validação humana é obrigatória'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactCard({
  title,
  address,
  phone,
  email,
}: {
  title: string;
  address?: string;
  phone?: string;
  email?: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      <h3 className="mb-2 text-base font-bold md:text-lg">{title}</h3>
      {address && (
        <p className="max-w-50 text-sm leading-tight text-gray-500 md:text-base">
          {address}
        </p>
      )}
      {phone && (
        <p className="text-sm font-medium text-gray-500 md:text-base">
          {phone}
        </p>
      )}
      {email && (
        <p className="cursor-pointer text-sm text-blue-500 hover:underline md:text-base">
          {email}
        </p>
      )}
    </div>
  );
}

export default function FaleConoscoPage() {
  const {
    props: { footer },
  } = usePage<SharedData>();
  const captchaRef = useRef<HCaptcha>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      captcha_token: '',
    },
  });

  function onSubmit(values: ContactFormValues) {
    router.post(store().url, values, {
      onSuccess: () => {
        form.reset();
        captchaRef.current?.resetCaptcha();
      },
      onError: () => {
        captchaRef.current?.resetCaptcha();
        form.setValue('captcha_token', '');
      },
      preserveScroll: true,
    });
  }

  return (
    <MainLayout>
      <Head title="Fale Conosco" />
      <PageHero title="Fale Conosco" items={['Home', 'Fale Conosco']} />

      <section className="relative z-20 mx-auto -mt-10 max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 rounded-xl bg-white p-12 shadow-xl md:grid-cols-4">
          <ContactCard title="Endereço" address={footer.settings.address} />
          {footer.departments.map((department) => (
            <ContactCard
              key={department.id}
              title={department.name}
              phone={department.whatsapp ?? ''}
              email={department.email ?? ''}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2">
        <div className="h-125 w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.873687146155!2d-51.4005394!3d-22.130791199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f57a099c7e19%3A0x8f8f2e2a4bf7a3db!2zVDJSIFNvbHXDp8O1ZXMgVGVjbm9sw7NnaWNhcw!5e0!3m2!1spt-BR!2sbr!4v1769796632742!5m2!1spt-BR!2sbr"
            className="h-full w-full grayscale-[0.2]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[#333]">
            Nos mande uma mensagem
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Nome *"
                          className="h-14 border-none bg-white shadow-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Sobrenome *"
                          className="h-14 border-none bg-white shadow-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email *"
                          className="h-14 border-none bg-white shadow-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Celular"
                          className="h-14 border-none bg-white shadow-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Assunto *"
                        className="h-14 border-none bg-white shadow-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Mensagem *"
                        className="min-h-45 resize-none border-none bg-white shadow-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* hCaptcha Integrado ao Shadcn Form */}
              <FormField
                control={form.control}
                name="captcha_token"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <HCaptcha
                        ref={captchaRef}
                        sitekey="SUA_SITE_KEY_AQUI"
                        onVerify={(token) =>
                          form.setValue('captcha_token', token, {
                            shouldValidate: true,
                          })
                        }
                        onExpire={() => form.setValue('captcha_token', '')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="text-md rounded-lg border-none bg-[#f2f2f2] px-12 py-7 font-bold text-[#333] uppercase shadow-sm transition-all hover:bg-gray-200 active:scale-95 disabled:opacity-50"
              >
                {form.formState.isSubmitting ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </MainLayout>
  );
}
