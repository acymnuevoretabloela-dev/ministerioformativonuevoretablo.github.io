import { Heart, BookOpen, Users, Sparkles } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const VALUES = [
  {
    icon: Heart,
    title: 'Amamos a Dios',
    description: 'Le adoramos con todo nuestro corazón y buscamos Su presencia en cada reunión.',
  },
  {
    icon: BookOpen,
    title: 'Creemos en Su Palabra',
    description: 'La Biblia es nuestra guía. Enseñamos, estudiamos y vivimos la verdad de las Escrituras.',
  },
  {
    icon: Users,
    title: 'Servimos con propósito',
    description: 'Somos parte de nuestra comunidad: la familia, el barrio, la ciudad y el mundo.',
  },
];

export function About() {
  const { ref, inView } = useReveal();

  return (
    <section id="nosotros" className="section-padding bg-cream-100">
      <div ref={ref} className={`mx-auto max-w-7xl reveal ${inView ? 'in-view' : ''}`}>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-gold-600" />
            <span className="text-sm font-semibold text-gold-700">Nosotros</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Una familia de fe en Nuevo Retablo
          </h2>
          <p className="text-lg leading-relaxed text-navy-600">
            Somos una iglesia que cree en el poder transformador del evangelio de Jesucristo.
            Nuestro deseo es ser un refugio donde cada persona encuentre amor, verdad y esperanza,
            creciendo juntos como discípulos y sirviendo con amor a nuestra comunidad de Comas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <div
              key={value.title}
              className="card-soft"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-navy-700">
                <value.icon className="h-6 w-6 text-gold-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-navy-900">{value.title}</h3>
              <p className="text-base leading-relaxed text-navy-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
