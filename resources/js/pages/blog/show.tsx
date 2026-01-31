import { PageHero } from '@/components/page-hero';
import { PostsCarousel } from '@/components/posts-carousel';
import MainLayout from '@/layouts/main-layout';
import { Post } from '@/types';
import { Head } from '@inertiajs/react';

interface Props {
  post: Post;
  relatedPosts: Post[];
}

export default function BlogShow({ post, relatedPosts }: Props) {
  return (
    <MainLayout>
      <Head title={post.title} />

      <PageHero title={post.title} items={['Home', 'Blog', post.title]} />

      <article className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          {post.cover_image && (
            <div className="mb-12 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={post.cover_image}
                alt={post.title}
                className="h-auto w-full"
              />
            </div>
          )}

          <div className="prose prose-slate max-w-none text-lg leading-relaxed text-gray-600">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-16 flex flex-col items-center border-t border-gray-100 pt-8">
            <p className="mb-4 text-sm font-bold text-gray-900 italic">
              Conheça nossos produtos e serviços acessando nossa página:
              <a
                href="https://t2rtecnologia.com.br/"
                className="ml-1 text-blue-600 underline"
              >
                https://t2rtecnologia.com.br/
              </a>
            </p>
          </div>

          <div className="mt-24">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
              Postagens Relacionadas
            </h2>
            <PostsCarousel posts={relatedPosts} />
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
