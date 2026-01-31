import { cn } from '@/lib/utils';
import { show as showBlog } from '@/routes/public/blog';
import { Post } from '@/types';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

interface PostsCarouselProps {
  posts: Post[];
}

export function PostsCarousel({ posts }: PostsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {posts.map((post, index) => (
          <CarouselItem
            key={index}
            className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-none bg-white pt-0 shadow-sm">
              <CardHeader className="p-0">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={post.cover_image ?? ''}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </CardHeader>

              <CardContent className="grow space-y-4 p-6 text-left">
                <h3 className="line-clamp-2 text-lg font-bold text-text-primary">
                  {post.title}
                </h3>
                <div
                  className="line-clamp-3 text-sm text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: post.content.substring(0, 100) + '...',
                  }}
                />
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Link
                  href={showBlog({ slug: post.slug })}
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'flex h-auto! w-fit items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:bg-button-secondary hover:text-white',
                  )}
                >
                  Leia mais <ArrowRight className="h-4 w-4" />
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
