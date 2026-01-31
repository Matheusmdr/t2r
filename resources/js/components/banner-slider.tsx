import { type Banner } from '@/types';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface BannerSliderProps {
  banners: Banner[];
}

export function BannerSlider({ banners }: BannerSliderProps) {
  return (
    <Carousel className="group relative w-full">
      <CarouselContent>
        {banners.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card className="overflow-hidden rounded-none border-none py-0">
                <CardContent className="relative flex aspect-21/9 justify-end p-0!">
                  <img
                    src={item.image_path}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="relative z-10 mt-[5%] mr-12 max-w-lg text-right md:mr-24">
                    <h2 className="text-2xl font-extrabold text-white drop-shadow-sm md:text-7xl">
                      {item.title}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 border-none bg-black/20 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/50" />
      <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 border-none bg-black/20 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/50" />
    </Carousel>
  );
}
