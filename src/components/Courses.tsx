import { useState } from 'react';
import { BookOpen, Clock, CalendarDays, CheckCircle2, MessageCircle } from 'lucide-react';
import { COURSES, CHURCH, type Course } from '@/data/church';
import { useReveal } from '@/hooks/useReveal';

const FILTERS = ['Todos', 'General', 'Adultos', 'Jóvenes', 'Niños'] as const;
type Filter = (typeof FILTERS)[number];

const LEVEL_STYLES: Record<Course['level'], string> = {
  Inicial: 'bg-green-50 text-green-700',
  Intermedio: 'bg-gold-100 text-gold-700',
  Avanzado: 'bg-navy-100 text-navy-700',
};

export function Courses() {
  const [filter, setFilter] = useState<Filter>('Todos');
  const { ref, inView } = useReveal();

  const filtered = filter === 'Todos'
    ? COURSES
    : COURSES.filter((c) => c.audience === filter);

  const whatsappLink = (title: string) =>
    `https://wa.me/${CHURCH.whatsapp}?text=${encodeURIComponent(
      `Hola, me gustaría más información sobre el curso "${title}".`
    )}`;

  return (
    <section id="cursos" className="section-padding bg-cream-200">
      <div ref={ref} className={`mx-auto max-w-7xl reveal ${inView ? 'in-view' : ''}`}>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5">
            <BookOpen className="h-4 w-4 text-gold-600" />
            <span className="text-sm font-semibold text-gold-700">Cursos y Discipulado</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Escuela de discipulado
          </h2>
          <p className="text-lg leading-relaxed text-navy-600">
            Un camino para crecer en la fe, paso a paso. Inscríbete o pide más información por WhatsApp.
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
                  ? 'bg-navy-900 text-white shadow-md shadow-navy-900/20'
                  : 'bg-white text-navy-600 hover:bg-navy-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Course cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course, i) => (
            <article
              key={course.id}
              className="card-soft flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className={`badge ${LEVEL_STYLES[course.level]}`}>{course.level}</span>
                <span className="badge bg-cream-200 text-navy-500">{course.audience}</span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-navy-900">{course.title}</h3>
              <p className="mb-5 text-base leading-relaxed text-navy-600">{course.description}</p>

              <div className="mb-6 mt-auto space-y-2">
                <div className="flex items-center gap-2 text-sm text-navy-600">
                  <Clock className="h-4 w-4 text-gold-600" />
                  Duración: <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy-600">
                  <CalendarDays className="h-4 w-4 text-gold-600" />
                  {course.schedule}
                </div>
              </div>

              <a
                href={whatsappLink(course.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-800 hover:shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                Inscribirme / Más información
              </a>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center gap-3 py-16 text-center">
            <CheckCircle2 className="h-8 w-8 text-navy-400" />
            <p className="text-navy-500">No hay cursos en esta categoría por ahora. ¡Vuelve pronto!</p>
          </div>
        )}
      </div>
    </section>
  );
}
