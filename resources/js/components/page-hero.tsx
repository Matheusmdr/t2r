interface IPageHeroProps {
  title: string;
  items?: string[];
}

export function PageHero({ title, items }: IPageHeroProps) {
  return (
    <section className="relative w-full border-b border-gray-300 bg-[#bdbdbd] py-14">
      <div className="pointer-events-none absolute inset-0 bg-[url('/banner-t2r-hexagonos.webp')] opacity-20" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <nav className="mb-2 text-[10px] font-bold tracking-widest text-black/60 uppercase">
          {items?.map((item, index) => (
            <span key={index}>
              {item}
              {index < items.length - 1 && ' / '}
            </span>
          ))}
        </nav>
        <h1 className="text-5xl font-bold tracking-tight text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
