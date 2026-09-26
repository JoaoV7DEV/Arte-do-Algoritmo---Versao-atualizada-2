import React, { useState } from 'react';
import { REAL_TESTIMONIALS } from '../data/agencyData';
import { TestimonialFeedback } from '../types';
import { ShieldCheck, Star, CheckCheck, Eye, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  const [selectedProof, setSelectedProof] = useState<TestimonialFeedback | null>(null);

  return (
    <section id="depoimentos" className="py-24 bg-[#1F1F23] border-t border-white/[0.04] relative overflow-hidden">
      {/* Subtle ambient lights */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00FFFF] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>FEEDBACKS REAIS DE CLIENTES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Palavra de Quem Confiou na Arte do Algoritmo
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2">
              Mensagens espontâneas recebidas de clientes reais após a entrega e os primeiros resultados de seus projetos.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Real Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_TESTIMONIALS.map((t, index) => {
            const isCyanAccent = index % 2 === 0;

            return (
              <ScrollReveal key={t.id} delay={index * 0.08} className="h-full">
                <div
                  className={`h-full rounded-2xl bg-[#18181B] border transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1 shadow-lg ${
                    isCyanAccent
                      ? 'border-white/[0.08] hover:border-[#00FFFF]/40 hover:shadow-[0_8px_30px_rgba(0,255,255,0.08)]'
                      : 'border-white/[0.08] hover:border-[#E71870]/40 hover:shadow-[0_8px_30px_rgba(231,24,112,0.08)]'
                  }`}
                >
                  <div>
                    {/* Top Row: Stars Rating & Verified Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {/* 5-Star Rating Icon */}
                      <div className="flex items-center gap-1" aria-label="Avaliação 5 estrelas">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 fill-current ${
                              isCyanAccent ? 'text-[#00FFFF]' : 'text-[#E71870]'
                            }`}
                          />
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <CheckCheck className="w-3 h-3" />
                        <span>Print Real</span>
                      </span>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-gray-200 text-sm leading-relaxed mb-6 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  {/* Author Info & Project */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-sm ${
                          isCyanAccent
                            ? 'bg-cyan-500/20 text-[#00FFFF] border border-cyan-500/30'
                            : 'bg-pink-500/20 text-[#E71870] border border-pink-500/30'
                        }`}
                      >
                        {t.avatarText || t.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white leading-tight">
                          {t.name.includes('•') ? t.name : `${t.name.replace(/^Cliente:\s*/i, '')} • ${t.project}`}
                        </h3>
                      </div>
                    </div>

                    {/* Proof preview trigger if feedback image exists */}
                    {t.feedbackImage && (
                      <button
                        onClick={() => setSelectedProof(t)}
                        className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/[0.06] transition-colors"
                        title="Ver print original"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Real Feedback Proof */}
      {selectedProof && selectedProof.feedbackImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProof(null)}
        >
          <div
            className="relative max-w-sm w-full bg-[#18181B] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 bg-[#141416] border-b border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {selectedProof.serviceType || selectedProof.project}
                </h4>
                <p className="text-[11px] text-gray-400 font-mono mt-0.5">
                  {selectedProof.name.includes('•')
                    ? selectedProof.name
                    : `${selectedProof.name.replace(/^Cliente:\s*/i, '')} • ${selectedProof.project}`}
                </p>
              </div>
              <button
                onClick={() => setSelectedProof(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3 bg-black flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={selectedProof.feedbackImage}
                alt={`Comprovante de feedback real de ${selectedProof.name}`}
                className="w-full h-auto rounded-lg object-contain max-h-[70vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
