import React, { useState } from 'react';
import {
  ExternalLink,
  Maximize2,
  CheckCircle2,
  Eye,
  MousePointer,
  Quote,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { WEBSITE_GALLERY } from '../data/agencyData';
import { ProjectModal } from './ProjectModal';
import { Mob3lCaseButton } from './Mob3lCaseButton';
import { WebsiteProject } from '../types';

interface Mob3lPortfolioCardProps {
  activeFilter?: string;
  onNavigate?: (page: 'home' | 'projetos' | 'sobre' | 'projeto-mob3l', anchor?: string) => void;
}

export const Mob3lPortfolioCard: React.FC<Mob3lPortfolioCardProps> = ({
  activeFilter = 'todos',
  onNavigate
}) => {
  const [selectedWebProject, setSelectedWebProject] = useState<WebsiteProject | null>(null);
  const [isSiteScrolled, setIsSiteScrolled] = useState(false);

  // Filter check: show on 'todos', 'sites', and 'identidade'
  const isVisible =
    activeFilter === 'todos' ||
    activeFilter === 'sites' ||
    activeFilter === 'identidade';

  if (!isVisible) return null;

  const mob3lWebProject = WEBSITE_GALLERY.find((p) => p.id === 'mob3l') || null;

  const handleOpenCase = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate('projeto-mob3l');
    } else {
      window.history.pushState(null, '', '/projetos/mob3l');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="mob3l-portfolio-card" className="w-full my-8">
      {/* Section Header */}
      <div className="border-b border-white/10 pb-4 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-yellow-400 tracking-wider uppercase font-semibold">
              CASE SELECIONADO • MOB3L
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Projeto Ativo
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            MOB3L Mobilidade Urbana
          </h3>
        </div>
        <p className="text-sm text-gray-400 max-w-md text-left sm:text-right">
          Plataforma web institucional, presença de marca e ecossistema de comunicação em Três Lagoas/MS.
        </p>
      </div>

      {/* Level 2 Medium-Depth Card Structure */}
      <div className="rounded-3xl bg-[#141416] border border-white/10 hover:border-yellow-500/40 transition-all duration-300 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Left Column: Browser Mockup with Desktop Hover-Scroll & Mobile Manual Touch-Scroll */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0F0F12]">
          {/* Browser Top Chrome Bar */}
          <div className="px-4 py-3 bg-[#18181B] border-b border-white/10 flex items-center justify-between text-xs font-mono shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="px-3 py-1 rounded-md bg-black/50 border border-white/10 text-gray-300 text-[11px] font-mono flex items-center gap-2 max-w-[240px] truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>mob3l.com.br</span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
              ONLINE
            </span>
          </div>

          {/* VIEWPORT 1: MOBILE VIEW (Manual touch swipe scroll) */}
          <div className="lg:hidden relative h-[360px] sm:h-[400px] overflow-y-auto bg-[#121214] select-none scrollbar-thin scrollbar-thumb-yellow-500/30 scrollbar-track-black/40">
            <img
              src="/portfolio/sites/mob3l-completo.png"
              onError={(e) => {
                e.currentTarget.src = "/portfolio/sites/Screenshot -  Site Pagina Inicial - MOB3L.png";
              }}
              alt="Captura real da Página Inicial completa do site MOB3L"
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
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-gray-200 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-yellow-500/30 shadow-lg">
                <MousePointer className="w-3 h-3 text-yellow-400 animate-bounce" />
                <span>Deslize para rolar o site</span>
              </span>
            </div>
          </div>

          {/* VIEWPORT 2: DESKTOP VIEW (Framed fold at rest, slow automatic glide on mouse hover) */}
          <div
            className="hidden lg:block relative h-[400px] overflow-hidden bg-[#121214] cursor-pointer group select-none"
            onMouseEnter={() => setIsSiteScrolled(true)}
            onMouseLeave={() => setIsSiteScrolled(false)}
            onClick={() => setIsSiteScrolled(!isSiteScrolled)}
          >
            <img
              src="/portfolio/sites/mob3l-completo.png"
              onError={(e) => {
                e.currentTarget.src = "/portfolio/sites/Screenshot -  Site Pagina Inicial - MOB3L.png";
              }}
              alt="Captura real da Página Inicial completa do site MOB3L"
              className="w-full object-cover object-top"
              style={{
                transform: isSiteScrolled
                  ? 'translateY(calc(-100% + 400px))'
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
                  if (mob3lWebProject) setSelectedWebProject(mob3lWebProject);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-gray-200 hover:text-white border border-white/15 text-xs transition-colors backdrop-blur-sm shadow-md"
                title="Abrir pop-up com captura completa"
              >
                <Maximize2 className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-[11px] font-mono">Ver ampliado</span>
              </button>
            </div>

            {/* Scroll Helper Prompt */}
            <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-200 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-lg group-hover:opacity-0 transition-opacity">
                <MousePointer className="w-3.5 h-3.5 text-yellow-400 animate-bounce" />
                <span>Passe o mouse para rolar o site</span>
              </span>
            </div>
          </div>

          {/* Mockup Bottom Status Bar */}
          <div className="px-4 py-3 bg-[#101012] border-t border-white/10 flex items-center justify-between text-xs text-gray-400 shrink-0">
            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-gray-300">Página Inicial Oficial • mob3l.com.br</span>
            </div>

            <button
              onClick={() => {
                if (mob3lWebProject) setSelectedWebProject(mob3lWebProject);
              }}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              <Maximize2 className="w-3 h-3" />
              <span>Ver pop-up completo</span>
            </button>
          </div>
        </div>

        {/* Right Column: Information, Deliverables & Actions (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#141416]">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="h-10 sm:h-11 px-2 py-1 rounded-lg bg-black border border-white/10 inline-flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src="/portfolio/sites/mob3l-logo.png"
                  alt="Logo MOB3L"
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-xs font-mono text-gray-400">Três Lagoas / MS</span>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white">Plataforma MOB3L</h4>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                Interface digital estruturada para demonstrar credibilidade, facilitar o download do app e
                orientar condutores locais para o formulário de credenciamento.
              </p>
            </div>

            {/* Key Deliverables List */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                Entregáveis Realizados:
              </span>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>Layout 100% responsivo com velocidade de carregamento otimizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>Área direcionada com benefícios para passageiros e links para lojas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>Módulo de credenciamento para motoristas parceiros</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span>Integração de canais de suporte humanizado via WhatsApp</span>
                </li>
              </ul>
            </div>

            {/* Real Verified Client Feedback Quote */}
            <div className="p-4 rounded-xl bg-[#1A1A1E] border border-yellow-500/20 text-xs text-gray-300 relative">
              <Quote className="w-5 h-5 text-yellow-500/30 absolute top-3 right-3" />
              <p className="italic leading-relaxed">
                &ldquo;O Google mandou um e-mail parabenizando os acessos, em menos de 1 mês tantas views lá. Seu trabalho é muito profissional, João! Meu irmão é da área e elogiou pra caramba!&rdquo;
              </p>
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="text-yellow-400 font-semibold">— Junior • MOB3L</span>
                <span className="text-gray-500">Print Real Comprovado</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions: "Ver case completo" (Primary with hover preview & mobile pulse) + "Visitar site" (Secondary) */}
          <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
            <Mob3lCaseButton
              id="btn-ver-case-mob3l-portfolio"
              href="/projetos/mob3l"
              onClick={handleOpenCase}
              className="w-full sm:flex-1"
            />

            <a
              href="https://mob3l.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white hover:text-yellow-300 font-semibold text-xs border border-white/10 hover:border-yellow-500/30 transition-all flex items-center justify-center gap-1.5 shrink-0 min-h-[46px]"
            >
              <span>Visitar site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Web Project Full Preview Modal */}
      <ProjectModal
        project={selectedWebProject}
        onClose={() => setSelectedWebProject(null)}
      />
    </section>
  );
};
