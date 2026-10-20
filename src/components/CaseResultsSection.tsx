import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  Star,
  CheckCheck,
  Eye,
  CheckCircle2,
  BarChart3,
  Layers,
  Play
} from 'lucide-react';
import { AGENCY_INFO, REAL_TESTIMONIALS } from '../data/agencyData';
import { PageView } from './Navbar';
import { BrandIcon } from './BrandIcon';

export interface LightboxItem {
  src: string;
  alt: string;
  title: string;
  badge?: string;
  niche?: string;
  details?: string;
  note?: string;
}

interface CaseResultsSectionProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

// 5 Google Meu Negócio cards data
const GMN_CARDS: LightboxItem[] = [
  {
    src: '/portfolio/google-meu-negocio/resultado-01-decoracao-domiciliar.jpg',
    badge: 'ANTES → DEPOIS',
    title: 'De 72 para 692 visualizações do perfil',
    niche: 'Decoração domiciliar',
    details: 'Perfil de uma loja de móveis e colchões, trabalhado de forma orgânica. No painel do Google, o antes mostra 72 visualizações e o depois mostra 692 visualizações este mês.',
    alt: 'Antes e depois do perfil no Google Meu Negócio de um negócio de decoração domiciliar: de 72 para 692 visualizações.'
  },
  {
    src: '/portfolio/google-meu-negocio/resultado-02-corretor-imobiliario.jpg',
    badge: 'ANTES → DEPOIS',
    title: 'De 6 para 111 visualizações do perfil',
    niche: 'Corretor imobiliário',
    details: 'Perfil de um corretor imobiliário, trabalhado de forma orgânica. No painel do Google, o antes mostra 6 visualizações este mês e o depois mostra 111 visualizações este mês.',
    alt: 'Antes e depois do perfil no Google Meu Negócio de um corretor imobiliário: de 6 para 111 visualizações no mês.'
  },
  {
    src: '/portfolio/google-meu-negocio/resultado-04-barbearia.jpg',
    badge: 'PAINEL DO PERFIL',
    title: '842 visualizações e 195 interações no painel',
    niche: 'Barbearia',
    details: 'Perfil de uma barbearia, trabalhado de forma orgânica. O painel de desempenho, de dez/2022 a mai/2023, mostra 195 interações, 842 visualizações e 282 pesquisas, e indica 2 novas avaliações de clientes.',
    alt: 'Painel de desempenho do perfil de uma barbearia no Google Meu Negócio, de dez/2022 a mai/2023: 195 interações, 842 visualizações e 282 pesquisas.'
  },
  {
    src: '/portfolio/google-meu-negocio/resultado-05-aluguel-artigos-festas.jpg',
    badge: 'PAINEL DO PERFIL',
    title: '283 visualizações do perfil no mês',
    niche: 'Aluguel de artigos para festas',
    details: 'Perfil de um negócio de serviços para festas infantis, trabalhado de forma orgânica. O painel mostra 283 visualizações este mês, nota 5,0 (1 avaliação) e fotos recentes no perfil.',
    alt: 'Perfil de um negócio de festas infantis no Google, com 283 visualizações no mês e nota 5,0.'
  },
  {
    src: '/portfolio/google-meu-negocio/resultado-06-imobiliaria-e-grafica.jpg',
    badge: 'PAINEL DO PERFIL',
    title: 'Dois perfis: imobiliária e gráfica',
    niche: 'Imobiliária · Gráfica e design',
    details: 'Resultados de performance de dez/2022 a mai/2023. Imobiliária: 292 interações, 262 visualizações e 50 pesquisas. Gráfica e design: 81 interações, 200 visualizações e 50 pesquisas.',
    alt: 'Painéis de desempenho de dois perfis no Google Meu Negócio: uma imobiliária e uma gráfica.'
  }
];

// Creatives for Tapiocaria Dona Moça
interface TapiocaCreativeItem {
  type: 'image' | 'video';
  src: string;
  label: string;
  alt: string;
  poster?: string;
  subline?: string;
}

