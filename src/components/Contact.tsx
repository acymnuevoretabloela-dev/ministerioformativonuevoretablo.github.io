import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Facebook, Youtube, Send, Loader2, MessageCircle } from 'lucide-react';
import { CHURCH } from '@/data/church';
import { supabase } from '@/lib/supabase';

interface ToastState {
  show: boolean;
  message: string;
  variant: 'success' | 'error';
}

export function Contact({ onToast }: { onToast: (t: ToastState) => void }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message_type: 'general',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setLoading(true);
    try {
      const { error } = await supabase.from('messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        message_type: form.message_type,
        message: form.message.trim(),
      });
      if (error) throw error;
      onToast({
        show: true,
        message: '¡Gracias! Hemos recibido tu mensaje. Oraremos por ti.',
        variant: 'success',
      });
      setForm({ name: '', email: '', phone: '', message_type: 'general', message: '' });
    } catch {
      onToast({
        show: true,
        message: 'No pudimos enviar tu mensaje. Inténtalo de nuevo más tarde.',
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-xl border border-cream-300 bg-cream-100/50 px-4 py-3 text-sm text-navy-800 placeholder:text-navy-400 outline-none transition-all focus:border-gold-500 focus:bg-white focus:ring-2 focus:ring-gold-500/20';

  return (
    <section id="contacto" className="section-padding bg-navy-950 text-cream-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5">
            <MapPin className="h-4 w-4 text-gold-400" />
            <span className="text-sm font-semibold text-gold-300">Ubicación y Contacto</span>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Estamos aquí para ti
          </h2>
          <p className="text-lg leading-relaxed text-cream-100/80">
            Visítanos en Nuevo Retablo, Comas. Déjanos un mensaje o una petición de oración y nos
            pondremos en contacto contigo.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: location & map */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Ubicación de IACYM Nuevo Retablo en Comas, Lima"
                src={`https://www.google.com/maps?q=${CHURCH.mapsQuery}&output=embed`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/20">
                    <MapPin className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Dirección</p>
                    <p className="text-sm text-cream-100/70">{CHURCH.addressDetail}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/20">
                    <Phone className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Teléfono / WhatsApp</p>
                    <a href={`tel:${CHURCH.phone}`} className="text-sm text-cream-100/70 hover:text-gold-300">{CHURCH.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/20">
                    <Mail className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Correo</p>
                    <a href={`mailto:${CHURCH.email}`} className="text-sm text-cream-100/70 hover:text-gold-300">{CHURCH.email}</a>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3 border-t border-white/10 pt-5">
                <a href={CHURCH.facebook} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cream-100 transition-colors hover:bg-gold-600 hover:text-white" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href={CHURCH.youtube} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cream-100 transition-colors hover:bg-gold-600 hover:text-white" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href={`https://wa.me/${CHURCH.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cream-100 transition-colors hover:bg-green-600 hover:text-white" aria-label="WhatsApp">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="mb-1 text-xl font-bold text-white">Déjanos un mensaje / Petición de Oración</h3>
            <p className="mb-6 text-sm text-cream-100/60">Completa el formulario y te responderemos a la brevedad.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-cream-100/80">Nombre *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-cream-100/80">Correo *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tucorreo@ejemplo.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-cream-100/80">Teléfono (opcional)</label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+51 ..."
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message_type" className="mb-1.5 block text-xs font-semibold text-cream-100/80">Tipo de mensaje</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                    form.message_type === 'general'
                      ? 'border-gold-500 bg-gold-500/20 text-white'
                      : 'border-white/10 bg-white/5 text-cream-100/70 hover:border-white/20'
                  }`}>
                    <input
                      type="radio"
                      name="message_type"
                      value="general"
                      checked={form.message_type === 'general'}
                      onChange={(e) => setForm({ ...form, message_type: e.target.value })}
                      className="sr-only"
                    />
                    Consulta general
                  </label>
                  <label className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                    form.message_type === 'prayer'
                      ? 'border-gold-500 bg-gold-500/20 text-white'
                      : 'border-white/10 bg-white/5 text-cream-100/70 hover:border-white/20'
                  }`}>
                    <input
                      type="radio"
                      name="message_type"
                      value="prayer"
                      checked={form.message_type === 'prayer'}
                      onChange={(e) => setForm({ ...form, message_type: e.target.value })}
                      className="sr-only"
                    />
                    Petición de oración
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-cream-100/80">Mensaje *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Escribe tu mensaje o petición de oración aquí..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold-600/20 transition-all hover:bg-gold-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
                ) : (
                  <><Send className="h-4 w-4" /> Enviar mensaje</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
