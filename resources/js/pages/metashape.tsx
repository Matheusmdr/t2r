import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';

import MainLayout from '@/layouts/main-layout';
import { Check, Play, X } from 'lucide-react';

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
      <div className="pl-2 text-left text-[15px] font-medium text-[#4b5563]">
        {label}
      </div>
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
      <main className="min-h-screen w-full bg-[#f2f2f2]">
        <PageHero title="Metashape" items={['Home', 'Software', 'Metashape']} />

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
            <div className="group relative">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-green-400 to-blue-500 shadow-2xl">
                <img
                  src="https://placehold.co/800x450/transparent/white?text=Metashape+2.0"
                  className="absolute inset-0 h-full w-full object-contain"
                />
                <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-transform hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-current" />
                </div>
                <div className="absolute right-4 bottom-4 left-4 flex items-center gap-3 rounded-lg bg-black/80 p-3">
                  <div className="absolute top-1 left-3 text-[10px] font-bold text-white">
                    Mais vídeos
                  </div>
                  <div className="mt-3 flex gap-2">
                    <div className="h-12 w-20 overflow-hidden rounded bg-gray-700">
                      <img
                        src="https://placehold.co/80x48/555/white?text=Drone"
                        className="h-full w-full object-cover opacity-60"
                      />
                    </div>
                    <div className="h-12 w-20 overflow-hidden rounded bg-gray-700">
                      <img
                        src="https://placehold.co/80x48/555/white?text=3D"
                        className="h-full w-full object-cover opacity-60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl leading-tight font-extrabold text-[#333]">
                Revendedor Oficial no Brasil - Agisoft Metashape
              </h2>
              <p className="text-lg leading-relaxed font-medium text-[#666]">
                Agisoft Metashape é um software independente que realiza o
                processamento fotogramétrico de imagens digitais e gera dados
                espaciais em 3D para uso em aplicações GIS, documentação de
                patrimônio cultural e produção de efeitos visuais, bem como para
                medições indiretas de objetos de várias escalas.
              </p>
              <Button className="rounded border-none bg-[#f2f2f2] px-10 py-7 text-sm font-bold text-[#333] shadow-sm hover:bg-gray-200">
                Saiba Mais
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="mb-16 text-3xl font-bold tracking-tight text-[#333] uppercase">
              Comparação das Licenças
            </h2>

            <div className="mb-10 grid grid-cols-[1.5fr_1fr_1fr] items-end gap-8">
              <div className="hidden pb-2 text-left text-sm font-bold text-gray-500 uppercase md:block">
                Características:
              </div>
              <div className="space-y-4">
                <img
                  src="https://placehold.co/220x300/1a8344/white?text=Professional"
                  alt="Professional"
                  className="mx-auto rounded-lg shadow-2xl"
                />
                <p className="text-lg font-bold text-[#333]">
                  Versão Professional
                </p>
              </div>
              <div className="space-y-4">
                <img
                  src="https://placehold.co/220x300/3b82f6/white?text=Standard"
                  alt="Standard"
                  className="mx-auto rounded-lg shadow-2xl"
                />
                <p className="text-lg font-bold text-[#333]">Versão Standard</p>
              </div>
            </div>

            <div className="w-full">
              {features.map((f, i) => (
                <FeatureRow key={i} {...f} />
              ))}
            </div>

            <div className="mt-16">
              <Button className="rounded bg-[#f2f2f2] px-14 py-8 text-lg font-bold text-[#333] shadow-sm hover:bg-gray-200">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
