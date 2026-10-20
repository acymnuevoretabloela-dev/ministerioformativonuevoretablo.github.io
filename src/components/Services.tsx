import { Sunrise, Sunset, Hand, Users, MapPin, Radio, Clock } from 'lucide-react';
import { SERVICES, type ServiceTime } from '@/data/church';
import { useReveal } from '@/hooks/useReveal';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  sunrise: Sunrise,
  sunset: Sunset,
  hand: Hand,
  users: Users,
};

function ServiceCard({ service, delay }: { service: ServiceTime; delay: number }) {
  const Icon = ICONS[service.icon] ?? Clock;

  return (
    <article
      className="card-soft flex flex-col"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700">
          <Icon className="h-6 w-6 text-gold-400" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {service.mode.includes('Presencial') && (
            <span className="badge bg-navy-100 text-navy-700">
              <MapPin className="h-3 w-3" /> Presencial
            </span>
          )}
          {service.mode.includes('En Vivo') && (
            <span className="badge bg-red-50 text-red-600">
              <Radio className="h-3 w-3" /> En Vivo
            </span>
          )}
        </div>
      </div>

      <h3 className="mb-1 text-xl font-bold text-navy-900">{service.title}</h3>
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gold-700">
        <Clock className="h-4 w-4" />
        {service.day} · {service.time}
      </div>
      <p className="text-base leading-relaxed text-navy-600">{service.description}</p>
    </article>
  );
}

export function Services() {
  const { ref, inView } = useReveal();

  return (
    <section id="horarios" className="section-padding bg-white">
      <div ref={ref} className={`mx-auto max-w-7xl reveal ${inView ? 'in-view' : ''}`}>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-navy-100 px-4 py-1.5">
            <Clock className="h-4 w-4 text-navy-700" />
            <span className="text-sm font-semibold text-navy-700">Servicios y Horarios</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Reuniones de cada semana
          </h2>
          <p className="text-lg leading-relaxed text-navy-600">
            Te invitamos a acompañarnos en cada encuentro. Puedes asistir presencialmente o seguir
            la transmisión en vivo desde donde te encuentres.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
