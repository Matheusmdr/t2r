import { PageHero } from '@/components/page-hero';
import { buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { show } from '@/routes/public/services';
import { Head, Link } from '@inertiajs/react';

interface Service {
  id: number;
  title: string;
  slug: string;
  content: string;
  cover_image: string | null;
}

interface Props {
  services: Service[];
}

export default function IndexPublic({ services }: Props) {
  return (
    <MainLayout>
      <Head title="Serviços" />
      <PageHero title="Serviços" items={['Home', 'Serviços']} />
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex min-h-[220px] flex-col justify-between rounded-xl bg-[#323539] p-8 shadow-lg"
              >
                <h3 className="mb-6 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <Link
                  href={show({ slug: service.slug })}
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'flex h-auto! w-fit items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:bg-button-secondary hover:text-white',
                  )}
                >
                  Leia mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
