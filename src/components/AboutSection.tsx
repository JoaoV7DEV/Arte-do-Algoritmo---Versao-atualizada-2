import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MapPin, Heart, Code2, Sparkles, Check, ArrowRight, MessageCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#18181B] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand & Visual Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#272727] border border-white/10 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#00FFFF]" />
                  <span>Salvador, Bahia • Brasil</span>
                </div>
                <h4 className="text-xl font-bold text-white">
                  Arte + Algoritmo
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
                  A sensibilidade estética da arte aliada à velocidade e precisão dos algoritmos modernos de desenvolvimento.
                </p>
              </div>

              {/* Pillars Comparison in Card */}
              <div className="grid grid-cols-2 gap-3 w-full mt-6 pt-6 border-t border-white/10 text-left">
                <div className="p-3 rounded-xl bg-pink-950/20 border border-pink-500/20">
                  <span className="text-[10px] font-mono text-[#E71870] font-bold block mb-1">
                    VERTENTE ARTE
                  </span>
                  <p className="text-xs font-semibold text-white">Criatividade & Sensibilidade</p>
                  <p className="text-[11px] text-gray-400 mt-1">Identidade visual, branding, emoção e harmonia.</p>
                </div>

                <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                  <span className="text-[10px] font-mono text-[#00FFFF] font-bold block mb-1">
                    VERTENTE ALGORITMO
                  </span>
                  <p className="text-xs font-semibold text-white">Tecnologia & Estrutura</p>
                  <p className="text-[11px] text-gray-400 mt-1">Performance, SEO, código limpo e conversão.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative and Direct Values */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#00FFFF] font-mono font-semibold">
              Quem Está Por Trás da Arte do Algoritmo
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tecnologia de ponta com o calor e a proximidade do atendimento baiano
            </h2>

            <p className="text-base text-gray-300 leading-relaxed">
              A <strong>Arte do Algoritmo</strong> nasceu da constatação de que muitas empresas caíam em dois extremos ruins: ou contratavam designers que criavam artes bonitas mas sites lentos e desestruturados, ou programadores técnicos que entregavam páginas frias e sem apelo visual.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              Liderada por <strong>João</strong>, unimos esses dois mundos sob um mesmo teto em Salvador, Bahia: entregamos a excelência visual que encanta o cliente logo no primeiro segundo somada ao código ágil, responsivo e preparado para o Google.
            </p>

            {/* Core Values Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-[#00FFFF]/10 text-[#00FFFF] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Sem termos técnicos incompreensíveis</h4>
                  <p className="text-xs text-gray-400">Falamos a sua língua e explicamos cada decisão com clareza.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-[#E71870]/10 text-[#E71870] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Acesso direto pelo WhatsApp</h4>
                  <p className="text-xs text-gray-400">Você fala diretamente com quem está criando e implementando o seu projeto.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Investimento transparente e sob medida</h4>
                  <p className="text-xs text-gray-400">Projetos com escopo e cronograma claros, adaptados ao porte e ao momento do seu negócio.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Button */}
            <div className="pt-4">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-bold text-sm shadow-md hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Conversar com o João no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
