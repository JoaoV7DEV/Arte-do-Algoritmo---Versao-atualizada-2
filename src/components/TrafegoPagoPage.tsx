import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Target,
  BarChart3,
  Clock,
  HelpCircle,
  ChevronDown,
  Camera,
  FileCheck,
  TrendingUp,
  CheckCircle2,
  Eye,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';
import { BrandIcon } from './BrandIcon';

interface TrafegoPagoPageProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

export const TrafegoPagoPage: React.FC<TrafegoPagoPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);
  const [selectedCreativeIndex, setSelectedCreativeIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isProcessModalOpen || selectedCreativeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isProcessModalOpen, selectedCreativeIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedCreativeIndex !== null) setSelectedCreativeIndex(null);
        if (isProcessModalOpen) setIsProcessModalOpen(false);
      }
      if (selectedCreativeIndex !== null) {
        if (e.key === 'ArrowLeft') {
          setSelectedCreativeIndex(
            (prev) => (prev! - 1 + tapiocaCreatives.length) % tapiocaCreatives.length
          );
        } else if (e.key === 'ArrowRight') {
          setSelectedCreativeIndex((prev) => (prev! + 1) % tapiocaCreatives.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isProcessModalOpen, selectedCreativeIndex]);

  const handleBackToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('servicos', 'pilar-presenca-digital');
    } else {
      window.history.pushState(null, '', '/servicos#pilar-presenca-digital');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleCaseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('projetos', 'case-trafego-pago');
    } else {
      window.history.pushState(null, '', '/projetos#case-trafego-pago');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const tapiocaCreatives = [
    {
      src: '/servicos/trafego-pago/anuncio-feed-1.png',
      title: 'Post Feed',
      tag: 'Anuncio em Feed',
      formatBadge: 'Feed 4:5',
      formatLabel: 'Formato Feed (4:5)',
      desc: 'Anúncio em imagem para o feed do Instagram com foco em oferta e pedidos diretos no WhatsApp.',
    },
    {
      src: '/servicos/trafego-pago/anuncio-feed-2.png',
      title: 'Post Feed',
      tag: 'Anuncio em Feed',
      formatBadge: 'Feed 4:5',
      formatLabel: 'Formato Feed (4:5)',
      desc: 'Peça promocional no feed com foco em combo e atração de clientes locais da região.',
    },
    {
      src: '/servicos/trafego-pago/anuncio-story-1.png',
      title: 'Post Story',
      tag: 'Anuncio em Stories',
      formatBadge: 'Story 9:16',
      formatLabel: 'Formato Stories Completo (9:16)',
      desc: 'Criativo vertical dinâmico em formato Stories voltado para engajamento e pedidos rápidos via delivery.',
    },
  ];

  const faqs = [
    {
      q: 'Preciso ter site pra anunciar?',
      a: 'Não necessariamente, dá pra direcionar pro WhatsApp, Instagram ou uma landing page, depende do seu objetivo.',
    },
    {
      q: 'Quanto preciso investir em anúncio, além do seu serviço?',
      a: 'Começa baixo, o suficiente pra testar, a gente define o valor certo na reunião, olhando seu nicho e objetivo.',
    },
    {
      q: 'Em quanto tempo vejo resultado?',
      a: 'Varia por negócio, mas os primeiros sinais de performance geralmente aparecem nas primeiras semanas, enquanto a campanha é otimizada.',
    },
    {
      q: 'E se eu não tiver fotos ou vídeos do meu produto/serviço?',
      a: 'Sem problema, eu crio o criativo com apoio de IA ou imagem de referência, mas material real sempre traz mais autenticidade e resultado.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#272727] text-white selection:bg-[#E71870] selection:text-white pb-24">
      {/* Top Header / Breadcrumb Hero (Compatible with transparent header) */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#18181B] via-[#202023] to-[#272727] border-b border-white/5 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute -top-16 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#C754F0]/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-16 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#00FFFF]/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <div className="mb-6">
            <a
              href="/servicos"
              onClick={handleBackToServices}
              id="back-to-services-link"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-[#00FFFF] transition-colors group px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar para Serviços</span>
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#00FFFF]/10 via-[#C754F0]/15 to-[#E71870]/10 border border-[#C754F0]/30 text-xs font-mono text-purple-200 font-bold shadow-sm">
                <Target className="w-3.5 h-3.5 text-[#00FFFF]" />
                <span>ÁREA 03 • TRÁFEGO PAGO</span>
              </span>
              <span className="text-xs sm:text-sm font-mono text-gray-400">
                Meta Ads (Instagram / Facebook) & Google Ads
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Tráfego Pago que Leva Cliente até Você
            </h1>

            <p className="text-lg sm:text-2xl text-gray-200 font-medium max-w-3xl leading-relaxed">
              Anúncios pensados pro seu negócio local ser encontrado por quem já quer comprar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
        {/* ========================================================================= */}
        {/* 2. O que é / pra quem é (UNBOXED: Plain text directly on page background) */}
        {/* ========================================================================= */}
        <section className="py-2 space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 font-mono uppercase text-[#00FFFF] font-bold tracking-wider">
            <BrandIcon icon={Sparkles} size="sm" variant="cyan-magenta" />
            <span className="text-[14px]">O QUE É E PARA QUEM É?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Para quem precisa parar de depender apenas de indicação
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal pt-1">
            Gestão completa de campanhas no Meta Ads e Google Ads, pensada pra negócios locais e prestadores de serviço que querem parar de depender só do boca a boca e começar a aparecer pra quem está procurando o que eles oferecem, na hora certa.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 3. Como funciona (ASYMMETRIC DESKTOP LAYOUT + WIDE LOWER CARD)           */}
        {/* ========================================================================= */}
        <section className="tp-compact space-y-6 pt-2" aria-labelledby="tp-process-title">
          {/* Top 2 Columns: Left Narrative, Right 2 Creative Paths */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (6 cols on desktop): Intro Narrative / Compact Block */}
            <div className="lg:col-span-6 space-y-4">
              <span className="tp-badge text-[14px] font-mono uppercase text-[#C754F0] block font-bold tracking-wider">
                Estratégia Passo a Passo
              </span>
              <h2 id="tp-process-title" className="tp-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Como funciona o processo?
              </h2>
              <p className="tp-summary text-base sm:text-lg text-gray-200 leading-relaxed pt-1">
                <strong className="text-white font-bold">Cuido da estratégia, segmentação e otimização do início ao fim.</strong> Defino o público ideal, ajusto o investimento conforme o desempenho e entrego relatórios simples e periódicos. Trabalho com testes contínuos e decisões baseadas em dados, não em achismo.
                <span className="block pt-3">
                  Se quiser entender o processo por etapas com mais detalhes, clique no botão <strong className="text-white font-bold">Saiba mais sobre o processo</strong> abaixo. Se já entendeu e quer seguir adiante, <strong className="text-white font-bold">chame-me no WhatsApp</strong> para definir orçamento ou agendar uma reunião.
                </span>
              </p>

              {/* Responsive CTA Group: stacked on mobile, inline side-by-side on desktop */}
              <div className="tp-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-3 relative z-10">
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tp-cta-primary w-full sm:w-auto lg:max-w-[260px] inline-flex items-center justify-center gap-2 px-5 py-3 lg:px-4 lg:py-2.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all text-center whitespace-nowrap overflow-hidden text-ellipsis shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span className="hidden lg:inline truncate">Agende uma reunião</span>
                  <span className="lg:hidden">Agende uma reunião (Google Meet / WhatsApp)</span>
                </a>
                <button
                  type="button"
                  id="open-tp-modal"
                  aria-haspopup="dialog"
                  aria-controls="tp-modal"
                  onClick={() => setIsProcessModalOpen(true)}
                  className="tp-cta-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 lg:px-3.5 lg:py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer text-center whitespace-nowrap shrink-0"
                >
                  <span>Saiba mais sobre o processo</span>
                </button>
              </div>
            </div>

            {/* Right Column (6 cols on desktop): The 2 Creatives Pathways (BOXED) */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Sobre os criativos (as artes e vídeos do anúncio), tem dois caminhos:
              </h3>

              <div className="space-y-3.5">
                {/* Caminho 1 */}
                <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-cyan-500/20 hover:border-cyan-500/40 transition-all space-y-2.5 shadow-lg group">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-mono text-[#00FFFF] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      Caminho 1: Material pronto
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#00FFFF]/70" />
                  </div>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                    Você já tem o material pronto? Eu uso, testo e otimizo em cima dele.
                  </p>
                </div>

                {/* Caminho 2 */}
                <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-pink-500/20 hover:border-pink-500/40 transition-all space-y-2.5 shadow-lg group">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-mono text-[#E71870] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                      Caminho 2: Produção dedicada
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#E71870]/70" />
                  </div>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                    Não tem? Eu produzo pra você, com ou sem apoio de inteligência artificial, dependendo do que fizer mais sentido pro seu caso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Wide Rectangular Card (Spanning full width below both columns, replacing empty space) */}
          <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#1A1A1E] border border-white/[0.1] hover:border-[#00FFFF]/30 transition-all space-y-3 shadow-lg">
            <div className="flex items-center gap-2.5">
              <BrandIcon icon={BarChart3} size="sm" variant="cyan-magenta" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Decisão por dados, não achismo
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Pra decidir se o anúncio vai ser em imagem, vídeo ou os dois, eu analiso o que costuma performar melhor no seu nicho. Por exemplo: pra petshop, análises mostram que vídeo geralmente converte mais que imagem, nesse caso, testamos primeiro em vídeo pra otimizar o resultado mais rápido. Se o nicho pedir imagem, ou os dois formatos, seguimos por ali. Sempre com base em dado, não em achismo.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TASK 2 & 4: REAL CAMPAIGN IMAGERY STRIP + TYPOGRAPHIC RESULT HIGHLIGHT    */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
            <div className="space-y-2 max-w-2xl">
              {/* Task 4: Typographic Result Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#00FFFF]/15 via-[#C754F0]/20 to-[#E71870]/15 border border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse" />
                <span className="text-xs font-mono font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-purple-200 to-[#E71870]">
                  Alcance real gerado para negócios locais
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Exemplo real de Anuncio produzido
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                Criativos usados na campanha de Facebook Ads (MetaAds) para a <strong className="text-white">Tapiocaria Dona Moça</strong> em Salvador/BA (Post Feed, Stories e Video).
              </p>
            </div>

            <div className="self-start md:self-end shrink-0 pt-1">
              <a
                href="/projetos#case-trafego-pago"
                onClick={handleCaseClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00FFFF]/15 hover:from-[#00FFFF]/25 to-[#C754F0]/15 hover:to-[#C754F0]/25 border border-[#00FFFF]/40 hover:border-[#00FFFF] text-white text-sm font-semibold transition-all shadow-sm group cursor-pointer"
              >
                <span>Saiba mais deste serviço</span>
                <ArrowRight className="w-4 h-4 text-[#00FFFF] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Gallery: 3 images side by side on desktop, horizontal scroll carousel on mobile */}
          <div className="relative">
            <div className="flex md:grid md:grid-cols-3 gap-5 items-stretch overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory">
              {tapiocaCreatives.map((item, idx) => (
                <div
                  key={`${item.title}-${idx}`}
                  onClick={() => setSelectedCreativeIndex(idx)}
                  className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center rounded-2xl bg-[#1A1A1E] border border-white/10 hover:border-[#00FFFF]/50 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all overflow-hidden flex flex-col group shadow-xl cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCreativeIndex(idx);
                    }
                  }}
                  aria-label={`Ver detalhes completos do anúncio ${item.title}`}
                >
                  {/* Image container with aspect-ratio: 4:5 for uniform card height */}
                  <div className="relative w-full aspect-[4/5] bg-[#121214] overflow-hidden border-b border-white/10">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono font-bold text-[#00FFFF] border border-white/15">
                      {item.tag}
                    </div>

                    {/* Quick view indicator */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-xs font-mono font-bold text-[#00FFFF] border border-[#00FFFF]/40 group-hover:bg-[#00FFFF] group-hover:text-black transition-all shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ver detalhes</span>
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-4 sm:p-5 space-y-1.5 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00FFFF] transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                        {item.formatBadge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Mobile swipe helper */}
            <div className="sm:hidden text-center text-[11px] font-mono text-gray-400 pt-2">
              ← Deslize para ver todos os criativos • Toque para ampliar →
            </div>
          </div>
        </section>

        {/* Lightbox Pop-up Modal for Full Creative View */}
        {selectedCreativeIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="creative-modal-title"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedCreativeIndex(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-[#18181B] border border-cyan-500/30 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4 flex flex-col items-center max-h-[92vh] overflow-y-auto scrollbar-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[#00FFFF]">
                    {tapiocaCreatives[selectedCreativeIndex].tag}
                  </span>
                  <span className="text-xs text-gray-300 font-mono hidden sm:inline">
                    {tapiocaCreatives[selectedCreativeIndex].formatLabel}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gray-400">
                    {selectedCreativeIndex + 1} de {tapiocaCreatives.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCreativeIndex(null)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all cursor-pointer"
                    title="Fechar visualização"
                    aria-label="Fechar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Image Viewport with Nav Arrows */}
              <div className="relative w-full flex items-center justify-center bg-[#0F0F11] rounded-2xl overflow-hidden p-2 sm:p-3 border border-white/5 min-h-[300px]">
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedCreativeIndex(
                      (selectedCreativeIndex - 1 + tapiocaCreatives.length) %
                        tapiocaCreatives.length
                    )
                  }
                  className="absolute left-2.5 sm:left-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#00FFFF] border border-white/20 transition-all shadow-xl cursor-pointer"
                  title="Criativo anterior"
                  aria-label="Criativo anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* The Full, Uncropped Image in Native Resolution (e.g. full 9:16 for Stories!) */}
                <img
                  src={tapiocaCreatives[selectedCreativeIndex].src}
                  alt={tapiocaCreatives[selectedCreativeIndex].title}
                  className="max-h-[65vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300"
                />

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedCreativeIndex(
                      (selectedCreativeIndex + 1) % tapiocaCreatives.length
                    )
                  }
                  className="absolute right-2.5 sm:right-4 z-20 p-2 sm:p-2.5 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#00FFFF] border border-white/20 transition-all shadow-xl cursor-pointer"
                  title="Próximo criativo"
                  aria-label="Próximo criativo"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Modal Footer Description */}
              <div className="w-full space-y-1.5 text-center sm:text-left pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3
                    id="creative-modal-title"
                    className="text-base sm:text-lg font-bold text-white"
                  >
                    {tapiocaCreatives[selectedCreativeIndex].title} • Tapiocaria Dona Moça
                  </h3>
                  <span className="text-xs font-mono text-[#00FFFF]">
                    {tapiocaCreatives[selectedCreativeIndex].formatLabel}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {tapiocaCreatives[selectedCreativeIndex].desc}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 4. O que eu preciso de você (UNBOXED OUTER CONTAINER + BOXED REQUISITOS)  */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="space-y-2">
            <span className="text-[14px] font-mono uppercase text-yellow-400 block font-bold tracking-wider">
              ALINHAMENTO DE CONTEÚDO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              O que eu preciso de você
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl">
              Se eu for produzir os criativos, pra manter autenticidade e gerar resultado real (não um anúncio genérico), eu preciso de material seu:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-3 shadow-lg">
              <div className="flex items-center gap-3">
                <BrandIcon icon={Camera} size="md" variant="cyan-magenta" />
                <h3 className="text-lg font-bold text-white">Produto físico</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Fotos reais e, se possível, um vídeo mostrando o produto em uso.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-pink-500/30 transition-all space-y-3 shadow-lg">
              <div className="flex items-center gap-3">
                <BrandIcon icon={FileCheck} size="md" variant="cyan-magenta" />
                <h3 className="text-lg font-bold text-white">Serviço</h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Resultados reais, feedback de cliente ou uma boa explicação de como funciona.
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed italic bg-white/[0.02] p-4 sm:p-5 rounded-2xl border border-white/5 max-w-4xl">
            Sem esse material, eu ainda consigo criar com apoio de IA ou imagem de referência, mas quanto mais real for o que você me manda, mais autêntico (e mais resultado) o anúncio traz.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 5. Bônus / diferencial (2 items) (KEEP BOXED: discrete comparable items)  */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div>
            <span className="text-[14px] font-mono uppercase text-emerald-400 block mb-2 font-bold tracking-wider">
              TRANSPARÊNCIA TOTAL
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Diferenciais exclusivos inclusos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-4.5 shadow-lg">
              <BrandIcon icon={BarChart3} size="lg" variant="emerald" />
              <div className="space-y-2">
                <strong className="text-white text-lg sm:text-xl block font-bold">
                  Relatório de performance simplificado
                </strong>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  Relatório de performance simplificado, sem economês, te mostro o que os números significam de verdade pro seu negócio, não só gráfico bonito.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-4.5 shadow-lg">
              <BrandIcon icon={Clock} size="lg" variant="emerald" />
              <div className="space-y-2">
                <strong className="text-white text-lg sm:text-xl block font-bold">
                  Otimização estendida nos primeiros 15 dias
                </strong>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  Otimização estendida nos primeiros 15 dias, sem custo adicional, período em que ajusto a campanha com mais atenção enquanto os dados de performance ainda estão se estabilizando.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. Valor (PARTIAL ACCENT TREATMENT KEPT, NO FULL HEAVY BOX)              */}
        {/* ========================================================================= */}
        <section className="py-6 border-l-4 border-l-[#00FFFF] pl-6 sm:pl-8 space-y-3 max-w-4xl">
          <span className="text-[14px] font-mono uppercase text-cyan-300 block font-bold tracking-wider">
            RETORNO E VISIBILIDADE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Por que investir em tráfego pago agora?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed font-normal">
            Não adianta ter o melhor produto ou serviço da região se ninguém sabe que ele existe. Tráfego pago bem feito coloca seu negócio na frente de quem já está procurando, sem depender só de indicação, sem esperar o cliente &ldquo;passar na frente da loja&rdquo;.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 7. Investimento + observação (UNBOXED: Plain text with generous spacing) */}
        {/* ========================================================================= */}
        <section className="py-4 space-y-4 max-w-4xl">
          <span className="text-[14px] font-mono uppercase text-gray-400 block font-bold tracking-wider">
            CLAREZA SOBRE VALORES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Investimento transparente & expectativa real
          </h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            O investimento tem duas partes: o valor do meu serviço de gestão (acessível, sem comprometer o resultado) e a verba de anúncio, que vai direto pra Meta ou Google, começando com um valor diário baixo, o suficiente pra testar. Se eu for produzir os criativos, isso já entra no orçamento, os valores certos a gente fecha na reunião, olhando o seu caso. Vale lembrar: resultado depende de vários fatores além do anúncio (atendimento, site, verba investida), então não prometo resultado fácil e instantâneo, prometo trabalho com meta clara, acompanhamento de perto e suporte durante todo o contrato, buscando resultado real e alcançável.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 8. Dúvidas frequentes (4 items) (KEEP BOXED: discrete accordion items)    */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="flex items-center gap-3">
            <BrandIcon icon={HelpCircle} size="md" variant="cyan-magenta" />
            <div>
              <span className="text-[14px] font-mono uppercase text-[#C754F0] font-bold tracking-wider block">
                PERGUNTAS E RESPOSTAS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Dúvidas frequentes sobre tráfego pago
              </h2>
            </div>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#18181B] border border-white/[0.08] hover:border-white/[0.15] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-gray-200 leading-relaxed border-t border-white/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. Dual CTA Buttons + 10. Discreet Footer Note                            */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-trafego-pago-whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-base shadow-[0_0_24px_rgba(0,255,255,0.25)] hover:shadow-[0_0_36px_rgba(0,255,255,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>

            <a
              href="/projetos#case-trafego-pago"
              onClick={handleCaseClick}
              id="cta-trafego-pago-case"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.18] text-white font-semibold text-base transition-all duration-200 group shrink-0"
            >
              <span>Ver exemplo real</span>
              <ArrowRight className="w-4 h-4 text-[#C754F0] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="text-[17px] text-gray-300 text-center sm:text-left pt-2 font-medium">
            Ficou com alguma dúvida? Fala comigo no WhatsApp, sem compromisso.
          </p>
        </section>
      </main>

      {/* ========================================== */}
      {/* MODAL ACESSÍVEL COM CONTEÚDO EXPANDIDO     */}
      {/* ========================================== */}
      {isProcessModalOpen && (
        <div
          id="tp-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tp-modal-title"
          className="tp-modal fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Overlay */}
          <div
            className="tp-modal-overlay fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setIsProcessModalOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div
            role="document"
            className="tp-modal-container relative w-full max-w-2xl bg-[#1A1A1E] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto z-10 text-white"
          >
            {/* Modal Header */}
            <div className="tp-modal-header flex items-center justify-between gap-4 pb-4 border-b border-white/10">
              <h3 id="tp-modal-title" className="tp-modal-title text-xl sm:text-2xl font-extrabold text-white">
                Como funciona (passo a passo)
              </h3>
              <button
                type="button"
                id="close-tp-modal"
                aria-label="Fechar modal"
                onClick={() => setIsProcessModalOpen(false)}
                className="tp-modal-close p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="tp-modal-body flex flex-col gap-4 sm:gap-5 text-gray-200">
              {/* 4 Passos */}
              <ol className="tp-steps-list flex flex-col gap-3 list-none p-0 m-0">
                <li className="tp-step-item p-4 rounded-xl bg-[#232328] border border-white/5 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white block mb-0.5">1. Diagnóstico inicial</strong>
                  Reunião por Google Meet ou WhatsApp para entender objetivos, público e orçamento.
                </li>
                <li className="tp-step-item p-4 rounded-xl bg-[#232328] border border-white/5 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white block mb-0.5">2. Planejamento</strong>
                  Escolha de canais (Google/Meta), definição de público e orçamento inicial.
                </li>
                <li className="tp-step-item p-4 rounded-xl bg-[#232328] border border-white/5 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white block mb-0.5">3. Lançamento</strong>
                  Criação e configuração dos anúncios; acompanhamento das primeiras métricas.
                </li>
                <li className="tp-step-item p-4 rounded-xl bg-[#232328] border border-white/5 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white block mb-0.5">4. Otimização contínua</strong>
                  Ajustes de segmentação, investimento e criativos com testes; relatórios simples e periódicos.
                </li>
              </ol>

              {/* Suporte */}
              <div className="tp-support-box p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/25 space-y-1 mt-1">
                <strong className="text-[#00FFFF] text-sm sm:text-base block font-bold">
                  Suporte e Alinhamento:
                </strong>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Comunicação direta por Google Meet ou WhatsApp; todas as decisões são alinhadas com você antes de aplicar mudanças.
                </p>
              </div>

              {/* Exemplos Práticos */}
              <div className="tp-examples-box p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
                <h4 className="text-sm sm:text-base font-bold text-white">Exemplos práticos:</h4>
                <div className="space-y-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-gray-100">Loja ou serviço local:</strong> objetivo de mais visitas e contatos por WhatsApp/telefone → Google Ads (Google Meu Negócio + anúncios de busca) costuma trazer clientes com intenção de compra.
                  </p>
                  <p>
                    <strong className="text-gray-100">Lanchonete / pedidos por WhatsApp ou iFood:</strong> objetivo de pedidos rápidos e reconhecimento local → Meta Ads gera alcance e conversões rápidas; investimento e criativos diferentes. <em className="text-gray-400 not-italic block mt-1">Caso real: campanha para tapiocaria com foco em pedidos via WhatsApp.</em>
                  </p>
                </div>
              </div>

              {/* O que um bom gestor faz hoje */}
              <div className="tp-manager-duties p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
                <h4 className="text-sm sm:text-base font-bold text-white">O que um bom gestor faz hoje:</h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300 list-disc pl-5">
                  <li>Decide por dados: monitora métricas-chave e ajusta campanhas.</li>
                  <li>Testa constantemente: usa testes A/B em criativos e públicos.</li>
                  <li>Alinha com o negócio: escolhe Google ou Meta conforme objetivo.</li>
                  <li>Comunica com clareza: relatórios simples e reuniões regulares.</li>
                  <li>Otimiza o orçamento: maximiza ROI com ajustes contínuos.</li>
                </ul>
              </div>

              {/* Resultados e Próximos Passos */}
              <div className="tp-results-next p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs sm:text-sm text-purple-200 leading-relaxed">
                Ao final de cada ciclo avaliamos ROI e definimos se ampliamos, pausamos ou mudamos a estratégia. Todas as dúvidas e objeções são resolvidas na reunião inicial; lá definimos ferramentas, KPIs e expectativas de resultado.
              </div>
            </div>

            {/* Modal Footer */}
            <div className="tp-modal-footer pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                id="close-tp-modal-btn"
                onClick={() => setIsProcessModalOpen(false)}
                className="tp-cta-close-secondary px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer text-center"
              >
                Fechar
              </button>
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tp-cta-primary inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Agende uma reunião (Google Meet / WhatsApp)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
