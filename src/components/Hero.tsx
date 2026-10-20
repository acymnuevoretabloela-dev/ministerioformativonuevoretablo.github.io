import { Radio, CalendarClock, MapPin, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { CHURCH } from '@/data/church';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-24 lg:pt-0">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/14587105/pexels-photo-14587105.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Congregación en adoración"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-transparent to-transparent" />
      </div>

      {/* Decorative floating dots */}
      <div className="absolute left-10 top-1/3 hidden h-2 w-2 animate-float rounded-full bg-gold-400/60 lg:block" />
      <div className="absolute right-20 top-1/2 hidden h-3 w-3 animate-float rounded-full bg-gold-400/40 lg:block" style={{ animationDelay: '1s' }} />
      <div className="absolute left-1/4 bottom-32 hidden h-1.5 w-1.5 animate-float rounded-full bg-white/30 lg:block" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-gold-400" />
            <span className="text-sm font-medium text-cream-100">Comunidad de fe en Nuevo Retablo, Comas</span>
          </div>

          <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white animate-fade-in-up sm:text-5xl lg:text-6xl" style={{ animationDelay: '0.1s' }}>
            Bienvenidos a Casa
            <span className="block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              IACYM Nuevo Retablo
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-cream-100/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {CHURCH.tagline}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#contacto" className="btn-primary">
              <MapPin className="h-4 w-4" />
              Planifica tu visita
            </a>
            <a href="#cursos" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20">
              <BookOpen className="h-4 w-4" />
              Explora nuestros cursos
            </a>
          </div>
        </div>

        {/* Next service banner */}
        <div className="mt-12 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-dark flex flex-col gap-4 rounded-2xl border border-white/15 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500/20">
              <CalendarClock className="h-6 w-6 text-gold-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-gold-300">
                  Próximo Culto
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-red-500/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-red-300">
                  <Radio className="h-3 w-3 animate-pulse" /> En Vivo
                </span>
              </div>
              <p className="mt-1.5 text-base font-bold text-white">Domingo — 10:00 AM & 6:00 PM</p>
              <p className="text-sm text-cream-100/70">Cultos dominicales presencial y por transmisión</p>
            </div>
            <a
              href={CHURCH.liveStream}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-500"
            >
              Ver en vivo <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex">
        <span className="text-xs font-medium uppercase tracking-widest">Desliza</span>
        <div className="flex h-9 w-5.5 items-start justify-center rounded-full border border-white/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
