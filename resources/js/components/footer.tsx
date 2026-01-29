import { Link } from '@inertiajs/react';

interface NavLink {
  name: string;
  href: string;
}

interface SocialProps {
  children: React.ReactNode;
  href: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links: NavLink[] = [
    { name: 'Produtos', href: '/produtos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Metashape', href: '/metashape' },
    { name: 'Sobre Nós', href: '/sobre-nos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Fale Conosco', href: '/contato' },
  ];

  return (
    <footer className="bg-[#1a1d21] px-6 pt-16 pb-8 font-sans text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex flex-col">
              <img
                src="/logo-t2r-branco.svg"
                alt="T2R"
                className="mb-1 h-auto w-40"
              />
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold md:text-base">Acessos</h4>
            <ul className="space-y-3 text-xs text-gray-300 md:text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ContactColumn
            title="Comercial"
            phone="+55 18 99613-1404"
            email="contato@t2rtecnologia.com.br"
          />

          <ContactColumn
            title="Administrativo/ Financeiro"
            phone="+55 18 99774-9080"
            email="adm@t2rtecnologia.com.br"
          />

          <ContactColumn
            title="Suporte Técnico"
            phone="+55 18 99721-6319"
            email="suporte@t2rtecnologia.com.br"
          />
        </div>

        <div className="relative my-12 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700/40"></div>
          </div>
          <div className="relative flex gap-4 bg-[#1a1d21] px-6">
            <SocialCircle href="#">
              <FacebookIcon />
            </SocialCircle>
            <SocialCircle href="#">
              <InstagramIcon />
            </SocialCircle>
            <SocialCircle href="#">
              <LinkedinIcon />
            </SocialCircle>
            <SocialCircle href="#">
              <YoutubeIcon />
            </SocialCircle>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between text-xs text-gray-500 md:flex-row md:items-center md:text-sm">
          <div className="text-left leading-relaxed opacity-70">
            <p>Avenida Da Saudade, 535, Sala 86,</p>
            <p>Parque Empresarial, Presidente Prudente/SP</p>
          </div>
          <p className="mt-4 font-medium opacity-80 md:mt-0">
            Copyright © {currentYear} - T2R Soluções Tecnológicas
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactColumn({
  title,
  phone,
  email,
}: {
  title: string;
  phone: string;
  email: string;
}) {
  const cleanPhone = phone.replace(/\D/g, '');

  return (
    <div>
      <h4 className="mb-5 text-sm font-bold md:text-base">{title}</h4>
      <div className="space-y-4 text-xs text-gray-300 md:text-sm">
        <a
          href={`https://wa.me/${cleanPhone}`}
          className="group flex items-center gap-3 transition-colors hover:text-white"
        >
          <WhatsappIcon className="h-5 w-5 text-white opacity-80 group-hover:opacity-100" />
          {phone}
        </a>
        <a
          href={`mailto:${email}`}
          className="group flex items-center gap-3 overflow-hidden text-ellipsis transition-colors hover:text-white"
        >
          <MailIcon className="h-5 w-5 text-white opacity-80 group-hover:opacity-100" />
          {email}
        </a>
      </div>
    </div>
  );
}

function SocialCircle({ children, href }: SocialProps) {
  return (
    <a
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3d4146] transition-all duration-300 hover:bg-gray-500"
    >
      {children}
    </a>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.892a11.826 11.826 0 00-3.488-8.413z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  );
}
