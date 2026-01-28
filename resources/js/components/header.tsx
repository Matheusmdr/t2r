import { Link } from '@inertiajs/react';

export default function Header() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Metashape', href: '/metashape' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Fale Conosco', href: '/contato' },
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

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-gray-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div>
          <Link
            href="/suporte"
            className="rounded-md bg-white px-5 py-2 text-sm font-bold text-black transition-all hover:bg-gray-200"
          >
            Suporte Técnico
          </Link>
        </div>
      </div>
    </header>
  );
}
