import React from 'react';
import { WebsiteProject } from '../types';
import { AGENCY_INFO } from '../data/agencyData';
import { X, ExternalLink, Check, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: WebsiteProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#18181B] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#272727] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
                alt={project.title}
                className="h-7 w-auto max-w-[90px] object-contain p-0.5 bg-white/5 rounded border border-white/10"
              />
            )}
            <div>
              <span className="text-xs font-mono font-semibold text-[#00FFFF] uppercase">
                {project.type || project.category}
              </span>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
          {/* Status & Segment */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 text-xs font-mono border border-cyan-500/30">
              {project.statusBadge}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-mono border border-white/5">
              Ano: {project.year}
            </span>
            {project.segment && (
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-mono border border-white/5">
                {project.segment}
              </span>
            )}
          </div>

          {/* Project Details */}
          <div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
                Entregáveis Realizados
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00FFFF] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Real Full Capture Image Preview */}
          {project.fullScreenshotUrl && (
            <div className="rounded-2xl bg-[#0F172A] border border-white/10 overflow-hidden shadow-inner">
              <div className="px-4 py-2.5 bg-black/40 border-b border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-gray-400 font-mono">Captura Completa da Página</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.fullScreenshotUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white flex items-center gap-1 text-[11px] hover:underline"
                  >
                    <span>Ver captura ampliada</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  {project.hasLiveLink && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <span>Abrir site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <div className="max-h-[500px] overflow-y-auto bg-[#121214] p-2 custom-scrollbar">
                <img
                  src={project.fullScreenshotUrl}
                  onError={(e) => {
                    if (project.id === 'mob3l') {
                      e.currentTarget.src = "/portfolio/sites/Screenshot -  Site Pagina Inicial - MOB3L.png";
                    } else if (project.id === '01s-mobilidade') {
                      e.currentTarget.src = "/portfolio/sites/01s-mobilidade-completo.png";
                    }
                  }}
                  alt={project.altText}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Attached Real Testimonial */}
          {project.attachedTestimonial && (
            <div className="p-4 rounded-xl bg-cyan-500/[0.04] border border-cyan-500/20 text-xs">
              <p className="text-cyan-300 font-semibold mb-1">
                Depoimento do Cliente ({project.attachedTestimonial.name}):
              </p>
              <p className="text-gray-300 italic">
                &ldquo;{project.attachedTestimonial.text}&rdquo;
              </p>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-medium border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#272727] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-400">
            <span>Cliente: <strong className="text-white">{project.client}</strong></span>
            <span className="mx-2">•</span>
            <span>Segmento: <strong className="text-white">{project.segment || project.niche}</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.hasLiveLink && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 font-bold text-xs border border-yellow-500/30 flex items-center gap-1.5 transition-colors"
              >
                <span>Visitar site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
                `Olá João! Gostei muito do projeto de ${project.title} (${project.segment || project.niche}) e gostaria de um projeto semelhante para minha empresa.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
