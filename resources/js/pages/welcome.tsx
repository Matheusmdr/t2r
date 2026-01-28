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
import { ArrowRight, Banknote, MapPin, Target, Timer } from 'lucide-react';

const carouselItems = [
  {
    image: '/images/welcome/carousel-1.jpg',
    alt: 'Carousel Image 1',
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    image: '/images/welcome/carousel-2.jpg',
    alt: 'Carousel Image 2',
    title: 'Title 2',
    description: 'Description 2',
  },
];

const products = [
  {
    title: 'Kit PPK T2R L1/L2 para Air 2S',
    image: 'https://placehold.co/400x300/f8f9fa/666?text=Drone+Air+2S',
  },
  {
    title: 'Kit PPK T2R L1/L2 para Linha Phantom 4 ADV/PRO/PROv2',
    image: 'https://placehold.co/400x300/f8f9fa/666?text=Phantom+4',
  },
  {
    title: 'Kit PPK T2R L1/L2 para Mini 3',
    image: 'https://placehold.co/400x300/f8f9fa/666?text=Drone+Mini+3',
  },
  {
    title: 'Kit PPK T2R L1 para Mini 2',
    image: 'https://placehold.co/400x300/f8f9fa/666?text=Drone+Mini+2',
  },
  {
    title: 'Produto Adicional',
    image: 'https://placehold.co/400x300/f8f9fa/666?text=Outro+Kit',
  },
];

const posts = [
  {
    title:
      'Integração de dados corrigidos utilizando T2R Geotagger no Método PPK',
    description:
      'Neste vídeo da Drone Experts, é apresentado o processo final...',
    image: 'https://placehold.co/600x400/059669/white?text=Integração+PPK',
  },
  {
    title:
      'Guia Detalhado de Mapeamento com DJI Air 2S + Kit PPK T2R no DroneLink',
    description:
      'Neste vídeo, utilizaremos um plano de voo previamente confeccionado no...',
    image: 'https://placehold.co/600x400/ea580c/white?text=Guia+Mapeamento',
  },
  {
    title:
      'Planejamento de Voo com Dronelink e Drone DJI Air 2S + KIT PPK da T2R',
    description: 'Neste vídeo trataremos sobre o aplicativo Dronelink ()...',
    image: 'https://placehold.co/600x400/2563eb/white?text=Planejamento+Voo',
  },
  {
    title: 'Postagem Adicional de Exemplo',
    description:
      'Confira mais detalhes sobre as novas tecnologias de georreferenciamento...',
    image: 'https://placehold.co/600x400/4b5563/white?text=Tecnologia',
  },
];

