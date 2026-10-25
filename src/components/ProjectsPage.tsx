import React, { useState, useEffect } from 'react';
import { Sparkles, Layers, Globe, Palette, FileImage, MessageSquare, ArrowRight, TrendingUp } from 'lucide-react';
import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { Mob3lPortfolioCard } from './Mob3lPortfolioCard';
import { CaseResultsSection } from './CaseResultsSection';
import { LogosPortfolioSection } from './LogosPortfolioSection';
import { SocialProfilesPortfolioSection } from './SocialProfilesPortfolioSection';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';

type PortfolioCategory = 'todos' | 'resultados' | 'sites' | 'identidade' | 'design-grafico' | 'redes-sociais';

interface ProjectsPageProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
  initialAnchor?: string;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, initialAnchor }) => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('todos');

  // Handle hash anchors from external pages (e.g. /projetos#case-trafego-pago or #case-google-meu-negocio)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') || initialAnchor;
      if (
        hash === 'case-google-meu-negocio' ||
        hash === 'case-trafego-pago' ||
        hash === 'case-identidade-visual' ||
        hash === 'galeria-redes-sociais'
      ) {
        setActiveFilter('todos');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 120);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [initialAnchor]);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#272727] text-white">
      {/* Top Page Header */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#18181B] via-[#272727] to-[#272727] border-b border-white/5 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FFFF] mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFÓLIO COMPLETO • ARTE DO ALGORITMO</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Portfólio & Projetos
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Conheça nossa seleção de plataformas web sob medida, identidades visuais marcantes, materiais corporativos e peças para redes sociais desenvolvidas com rigor estético e técnico.
          </p>

          {/* Quick Filter Tabs matching requested categories */}
          <div className="relative max-w-full lg:max-w-5xl mx-auto">
            {/* Subtle edge fades for mobile scroll */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-r from-[#272727] to-transparent lg:hidden z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-l from-[#272727] to-transparent lg:hidden z-10" />

            <div
              className="flex items-center overflow-x-auto scrollbar-none snap-x snap-mandatory flex-nowrap justify-start lg:justify-center gap-2 sm:gap-2.5 lg:gap-3 px-4 sm:px-6 lg:px-0 py-1"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              <button
                onClick={() => setActiveFilter('todos')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 snap-start whitespace-nowrap ${
                  activeFilter === 'todos'
                    ? 'bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Layers className="w-4 h-4 shrink-0" />
                <span>Todos</span>
              </button>

              <button
                onClick={() => setActiveFilter('resultados')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 snap-start whitespace-nowrap ${
                  activeFilter === 'resultados'
                    ? 'bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <TrendingUp className="w-4 h-4 shrink-0" />
                <span>Resultados</span>
              </button>

              <button
                onClick={() => setActiveFilter('sites')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 snap-start whitespace-nowrap ${
                  activeFilter === 'sites'
                    ? 'bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Globe className="w-4 h-4 shrink-0" />
                <span>Sites</span>
              </button>

              <button
                onClick={() => setActiveFilter('identidade')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 snap-start whitespace-nowrap ${
                  activeFilter === 'identidade'
                    ? 'bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Palette className="w-4 h-4 shrink-0" />
                <span>Identidade Visual</span>
              </button>

              <button
                onClick={() => setActiveFilter('design-grafico')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 snap-start whitespace-nowrap ${
                  activeFilter === 'design-grafico'
                    ? 'bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <FileImage className="w-4 h-4 shrink-0" />
                <span>Design Gráfico</span>
              </button>

              <button
                onClick={() => setActiveFilter('redes-sociais')}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shrink-0 snap-start whitespace-nowrap ${
                  activeFilter === 'redes-sociais'
                    ? 'bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] shadow-[0_0_20px_rgba(0,255,255,0.3)]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>Redes Sociais</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Areas based on Filter */}
      <main className="space-y-16">
        {/* Flagship Case Study: 01S Mobilidade (Visible on Todos, Sites, or Identidade) */}
        {(activeFilter === 'todos' || activeFilter === 'sites' || activeFilter === 'identidade') && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedCaseStudy onNavigate={onNavigate} />
          </div>
        )}

        {/* Level 2 Portfolio Card: MOB3L (Visible across Todos, Sites, Identidade) */}
        {(activeFilter === 'todos' ||
          activeFilter === 'sites' ||
          activeFilter === 'identidade') && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Mob3lPortfolioCard activeFilter={activeFilter} onNavigate={onNavigate} />
          </div>
        )}

        {/* TASK 1: Cases de Resultado (Google Meu Negócio + Tráfego Pago) */}
        {(activeFilter === 'todos' || activeFilter === 'resultados') && (
          <div>
            <CaseResultsSection onNavigate={onNavigate} />
          </div>
        )}

        {/* Block A: Logotipos e identidade visual (Visible on Todos, Identidade Visual, or Design Gráfico) */}
        {(activeFilter === 'todos' || activeFilter === 'identidade' || activeFilter === 'design-grafico') && (
          <div>
            <LogosPortfolioSection onNavigate={onNavigate} />
          </div>
        )}

        {/* Block B: Identidade visual em perfis do Instagram (Visible on Todos or Redes Sociais) */}
        {(activeFilter === 'todos' || activeFilter === 'redes-sociais') && (
          <div>
            <SocialProfilesPortfolioSection onNavigate={onNavigate} />
          </div>
        )}

        {/* Project Request Bottom Banner */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#18181B] to-black border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="text-xs uppercase font-mono text-[#00FFFF] font-semibold tracking-wider block mb-2">
                PROJETO SOB MEDIDA
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Gostou do nosso portfólio?
              </h3>
              <p className="text-gray-300 text-sm mt-2 max-w-xl">
                Podemos desenvolver uma presença digital no mesmo nível de excelência para a sua empresa, com investimento justo e prazos cumpridos.
              </p>
            </div>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105 shrink-0"
            >
              <span>Fale no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
