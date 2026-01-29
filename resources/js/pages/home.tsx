import { Head } from '@inertiajs/react';

import ClientCarousel from '@/components/client-carousel';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { VideoPlayer } from '@/components/video-player';
import MainLayout from '@/layouts/main-layout';
import { Banner, Post, Product } from '@/types';
import { ArrowRight, Banknote, MapPin, Target, Timer } from 'lucide-react';

interface Props {
  posts: Post[];
  products: Product[];
  banners: Banner[];
}

export default function Welcome({ posts, products, banners }: Props) {
  return (
    <MainLayout>
      <Head title="Welcome" />
      <section className="mx-auto w-full">
        <Carousel className="group relative w-full">
          <CarouselContent>
            {banners.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-0">
                  <Card className="overflow-hidden rounded-none border-none py-0">
                    <CardContent className="relative flex aspect-21/9 items-center justify-end p-0!">
                      <img
                        src={item.image_path}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      <div className="relative z-10 mr-12 max-w-md text-right md:mr-24">
                        <h2 className="text-2xl leading-tight font-extrabold text-black uppercase drop-shadow-sm md:text-4xl">
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
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-16 text-2xl font-bold md:text-3xl">
            Vantagens da Integração PPK
          </h2>

          <div className="mb-24 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center gap-4">
              <MapPin size={40} />
              <p className="max-w-56 text-xs font-semibold md:text-lg">
                Redução drástica de pontos de controle
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Target size={40} />
              <p className="max-w-56 text-xs font-semibold md:text-lg">
                Acurácia centimétrica
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Timer size={40} />
              <p className="max-w-56 text-xs font-semibold md:text-lg">
                Redução de tempo em campo
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Banknote size={40} />
              <p className="max-w-56 text-xs font-semibold md:text-lg">
                Redução de custos em campo
              </p>
            </div>
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
            <div className="order-1 flex justify-center lg:order-2 lg:w-1/2 lg:justify-end">
              <img
                src="/home/mapeamento-3d.webp"
                alt="Mapeamento"
                className="h-87.5 w-full rounded-xl object-cover md:w-137.5"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
          <div className="flex justify-center lg:w-1/2 lg:justify-start">
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
            <Button className="flex h-auto! items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:bg-button-secondary hover:text-white">
              Ver Todos
            </Button>
          </div>

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
                      <h3 className="min-h-12 text-sm leading-snug font-semibold md:text-base">
                        {product.title}
                      </h3>
                      <Button
                        variant="secondary"
                        className="rounded-md border border-gray-300 px-6 py-2 font-medium hover:bg-gray-200"
                      >
                        Saiba Mais
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-12 hidden border-none bg-white/80 lg:flex" />
            <CarouselNext className="-right-12 hidden border-none bg-white/80 lg:flex" />
          </Carousel>
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
          <div className="flex justify-center lg:w-1/2 lg:justify-start">
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

          <div className="flex justify-center lg:w-1/2 lg:justify-end">
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
              <Button className="flex h-auto! items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:bg-button-secondary hover:text-white">
                Saiba Mais
              </Button>
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
            <Button className="flex h-auto! items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:bg-button-secondary hover:text-white">
              Ver Todas
            </Button>
          </div>

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
                  <Card className="flex h-full flex-col overflow-hidden rounded-2xl border-none bg-white shadow-sm">
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
                      <h3 className="line-clamp-2 text-lg leading-tight font-bold">
                        {post.title}
                      </h3>
                      <p className="line-clamp-3 text-sm text-gray-500">
                        {post.content.substring(0, 100)}...
                      </p>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 rounded-lg bg-button-primary p-0 px-4 py-2 font-semibold hover:bg-button-secondary hover:text-black"
                      >
                        Leia mais <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-12 hidden border-none bg-white/80 lg:flex" />
            <CarouselNext className="-right-12 hidden border-none bg-white/80 lg:flex" />
          </Carousel>
        </div>
      </section>
      <ClientCarousel />
    </MainLayout>
  );
}
