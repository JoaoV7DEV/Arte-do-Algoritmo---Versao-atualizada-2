import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, ExternalLink, Maximize2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ProjectModal } from './ProjectModal';
import { Mob3lCaseButton } from './Mob3lCaseButton';
import { ZeroOneCaseButton } from './ZeroOneCaseButton';
import { WEBSITE_GALLERY } from '../data/agencyData';
import { WebsiteProject } from '../types';

interface FeaturedProjectsPreviewProps {
  onViewAllProjects: () => void;
  onViewMob3lCase?: () => void;
  onView01sCase?: () => void;
}

export const FeaturedProjectsPreview: React.FC<FeaturedProjectsPreviewProps> = ({
  onViewAllProjects,
  onViewMob3lCase,
  onView01sCase,
}) => {
  const [scrollActive01s, setScrollActive01s] = useState(false);
  const [scrollActiveMob3l, setScrollActiveMob3l] = useState(false);
  const [selectedProject, setSelectedProject] = useState<WebsiteProject | null>(null);

  const mob3lProject = WEBSITE_GALLERY.find((p) => p.id === 'mob3l') || null;
  const flagshipProject = WEBSITE_GALLERY.find((p) => p.id === '01s-mobilidade') || null;

  return (
    <section id="projetos-destaque" className="py-24 bg-[#1F1F23] border-t border-white/[0.04] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00FFFF] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CASES REAIS SELECIONADOS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Projetos em Destaque
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Cases desenvolvidos com rigor técnico, identidade marcante e foco em resultados reais para os clientes.
              </p>
            </div>

            <button
              onClick={onViewAllProjects}
              id="btn-ver-todos-projetos-top"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.18] text-white font-semibold text-sm transition-all duration-200 group self-start md:self-auto"
            >
              <span>Ver portfólio completo</span>
              <ArrowRight className="w-4 h-4 text-[#00FFFF] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </ScrollReveal>

        {/* 2 Real Featured Project Cards Grid: 01S Mobilidade (Primary) + MOB3L */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14 items-start">
          {/* Featured Case 1: 01S Mobilidade (Level 1: Short Teaser) */}
          <ScrollReveal delay={0.1} className="w-full">
            <div className="group rounded-2xl bg-[#18181B] border border-[#4EA238]/30 hover:border-[#4EA238]/60 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(78,162,56,0.15)] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative">
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#4EA238] to-transparent opacity-80" />

              <div>
                {/* Browser Frame */}
                <div className="bg-[#141416] px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-3 py-0.5 rounded-full border border-emerald-500/30">
                    Identidade Visual & Site Desenvolvidos
                  </span>
                </div>

                {/* Long Page Capture with Hover-Scroll Effect */}
                <div
                  className="relative h-72 sm:h-80 overflow-hidden bg-[#121214] border-b border-white/[0.06] cursor-pointer"
                  onClick={() => setScrollActive01s(!scrollActive01s)}
                >
                  <img
                    src="/portfolio/sites/01s-mobilidade-completo.png"
                    onError={(e) => {
                      e.currentTarget.src = "/portfolio/sites/screenshort da pagina inicial do site 01smobilidade.png";
                    }}
                    alt="Página inicial do site institucional da 01S Mobilidade"
                    className={`w-full object-cover object-top transition-transform duration-[2000ms] ease-out group-hover:duration-[26000ms] group-hover:ease-linear ${
                      scrollActive01s
                        ? '-translate-y-[calc(100%-18rem)] sm:-translate-y-[calc(100%-20rem)] duration-[26000ms] ease-linear'
                        : 'group-hover:-translate-y-[calc(100%-18rem)] sm:group-hover:-translate-y-[calc(100%-20rem)]'
                    }`}
                  />
                  {/* Subtle fade overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#18181B] to-transparent pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity" />

                  {/* Badges overlaid */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#4EA238]/40 text-emerald-300 font-mono text-[11px] font-bold shadow-lg">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#4EA238]" />
                      CASE PRINCIPAL
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (flagshipProject) setSelectedProject(flagshipProject);
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 hover:bg-black text-gray-300 hover:text-white border border-white/15 text-xs transition-colors backdrop-blur-sm shadow-md"
                      title="Abrir pop-up com captura completa"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#4EA238]" />
                      <span className="text-[11px] font-mono">Ver pop-up</span>
                    </button>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                    <span className="text-[10px] font-mono text-gray-300 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 opacity-90 group-hover:opacity-0 transition-opacity">
                      Passe o mouse para rolar o site
                    </span>
                  </div>
                </div>

                {/* Card Body (Level 1: Short Teaser) */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs text-[#4EA238] font-mono font-semibold uppercase tracking-wider">
                          Rebranding + Desenvolvimento de Site Completo
                        </span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-xs text-gray-400 font-mono">2026</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        01S Mobilidade
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Mobilidade urbana e transporte de passageiros
                      </p>
                    </div>

                    <img
                      src="/portfolio/sites/01s-mobilidade-logo.png"
                      onError={(e) => {
                        e.currentTarget.src = "/portfolio/sites/Logo Completo - OFICIAL - FORMATO HORIZONTAL-COM GRADIENTE - NOME BRANCO.png";
                      }}
                      alt="Logotipo oficial da 01S Mobilidade"
                      className="h-9 w-auto max-w-[120px] object-contain shrink-0 p-1 bg-white/5 rounded-lg border border-white/10"
                    />
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    Rebranding completo e desenvolvimento de plataforma web institucional para consolidar a nova fase da empresa no transporte de passageiros.
                  </p>
                </div>
              </div>

              {/* Action Button: Single "Ver case completo" linking directly to dedicated page */}
              <div className="p-6 pt-0">
                <ZeroOneCaseButton
                  id="btn-ver-case-01s-home"
                  href="/projetos/01s-mobilidade"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onView01sCase) {
                      onView01sCase();
                    } else {
                      window.history.pushState(null, '', '/projetos/01s-mobilidade');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="w-full"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Featured Case 2: MOB3L */}
          <ScrollReveal delay={0.2} className="w-full">
            <div className="group rounded-2xl bg-[#18181B] border border-white/[0.08] hover:border-white/[0.2] shadow-lg hover:shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative">
              <div>
                {/* Browser Frame */}
                <div className="bg-[#141416] px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-3 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Projeto Ativo
                  </span>
                </div>

                {/* Long Page Capture with Hover-Scroll Effect */}
                <div
                  className="relative h-72 sm:h-80 overflow-hidden bg-[#121214] border-b border-white/[0.06] cursor-pointer"
                  onClick={() => setScrollActiveMob3l(!scrollActiveMob3l)}
                >
                  <img
                    src="/portfolio/sites/mob3l-completo.png"
                    onError={(e) => {
                      e.currentTarget.src = "/portfolio/sites/Screenshot -  Site Pagina Inicial - MOB3L.png";
                    }}
                    alt="Página inicial do site institucional da MOB3L em Três Lagoas/MS"
                    className={`w-full object-cover object-top transition-transform duration-[2000ms] ease-out group-hover:duration-[30000ms] group-hover:ease-linear ${
                      scrollActiveMob3l
                        ? '-translate-y-[calc(100%-18rem)] sm:-translate-y-[calc(100%-20rem)] duration-[30000ms] ease-linear'
                        : 'group-hover:-translate-y-[calc(100%-18rem)] sm:group-hover:-translate-y-[calc(100%-20rem)]'
                    }`}
                  />
                  {/* Subtle fade overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#18181B] to-transparent pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity" />

                  {/* Badges overlaid */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white font-mono text-[11px] font-semibold shadow-lg">
                      SITE INSTITUCIONAL
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (mob3lProject) setSelectedProject(mob3lProject);
                      }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 hover:bg-black text-gray-300 hover:text-white border border-white/15 text-xs transition-colors backdrop-blur-sm shadow-md"
                      title="Abrir pop-up com captura completa"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-yellow-400" />
                      <span className="text-[11px] font-mono">Ver pop-up</span>
                    </button>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                    <span className="text-[10px] font-mono text-gray-300 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 opacity-90 group-hover:opacity-0 transition-opacity">
                      Passe o mouse para rolar o site
                    </span>
                  </div>
                </div>

                {/* Card Body (Level 1: Short Teaser) */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs text-yellow-400 font-mono font-semibold uppercase tracking-wider">
                          Plataforma Web & Presença Digital
                        </span>
                        <span className="text-gray-500 text-xs">•</span>
                        <span className="text-xs text-gray-400 font-mono">2025</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        MOB3L
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Mobilidade urbana, Três Lagoas/MS
                      </p>
                    </div>

                    <img
                      src="/portfolio/sites/mob3l-logo.png"
                      onError={(e) => {
                        e.currentTarget.src = "/portfolio/sites/MB brancoeamarelo.png";
                      }}
                      alt="Logotipo oficial da MOB3L"
                      className="h-9 w-auto max-w-[120px] object-contain shrink-0 p-1 bg-white/5 rounded-lg border border-white/10"
                    />
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    Desenvolvimento de site institucional e ecossistema de comunicação para aplicativo de mobilidade urbana em Três Lagoas/MS.
                  </p>
                </div>
              </div>

              {/* Actions: Primary "Ver case completo" (Direct to dedicated page with hover-preview and mobile inviting pulse) + Secondary "Visitar site" */}
              <div className="p-6 pt-0 flex flex-col sm:flex-row items-center gap-3">
                <Mob3lCaseButton
                  id="btn-ver-case-mob3l-home"
                  href="/projetos/mob3l"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onViewMob3lCase) {
                      onViewMob3lCase();
                    } else {
                      window.history.pushState(null, '', '/projetos/mob3l');
                      window.dispatchEvent(new PopStateEvent('popstate'));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:flex-1"
                />

                <a
                  href="https://mob3l.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white hover:text-yellow-300 font-semibold text-xs border border-white/[0.08] hover:border-yellow-500/30 transition-all flex items-center justify-center gap-1.5 shrink-0 min-h-[46px]"
                >
                  <span>Visitar site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Central Bottom Call to Action */}
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <button
              onClick={onViewAllProjects}
              id="btn-ver-todos-projetos-bottom"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-extrabold text-sm sm:text-base shadow-[0_0_24px_rgba(0,255,255,0.25)] hover:shadow-[0_0_35px_rgba(0,255,255,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Ver portfólio completo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Project Detail Pop-up Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
