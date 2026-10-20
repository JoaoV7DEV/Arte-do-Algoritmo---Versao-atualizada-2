import React from 'react';
import { Palette, Rocket, CheckCircle2, MessageSquareText, Sparkles } from 'lucide-react';
import { BENEFITS } from '../data/agencyData';
import { ScrollReveal } from './ScrollReveal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Rocket,
  CheckCircle2,
  MessageSquareText,
};

export const Benefits: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 sm:py-24 bg-[#1B1B1E] border-t border-white/[0.04] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E71870]/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00FFFF] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#00FFFF]" />
              <span>POR QUE A ARTE DO ALGORITMO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Diferenciais que geram valor real para o seu negócio
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed">
              Combinamos rigor estético com engenharia de conversão para que sua presença online não seja apenas bonita, mas funcional e rentável.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName] || Sparkles;
            const isCyan = index % 2 === 0;

            return (
              <ScrollReveal key={benefit.id} delay={index * 0.1}>
                <div className="h-full rounded-2xl bg-[#141416]/90 border border-white/[0.08] hover:border-white/[0.2] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                          isCyan
                            ? 'bg-cyan-500/10 border border-cyan-500/25 text-[#00FFFF]'
                            : 'bg-[#E71870]/10 border border-[#E71870]/25 text-[#E71870]'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono text-gray-400 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                        {benefit.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-gray-100 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
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
