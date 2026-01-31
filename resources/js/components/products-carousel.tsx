import { cn } from '@/lib/utils';
import { show as showProduct } from '@/routes/public/products';
import { Product } from '@/types';
import { Link } from '@inertiajs/react';
import { buttonVariants } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface ProductsCarouselProps {
  products: Product[];
}

export function ProductsCarousel({ products }: ProductsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className="basis-full pl-4 sm:basis-1/2 lg:basis-1/4"
          >
            <Card className="flex h-full flex-col border-none bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                  <img
                    src={product.cover_image ?? ''}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </CardContent>

              <CardFooter className="mt-4 flex flex-col items-start space-y-4 p-0">
                <h3 className="min-h-12 text-sm font-semibold text-text-primary md:text-base">
                  {product.title}
                </h3>

                <Link
                  href={showProduct({ slug: product.slug })}
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'flex h-auto! w-fit items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:bg-button-secondary hover:text-white',
                  )}
                >
                  Saiba Mais
                </Link>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="-left-12 hidden border-none bg-white/80 lg:flex" />
      <CarouselNext className="-right-12 hidden border-none bg-white/80 lg:flex" />
    </Carousel>
  );
}