export default function Welcome() {
  return (
    <MainLayout>
      <Head title="Welcome" />
      <section className="mx-auto w-full">
        <Carousel className="group relative w-full">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-0">
                  <Card className="overflow-hidden rounded-none border-none">
                    <CardContent className="relative flex aspect-21/9 items-center justify-end p-0">
                      <img
                        src={item.image}
                        alt={item.alt}
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

      <section className="bg-[#e9ecef] px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-16 text-3xl font-bold text-[#333]">
            Vantagens da Integração PPK
          </h2>

          <div className="mb-24 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center gap-4">
              <MapPin />
              <p className="max-w-37.5 text-sm font-semibold text-[#333]">
                Redução drástica de pontos de controle
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Target />
              <p className="max-w-37.5 text-sm font-semibold text-[#333]">
                Acurácia centimétrica
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Timer />
              <p className="max-w-37.5 text-sm font-semibold text-[#333]">
                Redução de tempo em campo
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Banknote />
              <p className="max-w-37.5 text-sm font-semibold text-[#333]">
                Redução de custos em campo
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-12 text-left lg:flex-row">
            <div className="order-2 lg:order-1 lg:w-1/2">
              <h3 className="mb-6 text-2xl font-bold text-[#333]">
                Integração do PPK em alta precisão
              </h3>
              <p className="text-sm leading-relaxed text-[#555] lg:text-base">
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

      <section className="border-t border-gray-200 bg-[#e9ecef] px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
          <div className="flex justify-center lg:w-1/2 lg:justify-start">
            <img
              src="/home/drone-air-2s.webp"
              alt="Drone T2R"
              className="h-87.5 w-full rounded-2xl object-cover md:w-137.5"
            />
          </div>
          <div className="text-left lg:w-1/2">
            <h2 className="mb-8 text-3xl font-bold text-[#222]">
              Integração rigorosa
            </h2>
            <div className="space-y-6 text-sm leading-relaxed text-[#444] lg:text-base">
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

      <section className="w-full bg-[#f2f2f2] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              Nossos produtos
            </h2>
            <Button
              variant="outline"
              className="bg-white px-6 font-semibold text-gray-900 hover:bg-gray-100"
            >
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
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </CardContent>

                    <CardFooter className="mt-4 flex flex-col items-start space-y-4 p-0">
                      <h3 className="min-h-12 text-sm leading-snug font-semibold text-gray-800 md:text-base">
                        {product.title}
                      </h3>
                      <Button
                        variant="secondary"
                        className="rounded-md border border-gray-300 bg-[#f2f2f2] px-6 py-2 font-medium text-gray-700 hover:bg-gray-200"
                      >
                        Read more
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-12 hidden opacity-50 hover:opacity-100 lg:flex" />
            <CarouselNext className="-right-12 hidden opacity-50 hover:opacity-100 lg:flex" />
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
            <h3 className="mb-6 text-2xl font-bold text-white">
              Processamento dos dados
            </h3>
            <div className="space-y-6 text-sm leading-relaxed text-gray-400 lg:text-base">
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

      <section className="border-t border-gray-800 bg-[#1a1d21] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="text-left lg:w-1/2">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Sem Pontos de Controle
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 lg:text-base">
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
      <section className="border-t border-gray-800 bg-[#1a1d21] px-6 py-20 text-white">
        <div className="mx-auto w-10/12 max-w-7xl">
          <VideoPlayer localVideo="/home/alt_mov_t2r_camp-inst_1920x1080px.mp4" />
        </div>
      </section>

      <section className="bg-[#f2f2f2] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="w-full">
            <VideoPlayer
              thumbnail="https://placehold.co/600x400/white/000?text=Metashape+Logo"
              embedUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
            />
          </div>

          <div className="space-y-6 text-left">
            <h2 className="text-3xl leading-tight font-bold text-gray-900 md:text-4xl">
              Revendedor Oficial no Brasil - Agisoft Metashape
            </h2>

            <p className="text-lg leading-relaxed text-gray-700">
              Agisoft Metashape é um software independente que realiza o
              processamento fotogramétrico de imagens digitais e gera dados
              espaciais em 3D para uso em aplicações GIS, documentação de
              patrimônio cultural e produção de efeitos visuais, bem como para
              medições indiretas de objetos de várias escalas.
            </p>

            <div>
              <a
                href="#"
                className="inline-block rounded-md bg-gray-200 px-8 py-3 font-semibold text-gray-900 shadow-sm transition-colors duration-200 hover:bg-gray-300"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f2f2f2] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-800">
              Confira nossas postagens
            </h2>
            <Button
              variant="outline"
              className="border-none bg-white px-6 text-gray-900 shadow-sm hover:bg-gray-100"
            >
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
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </CardHeader>

                    <CardContent className="grow space-y-4 p-6 text-left">
                      <h3 className="line-clamp-2 text-lg leading-tight font-bold text-gray-900">
                        {post.title}
                      </h3>
                      <p className="line-clamp-3 text-sm text-gray-500">
                        {post.description}
                      </p>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                      <Button
                        variant="ghost"
                        className="flex items-center gap-2 rounded-lg bg-[#f8f9fa] p-0 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-200 hover:text-black"
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
