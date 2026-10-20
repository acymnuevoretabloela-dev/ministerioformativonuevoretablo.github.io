import { Flame, Facebook, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { CHURCH } from '@/data/church';

const QUICK_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios y Horarios', href: '#horarios' },
  { label: 'Ministerios', href: '#ministerios' },
  { label: 'Cursos y Discipulado', href: '#cursos' },
  { label: 'Contacto', href: '#contacto' },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700">
                <Flame className="h-5 w-5 text-gold-500" />
              </div>
              <div className="leading-tight">
                <p className="text-sm font-extrabold text-white">IACYM</p>
                <p className="text-xs text-cream-100/60">Nuevo Retablo</p>
              </div>
            </div>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-cream-100/60">
              {CHURCH.fullName}. Una comunidad que ama a Dios, crece en Su Palabra y sirve con propósito.
            </p>
            <div className="flex gap-3">
              <a href={CHURCH.facebook} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cream-100 transition-colors hover:bg-gold-600 hover:text-white" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={CHURCH.youtube} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cream-100 transition-colors hover:bg-gold-600 hover:text-white" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">Navegación</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream-100/70 transition-colors hover:text-gold-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-gold-400">Contacto</p>
            <ul className="space-y-3 text-sm text-cream-100/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{CHURCH.addressDetail}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`tel:${CHURCH.phone}`} className="hover:text-gold-300">{CHURCH.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${CHURCH.email}`} className="hover:text-gold-300">{CHURCH.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-cream-100/50">
            © {new Date().getFullYear()} {CHURCH.fullName}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-cream-100/40">
            «Porque de tal manera amó Dios al mundo...» — Juan 3:16
          </p>
        </div>
      </div>
    </footer>
  );
}
