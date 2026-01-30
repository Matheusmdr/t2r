import { PageHero } from '@/components/page-hero';
import { buttonVariants } from '@/components/ui/button';
import MainLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { show } from '@/routes/public/blog';
import { Head, Link } from '@inertiajs/react';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  cover_image: string | null;
}

interface Props {
  posts: Post[];
}

export default function BlogIndex({ posts }: Props) {
  return (
    <MainLayout>
      <Head title="Blog" />
      <PageHero title="Blog" items={['Home', 'Blog']} />
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="aspect-video w-full overflow-hidden bg-gray-200">
                  {post.cover_image && (
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-4 text-lg leading-tight font-bold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="mb-6 line-clamp-3 flex-1 text-sm text-gray-500">
                    {post.content.replace(/<[^>]*>?/gm, '').substring(0, 120)}
                    ...
                  </p>
                  <Link
                    href={show({ slug: post.slug })}
                    className={cn(
                      buttonVariants({ variant: 'default' }),
                      'flex h-auto! w-fit items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:bg-button-secondary hover:text-white',
                    )}
                  >
                    Leia mais <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
