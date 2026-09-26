import React, { useState } from 'react';
import { WEBSITE_GALLERY, AGENCY_INFO } from '../data/agencyData';
import { WebsiteProject } from '../types';
import { ProjectModal } from './ProjectModal';
import {
  ExternalLink,
  Eye,
  Maximize2,
  MousePointer,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

export const WebsiteGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [selectedProject, setSelectedProject] = useState<WebsiteProject | null>(null);
  const [scrollingCardId, setScrollingCardId] = useState<string | null>(null);

  const categories = ['TODOS', 'SITE INSTITUCIONAL'];

  const filteredProjects =
    selectedCategory === 'TODOS'
      ? WEBSITE_GALLERY
      : WEBSITE_GALLERY.filter((p) => p.category === selectedCategory);

  const toggleScrollMobile = (id: string) => {
    setScrollingCardId(scrollingCardId === id ? null : id);
  };

  return (
    <section id="portfolio-web" className="py-24 bg-[#1F1F23] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00FFFF] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFÓLIO WEB REAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sites Institucionais de Alta Performance
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">
            Plataformas digitais reais desenvolvidas sob medida, com identidade marcante, arquitetura responsiva e foco em conversão e autoridade.
          </p>

          {/* Interactive Hint */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 mt-4 font-mono">
            <MousePointer className="w-3.5 h-3.5 animate-bounce" />
            <span>Passe o mouse no card para rolar a página verticalmente</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00FFFF] text-[#18181B] shadow-[0_0_15px_rgba(0,255,255,0.3)]'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isMobileScrolled = scrollingCardId === project.id;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-2xl bg-[#18181B] border border-white/10 hover:border-[#00FFFF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Top Browser Bar Mockup */}
                <div className="px-4 py-3 bg-[#121214] border-b border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-[11px] text-gray-400 truncate max-w-[170px]">
                    {project.liveUrl ? 'mob3l.com.br' : '01S Mobilidade'}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                      project.id === '01s-mobilidade'
                        ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30'
                        : 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30'
                    }`}
                  >
                    {project.statusBadge}
                  </span>
                </div>

                {/* Real Long Web Page Viewport with Interactive Smooth Vertical Scroll on Hover */}
                <div
                  className="relative h-72 sm:h-80 overflow-hidden bg-[#121214] cursor-pointer"
                  onClick={() => toggleScrollMobile(project.id)}
                >
                  {project.fullScreenshotUrl ? (
                    <img
                      src={project.fullScreenshotUrl}
                      onError={(e) => {
                        if (project.id === '01s-mobilidade') {
                          e.currentTarget.src = "/portfolio/sites/01s-mobilidade-completo.png";
                        } else if (project.id === 'mob3l') {
                          e.currentTarget.src = "/portfolio/sites/Screenshot -  Site Pagina Inicial - MOB3L.png";
                        }
                      }}
                      alt={project.altText}
                      className={`w-full object-cover object-top transition-transform duration-[2000ms] ease-out group-hover:duration-[28000ms] group-hover:ease-linear ${
                        isMobileScrolled
                          ? '-translate-y-[calc(100%-18rem)] sm:-translate-y-[calc(100%-20rem)] duration-[28000ms] ease-linear'
                          : 'group-hover:-translate-y-[calc(100%-18rem)] sm:group-hover:-translate-y-[calc(100%-20rem)]'
                      }`}
                    />
                  ) : null}

                  {/* Subtle fade overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#18181B] to-transparent pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity" />

                  {/* Badges and overlay buttons */}
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-2">
                    {project.isFlagship && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[10px] font-bold">
                        <ShieldCheck className="w-3 h-3 text-[#00FFFF]" />
                        DESTAQUE
                      </span>
                    )}
                  </div>

                  <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleScrollMobile(project.id);
                      }}
                      className="md:hidden px-2.5 py-1 rounded-lg bg-black/80 text-[10px] font-mono text-cyan-300 border border-white/10 backdrop-blur-sm"
                    >
                      {isMobileScrolled ? 'Voltar' : 'Rolar'}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="p-1.5 rounded-lg bg-black/70 hover:bg-black text-gray-300 hover:text-white border border-white/10 backdrop-blur-sm"
                      title="Ver detalhes completos"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 z-10 pointer-events-none">
                    <span className="text-[10px] font-mono text-gray-300 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 opacity-90 group-hover:opacity-0 transition-opacity">
                      Passe o mouse para rolar
                    </span>
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono font-semibold text-[#00FFFF] uppercase">
                            {project.type || project.category}
                          </span>
                          <span className="text-gray-500 text-xs">•</span>
                          <span className="text-[11px] text-gray-400 font-mono">{project.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">{project.segment || project.niche}</p>
                      </div>

                      {project.logoUrl && (
                        <img
                          src={project.logoUrl}
                          onError={(e) => {
                            if (project.id === '01s-mobilidade') {
                              e.currentTarget.src = "/portfolio/sites/Logo Completo - OFICIAL - FORMATO HORIZONTAL-COM GRADIENTE - NOME BRANCO.png";
                            } else if (project.id === 'mob3l') {
                              e.currentTarget.src = "/portfolio/sites/MB brancoeamarelo.png";
                            }
                          }}
                          alt={`Logotipo da ${project.title}`}
                          className="h-8 w-auto max-w-[100px] object-contain shrink-0 p-1 bg-white/5 rounded-lg border border-white/10"
                        />
                      )}
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Deliverables snippet */}
                    {project.deliverables && project.deliverables.length > 0 && (
                      <div className="space-y-1.5 mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        {project.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFFF] shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#00FFFF]" />
                      <span>Ver Estrutura</span>
                    </button>

                    <div className="flex items-center gap-3">
                      {project.hasLiveLink && project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 flex items-center gap-1.5 transition-colors"
                        >
                          <span>Visitar site</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      <a
                        href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
                          `Olá João! Gostaria de fazer um projeto com o padrão de ${project.title} (${project.segment || project.niche}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#00FFFF] hover:underline flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Falar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
