import React from 'react';
import { Rocket, Palette, MessageSquareText, CheckCircle2, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Benefits: React.FC = () => {
  const threeBenefits = [
    {
      id: 'sites-medida',
      title: 'Sites sob medida',
      badge: 'Performance & Conversão',
      icon: Rocket,
      accentColor: 'text-[#00FFFF]',
      iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-[#00FFFF]',
      hoverBorder: 'hover:border-cyan-400/40',
      description:
        'Páginas rápidas, seguras e responsivas projetadas para funcionar com perfeição no celular e guiar seu visitante diretamente ao WhatsApp.',
    },
    {
      id: 'design-estrategico',
      title: 'Identidade e design estratégico',
      badge: 'Autoridade de Marca',
      icon: Palette,
      accentColor: 'text-[#E71870]',
      iconBg: 'bg-pink-500/10 border-pink-500/20 text-[#E71870]',
      hoverBorder: 'hover:border-[#E71870]/40',
      description:
        'Criação de marcas, logotipos memoráveis e materiais digitais que comunicam credibilidade imediata e destacam sua empresa da concorrência.',
    },
    {
      id: 'atendimento-proximo',
      title: 'Atendimento próximo e personalizado',
      badge: 'Contato Direto',
      icon: MessageSquareText,
      accentColor: 'text-[#B847C9]',
      iconBg: 'bg-[#B847C9]/10 border-[#B847C9]/20 text-[#B847C9]',
      hoverBorder: 'hover:border-[#B847C9]/40',
      description:
        'Você fala diretamente com quem pensa na estratégia e desenvolve cada detalhe pelo WhatsApp, com comunicação clara e sem termos difíceis.',
    },
  ];

  return (
    <section id="beneficios" className="py-20 sm:py-24 bg-[#222225] border-y border-white/[0.04] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00FFFF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIFERENCIAIS</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight max-w-[700px] mx-auto w-full"
            >
              Por que construir sua presença conosco
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
              Soluções digitais com propósito: unimos design marcante e código de alta performance com atendimento transparente.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Concise Benefit Cards Grid with Subtle Brand Differentiation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {threeBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.id} delay={index * 0.12} className="h-full">
                <div
                  id={`benefit-card-${benefit.id}`}
                  className={`h-full p-7 sm:p-8 rounded-2xl bg-white/[0.025] hover:bg-white/[0.04] border border-white/[0.07] ${benefit.hoverBorder} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)]`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-105 ${benefit.iconBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-gray-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">
                        0{index + 1}
                      </span>
                    </div>

                    <span className="inline-block text-xs font-mono text-gray-400 mb-2">
                      {benefit.badge}
                    </span>

                    <h3
                      className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-white transition-colors"
                    >
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${benefit.accentColor} shrink-0`} />
                    <span className="text-xs text-gray-400">Compromisso com o resultado</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
