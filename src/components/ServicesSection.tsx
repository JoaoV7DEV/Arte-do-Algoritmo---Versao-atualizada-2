import React from 'react';
import { Code, Palette, TrendingUp, CheckCircle2, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { ScrollReveal } from './ScrollReveal';

interface ServicesSectionProps {
  onViewAllServices?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onViewAllServices }) => {
  const serviceCategories = [
    {
      id: 'desenvolvimento-digital',
      number: '01',
      title: 'Desenvolvimento Digital',
      tagline: 'Sites rápidos, seguros e prontos para converter',
      description:
        'Criamos plataformas web modernas projetadas para carregar em segundos, funcionar com excelência em smartphones e guiar o cliente até o contato.',
      icon: Code,
      accentColor: 'text-[#00FFFF]',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/20 text-[#00FFFF]',
      hoverBorder: 'hover:border-cyan-400/40',
      iconBox: 'bg-cyan-500/10 border-cyan-500/20 text-[#00FFFF]',
      items: [
        { name: 'Sites institucionais', desc: 'Apresentação profissional com alta autoridade para sua empresa.' },
        { name: 'Landing pages', desc: 'Páginas de alta conversão para campanhas e captação de leads.' },
        { name: 'Lojas virtuais', desc: 'Estrutura de e-commerce ágil, intuitiva e preparada para vendas.' },
        { name: 'Sites personalizados', desc: 'Aplicações web sob medida para as necessidades específicas do seu negócio.' },
      ],
    },
    {
      id: 'design-estrategico',
      number: '02',
      title: 'Design Estratégico',
      tagline: 'Marcas com personalidade, estética e coerência',
      description:
        'Desenvolvemos a identidade visual que coloca sua empresa em outro patamar de percepção de valor, unindo criatividade e psicologia das cores.',
      icon: Palette,
      accentColor: 'text-[#E71870]',
      badgeBg: 'bg-pink-500/10 border-pink-500/20 text-[#E71870]',
      hoverBorder: 'hover:border-pink-500/40',
      iconBox: 'bg-pink-500/10 border-pink-500/20 text-[#E71870]',
      items: [
        { name: 'Identidade visual', desc: 'Paleta de cores, tipografia e manual de aplicação completo.' },
        { name: 'Logotipos', desc: 'Símbolos autorais, memoráveis e com alto impacto visual.' },
        { name: 'Materiais gráficos', desc: 'Papelaria, cartões digitais interativos, banners e catálogos.' },
        { name: 'Artes para redes sociais', desc: 'Templates profissionais para elevar o padrão do seu feed.' },
      ],
    },
    {
      id: 'presenca-digital',
      number: '03',
      title: 'Presença e Marketing Digital',
      tagline: 'Visibilidade para ser encontrado por quem quer comprar',
      description:
        'Posicionamos seu negócio onde o seu público busca, fortalecendo sua autoridade no Google e nas redes sociais.',
      icon: TrendingUp,
      accentColor: 'text-[#C754F0]',
      badgeBg: 'bg-[#C754F0]/10 border-[#C754F0]/20 text-[#C754F0]',
      hoverBorder: 'hover:border-[#C754F0]/40',
      iconBox: 'bg-[#C754F0]/10 border-[#C754F0]/20 text-[#C754F0]',
      items: [
        { name: 'Google Meu Negócio', desc: 'Otimização para aparecer nas primeiras posições de busca local.' },
        { name: 'Tráfego pago', desc: 'Planejamento e estruturação de anúncios no Meta Ads e Google.' },
        { name: 'SEO (Otimização)', desc: 'Estrutura técnica para posicionar seu site organicamente.' },
        { name: 'Apoio à presença digital', desc: 'Consultoria e acompanhamento contínuo da evolução da sua marca.' },
      ],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-[#272727] relative overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#00FFFF] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NOSSAS SOLUÇÕES</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            >
              Serviços desenhados para acelerar seu negócio
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
              Do primeiro logotipo à plataforma web de alta conversão, oferecemos um ecossistema completo sem complicação técnica e com contato direto.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Main Service Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {serviceCategories.map((cat, index) => {
            const Icon = cat.icon;
            const cardAccentBorder =
              cat.id === 'desenvolvimento-digital'
                ? 'border-cyan-500/25 hover:border-cyan-400/50'
                : cat.id === 'design-estrategico'
                ? 'border-pink-500/20 hover:border-pink-500/40'
                : 'border-white/[0.08] hover:border-[#B847C9]/40';

            return (
              <ScrollReveal key={cat.id} delay={index * 0.12} className="h-full">
                <div
                  id={`service-card-${cat.id}`}
                  className={`h-full rounded-2xl bg-[#1E1E22] border ${cardAccentBorder} p-7 sm:p-8 shadow-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group`}
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-105 ${cat.iconBox}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${cat.badgeBg}`}>
                        ÁREA {cat.number}
                      </span>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors"
                    >
                      {cat.title}
                    </h3>

                    <p className="text-xs font-semibold text-gray-300 mb-3">
                      {cat.tagline}
                    </p>

                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* 4 Items List */}
                    <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                      {cat.items.map((item) => (
                        <div key={item.name} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-4 h-4 ${cat.accentColor} shrink-0 mt-0.5`} />
                          <div>
                            <p className="text-sm font-semibold text-white leading-tight">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5 leading-normal">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>Solução 100% sob medida</span>
                    <span className={cat.accentColor}>Sem modelos prontos</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Central Bottom CTAs: Fale no WhatsApp (primary, wider) & Ver todos os serviços (secondary, narrower) */}
        <ScrollReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto w-full pt-2">
            {/* Left: "Fale no WhatsApp" - Primary style, wider */}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="services-whatsapp-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-extrabold text-sm sm:text-base shadow-[0_0_24px_rgba(0,255,255,0.25)] hover:shadow-[0_0_35px_rgba(0,255,255,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 min-h-[48px] shrink-0"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>

            {/* Right: "Ver todos os serviços" - Secondary style, narrower, same height on desktop, slightly more compact on mobile */}
            <a
              href="/servicos"
              onClick={(e) => {
                if (onViewAllServices) {
                  e.preventDefault();
                  onViewAllServices();
                }
              }}
              id="btn-ver-todos-servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.22] text-white font-semibold text-sm sm:text-base transition-all duration-200 group min-h-[40px] sm:min-h-[48px] shrink-0"
            >
              <span>Ver todos os serviços</span>
              <ArrowRight className="w-4 h-4 text-[#00FFFF] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
