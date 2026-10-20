import { useEffect, useState } from 'react';
import { Menu, X, Radio, Flame } from 'lucide-react';
import { CHURCH } from '@/data/church';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios y Horarios', href: '#horarios' },
  { label: 'Ministerios', href: '#ministerios' },
  { label: 'Cursos y Discipulado', href: '#cursos' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-sm shadow-navy-900/5' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5" aria-label={CHURCH.name}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700 shadow-md">
              <Flame className="h-5 w-5 text-gold-500" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`text-sm font-extrabold tracking-tight ${scrolled ? 'text-navy-900' : 'text-navy-900'}`}>
                IACYM
              </span>
              <span className={`text-[11px] font-medium ${scrolled ? 'text-navy-500' : 'text-navy-600'}`}>
                Nuevo Retablo
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-100 hover:text-navy-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={CHURCH.liveStream}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-gold-600/20 transition-all hover:bg-gold-500 hover:shadow-lg hover:shadow-gold-600/25 lg:inline-flex"
          >
            <Radio className="h-4 w-4 animate-pulse" />
            Ver Transmisión en Vivo
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-navy-800 shadow-sm lg:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-navy-950/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-cream-300 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700">
                <Flame className="h-5 w-5 text-gold-500" />
              </div>
              <span className="text-base font-extrabold text-navy-900">IACYM</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-navy-600 hover:bg-cream-200"
              aria-label="Cerrar menú"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="flex flex-col gap-1 px-4 py-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-cream-200 hover:text-navy-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-4">
            <a
              href={CHURCH.liveStream}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md"
            >
              <Radio className="h-4 w-4 animate-pulse" />
              Ver Transmisión en Vivo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