const TAPIOCA_CREATIVES: TapiocaCreativeItem[] = [
  {
    type: 'image',
    src: '/portfolio/trafego-pago/tapiocaria-dona-moca/feed-01-monte-sua-tapioca.png',
    label: 'Post Feed • Monte sua tapioca',
    alt: 'Anúncio da Tapiocaria Dona Moça: Post Feed • Monte sua tapioca'
  },
  {
    type: 'image',
    src: '/portfolio/trafego-pago/tapiocaria-dona-moca/feed-02-combo-dona-flor.png',
    label: 'Post Feed • Combo Dona Flor e seus dois amigos',
    alt: 'Anúncio da Tapiocaria Dona Moça: Post Feed • Combo Dona Flor e seus dois amigos'
  },
  {
    type: 'image',
    src: '/portfolio/trafego-pago/tapiocaria-dona-moca/story-01-que-tal-uma-tapioca.png',
    label: 'Post Story • Que tal uma tapioca hoje?',
    alt: 'Anúncio da Tapiocaria Dona Moça: Post Story • Que tal uma tapioca hoje?'
  },
  {
    type: 'image',
    src: '/portfolio/trafego-pago/tapiocaria-dona-moca/story-02-a-melhor-tapioca.png',
    label: 'Post Story • A melhor tapioca da região',
    alt: 'Anúncio da Tapiocaria Dona Moça: Post Story • A melhor tapioca da região'
  },
  {
    type: 'image',
    src: '/portfolio/trafego-pago/tapiocaria-dona-moca/story-03-combo-dona-flor.png',
    label: 'Post Story • Combo Dona Flor',
    alt: 'Anúncio da Tapiocaria Dona Moça: Post Story • Combo Dona Flor'
  },
  {
    type: 'video',
    src: '/portfolio/trafego-pago/tapiocaria-dona-moca/video-01-vertical.mp4?v=2',
    poster: '/portfolio/trafego-pago/tapiocaria-dona-moca/video-01-poster.jpg?v=2',
    label: 'Vídeo vertical 1',
    alt: 'Anúncio da Tapiocaria Dona Moça: Vídeo vertical 1',
    subline: 'Editado com legendas, música e narração.'
  },
  {
    type: 'video',
    src: '/portfolio/trafego-pago/tapiocaria-dona-moca/video-02-vertical.mp4?v=2',
    poster: '/portfolio/trafego-pago/tapiocaria-dona-moca/video-02-poster.jpg?v=2',
    label: 'Vídeo vertical 2',
    alt: 'Anúncio da Tapiocaria Dona Moça: Vídeo vertical 2',
    subline: 'Editado com legendas, música e narração.'
  }
];

