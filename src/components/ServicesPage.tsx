import React, { useState, useEffect, useRef } from 'react';
import {
  Code,
  Palette,
  TrendingUp,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Sparkles,
  MapPin,
  Target,
  Search,
  LifeBuoy,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';

interface ServicesPageProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

type PillarId = 'desenvolvimento-digital' | 'design-estrategico' | 'presenca-digital';

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activePillar, setActivePillar] = useState<PillarId>('desenvolvimento-digital');

  // References for sticky horizontal nav bar and pillar buttons on mobile/tablet
  const navScrollRef = useRef<HTMLDivElement>(null);
  const navButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const pillars = [
    {
      id: 'desenvolvimento-digital' as PillarId,
      number: '01',
      title: 'Desenvolvimento Digital',
      shortTitle: 'Desenvolvimento Digital',
      tagline: 'Sites rápidos, seguros e prontos para converter',
      description:
        'Criamos plataformas web modernas projetadas para carregar em segundos, funcionar com excelência em smartphones e guiar o cliente até o contato.',
      icon: Code,
      accentColor: 'text-[#00FFFF]',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/20 text-[#00FFFF]',
      borderAccent: 'border-cyan-500/30',
      iconBox: 'bg-cyan-500/10 border-cyan-500/20 text-[#00FFFF]',
      items: [
        {
          name: 'Sites institucionais',
          desc: 'Apresentação profissional com alta autoridade para sua empresa.',
        },
        {
          name: 'Landing pages',
          desc: 'Páginas de alta conversão para campanhas e captação de leads.',
        },
        {
          name: 'Lojas virtuais',
          desc: 'Estrutura de e-commerce ágil, intuitiva e preparada para vendas.',
        },
        {
          name: 'Sites personalizados',
          desc: 'Aplicações web sob medida para as necessidades específicas do seu negócio.',
        },
      ],
    },
    {
      id: 'design-estrategico' as PillarId,
      number: '02',
      title: 'Design Estratégico',
      shortTitle: 'Design Estratégico',
      tagline: 'Marcas com personalidade, estética e coerência',
      description:
        'Desenvolvemos a identidade visual que coloca sua empresa em outro patamar de percepção de valor, unindo criatividade e psicologia das cores.',
      icon: Palette,
      accentColor: 'text-[#E71870]',
      badgeBg: 'bg-pink-500/10 border-pink-500/20 text-[#E71870]',
      borderAccent: 'border-pink-500/30',
      iconBox: 'bg-pink-500/10 border-pink-500/20 text-[#E71870]',
      items: [
        {
          name: 'Identidade visual',
          desc: 'Paleta de cores, tipografia e manual de aplicação completo.',
        },
        {
          name: 'Logotipos',
          desc: 'Símbolos autorais, memoráveis e com alto impacto visual.',
        },
        {
          name: 'Materiais gráficos',
          desc: 'Papelaria, cartões digitais interativos, banners e catálogos.',
        },
        {
          name: 'Artes para redes sociais',
          desc: 'Templates profissionais para elevar o padrão do seu feed.',
        },
      ],
    },
    {
      id: 'presenca-digital' as PillarId,
      number: '03',
      title: 'Presença e Marketing Digital',
      shortTitle: 'Presença e Marketing',
      tagline: 'Visibilidade para ser encontrado por quem quer comprar',
      description:
        'Posicionamos seu negócio onde o seu público busca, fortalecendo sua autoridade no Google e nas redes sociais.',
      icon: TrendingUp,
      accentColor: 'text-[#C754F0]',
      badgeBg: 'bg-[#C754F0]/10 border-[#C754F0]/20 text-[#C754F0]',
      borderAccent: 'border-[#C754F0]/30',
      iconBox: 'bg-[#C754F0]/10 border-[#C754F0]/20 text-[#C754F0]',
    },
  ];

  // Scroll spy to update active pillar when scrolling through page
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds: PillarId[] = ['desenvolvimento-digital', 'design-estrategico', 'presenca-digital'];
      const headerThreshold = 180;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(`pilar-${id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerThreshold) {
            current = id;
          }
        }
      }
      setActivePillar(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatic smooth horizontal slide for tab strip on mobile & tablet
  useEffect(() => {
    const container = navScrollRef.current;
    const button = navButtonRefs.current[activePillar];
    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const currentScroll = container.scrollLeft;
    const buttonCenterOffset = buttonRect.left - containerRect.left + currentScroll + buttonRect.width / 2;
    const targetScrollLeft = buttonCenterOffset - containerRect.width / 2;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: 'smooth',
    });
  }, [activePillar]);

  const scrollToPillar = (id: PillarId) => {
    setActivePillar(id);
    const el = document.getElementById(`pilar-${id}`);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavigateToService = (page: PageView, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    } else {
      let path = '/servicos';
      if (page === 'servico-trafego-pago') path = '/servicos/trafego-pago';
      if (page === 'servico-google-meu-negocio') path = '/servicos/google-meu-negocio';
      window.history.pushState(null, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleNavigateToCase = (anchor: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('projetos', anchor);
    } else {
      window.history.pushState(null, '', `/projetos#${anchor}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="min-h-screen bg-[#272727] text-white selection:bg-[#E71870] selection:text-white pb-24">
      {/* ========================================================================= */}
      {/* TOP PAGE HERO (Reaches top:0 with transparent header compatibility) */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#18181B] via-[#202023] to-[#272727] border-b border-white/5 overflow-hidden">
        {/* Ambient background glows shining through transparent header */}
        <div className="absolute -top-16 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00FFFF]/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-16 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#E71870]/15 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FFFF] mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NOSSAS SOLUÇÕES</span>
          </div>

          <h1
            style={{ fontSize: '60px' }}
            className="text-[60px] font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            Serviços
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Do primeiro logotipo à plataforma web de alta conversão, um ecossistema completo para sua presença digital, sem complicação técnica e com contato direto.
          </p>
        </div>
      </section>

      {/* Sticky Tab Navigation Across the 3 Pillars */}
      <nav className="sticky top-[68px] sm:top-[74px] z-40 bg-[#18181B]/95 backdrop-blur-md border-b border-white/10 shadow-xl">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div
            ref={navScrollRef}
            className="flex items-center justify-start sm:justify-center overflow-x-auto py-3.5 sm:py-4 gap-2.5 sm:gap-3 scrollbar-none no-scrollbar scroll-smooth"
          >
            {pillars.map((p) => {
              const isActive = activePillar === p.id;
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  ref={(el) => {
                    navButtonRefs.current[p.id] = el;
                  }}
                  onClick={() => scrollToPillar(p.id)}
                  type="button"
                  className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] shadow-[0_0_18px_rgba(0,255,255,0.3)] font-bold border-cyan-400'
                      : 'text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{p.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Pillars Content Container - Clean & Scannable Hub */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-24">
        {/* ========================================================================= */}
        {/* PILLAR 01: DESENVOLVIMENTO DIGITAL (Unchanged short cards) */}
        {/* ========================================================================= */}
        <section id="pilar-desenvolvimento-digital" className="scroll-mt-36">
          <div className="rounded-3xl bg-[#1E1E22] border border-cyan-500/20 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Pillar Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-10">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-13 h-13 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-[#00FFFF] flex items-center justify-center p-3">
                    <Code className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#00FFFF]">
                    ÁREA 01
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Desenvolvimento Digital
                </h2>
                <p className="text-base sm:text-lg font-semibold text-[#00FFFF]">
                  Sites rápidos, seguros e prontos para converter
                </p>
                <p className="text-base sm:text-lg text-gray-200 max-w-4xl leading-relaxed">
                  Criamos plataformas web modernas projetadas para carregar em segundos, funcionar com excelência em smartphones e guiar o cliente até o contato.
                </p>
              </div>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 text-white text-sm font-semibold transition-all self-start md:self-auto shrink-0 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#00FFFF]" />
                <span>Solicitar proposta de site</span>
              </a>
            </div>

            {/* 4 Service Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars[0].items.map((item, idx) => (
                <div
                  key={item.name}
                  className="p-7 rounded-2xl bg-[#141416]/85 border border-white/[0.07] hover:border-cyan-500/40 transition-all flex items-start gap-4.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#00FFFF] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-[#00FFFF] font-bold">0{idx + 1}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PILLAR 02: DESIGN ESTRATÉGICO (Unchanged short cards) */}
        {/* ========================================================================= */}
        <section id="pilar-design-estrategico" className="scroll-mt-36">
          <div className="rounded-3xl bg-[#1E1E22] border border-pink-500/20 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Pillar Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-10">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-13 h-13 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-[#E71870] flex items-center justify-center p-3">
                    <Palette className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-[#E71870]">
                    ÁREA 02
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Design Estratégico
                </h2>
                <p className="text-base sm:text-lg font-semibold text-[#E71870]">
                  Marcas com personalidade, estética e coerência
                </p>
                <p className="text-base sm:text-lg text-gray-200 max-w-4xl leading-relaxed">
                  Desenvolvemos a identidade visual que coloca sua empresa em outro patamar de percepção de valor, unindo criatividade e psicologia das cores.
                </p>
              </div>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-pink-500/40 text-white text-sm font-semibold transition-all self-start md:self-auto shrink-0 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#E71870]" />
                <span>Solicitar proposta de marca</span>
              </a>
            </div>

            {/* 4 Service Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars[1].items.map((item, idx) => (
                <div
                  key={item.name}
                  className="p-7 rounded-2xl bg-[#141416]/85 border border-white/[0.07] hover:border-pink-500/40 transition-all flex items-start gap-4.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 text-[#E71870] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono text-[#E71870] font-bold">0{idx + 1}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PILLAR 03: PRESENÇA E MARKETING DIGITAL (Reorganized into Sub-groups) */}
        {/* ========================================================================= */}
        <section id="pilar-presenca-digital" className="scroll-mt-36">
          <div className="rounded-3xl bg-[#1E1E22] border border-[#C754F0]/25 p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C754F0]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Pillar Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-10">
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-13 h-13 rounded-2xl bg-[#C754F0]/10 border border-[#C754F0]/20 text-[#C754F0] flex items-center justify-center p-3">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-[#C754F0]/10 border border-[#C754F0]/20 text-[#C754F0]">
                    ÁREA 03
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Presença e Marketing Digital
                </h2>
                <p className="text-base sm:text-lg font-semibold text-[#C754F0]">
                  Visibilidade para ser encontrado por quem quer comprar
                </p>
                <p className="text-base sm:text-lg text-gray-200 max-w-4xl leading-relaxed">
                  Posicionamos seu negócio onde o seu público busca, fortalecendo sua autoridade no Google e nas redes sociais.
                </p>
              </div>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#C754F0]/40 text-white text-sm font-semibold transition-all self-start md:self-auto shrink-0 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#C754F0]" />
                <span>Consultar soluções de tráfego</span>
              </a>
            </div>

            {/* =================================================================== */}
            {/* SUB-GROUP 1: TRÁFEGO ORGÂNICO (Google Meu Negócio + SEO) */}
            {/* =================================================================== */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
                  Tráfego Orgânico
                </span>
                <span className="text-xs text-gray-400 font-mono">Posicionamento gratuito e constante no Google</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* 1.1 Compact Hub Card: Google Meu Negócio (Takes 7 cols on desktop) */}
                <div
                  id="hub-card-google-meu-negocio"
                  className="lg:col-span-7 rounded-2xl bg-[#141416]/95 border-2 border-emerald-500/30 p-7 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:border-emerald-500/50 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase block">
                            Tráfego Orgânico
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            Google Meu Negócio
                          </h3>
                        </div>
                      </div>
                      <span className="hidden sm:inline-block text-[11px] font-mono text-gray-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                        Busca & Mapa
                      </span>
                    </div>

                    <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                      Apareça no Google quando seu cliente procurar por você.
                    </p>
                  </div>

                  {/* 3 Action Buttons in a row (stack on mobile) */}
                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    {/* Button 1: WhatsApp */}
                    <a
                      href={AGENCY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all shrink-0 min-h-[42px]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Fale no WhatsApp</span>
                    </a>

                    {/* Button 2: Ver exemplo real */}
                    <a
                      href="/projetos#case-google-meu-negocio"
                      onClick={(e) => handleNavigateToCase('case-google-meu-negocio', e)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-xs sm:text-sm transition-all shrink-0 min-h-[42px]"
                    >
                      <span>Ver exemplo real</span>
                    </a>

                    {/* Button 3: Saber mais dedicated page */}
                    <a
                      href="/servicos/google-meu-negocio"
                      onClick={(e) => handleNavigateToService('servico-google-meu-negocio', e)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-semibold text-xs sm:text-sm transition-all group shrink-0 min-h-[42px]"
                    >
                      <span>Saber mais</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* 1.2 Card: SEO (Otimização) (Takes 5 cols on desktop) */}
                <div
                  id="hub-card-seo"
                  className="lg:col-span-5 rounded-2xl bg-[#141416]/85 border border-white/[0.08] p-7 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Search className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase block">
                          Tráfego Orgânico
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          SEO (Otimização)
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                      Estrutura técnica para posicionar seu site organicamente nos mecanismos de busca, com código limpo, semântica correta e velocidade de carregamento.
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-400 font-mono">
                    <span>Rankeamento a longo prazo</span>
                    <span className="text-emerald-400">Indexação técnica</span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================== */}
            {/* SUB-GROUP 2: TRÁFEGO PAGO (Meta Ads + Google Ads) */}
            {/* =================================================================== */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C754F0] bg-[#C754F0]/10 px-3.5 py-1.5 rounded-full border border-[#C754F0]/20">
                  Tráfego Pago
                </span>
                <span className="text-xs text-gray-400 font-mono">Anúncios de alta precisão para captação imediata</span>
              </div>

              {/* Compact Hub Card: Tráfego Pago */}
              <div
                id="hub-card-trafego-pago"
                className="rounded-2xl bg-[#141416]/95 border-2 border-[#C754F0]/40 p-7 sm:p-9 shadow-lg relative overflow-hidden group hover:border-[#C754F0]/60 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4 max-w-4xl">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#C754F0]/15 border border-[#C754F0]/30 text-[#C754F0] flex items-center justify-center shrink-0">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-[#C754F0] font-bold uppercase block">
                          Tráfego Pago
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          Tráfego Pago
                        </h3>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block text-[11px] font-mono text-gray-300 px-3 py-1 rounded bg-[#C754F0]/10 border border-[#C754F0]/20">
                      Meta Ads & Google Ads
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
                    Anúncios pensados pro seu negócio ser encontrado por quem já quer comprar.
                  </p>
                </div>

                {/* 3 Action Buttons in a row (stack on mobile) */}
                <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Button 1: WhatsApp */}
                  <a
                    href={AGENCY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all shrink-0 min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Fale no WhatsApp</span>
                  </a>

                  {/* Button 2: Ver exemplo real */}
                  <a
                    href="/projetos#case-trafego-pago"
                    onClick={(e) => handleNavigateToCase('case-trafego-pago', e)}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-xs sm:text-sm transition-all shrink-0 min-h-[44px]"
                  >
                    <span>Ver exemplo real</span>
                  </a>

                  {/* Button 3: Saber mais dedicated page */}
                  <a
                    href="/servicos/trafego-pago"
                    onClick={(e) => handleNavigateToService('servico-trafego-pago', e)}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-[#C754F0]/15 hover:bg-[#C754F0]/25 border border-[#C754F0]/30 text-purple-200 font-semibold text-xs sm:text-sm transition-all group shrink-0 min-h-[44px]"
                  >
                    <span>Saber mais</span>
                    <ArrowRight className="w-4 h-4 text-[#C754F0] transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* =================================================================== */}
            {/* STANDALONE ITEM: APOIO À PRESENÇA DIGITAL */}
            {/* =================================================================== */}
            <div className="pt-2">
              <div
                id="hub-card-apoio"
                className="p-7 sm:p-8 rounded-2xl bg-[#141416]/85 border border-white/[0.08] hover:border-cyan-400/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[#00FFFF] flex items-center justify-center shrink-0 mt-0.5">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#00FFFF] font-bold uppercase block">
                      Acompanhamento Estratégico
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Apoio à presença digital
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal max-w-3xl">
                      Consultoria e acompanhamento contínuo da evolução da sua marca no ambiente digital, tirando dúvidas técnicas e ajustando rotas com contato direto.
                    </p>
                  </div>
                </div>

                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-xs sm:text-sm transition-all self-start md:self-auto shrink-0 min-h-[40px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#00FFFF]" />
                  <span>Tirar dúvidas</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Page CTA */}
        <section className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-r from-[#18181B] via-[#1F1F23] to-[#18181B] border border-white/10 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase text-[#00FFFF] font-bold tracking-wider">
              PRONTO PARA COMEÇAR?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Vamos construir a solução ideal para a sua empresa
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Sem intermediários, com comunicação direta e escopo alinhado à sua realidade. Chame no WhatsApp e tire todas as suas dúvidas.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-base shadow-[0_0_24px_rgba(0,255,255,0.3)] hover:shadow-[0_0_36px_rgba(0,255,255,0.5)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Fale no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
