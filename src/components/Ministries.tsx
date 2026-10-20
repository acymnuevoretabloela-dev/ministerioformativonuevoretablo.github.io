import { useState } from 'react';
import {
  Baby, Flame, Heart, Shield, Music, HeartHandshake, ArrowRight,
} from 'lucide-react';
import { MINISTRIES, CHURCH, type Ministry } from '@/data/church';
import { useReveal } from '@/hooks/useReveal';

const FILTERS = ['Todos', 'Niños', 'Jóvenes', 'Adultos', 'General'] as const;
type Filter = (typeof FILTERS)[number];

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  baby: Baby,
  flame: Flame,
  heart: Heart,
  shield: Shield,
  music: Music,
  hands: HeartHandshake,
};

export function Ministries() {
  const [filter, setFilter] = useState<Filter>('Todos');
  const { ref, inView } = useReveal();

  const filtered = filter === 'Todos'
    ? MINISTRIES
    : MINISTRIES.filter((m) => m.audience === filter);

  const joinLink = `https://wa.me/${CHURCH.whatsapp}?text=${encodeURIComponent(
    'Hola, me gustaría sumarme a un ministerio de la iglesia.'
  )}`;

  return (
    <section id="ministerios" className="section-padding bg-white">
      <div ref={ref} className={`mx-auto max-w-7xl reveal ${inView ? 'in-view' : ''}`}>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy-100 px-4 py-1.5">
            <HeartHandshake className="h-4 w-4 text-navy-700" />
            <span className="text-sm font-semibold text-navy-700">Ministerios</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Sirviendo juntos con nuestros dones
          </h2>
          <p className="text-lg leading-relaxed text-navy-600">
            Cada ministerio es una oportunidad para servir, crecer y construir comunidad. ¡Encuentra el tuyo!
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                filter === f
                  ? 'bg-gold-600 text-white shadow-md shadow-gold-600/20'
                  : 'bg-cream-200 text-navy-600 hover:bg-cream-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m: Ministry, i) => {
            const Icon = ICONS[m.icon] ?? HeartHandshake;
            return (
              <article
                key={m.id}
                className="group relative overflow-hidden rounded-3xl border border-cream-300/80 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-gold-500 to-gold-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cream-200 to-cream-300 transition-all duration-300 group-hover:from-gold-500 group-hover:to-gold-600">
                  <Icon className="h-6 w-6 text-navy-800 transition-colors duration-300 group-hover:text-white" />
                </div>
                <span className="badge mb-3 bg-navy-100 text-navy-600">{m.audience}</span>
                <h3 className="mb-2 text-xl font-bold text-navy-900">{m.title}</h3>
                <p className="text-base leading-relaxed text-navy-600">{m.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={joinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Sumarme a un Ministerio
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
