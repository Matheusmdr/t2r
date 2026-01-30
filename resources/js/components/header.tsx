import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { buttonVariants } from './ui/button';

import publicRoutes from '@/routes/public';

export default function Header() {
  const navLinks = [
    { name: 'Home', href: publicRoutes.home() },
    { name: 'Produtos', href: publicRoutes.products.index() },
    { name: 'Serviços', href: publicRoutes.services.index() },
    { name: 'Metashape', href: publicRoutes.metashape.index() },
    { name: 'Sobre Nós', href: publicRoutes.about.index() },
    { name: 'Blog', href: publicRoutes.blog.index() },
    { name: 'Fale Conosco', href: publicRoutes.contact.index() },
  ];

  return (
    <header className="border-b border-gray-800 bg-[#1a1d21] px-6 py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <img
              src="/logo-t2r-branco.svg"
              alt="T2R Logo"
              className="h-auto w-40"
            />
          </div>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium transition-colors hover:text-gray-400 md:text-base"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div>
          <a
            href="https://wa.me/5518997216319"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'hover:broder flex h-auto! items-center gap-2 bg-button-primary px-6! py-3! font-semibold text-text-primary hover:border hover:border-white hover:bg-button-secondary hover:text-white',
            )}
          >
            Suporte Técnico
          </a>
        </div>
      </div>
    </header>
  );
}
