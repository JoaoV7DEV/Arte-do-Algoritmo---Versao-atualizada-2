import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MessageCircle, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { HeroBackground } from './HeroBackground';

interface HeroProps {
  onViewProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProjects }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] sm:min-h-screen pt-24 pb-12 sm:pt-32 sm:pb-20 flex items-center justify-center bg-[#18181B] overflow-hidden"
    >
      {/* Dynamic, interactive, and brand-inspired Hero Background */}
      <HeroBackground />

      <div className="relative w-full max-w-5xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        {/* City & Badge Tag */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20, scale: isMobile ? 1 : 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: isMobile ? 0.35 : 0.75, ease: isMobile ? [0.25, 1, 0.5, 1] : [0.22, 1, 0.36, 1] }}
          id="hero-badge"
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-300 text-[11px] sm:text-sm mb-4 sm:mb-6 backdrop-blur-sm shadow-sm max-w-full"
        >
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFFF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFFF]"></span>
          </span>
          <MapPin className="w-3.5 h-3.5 text-[#00FFFF] shrink-0" />
          <span className="shrink-0">Salvador, Bahia</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-400 truncate sm:whitespace-normal">Atendimento para todo o Brasil</span>
        </motion.div>

        {/* Main Headline - Mobile: breathable, large & bold; Desktop: exactly 2 lines format with Poppins */}
        <motion.h1
          initial={{ opacity: 0, y: isMobile ? 12 : 28, scale: isMobile ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: isMobile ? 0.4 : 0.85, delay: isMobile ? 0.05 : 0.12, ease: isMobile ? [0.25, 1, 0.5, 1] : [0.22, 1, 0.36, 1] }}
          id="hero-headline"
          className="w-full max-w-5xl mx-auto text-center mb-4 sm:mb-6 font-['Poppins',sans-serif]"
        >
          {/* Mobile view: high impact, breathable typography, no cramped boxes */}
          <div className="block sm:hidden text-center px-0.5">
            <span
              className="block font-bold text-white text-[28px] min-[370px]:text-[31px] leading-[1.2] tracking-tight font-['Poppins',sans-serif]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}
            >
              Design, tecnologia e estratégia
            </span>
            <span
              className="block mt-1.5 font-bold text-[28px] min-[370px]:text-[31px] leading-[1.2] tracking-tight font-['Poppins',sans-serif]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}
            >
              <span className="text-white">para </span>
              <span className="text-brand-gradient font-['Poppins',sans-serif]">
                fortalecer sua presença digital
              </span>
            </span>
          </div>

          {/* Desktop view: strictly 2 lines format */}
          <div className="hidden sm:block tracking-[-0.03em] text-white leading-[1.16]">
            <span
              className="block whitespace-nowrap font-['Poppins',sans-serif] font-bold text-5xl lg:text-[55px]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}
            >
              Design, tecnologia e estratégia
            </span>
            <span
              className="block mt-2 whitespace-nowrap font-['Poppins',sans-serif] font-bold text-5xl lg:text-[55px]"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}
            >
              para{' '}
              <span
                className="text-brand-gradient font-['Poppins',sans-serif] text-5xl lg:text-[55px]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                fortalecer sua presença digital
              </span>
            </span>
          </div>
        </motion.h1>

        {/* Subheadline with clear value proposition & comfortable line-length */}
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 10 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.85, delay: isMobile ? 0.08 : 0.24, ease: isMobile ? [0.25, 1, 0.5, 1] : [0.22, 1, 0.36, 1] }}
          id="hero-subheadline"
          className="w-full max-w-[520px] sm:max-w-[686px] text-[14px] sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-9 font-normal mx-auto px-1"
        >
          Unimos a sensibilidade estética do design com a robustez dos sistemas web modernos. Criamos sites de alta conversão, marcas memoráveis e soluções sob medida para impulsionar seu negócio.
        </motion.p>

        {/* Action Buttons: Unified Button System */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.85, delay: isMobile ? 0.12 : 0.36, ease: isMobile ? [0.25, 1, 0.5, 1] : [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 w-full max-w-[320px] sm:max-w-none mb-7 sm:mb-10"
        >
          {/* Primary WhatsApp CTA */}
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-primary-cta"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-extrabold text-sm sm:text-base shadow-[0_0_24px_rgba(0,255,255,0.25)] hover:shadow-[0_0_36px_rgba(0,255,255,0.5)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>Fale no WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary Portfolio CTA */}
          <a
            href="/projetos"
            onClick={(e) => {
              if (onViewProjects) {
                e.preventDefault();
                onViewProjects();
              }
            }}
            id="hero-secondary-cta"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-sm sm:text-base border border-white/[0.08] hover:border-white/[0.18] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>Ver portfólio completo</span>
          </a>
        </motion.div>

        {/* Highlights Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isMobile ? 0.4 : 0.6, delay: isMobile ? 0.16 : 0.4 }}
          className="flex flex-wrap items-center justify-center gap-y-2.5 gap-x-3 sm:gap-6 pt-5 sm:pt-6 border-t border-white/[0.06] text-xs sm:text-sm text-gray-400 w-full"
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0" />
            <span className="text-gray-300">Sites Sob Medida</span>
          </div>
          <span className="hidden sm:inline text-gray-600">•</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#E71870] shrink-0" />
            <span className="text-gray-300">Identidade Visual Completa</span>
          </div>
          <span className="hidden sm:inline text-gray-600">•</span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-gray-300">Contato Direto Sem Intermediários</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

