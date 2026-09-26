import React, { useState } from 'react';
import {
  Maximize2,
  CheckCircle2,
  MousePointer,
  Quote,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { FLAGSHIP_PROJECT, AGENCY_INFO } from '../data/agencyData';
import { ZeroOneCaseButton } from './ZeroOneCaseButton';
import { PageView } from './Navbar';

interface FeaturedCaseStudyProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

export const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({ onNavigate }) => {
  const [isSiteScrolled, setIsSiteScrolled] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleOpenCase = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate('projeto-01s');
    } else {
      window.history.pushState(null, '', '/projetos/01s-mobilidade');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="case-01s" className="w-full my-8">
      {/* Section Header */}
      <div className="border-b border-white/10 pb-4 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-[#4EA238] tracking-wider uppercase font-semibold">
              CASE SELECIONADO • 01S MOBILIDADE
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4EA238] animate-pulse" />
              Identidade & Site Desenvolvidos
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            01S Mobilidade Urbana
          </h3>
        </div>
        <p className="text-sm text-gray-400 max-w-md text-left sm:text-right">
          Do Rebranding à Plataforma Web Completa: Construindo uma marca de autoridade no transporte de passageiros.
        </p>
      </div>

      {/* Level 2 Medium-Depth Card Structure */}
      <div className="rounded-3xl bg-[#141416] border border-white/10 hover:border-[#4EA238]/40 transition-all duration-300 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Left Column: Browser Mockup with Desktop Hover-Scroll & Mobile Touch-Scroll (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0F0F12]">
          {/* Browser Top Chrome Bar */}
          <div className="px-4 py-3 bg-[#18181B] border-b border-white/10 flex items-center justify-between text-xs font-mono shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="px-3 py-1 rounded-md bg-black/50 border border-white/10 text-gray-300 text-[11px] font-mono flex items-center gap-2 max-w-[240px] truncate">
              <span className="w-2 h-2 rounded-full bg-[#4EA238] animate-pulse" />
              <span>01smobilidade.com.br</span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
              PROJETO COMPLETO
            </span>
          </div>

          {/* VIEWPORT 1: MOBILE VIEW (Manual touch swipe scroll) */}
          <div className="lg:hidden relative h-[360px] sm:h-[400px] overflow-y-auto bg-[#121214] select-none scrollbar-thin scrollbar-thumb-emerald-500/30 scrollbar-track-black/40">
            <img
              src="/portfolio/sites/01s-mobilidade-completo.png"
              onError={(e) => {
                e.currentTarget.src =
                  '/portfolio/sites/screenshort da pagina inicial do site 01smobilidade-1.png';
              }}
              alt="Captura real da Página Inicial completa da 01S Mobilidade"
              className="w-full h-auto object-contain object-top"
            />

            {/* Top Badges */}
            <div className="sticky top-3 left-3 z-10 float-left pl-3 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-white font-mono text-[10px] font-semibold shadow-lg">
                SITE COMPLETO
              </span>
            </div>

            {/* Floating Prompt for Mobile Touch Scroll */}
            <div className="sticky bottom-3 right-3 z-10 float-right pr-3 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-gray-200 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#4EA238]/30 shadow-lg">
                <MousePointer className="w-3 h-3 text-[#4EA238] animate-bounce" />
                <span>Deslize para rolar o site</span>
              </span>
            </div>
          </div>

          {/* VIEWPORT 2: DESKTOP VIEW (Framed fold at rest, slow automatic glide on mouse hover) */}
          <div
            className="hidden lg:block relative h-[420px] overflow-hidden bg-[#121214] cursor-pointer group select-none"
            onMouseEnter={() => setIsSiteScrolled(true)}
            onMouseLeave={() => setIsSiteScrolled(false)}
            onClick={() => setIsSiteScrolled(!isSiteScrolled)}
          >
            <img
              src="/portfolio/sites/01s-mobilidade-completo.png"
              onError={(e) => {
                e.currentTarget.src =
                  '/portfolio/sites/screenshort da pagina inicial do site 01smobilidade-1.png';
              }}
              alt="Captura real da Página Inicial completa da 01S Mobilidade"
              className="w-full object-cover object-top"
              style={{
                transform: isSiteScrolled
                  ? 'translateY(calc(-100% + 420px))'
                  : 'translateY(0%)',
                transition: isSiteScrolled
                  ? 'transform 26000ms linear'
                  : 'transform 2500ms ease-out'
              }}
            />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white font-mono text-[11px] font-semibold shadow-lg">
                SITE COMPLETO
              </span>
            </div>

            <div className="absolute top-3 right-3 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxOpen(true);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-gray-200 hover:text-white border border-white/15 text-xs transition-colors backdrop-blur-sm shadow-md"
                title="Abrir imagem completa em tela cheia"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#4EA238]" />
                <span className="text-[11px] font-mono">Ver ampliado</span>
              </button>
            </div>

            {/* Scroll Helper Prompt */}
            <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-200 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-lg group-hover:opacity-0 transition-opacity">
                <MousePointer className="w-3.5 h-3.5 text-[#4EA238] animate-bounce" />
                <span>Passe o mouse para rolar o site</span>
              </span>
            </div>
          </div>

          {/* Mockup Bottom Status Bar */}
          <div className="px-4 py-3 bg-[#101012] border-t border-white/10 flex items-center justify-between text-xs text-gray-400 shrink-0">
            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#4EA238]" />
              <span className="text-gray-300">Página Inicial Oficial • 01S Mobilidade</span>
            </div>

            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#4EA238] hover:text-emerald-300 transition-colors"
            >
              <Maximize2 className="w-3 h-3" />
              <span>Ver captura completa</span>
            </button>
          </div>
        </div>

        {/* Right Column: Information, Entregáveis & Actions (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#141416]">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="h-10 sm:h-11 px-2 py-1 rounded-lg bg-black border border-white/10 inline-flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src="/portfolio/sites/01s-mobilidade-logo.png"
                  alt="Logo 01S Mobilidade"
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-xs font-mono text-gray-400">Três Lagoas / MS</span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">Plataforma 01S Mobilidade</h4>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Rebranding estratégico e plataforma web institucional para consolidar a transição da marca,
                transmitir autoridade aos passageiros e viabilizar o credenciamento de condutores parceiros.
              </p>
            </div>

            {/* Key Deliverables List (Entregáveis Realizados) */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                Entregáveis Realizados:
              </span>
              <ul className="space-y-2 text-xs text-gray-300">
                {FLAGSHIP_PROJECT.deliverables?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4EA238] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Robson Verified Client Feedback Quote (Kept exactly as-is) */}
            <div className="p-4 rounded-xl bg-[#1A1A1E] border border-[#4EA238]/20 text-xs text-gray-300 relative">
              <Quote className="w-5 h-5 text-[#4EA238]/30 absolute top-3 right-3" />
              <p className="italic leading-relaxed">
                &ldquo;João, obrigado por tudo. Você é um grande profissional. É bom saber que na minha Bahia tem gente como você, competente.&rdquo;
              </p>
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="text-[#4EA238] font-semibold">— Robson • 01S Mobilidade</span>
                <span className="text-gray-500">Print Real Comprovado</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions: "Ver case completo" (Primary with hover preview & mobile pulse) */}
          <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
            <ZeroOneCaseButton
              id="btn-ver-case-01s-portfolio"
              href="/projetos/01s-mobilidade"
              onClick={handleOpenCase}
              className="w-full sm:flex-1"
            />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#18181B] rounded-2xl border border-white/15 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 bg-[#121214] border-b border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">Print Real • 01S Mobilidade</p>
                <p className="text-[11px] text-gray-400 font-mono">Página Inicial Oficial Completa</p>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Fechar"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 bg-black/70 overflow-y-auto custom-scrollbar flex-1">
              <img
                src="/portfolio/sites/01s-mobilidade-completo.png"
                alt="Captura real da Página Inicial da 01S Mobilidade"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