export const CaseResultsSection: React.FC<CaseResultsSectionProps> = ({ onNavigate }) => {
  // Lightbox state
  const [lightboxItems, setLightboxItems] = useState<LightboxItem[] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [showNatanProof, setShowNatanProof] = useState<boolean>(false);

  // Video playback management: pause other videos when one plays
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Horizontal scroll rail refs
  const gmnRailRef = useRef<HTMLDivElement>(null);
  const tapiocaRailRef = useRef<HTMLDivElement>(null);

  // Natan testimonial from agency data
  const natanTestimonial = REAL_TESTIMONIALS.find(t => t.id === 'feedback-natan') || {
    id: 'feedback-natan',
    name: 'Natan • Assistência Técnica de Eletrodomésticos',
    project: 'Assistência Técnica de Eletrodomésticos',
    serviceType: 'Perfil Google Meu Negócio',
    text: 'Tem muita gente que liga, ótimo, muito obrigado, estou trabalhando pra lhe pagar.',
    avatarText: 'NT',
    verified: true,
    rating: 5,
    feedbackImage: '/portfolio/feedbacks/Story 7 - Natan - crescimento da assistencia tecnica no Google meu negocio.jpg'
  };

  const handleOpenGmnLightbox = (index: number) => {
    setLightboxItems(GMN_CARDS);
    setLightboxIndex(index);
  };

  const handleOpenMetricsLightbox = () => {
    setLightboxItems([
      {
        src: '/portfolio/trafego-pago/tapiocaria-dona-moca/metricas-meta-business-suite.png',
        title: 'Painel do Meta Business Suite',
        alt: 'Painel do Meta Business Suite com alcance, visualizações, interações e cliques no link da campanha da Tapiocaria Dona Moça.',
        note: 'Números do painel do Meta Business Suite, no período exibido no print. O alcance de 106 mil vem dos anúncios.'
      }
    ]);
    setLightboxIndex(0);
  };

  const handleOpenTapiocaCreativeLightbox = (creativeSrc: string) => {
    // Only image creatives open in the lightbox
    const imageCreatives: LightboxItem[] = TAPIOCA_CREATIVES
      .filter(c => c.type === 'image')
      .map(c => ({
        src: c.src,
        title: c.label,
        alt: c.alt
      }));

    const targetIdx = imageCreatives.findIndex(c => c.src === creativeSrc);
    setLightboxItems(imageCreatives);
    setLightboxIndex(targetIdx >= 0 ? targetIdx : 0);
  };

  const closeLightbox = useCallback(() => {
    setLightboxItems(null);
  }, []);

  // Lock body scroll and handle keyboard navigation when lightbox is open
  useEffect(() => {
    if (lightboxItems !== null || showNatanProof) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (showNatanProof && e.key === 'Escape') {
        setShowNatanProof(false);
        return;
      }
      if (lightboxItems === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex(prev => (prev - 1 + lightboxItems.length) % lightboxItems.length);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex(prev => (prev + 1) % lightboxItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxItems, showNatanProof, closeLightbox]);

  // Touch swipe support for lightbox
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || !lightboxItems || lightboxItems.length <= 1) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      // swipe left -> next
      setLightboxIndex(prev => (prev + 1) % lightboxItems.length);
    } else if (diff < -50) {
      // swipe right -> prev
      setLightboxIndex(prev => (prev - 1 + lightboxItems.length) % lightboxItems.length);
    }
    touchStartXRef.current = null;
  };

  const scrollRail = (railRef: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (!railRef.current) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    railRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleVideoPlay = (index: number) => {
    videoRefs.current.forEach((v, idx) => {
      if (idx !== index && v && !v.paused) {
        v.pause();
      }
    });
  };

  const currentItem = lightboxItems ? lightboxItems[lightboxIndex] : null;

  return (
    <section className="space-y-16">
      {/* ===================================================================== */}
      {/* TASK 1: Block Header                                                  */}
      {/* ===================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-bold text-[#00FFFF] shadow-sm">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>CASES DE RESULTADO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Resultados reais: Google Meu Negócio e Tráfego Pago
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Números de painéis reais e peças de campanhas feitas para negócios locais.
          </p>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* TASK 3: Sub-block 1: Google Meu Negócio                               */}
      {/* ===================================================================== */}
      <div
        id="case-google-meu-negocio"
        className="scroll-mt-28 sm:scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        {/* Sub-block Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-white/[0.06]">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono font-bold text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PERFIS LOCAIS NO GOOGLE</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Google Meu Negócio: resultados de perfis otimizados
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Alguns dos perfis em que trabalhei, com os números dos próprios painéis do Google Meu Negócio.
            </p>

            <p className="text-xs text-gray-400 font-mono">
              Artes montadas a partir de prints reais dos painéis do Google Meu Negócio, com os números originais.
            </p>
          </div>

          {/* Desktop Arrow Controls */}
          <div className="hidden sm:flex items-center gap-2 shrink-0 self-end">
            <button
              type="button"
              onClick={() => scrollRail(gmnRailRef, 'left')}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
              title="Voltar cards"
              aria-label="Voltar cards do Google Meu Negócio"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollRail(gmnRailRef, 'right')}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
              title="Avançar cards"
              aria-label="Avançar cards do Google Meu Negócio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll-Snap Rail */}
        <div className="relative">
          <div
            ref={gmnRailRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {GMN_CARDS.map((card, idx) => (
              <div
                key={card.src}
                className="w-[78vw] sm:w-[280px] shrink-0 snap-start rounded-2xl bg-[#18181B] border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] transition-all overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                {/* Image (aspect-ratio 9/16, object-fit cover) */}
                <div
                  onClick={() => handleOpenGmnLightbox(idx)}
                  className="relative w-full aspect-[9/16] bg-[#121214] overflow-hidden cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenGmnLightbox(idx);
                    }
                  }}
                  aria-label={`Ampliar resultado de ${card.title}`}
                >
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Bottom-right zoom icon (keeps top ~25% free of overlays) */}
                  <div className="absolute bottom-3 right-3">
                    <div className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md text-emerald-400 border border-white/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Collapsed Card Info: badge + niche chip, title, button */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-3.5 border-t border-white/[0.06]">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider text-emerald-300 bg-emerald-500/15 border border-emerald-500/30">
                        {card.badge}
                      </span>
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30">
                        {card.niche}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                      {card.title}
                    </h4>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenGmnLightbox(idx)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/40 text-gray-200 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ampliar e ver detalhes</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile swipe helper */}
          <div className="sm:hidden text-center text-[11px] font-mono text-gray-400 pt-1">
            ← Deslize para ver todos os resultados →
          </div>
        </div>

        {/* ===================================================================== */}
        {/* Below the rail: Reused Testimonial Entry for Natan                    */}
        {/* ===================================================================== */}
        <div className="rounded-2xl bg-[#18181B] border border-white/[0.08] hover:border-emerald-500/30 p-6 sm:p-7 shadow-lg transition-all">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              {/* Stars & Verified Badge */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-emerald-400" aria-label="Avaliação 5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <CheckCheck className="w-3.5 h-3.5" />
                  <span>Print Real Comprovado</span>
                </span>
              </div>

              {/* Quote */}
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed italic">
                &ldquo;{natanTestimonial.text}&rdquo;
              </p>

              {/* Author & Project */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {natanTestimonial.avatarText || 'NT'}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {natanTestimonial.name}
                  </h4>
                  <span className="text-xs text-gray-400 font-mono">
                    {natanTestimonial.serviceType}
                  </span>
                </div>
              </div>
            </div>

            {/* Proof View Button if available */}
            {natanTestimonial.feedbackImage && (
              <button
                type="button"
                onClick={() => setShowNatanProof(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/40 text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer self-start md:self-center"
              >
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>Ver print do feedback</span>
              </button>
            )}
          </div>
        </div>

        {/* Closing row */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#141416] to-[#18181B] border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-[18px] font-medium text-gray-200 text-center sm:text-left" style={{ fontSize: '18px' }}>
            Quer entender como isso funcionaria no seu negócio?
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>

            <a
              href="/servicos/google-meu-negocio"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('servico-google-meu-negocio');
                } else {
                  window.history.pushState(null, '', '/servicos/google-meu-negocio');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-emerald-300 hover:text-white text-xs sm:text-sm font-semibold transition-all group cursor-pointer"
            >
              <span>Como funciona o serviço</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* TASK 4: Sub-block 2: Tráfego Pago                                     */}
      {/* ===================================================================== */}
      <div
        id="case-trafego-pago"
        className="scroll-mt-28 sm:scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10"
      >
        {/* Header */}
        <div className="space-y-3 pb-2 border-b border-white/[0.06]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono font-bold text-[#C754F0]">
            <Target className="w-3.5 h-3.5" />
            <span>CASE DE RESULTADO • TRÁFEGO PAGO</span>
          </div>

          <h3 className="text-[26px] font-extrabold text-white tracking-tight" style={{ fontSize: '26px' }}>
            Tapiocaria Dona Moça
          </h3>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal max-w-3xl">
            Campanha de Meta Ads (Facebook e Instagram) em Salvador/BA, com artes para feed e stories e dois vídeos verticais.
          </p>
        </div>

        {/* Narrative & Strategy: a) O que foi feito + b) Como os anúncios são acompanhados */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* a) O que foi feito */}
          <div className="lg:col-span-6 rounded-2xl bg-[#18181B] border border-white/[0.08] p-6 sm:p-7 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00FFFF] block">
              O que foi feito
            </span>

            <ul className="space-y-3 text-sm sm:text-base text-gray-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00FFFF] shrink-0 mt-0.5" />
                <span>Gestão da campanha no Meta Ads (Facebook e Instagram)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00FFFF] shrink-0 mt-0.5" />
                <span>Criação de parte das artes de feed e stories</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00FFFF] shrink-0 mt-0.5" />
                <span>Edição de 2 vídeos verticais, com legendas, música e narração, a partir de gravações simples feitas por conhecidos da proprietária</span>
              </li>
            </ul>
          </div>

          {/* b) Como os anúncios são acompanhados */}
          <div className="lg:col-span-6 rounded-2xl bg-[#18181B] border border-white/[0.08] p-6 sm:p-7 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C754F0] block">
              Como os anúncios são acompanhados
            </span>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
              Vídeos e imagens são acompanhados pelos mesmos dados de qualquer anúncio: visualizações, alcance, cliques, engajamento e retenção. Os dois vídeos curtos (53 s e 22 s) foram usados para testar qual trazia mais visualizações, alcance, cliques, engajamento e retenção.
            </p>
          </div>
        </div>

        {/* c) Metrics: Meta Business Suite Print + 4 Stat Tiles */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Clean unedited print */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div
                onClick={handleOpenMetricsLightbox}
                className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#C754F0]/60 transition-all cursor-pointer group shadow-xl bg-[#121214]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenMetricsLightbox();
                  }
                }}
                aria-label="Ampliar painel do Meta Business Suite"
              >
                <img
                  src="/portfolio/trafego-pago/tapiocaria-dona-moca/metricas-meta-business-suite.png"
                  alt="Painel do Meta Business Suite com alcance, visualizações, interações e cliques no link da campanha da Tapiocaria Dona Moça."
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />

                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md text-[#C754F0] border border-white/20 flex items-center justify-center group-hover:bg-[#C754F0] group-hover:text-black transition-all shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Stat Tiles */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#18181B] border border-purple-500/20 flex flex-col justify-center space-y-1 shadow-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#C754F0]">
                  106 mil
                </span>
                <span className="text-xs sm:text-sm text-gray-300 font-medium">
                  alcance dos anúncios
                </span>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#18181B] border border-purple-500/20 flex flex-col justify-center space-y-1 shadow-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#C754F0]">
                  949
                </span>
                <span className="text-xs sm:text-sm text-gray-300 font-medium">
                  cliques no link
                </span>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#18181B] border border-purple-500/20 flex flex-col justify-center space-y-1 shadow-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#C754F0]">
                  552
                </span>
                <span className="text-xs sm:text-sm text-gray-300 font-medium">
                  interações com o conteúdo
                </span>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#18181B] border border-purple-500/20 flex flex-col justify-center space-y-1 shadow-md">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#C754F0]">
                  33,3 mil
                </span>
                <span className="text-xs sm:text-sm text-gray-300 font-medium">
                  visualizações
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 font-mono">
            Números do painel do Meta Business Suite, no período exibido no print. O alcance de 106 mil vem dos anúncios.
          </p>
        </div>

        {/* d) Creatives rail: ALL ads (5 images + 2 videos) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div>
              <h4 className="text-[20px] font-bold text-white" style={{ fontSize: '20px' }}>
                Peças da campanha (Feed, Stories e Vídeos)
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 font-mono">
                Criativos reais veiculados na campanha da Tapiocaria Dona Moça.
              </p>
            </div>

            {/* Desktop arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollRail(tapiocaRailRef, 'left')}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
                title="Voltar criativos"
                aria-label="Voltar criativos da Tapiocaria"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollRail(tapiocaRailRef, 'right')}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer"
                title="Avançar criativos"
                aria-label="Avançar criativos da Tapiocaria"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Rail with FIXED HEIGHT: ~420px desktop / ~360px mobile and width: auto */}
          <div
            ref={tapiocaRailRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory scroll-smooth items-stretch"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {TAPIOCA_CREATIVES.map((creative, idx) => (
              <div
                key={creative.src}
                className="shrink-0 snap-start rounded-2xl bg-[#18181B] border border-white/[0.08] hover:border-purple-500/40 transition-all overflow-hidden flex flex-col justify-between shadow-xl group"
              >
                {/* Media area with FIXED HEIGHT: ~420px desktop / ~360px mobile, width: auto */}
                <div className="h-[360px] md:h-[420px] bg-[#121214] flex items-center justify-center relative overflow-hidden">
                  {creative.type === 'image' ? (
                    <div
                      onClick={() => handleOpenTapiocaCreativeLightbox(creative.src)}
                      className="relative h-full w-auto cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleOpenTapiocaCreativeLightbox(creative.src);
                        }
                      }}
                      aria-label={`Ampliar ${creative.label}`}
                    >
                      <img
                        src={creative.src}
                        alt={creative.alt}
                        className="h-full w-auto max-w-none object-contain group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                      />

                      <div className="absolute top-3 right-3">
                        <div className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md text-[#00FFFF] border border-white/20 flex items-center justify-center group-hover:bg-[#00FFFF] group-hover:text-black transition-all shadow-md">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-full w-auto flex items-center justify-center bg-black">
                      <video
                        key={creative.src}
                        ref={el => { videoRefs.current[idx] = el; }}
                        poster={creative.poster}
                        controls
                        controlsList="nodownload"
                        playsInline
                        preload="metadata"
                        onPlay={() => handleVideoPlay(idx)}
                        className="h-full w-auto max-w-none object-contain"
                      >
                        <source src={creative.src} type="video/mp4" />
                        Seu navegador não suporta a reprodução deste vídeo.
                      </video>
                    </div>
                  )}
                </div>

                {/* Label and Subline */}
                <div className="p-3.5 sm:p-4 border-t border-white/[0.06] bg-[#141416] space-y-1">
                  <h5 className="text-xs sm:text-sm font-bold text-white truncate max-w-[260px]">
                    {creative.label}
                  </h5>
                  {creative.subline && (
                    <p className="text-[11px] text-gray-400 font-mono">
                      {creative.subline}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile swipe helper */}
          <div className="sm:hidden text-center text-[11px] font-mono text-gray-400 pt-1" style={{ fontSize: '11px' }}>
            ← Deslize para ver todos os anúncios e vídeos →
          </div>
        </div>

        {/* e) Closing row */}
        <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#141416] to-[#18181B] border border-purple-500/25 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-[18px] font-medium text-gray-200 text-center sm:text-left" style={{ fontSize: '18px' }}>
            Quer entender como uma campanha funcionaria no seu negócio?
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>

            <a
              href="/servicos/trafego-pago"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('servico-trafego-pago');
                } else {
                  window.history.pushState(null, '', '/servicos/trafego-pago');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-purple-300 hover:text-white text-xs sm:text-sm font-semibold transition-all group cursor-pointer"
            >
              <span>Como funciona o serviço</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* TASK 5: Shared Lightbox Modal                                         */}
      {/* ===================================================================== */}
      {lightboxItems && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Lightbox Container */}
          <div
            className="relative w-full max-w-5xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close & Counter Bar */}
            <div className="absolute top-3 right-3 z-30 flex items-center gap-2">
              {lightboxItems.length > 1 && (
                <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-black/75 text-gray-300 border border-white/15 backdrop-blur-md">
                  {lightboxIndex + 1} de {lightboxItems.length}
                </span>
              )}
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2 rounded-full bg-black/75 hover:bg-black text-gray-300 hover:text-white border border-white/15 transition-all cursor-pointer backdrop-blur-md"
                title="Fechar (Esc)"
                aria-label="Fechar lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Left Column: Image (Desktop >= 900px max-height 88vh contain; Mobile max-height 55vh) */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[260px] max-h-[55vh] lg:max-h-[88vh]">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="w-full h-full max-h-[55vh] lg:max-h-[88vh] object-contain"
              />

              {/* Prev / Next Arrows within same rail */}
              {lightboxItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(prev => (prev - 1 + lightboxItems.length) % lightboxItems.length)
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#00FFFF] border border-white/20 transition-all shadow-xl cursor-pointer"
                    title="Anterior (Seta para a esquerda)"
                    aria-label="Item anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex(prev => (prev + 1) % lightboxItems.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#00FFFF] border border-white/20 transition-all shadow-xl cursor-pointer"
                    title="Próximo (Seta para a direita)"
                    aria-label="Próximo item"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Right Column: Details Panel (~360px on desktop; below and scrollable on mobile) */}
            {(currentItem.details || currentItem.note || currentItem.title) && (
              <div className="w-full lg:w-[360px] shrink-0 p-6 sm:p-7 bg-[#18181B] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between overflow-y-auto space-y-5">
                <div className="space-y-4">
                  {currentItem.badge && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/30">
                      {currentItem.badge}
                    </span>
                  )}

                  {currentItem.niche && (
                    <div>
                      <span className="text-xs font-mono uppercase text-gray-400 block mb-1">
                        Segmento do cliente
                      </span>
                      <span className="text-sm font-semibold text-emerald-400">
                        {currentItem.niche}
                      </span>
                    </div>
                  )}

                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {currentItem.title}
                  </h3>

                  {currentItem.details && (
                    <p className="text-sm text-gray-200 leading-relaxed font-normal">
                      {currentItem.details}
                    </p>
                  )}

                  {currentItem.note && (
                    <p className="text-xs text-gray-400 font-mono leading-relaxed pt-2 border-t border-white/10">
                      {currentItem.note}
                    </p>
                  )}
                </div>

                {/* Action button if details exist */}
                {currentItem.details && (
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={AGENCY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all text-center"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Conversar sobre o meu negócio</span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal for Natan's Proof Image */}
      {showNatanProof && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setShowNatanProof(false)}
        >
          <div
            className="relative max-w-xl w-full bg-[#18181B] border border-emerald-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center max-h-[92vh] overflow-y-auto space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-emerald-400">
                Print Real Comprovado • Natan
              </span>
              <button
                type="button"
                onClick={() => setShowNatanProof(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full bg-black rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={natanTestimonial.feedbackImage}
                alt="Print real do feedback de Natan sobre o Google Meu Negócio"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
