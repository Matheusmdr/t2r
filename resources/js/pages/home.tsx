import { Link } from '@inertiajs/react';

import { BannerSlider } from '@/components/banner-slider';
import ClientCarousel from '@/components/client-carousel';
import { PostsCarousel } from '@/components/posts-carousel';
import { ProductsCarousel } from '@/components/products-carousel';
import { buttonVariants } from '@/components/ui/button';
import { VideoPlayer } from '@/components/video-player';
import MainLayout from '@/layouts/main-layout';
import { cn } from '@/lib/utils';
import { index as indexBlog } from '@/routes/public/blog';
import { index as indexMetaShape } from '@/routes/public/metashape';
import { index as indexProduct } from '@/routes/public/products';
import { Banner, Post, Product } from '@/types';
import { Banknote, MapPin, Target, Timer } from 'lucide-react';

interface Props {
  posts: Post[];
  products: Product[];
  banners: Banner[];
}

export default function Welcome({ posts, products, banners }: Props) {
  const ppkAdvantages = [
    {
      title: '  Redução drástica de pontos de controle',
      description: '  Redução drástica de pontos de controle',
      icon: MapPin,
    },
    {
      title: 'Acurácia centimétrica',
      description: 'Acurácia centimétrica',
      icon: Target,
    },
    {
      title: 'Redução de tempo em campo',
      description: 'Redução de tempo em campo',
      icon: Timer,
    },
    {
      title: 'Redução de custos em campo',
      description: 'Redução de custos em campo',
      icon: Banknote,
    },
  ];

  return (
    <MainLayout>
      <section className="mx-auto w-full">
        <BannerSlider banners={banners} />
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-16 text-2xl font-bold md:text-3xl">
            Vantagens da Integração PPK
          </h2>
          <div className="mb-24 grid grid-cols-2 gap-8 md:grid-cols-4">
            {ppkAdvantages.map((advantage, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <advantage.icon size={40} />
                <p className="max-w-56 text-xs font-semibold md:text-lg">
                  {advantage.title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-12 text-left lg:flex-row">
            <div className="order-2 lg:order-1 lg:w-1/2">
              <h3 className="mb-6 text-2xl font-bold md:text-3xl">
                Integração do PPK em alta precisão
              </h3>
              <p className="text-sm leading-relaxed md:text-base">
                A integração do PPK ao drone é realizada de forma rigorosa,
                sincronizando o disparo exato da câmara ao receptor GNSS, para
                proporcionar dados georreferenciados de alta precisão.
              </p>
            </div>
            <div className="order-1 flex justify-center lg:order-2 lg:w-1/2 lg:justify-start">
              <img
                src="/home/mapeamento-3d.webp"
                alt="Mapeamento"
                className="h-87.5 w-full rounded-xl object-cover md:w-137.5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
          <div className="flex justify-center lg:w-1/2 lg:justify-end">
            <img
              src="/home/drone-air-2s.webp"
              alt="Drone T2R"
              className="h-87.5 w-full rounded-2xl object-cover md:w-137.5"
            />
          </div>
          <div className="text-left lg:w-1/2">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">
              Integração rigorosa
            </h2>
            <div className="space-y-6 text-sm leading-relaxed md:text-base">
              <p>
                A instalação do sistema PPK da T2R é realizada de maneira fina
                ao sistema interno do drone, ou seja, captamos o sinal de evento
                diretamente nos circuitos internos. Com um timetag de precisão
                superior a 1/1000 s, o KIT PPK da T2R reconhece o sinal de
                evento praticamente no instante em que a placa principal envia o
                comando para a câmera capturar a foto. O consumo de bateria do
                KIT é irrisório, menor que 1W (130mA em 5V CC).
              </p>
              <p>
                Além disso, seu peso é praticamente insignificante, menor que
                45g. Dessa forma, a redução na autonomia da plataforma é
                praticamente imperceptível.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold md:text-3xl">Nossos produtos</h2>
            <Link
              href={indexProduct()}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'flex h-auto! w-fit items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:bg-button-secondary hover:text-white',
              )}
            >
              Ver Todos
            </Link>
          </div>
          <ProductsCarousel products={products} />
        </div>
      </section>

      <section
        className="relative w-full bg-cover bg-fixed bg-center bg-no-repeat py-52"
        style={{ backgroundImage: "url('/home/home-drone-background.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>{' '}
      </section>

      <section className="bg-[#1a1d21] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="flex justify-center lg:w-1/2 lg:justify-end">
            <img
              src="/home/software-processamento.webp"
              alt="Processamento de Dados T2R"
              className="h-87.5 w-full rounded-xl border border-gray-700 object-cover md:w-137.5"
            />
          </div>

          <div className="text-left lg:w-1/2">
            <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
              Processamento dos dados
            </h3>
            <div className="space-y-6 text-sm leading-relaxed md:text-base">
              <p>
                Visando alcançar coordenadas de altíssima precisão e acurácia,
                dispomos de um fluxo de processamento especializado para atender
                às variadas demandas dos operadores. A partir dos dados obtidos
                com o KIT PPK, realizamos o pós-processamento relativo
                cinemático e sequencialmente utilizamos o T2R-Geotagger para
                associar a trajetória obtida às imagens. Utilizamos técnicas
                avançadas de fotogrametria e geodésia para entregar o
                georreferenciamento das imagens com rigor matemático
                excepcional.
              </p>
              <p>
                Com as imagens georreferenciadas, podemos empregas técnicas de
                fototriangulação direta e/ou integrada a fim de diminuir ou até
                mesmo eliminar a necessidade de pontos de apoio. A técnica PPK
                tem um amplo espectro de aplicações em mapeamentos aéreos,
                abrangendo áreas como topografia e cartografia, agricultura de
                precisão, monitoramento de estruturas, e vigilância ambiental,
                entre outras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1d21] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="text-left lg:w-1/2">
            <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
              Sem Pontos de Controle
            </h3>
            <p className="text-sm leading-relaxed md:text-base">
              Elimina a necessidade de pontos de controle em campo, reduzindo
              drasticamente o custo e o tempo do projeto.
            </p>
          </div>

          <div className="flex justify-center lg:w-1/2 lg:justify-start">
            <img
              src="/home/drone-landscape.webp"
              alt="Drone voando sobre paisagem"
              className="h-87.5 w-full rounded-xl border border-gray-700 object-cover md:w-137.5"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#1a1d21] px-6 py-20 text-white">
        <div className="mx-auto w-10/12 max-w-7xl">
          <VideoPlayer
            localVideo="/home/alt_mov_t2r_camp-inst_1920x1080px.mp4"
            thumbnail="/t2r-thumb.png"
          />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="w-full">
            <VideoPlayer
              thumbnail="/metashape-thumb.webp"
              embedUrl="https://www.youtube.com/embed/qTDgAuybMmw"
            />
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-2xl leading-tight font-bold md:text-3xl">
              Revendedor Oficial no Brasil - Agisoft Metashape
            </h2>

            <p className="text-sm leading-relaxed md:text-base">
              Agisoft Metashape é um software independente que realiza o
              processamento fotogramétrico de imagens digitais e gera dados
              espaciais em 3D para uso em aplicações GIS, documentação de
              patrimônio cultural e produção de efeitos visuais, bem como para
              medições indiretas de objetos de várias escalas.
            </p>

            <div>
              <Link
                href={indexMetaShape()}
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
      </section>
      <section className="w-full py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold md:text-3xl">
              Confira nossas postagens
            </h2>
            <Link
              href={indexBlog()}
              className={cn(
                buttonVariants({ variant: 'default' }),
                'flex h-auto! w-fit items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:bg-button-secondary hover:text-white',
              )}
            >
              Ver Todas
            </Link>
          </div>
          <PostsCarousel posts={posts} />
        </div>
      </section>
      <ClientCarousel />
    </MainLayout>
  );
}
