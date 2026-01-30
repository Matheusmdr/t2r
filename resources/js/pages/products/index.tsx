import { PageHero } from '@/components/page-hero';
import { buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { show } from '@/routes/public/products';
import { Product } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface Props {
  products: Product[];
}

export default function IndexPublic({ products }: Props) {
  return (
    <MainLayout>
      <Head title="Produtos" />

      <PageHero title="Produtos" items={['Home', 'Produtos']} />

      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative h-64 w-full">
                  {product.cover_image ? (
                    <img
                      src={product.cover_image}
                      alt={product.title}
                      className="h-full w-full object-contain p-4"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-400">
                      Sem imagem
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col items-start p-6">
                  <h3 className="mb-4 text-base font-bold text-gray-900 md:text-lg">
                    {product.title}
                  </h3>

                  <div className="mt-auto">
                    <Link
                      href={show({ slug: product.slug })}
                      className={cn(
                        buttonVariants({ variant: 'default' }),
                        'flex h-auto! w-fit items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:bg-button-secondary hover:text-white',
                      )}
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
