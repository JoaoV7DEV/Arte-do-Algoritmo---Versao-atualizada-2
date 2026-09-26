import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MessageCircle, ArrowRight, Instagram, Facebook, Sparkles, MapPin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const FinalCta: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#18181B] relative overflow-hidden border-t border-white/[0.04]">
      {/* Dynamic Background Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#00FFFF]/08 via-[#B847C9]/06 to-[#E71870]/08 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal>
          <div className="p-6 sm:p-14 rounded-2xl sm:rounded-3xl bg-white/[0.025] border border-white/[0.08] shadow-2xl backdrop-blur-none sm:backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] sm:text-xs font-mono text-cyan-300 mb-6 text-center max-w-full">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate sm:whitespace-normal">VAMOS CONSTRUIR SUA PRÓXIMA FASE DIGITAL?</span>
            </div>

            <h2
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6 text-2xl sm:text-[41px]"
            >
              Vamos transformar sua ideia em uma presença digital que faz sentido para o seu negócio.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Seja para criar um site sob medida, reformular sua identidade visual ou lançar uma landing page de alta conversão. Fale diretamente no WhatsApp e receba um atendimento transparente.
            </p>

            {/* Pricing Highlight Box */}
            <div className="inline-block px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-gray-300 font-medium mb-9">
              <span className="text-emerald-400 font-bold">Investimento sob medida: </span>
              <span>{AGENCY_INFO.pricingNote}</span>
            </div>

            {/* Main Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="final-whatsapp-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-extrabold text-base shadow-[0_0_24px_rgba(0,255,255,0.3)] hover:shadow-[0_0_36px_rgba(0,255,255,0.5)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Fale no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Contact Details & Socials */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-7 border-t border-white/[0.06] text-xs sm:text-sm text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00FFFF]" />
                <span>{AGENCY_INFO.locationDisplay}</span>
              </div>

              <span className="text-gray-600 hidden sm:inline">•</span>

              <a
                href={AGENCY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#E71870] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{AGENCY_INFO.instagramHandle}</span>
              </a>

              <span className="text-gray-600 hidden sm:inline">•</span>

              <a
                href={AGENCY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#00FFFF] transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>{AGENCY_INFO.facebookHandle}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
