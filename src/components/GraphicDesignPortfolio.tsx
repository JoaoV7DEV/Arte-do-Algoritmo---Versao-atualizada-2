import React, { useState } from 'react';
import { GRAPHIC_DESIGN_PROJECTS, AGENCY_INFO } from '../data/agencyData';
import { GraphicDesignProject } from '../types';
import { Palette, Check, MessageCircle, X, Sparkles, Layers } from 'lucide-react';

export const GraphicDesignPortfolio: React.FC = () => {
  const [selectedDesign, setSelectedDesign] = useState<GraphicDesignProject | null>(null);

  const getBadgeClass = (classification: string) => {
    switch (classification.toLowerCase()) {
      case 'redes sociais':
      case 'design de redes sociais':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'design gráfico':
      case 'design grafico':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'identidade visual':
        return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
      case 'projeto comercial':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'estudo visual':
        return 'bg-sky-500/20 text-sky-300 border-sky-500/30';
      case 'conceito':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      default:
        return 'bg-white/10 text-gray-300 border-white/10';
    }
  };

  return (
    <section id="design-branding" className="py-24 bg-[#18181B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#E71870] font-mono font-semibold">
            Arte & Identidade Visual
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 tracking-tight">
            Marcas com personalidade, estética e coerência estratégica
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Desenvolvemos logotipos, paletas cromáticas e materiais corporativos. Mantemos transparência absoluta identificando projetos reais e estudos conceituais.
          </p>
        </div>

        {/* Design Projects Grid */}
        <div className="max-w-2xl mx-auto">
          {GRAPHIC_DESIGN_PROJECTS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedDesign(item)}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#E71870]/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Visual Header with Gradient Canvas & Color Swatches */}
                <div
                  className={`h-40 rounded-2xl bg-gradient-to-br ${item.thumbnailGradient} p-4 flex flex-col justify-between mb-5 shadow-lg group-hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border backdrop-blur-md ${getBadgeClass(
                        item.classification
                      )}`}
                    >
                      {item.classification}
                    </span>
                    {item.logoUrl ? (
                      <img
                        src={item.logoUrl}
                        alt={item.title}
                        className="h-6 w-auto max-w-[80px] object-contain p-0.5 bg-black/40 rounded border border-white/10"
                      />
                    ) : (
                      <Layers className="w-4 h-4 text-white/70" />
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-black/40 backdrop-blur-md w-fit">
                    {item.colors.map((color, i) => (
                      <span
                        key={i}
                        className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <span className="text-[11px] font-mono text-[#E71870] font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-1.5 mb-4">
                  {item.deliverables.slice(0, 3).map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <Check className="w-3.5 h-3.5 text-[#E71870] shrink-0" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono">Clique para ver detalhes</span>
                <span className="text-xs font-semibold text-[#E71870] group-hover:underline">
                  Explorar &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for Graphic Design */}
      {selectedDesign && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#18181B] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDesign(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${getBadgeClass(
                  selectedDesign.classification
                )}`}
              >
                {selectedDesign.classification}
              </span>
              <span className="text-xs text-gray-400 font-mono">{selectedDesign.category}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{selectedDesign.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {selectedDesign.details}
            </p>

            {/* Colors Palette in Modal */}
            <div className="mb-6">
              <p className="text-xs font-mono font-semibold text-gray-400 mb-2">
                PALETA CROMÁTICA DA MARCA:
              </p>
              <div className="flex items-center gap-3">
                {selectedDesign.colors.map((c, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <span
                      className="w-10 h-10 rounded-xl border border-white/20 shadow-md"
                      style={{ backgroundColor: c }}
                    />
                    <span className="text-[10px] font-mono text-gray-400">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Deliverables in Modal */}
            <div className="mb-8">
              <p className="text-xs font-mono font-semibold text-gray-400 mb-2">
                ENTREGÁVEIS DESENVOLVIDOS:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedDesign.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 text-xs text-gray-300">
                    <Check className="w-4 h-4 text-[#E71870] shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400">
                Gostou desta linha de design?
              </p>
              <a
                href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
                  `Olá João! Vi o projeto de branding ${selectedDesign.title} no site da Arte do Algoritmo e quero criar a identidade da minha marca.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#E71870] hover:bg-[#D91364] text-white font-bold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar sobre Identidade Visual</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
