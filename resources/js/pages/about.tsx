import ClientCarousel from '@/components/client-carousel';
import { PageHero } from '@/components/page-hero';
import { VideoPlayer } from '@/components/video-player';
import MainLayout from '@/layouts/main-layout';
import { BarChart3, MapPin, Monitor, Share2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

function useCountUp(endValue: string, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const numericEndValue = parseInt(endValue.replace(/\D/g, ''));
  const hasStarted = useRef(false);

  useEffect(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericEndValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    if (!hasStarted.current) {
      window.requestAnimationFrame(step);
      hasStarted.current = true;
    }
  }, [numericEndValue, duration]);

  const suffix = endValue.replace(/[0-9]/g, '');
  return `${count}${suffix}`;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const animatedValue = useCountUp(value);

  return (
    <div className="flex flex-col items-center">
      <span className="mb-2 text-4xl font-bold">{animatedValue}</span>
      <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
        {label}
      </span>
    </div>
  );
}

function ServiceItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="group flex cursor-default flex-col items-center">
      <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="max-w-35 text-center text-[11px] leading-tight font-bold tracking-wide uppercase">
        {title}
      </span>
    </div>
  );
}

export default function SobreNosPage() {
  return (
    <MainLayout>
      <PageHero title="Sobre Nós" items={['Home', 'Sobre Nós']} />

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center">
        <div className="mb-20 grid grid-cols-3 gap-16 md:gap-32">
          <StatItem value="141+" label="Clientes" />
          <StatItem value="100%" label="Comprometimento" />
          <StatItem value="19+" label="Estados" />
        </div>

        <div className="mb-24 max-w-3xl space-y-8">
          <p className="text-sm font-medium md:text-base">
            A T2R é uma empresa de tecnologia que desenvolve soluções em áreas
            do conhecimento como Cartografia, Geodésia por Satélites,
            Fotogrametria, Ciência da Computação e Eletrônica.
          </p>
          <p className="text-sm font-medium md:text-base">
            Realizamos a integração de sistemas eletro/eletrônicos,
            computacionais e industriais, desenvolvimento de algoritmos para
            sistemas embarcados e IoT (Hardware e Software), processamento e
            análise de dados geográficos, numéricos e estatísticos e
            desenvolvimento de sistemas e automações para áreas agrícolas, de
            infraestrutura e geográficas.
          </p>
        </div>

        <div className="mb-28 grid w-full grid-cols-2 gap-12 md:grid-cols-4">
          <ServiceItem
            icon={<Share2 size={38} strokeWidth={1.2} />}
            title="Integração de Sistemas"
          />
          <ServiceItem
            icon={<Monitor size={38} strokeWidth={1.2} />}
            title="Desenvolvimento de Algoritmos"
          />
          <ServiceItem
            icon={<BarChart3 size={38} strokeWidth={1.2} />}
            title="Processamento e Análise de Dados"
          />
          <ServiceItem
            icon={<MapPin size={38} strokeWidth={1.2} />}
            title="Desenvolvimento de Sistemas e Automações"
          />
        </div>

        <VideoPlayer
          localVideo="/home/alt_mov_t2r_camp-inst_1920x1080px.mp4"
          thumbnail="/t2r-thumb.png"
        />
      </section>
      <section>
        <ClientCarousel />
      </section>
    </MainLayout>
  );
}
