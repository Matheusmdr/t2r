import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import MainLayout from '@/layouts/main-layout';
import { index, show } from '@/routes/public/services';
import { Head, Link } from '@inertiajs/react';

interface Plan {
  name: string;
  link: string;
}

interface Service {
  id: number;
  title: string;
  slug: string;
  content: string;
  features_list: string[] | null;
  plans: Plan[] | null;
  cover_image: string | null;
}

interface Props {
  service: Service;
  relatedServices: Service[];
}

export default function ShowPublic({ service, relatedServices }: Props) {
  const hasImage = !!service.cover_image;

  return (
    <MainLayout>
      <Head title={service.title} />

      {/* HEADER COM PADRÃO HEXAGONAL (Conforme image_e12a65.png) */}
      <div className="relative overflow-hidden bg-[#cccccc] bg-[url('/images/hex-pattern.png')] bg-repeat py-20">
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <nav className="mb-2 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{' '}
            /
            <Link href={index()} className="mx-1 hover:text-black">
              Serviços
            </Link>{' '}
            /<span className="text-gray-800">{service.title}</span>
          </nav>
          <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {service.title}
          </h1>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* LAYOUT CONDICIONAL: COM FOTO (image_d65115.png) OU SEM FOTO (image_e12a65.png) */}
          {hasImage ? (
            <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
              {/* LADO ESQUERDO: IMAGEM (Estilo Software T2R) */}
              <div className="flex justify-center">
                <img
                  src={service.cover_image!}
                  alt={service.title}
                  className="max-h-[500px] w-auto drop-shadow-2xl"
                />
              </div>
              {/* LADO DIREITO: TEXTO */}
              <div className="flex flex-col">
                <h2 className="mb-2 text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <p className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
                  Software de Geotag
                </p>

                <div className="prose prose-slate mb-8 max-w-none leading-relaxed whitespace-pre-line text-gray-600">
                  {service.content}
                </div>
                <p className="text-sm font-bold text-gray-900">
                  Garantia de 180 dias.
                </p>
              </div>
            </div>
          ) : (
            /* LAYOUT CENTRALIZADO: SEM FOTO (Estilo Laudo de Calibração) */
            <div className="mx-auto mb-16 max-w-4xl text-center">
              <div className="prose prose-slate mb-12 max-w-none text-lg leading-relaxed whitespace-pre-line text-gray-600">
                {service.content}
              </div>

              {/* O QUE ESTÁ INCLUSO (Lista com pontos conforme image_e12a65.png) */}
              {service.features_list && service.features_list.length > 0 && (
                <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-gray-100 bg-gray-50 p-8 text-left">
                  <h3 className="mb-6 text-center text-sm font-black tracking-[0.2em] text-gray-900 uppercase">
                    O que está incluso:
                  </h3>
                  <ul className="space-y-4">
                    {service.features_list.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="mr-3 text-lg leading-none font-bold text-gray-900">
                          •
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* SEÇÃO DE PLANOS (Exatamente como image_d72352.png) */}
          {service.plans && service.plans.length > 0 && (
            <div className="mt-20 border-t border-gray-100 pt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {service.plans.map((plan, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center rounded-2xl border border-gray-50 bg-white p-10 text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-transform hover:-translate-y-1"
                  >
                    <h3 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
                      {plan.name}
                    </h3>
                    <a
                      href={plan.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full border-none bg-[#f3f4f6] py-6 text-xs font-semibold tracking-wider text-gray-700 uppercase shadow-none hover:bg-gray-200">
                        Solicitar plano {plan.name.toLowerCase()}
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CARROSSEL DE OUTROS SERVIÇOS (Cards Escuros conforme image_e12a9d.png) */}
          <div className="mt-32 border-t border-gray-100 pt-16">
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">
              Outros serviços
            </h2>
            <Carousel opts={{ align: 'start', loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {relatedServices.map((rel, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="flex min-h-[240px] flex-col justify-between rounded-xl bg-[#323539] p-10 shadow-xl">
                      <h3 className="mb-8 text-xl leading-snug font-bold text-white">
                        {rel.title}
                      </h3>
                      <Link href={show({ slug: rel.slug })}>
                        <Button className="h-10 bg-white px-6 text-[10px] font-black tracking-[0.15em] text-gray-900 uppercase hover:bg-gray-100">
                          Leia Mais
                        </Button>
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-12 hidden border-none bg-gray-100 text-gray-400 hover:bg-gray-200 lg:flex" />
              <CarouselNext className="-right-12 hidden border-none bg-gray-100 text-gray-400 hover:bg-gray-200 lg:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
