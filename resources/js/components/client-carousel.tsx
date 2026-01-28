import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const clients = [
  {
    name: '3dAgro',
    logo: '/home/logos/3dAgro-300x300.png',
  },
  {
    name: 'Aerogis',
    logo: '/home/logos/aerogis-300x300.png',
  },
  {
    name: 'Aeropulv',
    logo: '/home/logos/aeropulv-300x300.png',
  },
  {
    name: 'Agronivel',
    logo: '/home/logos/agronivel-300x300.png',
  },
  {
    name: 'Agroplan',
    logo: '/home/logos/agroplan-300x300.png',
  },
  {
    name: 'Aya',
    logo: '/home/logos/aya-300x300.png',
  },
  {
    name: 'Altais',
    logo: '/home/logos/altais-300x300.png',
  },
  {
    name: 'Azzimute',
    logo: '/home/logos/azzimute-300x300.png',
  },
  {
    name: 'BpBunge',
    logo: '/home/logos/bpbunge-300x300.png',
  },
  {
    name: 'Calitech',
    logo: '/home/logos/calitech-300x300.png',
  },
  {
    name: 'Chiavini e Santos',
    logo: '/home/logos/chiaviniESantos-300x300.png',
  },
  {
    name: 'Construtora Rezende',
    logo: '/home/logos/construtorarezende-300x300.png',
  },
  {
    name: 'Drones Solution',
    logo: '/home/logos/dronessolution-300x300.png',
  },
  {
    name: 'Elevar',
    logo: '/home/logos/elevar-300x300.png',
  },
  {
    name: 'Escala',
    logo: '/home/logos/escala-300x300.png',
  },
  {
    name: 'Estacao Total',
    logo: '/home/logos/estacaototal-300x300.png',
  },
  {
    name: 'FMelhem',
    logo: '/home/logos/fmelhem-300x300.png',
  },
  {
    name: 'FlyMapping',
    logo: '/home/logos/FlyMapping-1-300x300.png',
  },
  {
    name: 'Geoeletrik',
    logo: '/home/logos/Geoeletrik-300x300.png',
  },
  {
    name: 'Geometria',
    logo: '/home/logos/geometria-300x300.png',
  },
  {
    name: 'GeoSupply',
    logo: '/home/logos/geosupply-300x300.png',
  },
  {
    name: 'Geosense',
    logo: '/home/logos/Geosense-removebg-preview-300x300.png',
  },
  {
    name: 'Ebi',
    logo: '/home/logos/ebi-300x300.png',
  },
  {
    name: 'Hiparc',
    logo: '/home/logos/hiparc-300x300.png',
  },
  {
    name: 'ICL',
    logo: '/home/logos/icl-300x300.png',
  },
  {
    name: 'Kiriri',
    logo: '/home/logos/kiriri-300x300.png',
  },
  {
    name: 'Latitude Geo',
    logo: '/home/logos/latitudegeo-300x300.png',
  },
  {
    name: 'Lewale',
    logo: '/home/logos/lewale-300x300.png',
  },
  {
    name: 'ManoGeo',
    logo: '/home/logos/manogeo-300x300.png',
  },
  {
    name: 'Mappear',
    logo: '/home/logos/mappearengenharia-300x300.png',
  },
  {
    name: 'MVGeo',
    logo: '/home/logos/mvgeo-300x300.png',
  },
  {
    name: 'Messen Cartografia',
    logo: '/home/logos/messencartografia-300x300.png',
  },
  {
    name: 'Metrica',
    logo: '/home/logos/metrica-300x300.png',
  },
  {
    name: 'Mundi',
    logo: '/home/logos/mundi-300x300.png',
  },
  {
    name: 'OwlDrones',
    logo: '/home/logos/owlDrones-300x300.png',
  },
  {
    name: 'Prop',
    logo: '/home/logos/prop-300x300.png',
  },
  {
    name: 'Solucoes e Engenharia',
    logo: '/home/logos/solucoesEEngenharia-300x300.png',
  },
  {
    name: 'Suntec',
    logo: '/home/logos/suntec-1-300x300.png',
  },
  {
    name: 'Tecplan',
    logo: '/home/logos/tecplan-1-300x300.png',
  },
  {
    name: 'Unesp',
    logo: '/home/logos/unesp-300x300.png',
  },
  {
    name: 'Zago',
    logo: '/home/logos/zago-300x300.png',
  },
  {
    name: 'Zayon',
    logo: '/home/logos/zayon-brasil-300x300.png',
  },
];

export default function ClientCarousel() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="mb-12 text-center text-2xl font-semibold text-slate-700 md:text-3xl">
          Conheça quem confia em nossos projetos
        </h2>

        <div className="flex justify-center">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent className="-ml-4">
              {clients.map((client) => (
                <CarouselItem
                  key={client.name}
                  className="basis-1/2 pl-4 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="flex h-32 items-center justify-center p-4 opacity-80 transition-all duration-300 hover:opacity-100">
                    <img
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      className="h-auto w-44 object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-12 hidden h-10 w-10 bg-white! sm:flex" />
            <CarouselNext className="-right-12 hidden h-10 w-10 bg-white! sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
