import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';
import { VideoPlayer } from '@/components/video-player';

import MainLayout from '@/layouts/main-layout';
import { Check, X } from 'lucide-react';

interface FeatureRowProps {
  label: string;
  pro: boolean;
  std: boolean;
}

const features: FeatureRowProps[] = [
  { label: 'Triangulação fotogramétrica', pro: true, std: true },
  {
    label: 'Nuvem de pontos densa: edição e classificação',
    pro: true,
    std: true,
  },
  {
    label: 'Modelo digital de elevação: geração e edição DSM/DTM',
    pro: true,
    std: false,
  },
  { label: 'Geração de ortomosaicos georreferenciados', pro: true, std: false },
  { label: 'Suporte de dados LiDAR', pro: true, std: false },
  {
    label: 'Pontos de controle no solo/suporte da barra de escala',
    pro: true,
    std: false,
  },
  { label: 'Medições: distâncias, áreas, volumes', pro: true, std: false },
  { label: 'Medições estereoscópicas', pro: true, std: false },
  { label: 'Modelo 3D: geração e texturização', pro: true, std: true },
  { label: 'Geração de modelo hierárquico lado a lado', pro: true, std: false },
  { label: 'Modelagem 4D para cenas dinâmicas', pro: true, std: false },
  { label: 'Costura panorâmica', pro: true, std: false },
  { label: 'Processamento de imagens multiespectrais', pro: true, std: false },
  { label: 'Detecção automática de linhas de energia', pro: true, std: false },
  { label: 'Processamento de imagens de satélite', pro: true, std: false },
  { label: 'API Python e Java', pro: true, std: false },
  { label: 'Processamento de rede', pro: true, std: false },
  { label: 'Processamento em nuvem', pro: true, std: false },
];

function FeatureRow({ label, pro, std }: FeatureRowProps) {
  return (
    <div className="grid grid-cols-[1.5fr_1fr_1fr] items-center border-b border-gray-100 py-4">
      <div className="pl-2 text-left text-[15px] font-medium">{label}</div>
      <div className="flex justify-center">
        <div
          className={`${pro ? 'bg-[#1a8344]' : 'bg-[#e31e24]'} rounded p-0.5 text-white shadow-sm`}
        >
          {pro ? (
            <Check className="h-4 w-4 stroke-3" />
          ) : (
            <X className="h-4 w-4 stroke-3" />
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={`${std ? 'bg-[#1a8344]' : 'bg-[#e31e24]'} rounded p-0.5 text-white shadow-sm`}
        >
          {std ? (
            <Check className="h-4 w-4 stroke-3" />
          ) : (
            <X className="h-4 w-4 stroke-3" />
          )}
        </div>
      </div>
    </div>
  );
}

export default function MetashapePage() {
  return (
    <MainLayout>
      <PageHero title="Metashape" items={['Home', 'Software', 'Metashape']} />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <VideoPlayer
            thumbnail="/metashape-thumb.webp"
            embedUrl="https://www.youtube.com/embed/qTDgAuybMmw"
          />

          <div className="space-y-6">
            <h2 className="text-4xl leading-tight font-extrabold">
              Revendedor Oficial no Brasil - Agisoft Metashape
            </h2>
            <p className="text-lg leading-relaxed font-medium">
              Agisoft Metashape é um software independente que realiza o
              processamento fotogramétrico de imagens digitais e gera dados
              espaciais em 3D para uso em aplicações GIS, documentação de
              patrimônio cultural e produção de efeitos visuais, bem como para
              medições indiretas de objetos de várias escalas.
            </p>

            <Button className="border-none bg-button-primary px-6 text-text-primary shadow-sm hover:bg-button-secondary hover:text-white">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-16 text-3xl font-bold tracking-tight uppercase">
            Comparação das Licenças
          </h2>

          <div className="mb-10 grid grid-cols-[1.5fr_1fr_1fr] items-end gap-8">
            <div className="hidden pb-2 text-left text-sm font-bold uppercase md:block">
              Características:
            </div>
            <div className="space-y-4">
              <img
                src="/metashape-products/Box_Pro.webp"
                alt="Professional"
                className="mx-auto"
              />
              <p className="text-lg font-bold">Versão Professional</p>
            </div>
            <div className="space-y-4">
              <img
                src="/metashape-products/Box_Standard.webp"
                alt="Standard"
                className="mx-auto"
              />
              <p className="text-lg font-bold">Versão Standard</p>
            </div>
          </div>

          <div className="w-full">
            {features.map((f, i) => (
              <FeatureRow key={i} {...f} />
            ))}
          </div>

          <div className="mt-16">
            <Button className="border-none bg-button-primary px-6 text-text-primary shadow-sm hover:bg-button-secondary hover:text-white">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
