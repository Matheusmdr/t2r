import { ProductsCarousel } from '@/components/products-carousel';
import MainLayout from '@/layouts/main-layout';
import { index } from '@/routes/public/products';
import { Product } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ShowPublic({ product, relatedProducts }: Props) {
  const [currentImage, setCurrentImage] = useState<string | null>(
    product.cover_image,
  );

  return (
    <MainLayout>
      <Head title={product.title} />

      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-xs font-bold tracking-wider text-gray-500 uppercase">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>{' '}
            /
            <Link href={index()} className="ml-1 hover:text-gray-900">
              Produtos
            </Link>{' '}
            /<span className="ml-1 text-gray-800">{product.title}</span>
          </nav>
        </div>
      </div>

      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-[400px] items-center justify-center rounded-lg border border-gray-200 bg-white p-4">
                {currentImage ? (
                  <img
                    src={currentImage}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain transition-opacity duration-300"
                  />
                ) : (
                  <div className="text-gray-400">Sem imagem selecionada</div>
                )}
              </div>

              <div className="grid grid-cols-4 gap-4">
                {product.cover_image && (
                  <div
                    onClick={() => setCurrentImage(product.cover_image)}
                    className={`flex h-20 cursor-pointer items-center justify-center rounded border p-1 transition-colors hover:border-gray-400 ${
                      currentImage === product.cover_image
                        ? 'border-blue-500 ring-1 ring-blue-500'
                        : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={product.cover_image}
                      alt="Capa"
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}

                {product.gallery_images &&
                  product.gallery_images.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentImage(image)}
                      className={`flex h-20 cursor-pointer items-center justify-center rounded border p-1 transition-colors hover:border-gray-400 ${
                        currentImage === image
                          ? 'border-blue-500 ring-1 ring-blue-500'
                          : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Galeria ${index}`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="mb-6 text-3xl font-bold text-gray-900">
                {product.title}
              </h1>

              <div
                className="prose prose-slate mb-8 max-w-none leading-relaxed whitespace-pre-line text-gray-600"
                dangerouslySetInnerHTML={{ __html: product.description ?? '' }}
              />

              <div className="mt-auto border-t border-gray-200 pt-6">
                {/*{product.category && (
                  <div className="mb-2 text-sm text-gray-500">
                    <span className="font-bold text-gray-700 uppercase">
                      Category:{' '}
                    </span>
                    {product.category.name}
                  </div>
                )}*/}

                <div className="text-sm text-gray-500">
                  <span className="font-bold text-gray-700 uppercase">
                    Tags:{' '}
                  </span>
                  DJI, T2R
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-12">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Produtos Relacionados
            </h2>

            <ProductsCarousel products={relatedProducts} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
