import React from 'react';
import { ArrowRight, Sparkles, Code2, Palette, MapPin, CheckCircle2, MessageCircle, Cpu, Brush } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { ScrollReveal } from './ScrollReveal';

interface AboutPreviewProps {
  onLearnMore: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onLearnMore }) => {
  return (
    <section id="sobre-previa" className="py-24 bg-[#242424] border-t border-white/[0.04] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Visual Duality (Arte + Algoritmo) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#1A1A1D] border border-white/[0.08] shadow-2xl relative overflow-hidden flex flex-col justify-between">
                {/* Subtle digital matrix pixel texture */}
                <div className="absolute top-0 right-0 w-44 h-44 opacity-10 pointer-events-none select-none">
                  <div className="w-full h-full bg-[radial-gradient(#00FFFF_1.5px,transparent_1.5px)] [background-size:14px_14px]" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-gray-300 font-mono mb-5">
                    <MapPin className="w-3.5 h-3.5 text-[#00FFFF]" />
                    <span>Salvador, Bahia • Atendimento Nacional</span>
                  </div>

                  <h3
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight"
                  >
                    Arte <span className="text-gray-400 font-normal">+</span> Algoritmo
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    A sensibilidade estética do design aliada à velocidade, estrutura e precisão do código moderno.
                  </p>

                  {/* Dual pillars representation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-white/[0.06]">
                    {/* Pillar: ARTE */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#E71870]/10 to-transparent border border-[#E71870]/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-[#E71870]/15 flex items-center justify-center text-[#E71870]">
                          <Brush className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono text-[#E71870] font-bold">
                          ARTE
                        </span>
                      </div>
                      <p className="text-xs font-bold text-white mb-1">Design & Identidade</p>
                      <p className="text-[11px] text-gray-400 leading-normal">
                        Criatividade, autoridade visual, estética memorável e coerência de marca.
                      </p>
                    </div>

                    {/* Pillar: ALGORITMO */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#00FFFF]/10 to-transparent border border-[#00FFFF]/20">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-[#00FFFF]/15 flex items-center justify-center text-[#00FFFF]">
                          <Cpu className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono text-[#00FFFF] font-bold">
                          ALGORITMO
                        </span>
                      </div>
                      <p className="text-xs font-bold text-white mb-1">Tecnologia & Estratégia</p>
                      <p className="text-[11px] text-gray-400 leading-normal">
                        Sistemas rápidos, código limpo, SEO técnico e caminhos focados em conversão.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>Atendimento humanizado</span>
                  <span className="text-[#00FFFF]">Projetos 100% autorais</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="right" delay={0.12}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00FFFF]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NOSSA ESSÊNCIA</span>
              </div>

              <h2
                style={{ fontFamily: 'Poppins, sans-serif' }}
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mt-3"
              >
                Onde o design estratégico encontra a precisão da tecnologia
              </h2>

              <p className="text-base text-gray-300 leading-relaxed mt-4">
                A <strong>Arte do Algoritmo</strong> nasceu para solucionar uma dor comum no mercado: páginas visualmente bonitas que não convertem ou sites técnicos sem personalidade e sem alma de marca.
              </p>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Liderada por <strong>João</strong> a partir de Salvador, Bahia, criamos a harmonia visual que encanta seu cliente somada ao código de alto desempenho preparado para o Google e otimizado para o WhatsApp.
              </p>

              {/* Quick Principles Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                  <span>Sem templates prontos ou soluções genéricas</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                  <span>Comunicação transparente sem jargões técnicos</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                  <span>Contato direto com quem desenvolve seu projeto</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0 mt-0.5" />
                  <span>Foco permanente em retorno real para o negócio</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-5 flex flex-col sm:flex-row items-center gap-3.5">
                <button
                  onClick={onLearnMore}
                  id="btn-conheca-mais-sobre"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white font-bold text-sm border border-white/[0.12] transition-all duration-200 group"
                >
                  <span>Conheça a história e metodologia</span>
                  <ArrowRight className="w-4 h-4 text-[#00FFFF] transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-gray-300 hover:text-white text-xs sm:text-sm font-semibold hover:bg-white/[0.04] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
