import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import MainLayout from '@/layouts/main-layout';
import { index, show } from '@/routes/public/products';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  cover_image: string | null;
  gallery_images: string[] | null;
  category?: Category;
}

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

      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* COLUNA DA ESQUERDA: GALERIA */}
            <div>
              {/* Imagem Principal (Destaque) */}
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

              {/* Carrossel de Miniaturas */}
              <div className="grid grid-cols-4 gap-4">
                {/* Miniatura da Capa */}
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

                {/* Miniaturas da Galeria (Array) */}
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

            {/* COLUNA DA DIREITA: INFORMAÇÕES */}
            <div className="flex flex-col">
              <h1 className="mb-6 text-3xl font-bold text-gray-900">
                {product.title}
              </h1>

              {/* Descrição do Produto */}
              {/* whitespace-pre-line mantém as quebras de linha vindas do banco */}
              <div
                className="prose prose-slate mb-8 max-w-none leading-relaxed whitespace-pre-line text-gray-600"
                dangerouslySetInnerHTML={{ __html: product.description ?? '' }}
              />

              <div className="mt-auto border-t border-gray-200 pt-6">
                {/* Exibição de Categoria */}
                {product.category && (
                  <div className="mb-2 text-sm text-gray-500">
                    <span className="font-bold text-gray-700 uppercase">
                      Category:{' '}
                    </span>
                    {product.category.name}
                  </div>
                )}

                {/* Tags Estáticas (Exemplo) */}
                <div className="text-sm text-gray-500">
                  <span className="font-bold text-gray-700 uppercase">
                    Tags:{' '}
                  </span>
                  DJI, T2R
                </div>
              </div>
            </div>

            {/* SEÇÃO PRODUTOS RELACIONADOS */}
          </div>
          <div className="border-t border-gray-100 pt-12">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Related products
            </h2>

            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {relatedProducts.map((relProduct, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full pl-4 sm:basis-1/2 lg:basis-1/4"
                  >
                    <Card className="flex h-full flex-col border-none bg-transparent shadow-none">
                      <CardContent className="p-0">
                        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <img
                            src={relProduct.cover_image ?? ''}
                            alt={relProduct.title}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      </CardContent>

                      <CardFooter className="mt-4 flex flex-col items-start space-y-4 p-0">
                        <h3 className="min-h-12 text-sm leading-snug font-semibold text-gray-800 md:text-base">
                          {relProduct.title}
                        </h3>
                        <Link href={show({ slug: relProduct.slug })}>
                          <Button
                            variant="secondary"
                            className="rounded-md border border-gray-200 bg-white px-6 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                          >
                            Read more
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="-left-4 border-gray-200 bg-white/90 hover:bg-white lg:-left-12" />
              <CarouselNext className="-right-4 border-gray-200 bg-white/90 hover:bg-white lg:-right-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
