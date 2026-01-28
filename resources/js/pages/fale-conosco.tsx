import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import MainLayout from '@/layouts/main-layout';

interface ContactInfoProps {
  title: string;
  address?: string;
  phone?: string;
  email?: string;
}

function ContactCard({ title, address, phone, email }: ContactInfoProps) {
  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      <h3 className="mb-2 text-lg font-bold text-[#333]">{title}</h3>
      {address && (
        <p className="max-w-50 text-[13px] leading-tight text-gray-500">
          {address}
        </p>
      )}
      {phone && (
        <p className="text-[13px] font-medium text-gray-500">{phone}</p>
      )}
      {email && (
        <p className="cursor-pointer text-[13px] text-blue-500 hover:underline">
          {email}
        </p>
      )}
    </div>
  );
}

export default function FaleConoscoPage() {
  return (
    <MainLayout>
      <main className="min-h-screen w-full bg-[#f2f2f2] font-sans">
        <PageHero title="Fale Conosco" items={['Home', 'Fale Conosco']} />

        <section className="relative z-20 mx-auto -mt-16 max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 rounded-4xl bg-white p-12 shadow-xl md:grid-cols-4">
            <ContactCard
              title="Endereço"
              address="Avenida Da Saudade, 535, Sala 86, Parque Empresarial, Presidente Prudente/SP"
            />
            <ContactCard
              title="Comercial"
              phone="+55 18 99613-1404"
              email="contato@t2rtecnologia.com.br"
            />
            <ContactCard
              title="Administrativo / Financeiro"
              phone="+55 18 99774-9080"
              email="adm@t2rtecnologia.com.br"
            />
            <ContactCard
              title="Suporte Técnico"
              phone="+55 18 99721-6319"
              email="suporte@t2rtecnologia.com.br"
            />
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2">
          <div className="h-125 w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.123!2d-51.4!3d-22.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzEwLjAiUyA1McKwMjQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
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

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Nome *"
                  className="h-14 rounded-lg border-none bg-white shadow-sm"
                />
                <Input
                  placeholder="Sobrenome *"
                  className="h-14 rounded-lg border-none bg-white shadow-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Email *"
                  className="h-14 rounded-lg border-none bg-white shadow-sm"
                />
                <Input
                  placeholder="Celular"
                  className="h-14 rounded-lg border-none bg-white shadow-sm"
                />
              </div>

              <Input
                placeholder="Assunto *"
                className="h-14 rounded-lg border-none bg-white shadow-sm"
              />

              <Textarea
                placeholder="Mensagem *"
                className="min-h-45 resize-none rounded-lg border-none bg-white shadow-sm"
              />

              <div className="flex w-75 items-center justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded border-2 border-gray-300" />
                  <span className="text-sm text-gray-600">Sou humano</span>
                </div>
                <div className="text-center">
                  <img
                    src="https://hcaptcha.com/static/img/logo.svg"
                    className="mx-auto h-8 w-8"
                    alt="hCaptcha"
                  />
                  <p className="text-[8px] text-gray-400">
                    Privacidade - Termos
                  </p>
                </div>
              </div>

              <Button className="text-md rounded-lg border-none bg-[#f2f2f2] px-12 py-7 font-bold text-[#333] uppercase shadow-sm transition-all hover:bg-gray-200 active:scale-95">
                Enviar
              </Button>
            </form>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
