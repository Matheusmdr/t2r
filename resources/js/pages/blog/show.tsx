import MainLayout from '@/layouts/main-layout';
import { index, show } from '@/routes/public/blog';
import { Head, Link } from '@inertiajs/react';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  cover_image: string | null;
}

interface Props {
  post: Post;
  relatedPosts: Post[];
}

export default function BlogShow({ post, relatedPosts }: Props) {
  return (
    <MainLayout>
      <Head title={post.title} />

      {/* Header com Título Centralizado (Conforme image_d4d8dd.jpg) */}
      <div className="relative overflow-hidden bg-[#cccccc] bg-[url('/images/hex-pattern.png')] bg-repeat py-24">
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <nav className="mb-4 text-[10px] font-bold tracking-widest text-gray-600 uppercase">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{' '}
            /
            <Link href={index()} className="mx-1 hover:text-black">
              Blog
            </Link>{' '}
            /{post.title}
          </nav>
          <h1 className="text-4xl leading-tight font-extrabold text-white drop-shadow-lg md:text-5xl">
            {post.title}
          </h1>
        </div>
      </div>

      <article className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          {/* Imagem de Destaque / Placeholder para Vídeo (image_d4d8dd.jpg) */}
          {post.cover_image && (
            <div className="mb-12 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={post.cover_image}
                alt={post.title}
                className="h-auto w-full"
              />
            </div>
          )}

          {/* Conteúdo em Texto (image_d4d8c1.png) */}
          <div className="prose prose-slate max-w-none text-lg leading-relaxed text-gray-600">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Rodapé do Post */}
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

          {/* Posts Relacionados (image_e19f3e.png style) */}
          <div className="mt-24">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
              Postagens Relacionadas
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={show({ slug: rel.slug })}
                  className="group"
                >
                  <div className="mb-3 overflow-hidden rounded-xl bg-gray-50">
                    <img
                      src={rel.cover_image || ''}
                      className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-sm leading-tight font-bold text-gray-900 group-hover:text-blue-600">
                    {rel.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </MainLayout>
  );
}
