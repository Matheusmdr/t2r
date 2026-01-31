import { cn } from '@/lib/utils';
import { show } from '@/routes/public/services';
import { Service } from '@/types';
import { Link } from '@inertiajs/react';
import { buttonVariants } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface ServicesCarouselProps {
  services: Service[];
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  return (
    <Carousel opts={{ align: 'start', loop: true }} className="w-full">
      <CarouselContent className="-ml-4">
        {services.map((rel, index) => (
          <CarouselItem
            key={index}
            className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
          >
            <div className="flex min-h-60 flex-col justify-between rounded-xl bg-[#323539] p-10 shadow-xl">
              <h3 className="mb-8 text-xl leading-snug font-bold text-white">
                {rel.title}
              </h3>
              <Link
                href={show({ slug: rel.slug })}
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'h-10 w-fit bg-white px-6 text-[10px] font-black tracking-[0.15em] text-gray-900 uppercase hover:bg-gray-100',
                )}
              >
                Leia Mais
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-12 hidden border-none bg-gray-100 text-gray-400 hover:bg-gray-200 lg:flex" />
      <CarouselNext className="-right-12 hidden border-none bg-gray-100 text-gray-400 hover:bg-gray-200 lg:flex" />
    </Carousel>
  );
}
