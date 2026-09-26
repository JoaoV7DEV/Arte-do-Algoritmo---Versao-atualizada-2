import React from 'react';
import { MessageSquare, Compass, Palette, Code, CheckCircle, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const CONCISE_STEPS = [
  {
    number: 1,
    title: 'Briefing',
    icon: MessageSquare,
    color: 'text-[#00FFFF]',
    numberColor: 'text-[#00FFFF]',
    iconBg: 'bg-[#00FFFF]/10 border-[#00FFFF]/20 text-[#00FFFF]',
    hoverBorder: 'hover:border-[#00FFFF]/40',
    hoverTitle: 'group-hover:text-[#00FFFF]',
    description: 'Entendemos o momento do seu negócio, público-alvo, objetivos e definimos o escopo exato do projeto.',
    highlight: 'Diagnóstico transparente'
  },
  {
    number: 2,
    title: 'Estratégia',
    icon: Compass,
    color: 'text-[#38BDF8]',
    numberColor: 'text-[#38BDF8]',
    iconBg: 'bg-[#38BDF8]/10 border-[#38BDF8]/20 text-[#38BDF8]',
    hoverBorder: 'hover:border-[#38BDF8]/40',
    hoverTitle: 'group-hover:text-[#38BDF8]',
    description: 'Planejamos a arquitetura do site ou o posicionamento da marca para guiar o visitante até a conversão.',
    highlight: 'Estrutura focada em retorno'
  },
  {
    number: 3,
    title: 'Criação',
    icon: Palette,
    color: 'text-[#E71870]',
    numberColor: 'text-[#E71870]',
    iconBg: 'bg-[#E71870]/10 border-[#E71870]/20 text-[#E71870]',
    hoverBorder: 'hover:border-[#E71870]/40',
    hoverTitle: 'group-hover:text-[#E71870]',
    description: 'Desenvolvemos a direção visual com paleta, tipografia e layouts para aprovação prévia com você.',
    highlight: 'Design autoral e exclusivo'
  },
  {
    number: 4,
    title: 'Desenvolvimento',
    icon: Code,
    color: 'text-[#C754F0]',
    numberColor: 'text-[#C754F0]',
    iconBg: 'bg-[#C754F0]/10 border-[#C754F0]/20 text-[#C754F0]',
    hoverBorder: 'hover:border-[#C754F0]/40',
    hoverTitle: 'group-hover:text-[#C754F0]',
    description: 'Programamos o site com código moderno, carregamento ultrarrápido e integração total com o WhatsApp.',
    highlight: 'Código limpo e responsivo'
  },
  {
    number: 5,
    title: 'Entrega & Suporte',
    icon: CheckCircle,
    color: 'text-[#10B981]',
    numberColor: 'text-[#10B981]',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-[#10B981]',
    hoverBorder: 'hover:border-[#10B981]/40',
    hoverTitle: 'group-hover:text-[#10B981]',
    description: 'Publicamos seu site no domínio oficial, homologamos tudo e damos suporte contínuo para sua empresa.',
    highlight: 'Presença no ar com garantia'
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-[#1E1E1E] border-t border-white/[0.04] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00FFFF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMO TRABALHAMOS</span>
            </div>
            <h2
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Processo transparente em 5 etapas claras
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">
              Metodologia organizada para você acompanhar cada avanço sem surpresas e com contato direto pelo WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Steps Responsive Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10">
            {CONCISE_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={index * 0.12} className="h-full">
                  <div
                    id={`process-step-${step.number}`}
                    className={`h-full p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.035] border border-white/[0.07] ${step.hoverBorder} transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center font-mono font-bold text-sm ${step.numberColor} group-hover:scale-105 transition-transform`}>
                          0{step.number}
                        </span>
                        <div className={`p-2 rounded-lg border ${step.iconBg}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className={`text-base font-bold text-white mb-2 tracking-tight ${step.hoverTitle} transition-colors duration-200`}>
                        {step.title}
                      </h3>

                      <p className="text-xs text-gray-300 leading-relaxed mb-4">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/[0.06]">
                      <span className="text-[11px] font-mono text-gray-400 block">
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
