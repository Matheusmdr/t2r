import { PageHero } from '@/components/page-hero';
import { ServicesCarousel } from '@/components/services-carousel';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { Service } from '@/types';
import { Head } from '@inertiajs/react';

interface Props {
  service: Service;
  relatedServices: Service[];
}

export default function ShowPublic({ service, relatedServices }: Props) {
  const hasImage = !!service.cover_image;

  return (
    <MainLayout>
      <Head title={service.title} />

      <PageHero
        title={service.title}
        items={['Home', 'Serviços', service.title]}
      />

      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {hasImage ? (
            <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
              <div className="flex justify-center">
                <img
                  src={service.cover_image!}
                  alt={service.title}
                  className="max-h-125 w-auto drop-shadow-2xl"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="mb-2 text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <div
                  className="prose prose-slate mb-8 max-w-none leading-relaxed whitespace-pre-line text-gray-600"
                  dangerouslySetInnerHTML={{ __html: service.content }}
                />
              </div>
            </div>
          ) : (
            <div className="mx-auto mb-16 max-w-4xl text-center">
              <div
                className="prose prose-slate mb-12 max-w-none text-lg leading-relaxed whitespace-pre-line text-gray-600"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />

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

          <div className="mt-32 border-t border-gray-100 pt-16">
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-gray-900">
              Outros serviços
            </h2>
            <ServicesCarousel services={relatedServices} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
