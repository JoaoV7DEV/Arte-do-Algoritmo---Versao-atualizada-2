import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { Smartphone, Sparkles, CheckCircle2, ArrowRight, MessageCircle, Layers, Instagram } from 'lucide-react';

export const SocialMediaPack: React.FC = () => {
  const niches = [
    'Saúde & Clínicas',
    'Advocacia & Jurídico',
    'Nutrição & Fitness',
    'Imobiliárias & Corretores',
    'Restaurantes & Gastronomia',
    'Prestadores de Serviços Locais',
  ];

  return (
    <section id="social-pack" className="py-20 bg-[#272727] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#18181B] via-[#1E1E24] to-[#272727] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#E71870]">
                <Instagram className="w-3.5 h-3.5" />
                <span>SOLUÇÃO DIGITAL PRONTA PARA EMPRESAS</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Packs de Mídias Sociais & Templates Estratégicos
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Manter um feed profissional e consistente no Instagram não precisa consumir horas do seu dia. Desenvolvemos kits completos de templates editáveis, capas de destaques e diretrizes de identidade para o seu segmento de mercado.
              </p>

              {/* Niches Chips */}
              <div>
                <p className="text-xs font-mono uppercase text-gray-400 mb-2">
                  Formatos adaptados para diversos segmentos:
                </p>
                <div className="flex flex-wrap gap-2">
                  {niches.map((niche) => (
                    <span
                      key={niche}
                      className="px-3 py-1 rounded-lg bg-white/5 text-xs text-gray-300 border border-white/5"
                    >
                      {niche}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0" />
                  <span>Artes editáveis no Canva e Figma</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0" />
                  <span>Paleta e tipografia harmonizadas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0" />
                  <span>Modelos para carrosséis educativos</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF] shrink-0" />
                  <span>Capas padronizadas para Destaques</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-4">
                <a
                  href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
                    'Olá João! Gostaria de saber mais sobre os Packs de Redes Sociais e templates da Arte do Algoritmo.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E71870] to-[#BE185D] hover:from-[#F43F5E] hover:to-[#D91364] text-white font-bold text-sm shadow-[0_0_20px_rgba(231,24,112,0.35)] transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Consultar Pack para Meu Segmento</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Visual: Simulated Grid of Instagram Posts */}
            <div className="lg:col-span-5">
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 shadow-xl space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#00FFFF] to-[#E71870]" />
                    <span className="text-white font-semibold">@suamarca.oficial</span>
                  </div>
                  <span>Feed Padronizado</span>
                </div>

                {/* 3x2 Mini Post Mockup Grid */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-900 to-black p-2.5 flex flex-col justify-between border border-cyan-500/30">
                    <span className="text-[8px] font-mono text-cyan-300 font-bold">DICA #01</span>
                    <p className="text-[9px] font-bold text-white leading-tight">Como escolher o serviço ideal</p>
                  </div>

                  <div className="aspect-square rounded-xl bg-gradient-to-br from-pink-900 to-black p-2.5 flex flex-col justify-between border border-pink-500/30">
                    <span className="text-[8px] font-mono text-pink-300 font-bold">DEPOIMENTO</span>
                    <p className="text-[9px] font-bold text-white leading-tight">&ldquo;Atendimento impecável!&rdquo;</p>
                  </div>

                  <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-900 to-black p-2.5 flex flex-col justify-between border border-purple-500/30">
                    <span className="text-[8px] font-mono text-purple-300 font-bold">BASTIDORES</span>
                    <p className="text-[9px] font-bold text-white leading-tight">Nosso processo de qualidade</p>
                  </div>

                  <div className="aspect-square rounded-xl bg-gradient-to-br from-stone-900 to-zinc-950 p-2.5 flex flex-col justify-between border border-white/10">
                    <span className="text-[8px] font-mono text-gray-400 font-bold">AVISO</span>
                    <p className="text-[9px] font-bold text-white leading-tight">Horários especiais de atendimento</p>
                  </div>

                  <div className="aspect-square rounded-xl bg-gradient-to-br from-cyan-950 to-blue-950 p-2.5 flex flex-col justify-between border border-cyan-500/20">
                    <span className="text-[8px] font-mono text-cyan-300 font-bold">CHECKLIST</span>
                    <p className="text-[9px] font-bold text-white leading-tight">3 passos para contratar</p>
                  </div>

                  <div className="aspect-square rounded-xl bg-gradient-to-br from-rose-950 to-black p-2.5 flex flex-col justify-between border border-rose-500/20">
                    <span className="text-[8px] font-mono text-rose-300 font-bold">CONTATO</span>
                    <p className="text-[9px] font-bold text-white leading-tight">Link direto no WhatsApp</p>
                  </div>
                </div>

                <div className="pt-2 text-center text-[11px] text-gray-400">
                  Design consistente que valoriza o valor percebido do seu produto.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
