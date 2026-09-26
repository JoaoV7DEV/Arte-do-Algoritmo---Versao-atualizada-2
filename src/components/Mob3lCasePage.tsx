import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  ExternalLink,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  FileText,
  CheckCircle2,
  Users,
  Car,
  Eye,
  MousePointer,
  MessageCircle,
  Quote,
  ArrowRight,
  ArrowLeft,
  Calendar,
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { AGENCY_INFO, WEBSITE_GALLERY } from '../data/agencyData';
import { ProjectModal } from './ProjectModal';
import { WebsiteProject } from '../types';

interface Mob3lCasePageProps {
  onNavigate?: (page: 'home' | 'projetos' | 'sobre' | 'projeto-mob3l' | 'projeto-01s', anchor?: string) => void;
}

interface DualFacePrintItem {
  id: string;
  title: string;
  category: string;
  frenteSrc: string;
  versoSrc: string;
  description: string;
  aspectNote: string;
}

interface SinglePrintItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  aspectNote: string;
}

interface SocialPost {
  id: string;
  title: string;
  audience: 'Motoristas Parceiros' | 'Passageiros' | 'Institucional';
  audienceColor: string;
  imageSrc: string;
  fallbackSrc?: string;
  caption: string;
  objective: string;
}

// Brand Colors requested for Section B Swatches
const BRAND_COLORS = [
  { name: 'Amarelo', hex: '#ffda15', border: 'border-yellow-500/40' },
  { name: 'Cinza Claro', hex: '#d6d2d2', border: 'border-white/30' },
  { name: 'Cinza', hex: '#848282', border: 'border-white/20' },
  { name: 'Preto', hex: '#000000', border: 'border-white/30' },
  { name: 'Branco', hex: '#ffffff', border: 'border-zinc-300' }
];

// Dual-Face Print Items
const DUAL_PRINT_ITEMS: DualFacePrintItem[] = [
  {
    id: 'cartao',
    title: 'Cartão de Visita (Frente + Verso)',
    category: 'Material Impresso',
    frenteSrc: '/portfolio/sites/mob3l-cartao-frente.jpg',
    versoSrc: '/portfolio/sites/mob3l-cartao-verso.jpg',
    description:
      'Frente com logotipo oficial e identidade sobre preto fosco; Verso com dados de contato, telefone comercial e QR code para baixar o app.',
    aspectNote: 'Formato horizontal comercial 9x5cm'
  },
  {
    id: 'folder',
    title: 'Folder Institucional (Frente + Verso)',
    category: 'Material Promocional',
    frenteSrc: '/portfolio/sites/mob3l-folder-frente.jpg',
    versoSrc: '/portfolio/sites/mob3l-folder-verso.jpg',
    description:
      'Frente promocional destacando diferenciais da plataforma; Verso com tabela completa de serviços, vantagens e QR code para instalação rápida.',
    aspectNote: 'Peça gráfica dobrável com alta densidade visual'
  }
];

// Single-Face Print Items
const SINGLE_PRINT_ITEMS: SinglePrintItem[] = [
  {
    id: 'outdoor',
    title: 'Outdoor Urbano',
    category: 'Sinalização Externa',
    imageSrc: '/portfolio/sites/mob3l-outdoor.jpg',
    description:
      'Comunicação de alto impacto visual instalada em vias estratégicas de Três Lagoas/MS para fixação da marca.',
    aspectNote: 'Proporção panorâmica 9x3m com leitura rodoviária'
  },
  {
    id: 'windbanner',
    title: 'Windbanner Promocional',
    category: 'Sinalização de PDV & Eventos',
    imageSrc: '/portfolio/sites/mob3l-windbanner.png',
    description:
      'Peça vertical em formato gota/vela para ações presenciais, parcerias locais e pontos de credenciamento.',
    aspectNote: 'Formato vertical esguio com alta visibilidade'
  }
];

// Social Media Pack Posts
const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'recrutamento',
    title: 'Recrutamento de Motoristas',
    audience: 'Motoristas Parceiros',
    audienceColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
    imageSrc: '/portfolio/sites/mob3l-post-recrutamento-motorista.jpg',
    caption: 'Comunicação direta voltada a motoristas parceiros: oportunidade de autonomia, ganhos justos e suporte humanizado.',
    objective: 'Atração e expansão da base de motoristas em Três Lagoas/MS'
  },
  {
    id: 'somar',
    title: 'Vem Somar com a Gente',
    audience: 'Motoristas Parceiros',
    audienceColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
    imageSrc: '/portfolio/sites/mob3l-post-somar.png',
    caption: 'Abordagem alternativa de recrutamento destacando a parceria transparente e valorização do profissional ao volante.',
    objective: 'Fortalecimento do vínculo com a comunidade de condutores'
  },
  {
    id: 'carnaval',
    title: 'Campanha de Carnaval',
    audience: 'Passageiros',
    audienceColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    imageSrc: '/portfolio/sites/mob3l-post-carnaval.png',
    caption: 'Mensagem de conscientização e serviço: segurança no trânsito e comodidade nos dias de festa ("Se beber, não dirija. Vá de MOB3L").',
    objective: 'Prevenção, segurança e lembrança de marca em feriados festivos'
  },
  {
    id: 'agua',
    title: 'Dia Mundial da Água',
    audience: 'Institucional',
    audienceColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    imageSrc: '/portfolio/sites/mob3l-post-agua.png',
    caption: 'Posicionamento institucional conectado a pautas ambientais e valorização dos recursos naturais da região.',
    objective: 'Posicionamento cidadão e reforço de valores socioambientais'
  },
  {
    id: 'consumidor',
    title: 'Dia do Consumidor',
    audience: 'Passageiros',
    audienceColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    imageSrc: '/portfolio/sites/mob3l-post-consumidor.png',
    fallbackSrc: '/portfolio/sites/mob3l-post-consumidor..png',
    caption: 'Reconhecimento e agradecimento aos usuários que confiam na plataforma no dia a dia da cidade.',
    objective: 'Fidelização de passageiros e relacionamento com o público usuário'
  },
  {
    id: 'deuruim',
    title: 'Deu Ruim no Carro? Vai de MOB3L',
    audience: 'Passageiros',
    audienceColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    imageSrc: '/portfolio/sites/mob3l-post-deuruim.png',
    caption: 'Gancho criativo focado na solução imediata de imprevistos do dia a dia: agilidade e socorro em mobilidade.',
    objective: 'Conversão prática baseada em situações reais de necessidade rápida'
  }
];

export const Mob3lCasePage: React.FC<Mob3lCasePageProps> = ({ onNavigate }) => {
  // Navigation / Face toggles
  const [cartaoFace, setCartaoFace] = useState<'frente' | 'verso'>('frente');
  const [folderFace, setFolderFace] = useState<'frente' | 'verso'>('frente');

  // Auto-slideshow on hover for print cards (PC only)
  const [isHoveringCartao, setIsHoveringCartao] = useState(false);
  const [isHoveringFolder, setIsHoveringFolder] = useState(false);

  // Social gallery slide index & hover slideshow
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHoveringSlide, setIsHoveringSlide] = useState(false);

  // Lightboxes & modal states
  const [selectedWebProject, setSelectedWebProject] = useState<WebsiteProject | null>(null);
  const [lightboxPostIndex, setLightboxPostIndex] = useState<number | null>(null);
  const [lightboxPrintData, setLightboxPrintData] = useState<{
    title: string;
    description: string;
    aspectNote: string;
    currentSrc: string;
    isDual: boolean;
    frenteSrc?: string;
    versoSrc?: string;
    face?: 'frente' | 'verso';
  } | null>(null);

  // Desktop Site Screenshot Hover-Scroll state
  const [isSiteScrolled, setIsSiteScrolled] = useState(false);

  // Grab MOB3L from gallery data for the modal
  const mob3lWebProject = WEBSITE_GALLERY.find((p) => p.id === 'mob3l') || null;

  // Auto-alternate cartao on PC hover
  useEffect(() => {
    if (!isHoveringCartao) return;
    const interval = setInterval(() => {
      setCartaoFace((prev) => (prev === 'frente' ? 'verso' : 'frente'));
    }, 2500);
    return () => clearInterval(interval);
  }, [isHoveringCartao]);

  // Auto-alternate folder on PC hover
  useEffect(() => {
    if (!isHoveringFolder) return;
    const interval = setInterval(() => {
      setFolderFace((prev) => (prev === 'frente' ? 'verso' : 'frente'));
    }, 2500);
    return () => clearInterval(interval);
  }, [isHoveringFolder]);

  // Social slideshow interval on PC hover
  useEffect(() => {
    if (!isHoveringSlide) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % SOCIAL_POSTS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isHoveringSlide]);

  // Active section spy for the sticky navigation strip
  const [activeSection, setActiveSection] = useState<string>('secao-site');

  // References for sticky horizontal nav bar and section buttons
  const navScrollRef = useRef<HTMLDivElement>(null);
  const navButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Robust Scroll Spy to update active section on vertical scroll (both down and up)
  useEffect(() => {
    const sections = ['secao-site', 'secao-identidade', 'secao-materiais', 'secao-social'];

    const handleScroll = () => {
      // Bottom of page detection so last section activates when near footer
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      // Viewport trigger threshold for the sticky header
      const headerThreshold = 160;
      let current = sections[0];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerThreshold) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatic smooth horizontal slide animation for mobile & tablet as sections change (down: slide right; up: slide left)
  useEffect(() => {
    const container = navScrollRef.current;
    const targetButton = navButtonRefs.current[activeSection];
    if (!container || !targetButton) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = targetButton.getBoundingClientRect();

    const currentScroll = container.scrollLeft;
    const buttonCenterOffset = buttonRect.left - containerRect.left + currentScroll + (buttonRect.width / 2);
    const targetScrollLeft = buttonCenterOffset - (containerRect.width / 2);

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: 'smooth'
    });
  }, [activeSection]);

  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  const handleBackToProjects = () => {
    if (onNavigate) {
      onNavigate('projetos');
    } else {
      window.history.pushState(null, '', '/projetos');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#121214] text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      {/* ========================================================================= */}
      {/* DEDICATED CASE HEADER */}
      {/* ========================================================================= */}
      <section className="relative pt-36 sm:pt-40 pb-14 sm:pb-18 bg-gradient-to-b from-[#18181B] via-[#141416] to-[#121214] border-b border-white/10 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Back Action */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <button
              onClick={handleBackToProjects}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-medium transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-yellow-400 transition-transform group-hover:-translate-x-1" />
              <span>Voltar para todos os projetos</span>
            </button>

            {/* Breadcrumb path */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate?.('home')}>Início</span>
              <span>/</span>
              <span className="hover:text-white cursor-pointer" onClick={handleBackToProjects}>Projetos</span>
              <span>/</span>
              <span className="text-yellow-400 font-semibold">Case MOB3L</span>
            </div>
          </div>

          {/* Header Main Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-semibold shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Projeto Ativo
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-mono font-semibold">
                  <Sparkles className="w-3 h-3" />
                  Case Aprofundado
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono">
                  <Calendar className="w-3 h-3 text-gray-400" />
                  2025
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono">
                  <MapPin className="w-3 h-3 text-yellow-400" />
                  Três Lagoas / MS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                MOB3L Mobilidade
              </h1>

              <p className="mt-4 text-base sm:text-xl text-gray-300 leading-relaxed font-light">
                Presença digital completa, plataforma web responsiva e sistema de comunicação integrado para aplicativo de mobilidade urbana em Três Lagoas/MS.
              </p>
            </div>

            {/* Quick Meta Pills */}
            <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 text-xs font-mono text-gray-300">
              <div className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-2">
                <span className="text-gray-500 uppercase">Segmento:</span>
                <span className="text-white font-semibold">Mobilidade Urbana</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-2">
                <span className="text-gray-500 uppercase">Públicos:</span>
                <span className="text-yellow-400 font-semibold">Passageiros & Motoristas</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-2">
                <span className="text-gray-500 uppercase">Entregáveis:</span>
                <span className="text-cyan-300 font-semibold">Web • Impresso • Outdoor • Social</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY IN-PAGE SESSION NAVIGATOR (Seções 1 a 4) */}
      <nav className="sticky top-[68px] sm:top-[74px] z-40 bg-[#121214]/95 backdrop-blur-md border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={navScrollRef}
            className="flex items-center justify-between overflow-x-auto py-3.5 sm:py-4 gap-3 scrollbar-none no-scrollbar scroll-smooth"
          >
            <span className="text-[11px] font-mono uppercase text-gray-400 font-bold shrink-0 hidden md:inline">
              Navegar pelo Case:
            </span>

            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 pr-3 sm:pr-0">
              <button
                type="button"
                ref={(el) => { navButtonRefs.current['secao-site'] = el; }}
                onClick={(e) => scrollToSection('secao-site', e)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer shrink-0 ${
                  activeSection === 'secao-site'
                    ? 'bg-yellow-400 text-black shadow-md font-bold border-yellow-400'
                    : 'text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Seção 1 • Site Institucional</span>
              </button>

              <button
                type="button"
                ref={(el) => { navButtonRefs.current['secao-identidade'] = el; }}
                onClick={(e) => scrollToSection('secao-identidade', e)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer shrink-0 ${
                  activeSection === 'secao-identidade'
                    ? 'bg-yellow-400 text-black shadow-md font-bold border-yellow-400'
                    : 'text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Seção 2 • Identidade Visual</span>
              </button>

              <button
                type="button"
                ref={(el) => { navButtonRefs.current['secao-materiais'] = el; }}
                onClick={(e) => scrollToSection('secao-materiais', e)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer shrink-0 ${
                  activeSection === 'secao-materiais'
                    ? 'bg-yellow-400 text-black shadow-md font-bold border-yellow-400'
                    : 'text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Seção 3 • Materiais & PDV</span>
              </button>

              <button
                type="button"
                ref={(el) => { navButtonRefs.current['secao-social'] = el; }}
                onClick={(e) => scrollToSection('secao-social', e)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer shrink-0 ${
                  activeSection === 'secao-social'
                    ? 'bg-yellow-400 text-black shadow-md font-bold border-yellow-400'
                    : 'text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Seção 4 • Redes Sociais</span>
              </button>
            </div>

            <a
              href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
                'Olá João! Vi o case completo da MOB3L e gostaria de solicitar uma proposta para meu projeto.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs transition-colors shrink-0 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Solicitar projeto</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* CASE CONTENT BODY */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* ======================================================================= */}
        {/* SECTION 1 — SITE INSTITUCIONAL */}
        {/* ======================================================================= */}
        <section id="secao-site" className="space-y-6 scroll-mt-36">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-yellow-400 tracking-wider uppercase font-semibold">
                SEÇÃO 1 • PLATAFORMA DIGITAL & WEB
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Site Institucional Oficial
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-md text-left sm:text-right">
              Ambiente web institucional responsivo, projetado para captação de passageiros e credenciamento de motoristas.
            </p>
          </div>

          {/* Preview Card Structure */}
          <div className="rounded-3xl bg-[#141416] border border-white/10 hover:border-yellow-500/40 transition-all duration-300 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left Column: Browser Mockup with Desktop Hover-Scroll & Mobile Manual Touch-Scroll */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0F0F12]">
              {/* Browser Top Chrome Bar */}
              <div className="px-4 py-3 bg-[#18181B] border-b border-white/10 flex items-center justify-between text-xs font-mono shrink-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="px-3 py-1 rounded-md bg-black/50 border border-white/10 text-gray-300 text-[11px] font-mono flex items-center gap-2 max-w-[240px] truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>mob3l.com.br</span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>

              {/* VIEWPORT 1: MOBILE VIEW (Manual touch swipe scroll) */}
              <div className="lg:hidden relative h-[360px] sm:h-[400px] overflow-y-auto bg-[#121214] select-none scrollbar-thin scrollbar-thumb-yellow-500/30 scrollbar-track-black/40">
                <img
                  src="/portfolio/sites/mob3l-completo.png"
                  onError={(e) => {
                    e.currentTarget.src = "/portfolio/sites/Screenshot -  Site Pagina Inicial - MOB3L.png";
                  }}
                  alt="Captura real da Página Inicial completa do site MOB3L"
                  className="w-full h-auto object-contain object-top"
                />

                {/* Top Badges */}
                <div className="sticky top-3 left-3 z-10 float-left pl-3 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-white font-mono text-[10px] font-semibold shadow-lg">
                    SITE COMPLETO
                  </span>
                </div>

                {/* Floating Prompt for Mobile Touch Scroll */}
                <div className="sticky bottom-3 right-3 z-10 float-right pr-3 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-gray-200 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-yellow-500/30 shadow-lg">
                    <MousePointer className="w-3 h-3 text-yellow-400 animate-bounce" />
                    <span>Deslize para rolar o site</span>
                  </span>
                </div>
              </div>

              {/* VIEWPORT 2: DESKTOP VIEW (Framed fold at rest, slow automatic glide on mouse hover) */}
              <div
                className="hidden lg:block relative h-[400px] overflow-hidden bg-[#121214] cursor-pointer group select-none"
                onMouseEnter={() => setIsSiteScrolled(true)}
                onMouseLeave={() => setIsSiteScrolled(false)}
                onClick={() => setIsSiteScrolled(!isSiteScrolled)}
              >
                <img
                  src="/portfolio/sites/mob3l-completo.png"
                  onError={(e) => {
                    e.currentTarget.src = "/portfolio/sites/Screenshot -  Site Pagina Inicial - MOB3L.png";
                  }}
                  alt="Captura real da Página Inicial completa do site MOB3L"
                  className="w-full object-cover object-top"
                  style={{
                    transform: isSiteScrolled
                      ? 'translateY(calc(-100% + 400px))'
                      : 'translateY(0%)',
                    transition: isSiteScrolled
                      ? 'transform 26000ms linear'
                      : 'transform 2500ms ease-out'
                  }}
                />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white font-mono text-[11px] font-semibold shadow-lg">
                    SITE COMPLETO
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (mob3lWebProject) setSelectedWebProject(mob3lWebProject);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-gray-200 hover:text-white border border-white/15 text-xs transition-colors backdrop-blur-sm shadow-md"
                    title="Abrir pop-up com captura completa"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="text-[11px] font-mono">Ver ampliado</span>
                  </button>
                </div>

                {/* Scroll Helper Prompt */}
                <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-200 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 shadow-lg group-hover:opacity-0 transition-opacity">
                    <MousePointer className="w-3.5 h-3.5 text-yellow-400 animate-bounce" />
                    <span>Passe o mouse para rolar o site</span>
                  </span>
                </div>
              </div>

              {/* Mockup Bottom Status Bar */}
              <div className="px-4 py-3 bg-[#101012] border-t border-white/10 flex items-center justify-between text-xs text-gray-400 shrink-0">
                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-gray-300">Página Inicial Oficial • mob3l.com.br</span>
                </div>

                <button
                  onClick={() => {
                    if (mob3lWebProject) setSelectedWebProject(mob3lWebProject);
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Ver pop-up completo</span>
                </button>
              </div>
            </div>

            {/* Right Column: Information, Deliverables & Direct Actions (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#141416]">
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-black border border-white/10 p-2 flex items-center justify-center">
                    <img
                      src="/portfolio/sites/mob3l-logo.png"
                      alt="Logo MOB3L"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-mono text-gray-400">Três Lagoas / MS</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">Plataforma MOB3L</h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    Interface digital estruturada para demonstrar credibilidade, facilitar o download do app e
                    orientar condutores locais para o formulário de credenciamento.
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                    Entregas Técnicas do Site:
                  </span>
                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>Layout 100% responsivo com velocidade de carregamento otimizada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>Área direcionada com benefícios para passageiros e links para lojas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>Módulo de credenciamento para motoristas parceiros</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <span>Integração de canais de suporte humanizado via WhatsApp</span>
                    </li>
                  </ul>
                </div>

                {/* Real Verified Client Feedback Quote */}
                <div className="p-4 rounded-xl bg-[#1A1A1E] border border-yellow-500/20 text-xs text-gray-300 relative">
                  <Quote className="w-5 h-5 text-yellow-500/30 absolute top-3 right-3" />
                  <p className="italic leading-relaxed">
                    &ldquo;O Google mandou um e-mail parabenizando os acessos, em menos de 1 mês tantas views lá. Seu trabalho é muito profissional, João! Meu irmão é da área e elogiou pra caramba!&rdquo;
                  </p>
                  <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span className="text-yellow-400 font-semibold">— Junior • MOB3L</span>
                    <span className="text-gray-500">Print Real Comprovado</span>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    if (mob3lWebProject) setSelectedWebProject(mob3lWebProject);
                  }}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white hover:text-yellow-300 font-semibold text-xs border border-white/10 hover:border-yellow-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Ver captura no pop-up</span>
                </button>

                <a
                  href="https://mob3l.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs shadow-[0_0_20px_rgba(234,179,8,0.25)] transition-all flex items-center justify-center gap-1.5 shrink-0"
                >
                  <span>Visitar site oficial</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 2 — IDENTIDADE VISUAL & PALETA CROMÁTICA */}
        {/* ======================================================================= */}
        <section id="secao-identidade" className="space-y-6 scroll-mt-36">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-yellow-400 tracking-wider uppercase font-semibold">
              SEÇÃO 2 • IDENTIDADE VISUAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Manual de Marca e Cores Oficiais
            </h2>
            <p className="mt-2 text-sm text-gray-300 max-w-3xl leading-relaxed">
              Desenvolvimento e normatização das assinaturas da marca sobre fundos contrastantes e definição da paleta cromática essencial para todas as aplicações institucionais.
            </p>
          </div>

          {/* Logo Pairing: Light Background vs Pure Black Background */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
                Aplicação do Logotipo
              </span>
              <span className="text-[11px] font-mono text-yellow-400/80">Versões Oficiais Vetoriais</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Light Background Version (WHITE BACKGROUND, logo with black name and yellow icon) */}
              <div className="rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md relative group">
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-700 bg-zinc-100 px-2.5 py-1 rounded border border-zinc-300">
                  Fundo Claro
                </span>
                <div className="h-20 sm:h-24 w-full flex items-center justify-center p-2">
                  <img
                    src="/portfolio/sites/mob3l-logo-escuro.png"
                    alt="Logotipo MOB3L com texto preto em fundo branco"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-xs text-zinc-600 font-medium mt-3">
                  Aplicação com tipografia preta para impressos institucionais, papéis timbrados e fundos claros.
                </p>
              </div>

              {/* Dark Background Version (PURE BLACK BACKGROUND, logo with white name and yellow icon) */}
              <div className="rounded-2xl bg-[#000000] border border-yellow-500/30 p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md relative group">
                <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase tracking-wider text-yellow-400 bg-yellow-500/15 px-2.5 py-1 rounded border border-yellow-500/30">
                  Fundo Escuro
                </span>
                <div className="h-20 sm:h-24 w-full flex items-center justify-center p-2">
                  <img
                    src="/portfolio/sites/mob3l-logo-claro.png"
                    alt="Logotipo MOB3L com texto branco em fundo preto puro"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-xs text-gray-400 font-medium mt-3">
                  Aplicação com tipografia branca para o aplicativo, sinalizações noturnas e materiais em preto fosco.
                </p>
              </div>
            </div>
          </div>

          {/* Official Color Palette Swatches (Full-Width Distributed) */}
          <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#141416] border border-white/10 shadow-lg">
            <div className="text-center mb-6 sm:mb-8 space-y-1">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold block">
                Paleta de Cores Institucionais
              </span>
              <span className="text-[11px] font-mono text-gray-500 tracking-wide block">
                Códigos HEX Oficiais
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 w-full">
              {BRAND_COLORS.map((color) => (
                <div
                  key={color.hex}
                  className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-black/40 border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 shadow-sm last:col-span-2 sm:last:col-span-1"
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl border ${color.border} shadow-lg transition-transform duration-300 hover:scale-105 shrink-0`}
                    style={{ backgroundColor: color.hex }}
                    title={`${color.name} (${color.hex})`}
                  />
                  <span className="text-xs sm:text-sm md:text-base font-mono font-bold text-white mt-3 sm:mt-4 tracking-wider">
                    {color.hex}
                  </span>
                  <span className="text-[11px] sm:text-xs text-gray-400 font-medium mt-0.5 sm:mt-1">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 3 — MATERIAIS IMPRESSOS & SINALIZAÇÃO */}
        {/* "Mais que um site: uma marca presente em todos os pontos de contato" */}
        {/* ======================================================================= */}
        <section id="secao-materiais" className="space-y-8 scroll-mt-36">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-yellow-400 tracking-wider uppercase font-semibold">
              SEÇÃO 3 • COMUNICAÇÃO OFFLINE & PDV
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Mais que um site: uma marca presente em todos os pontos de contato
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl">
              A consolidação de uma empresa de mobilidade urbana nas ruas de Três Lagoas/MS exigiu uma identidade
              visual sólida e desdobramentos físicos de alto padrão. Desenvolvemos desde o manual de aplicação do
              logotipo em fundos claros e escuros até a linha de papelaria corporativa, materiais gráficos para
              relacionamento com clientes e parceiros, e sinalização de grande porte com outdoor e windbanner.
            </p>
          </div>

          {/* 4 Cards Grid: Cartão (Frente+Verso), Folder (Frente+Verso), Outdoor, Windbanner */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
                Materiais Gráficos, Sinalização & PDV (4 Peças Estruturadas)
              </span>
              <span className="text-xs text-gray-400 hidden sm:inline font-mono">
                Passe o mouse ou use as setas para alternar frente e verso
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CARD 1: Cartão de Visita (Frente + Verso) */}
              <div
                onMouseEnter={() => setIsHoveringCartao(true)}
                onMouseLeave={() => setIsHoveringCartao(false)}
                className="rounded-2xl bg-[#141416] border border-white/10 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden shadow-xl group flex flex-col"
              >
                {/* Image Container with Slider and Arrows */}
                <div
                  className="h-80 sm:h-96 w-full bg-[#0F0F12] flex items-center justify-center p-4 relative overflow-hidden cursor-pointer"
                  onClick={() =>
                    setLightboxPrintData({
                      title: DUAL_PRINT_ITEMS[0].title,
                      description: DUAL_PRINT_ITEMS[0].description,
                      aspectNote: DUAL_PRINT_ITEMS[0].aspectNote,
                      currentSrc:
                        cartaoFace === 'frente'
                          ? DUAL_PRINT_ITEMS[0].frenteSrc
                          : DUAL_PRINT_ITEMS[0].versoSrc,
                      isDual: true,
                      frenteSrc: DUAL_PRINT_ITEMS[0].frenteSrc,
                      versoSrc: DUAL_PRINT_ITEMS[0].versoSrc,
                      face: cartaoFace
                    })
                  }
                >
                  <img
                    src={
                      cartaoFace === 'frente'
                        ? DUAL_PRINT_ITEMS[0].frenteSrc
                        : DUAL_PRINT_ITEMS[0].versoSrc
                    }
                    alt={`Cartão de Visita MOB3L - ${cartaoFace === 'frente' ? 'Frente' : 'Verso'}`}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-black/85 backdrop-blur-sm border border-white/10 text-gray-300">
                      {DUAL_PRINT_ITEMS[0].category}
                    </span>
                  </div>

                  {/* Navigation Arrows for Mobile & PC */}
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-between pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCartaoFace(cartaoFace === 'frente' ? 'verso' : 'frente');
                      }}
                      className="p-2 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-yellow-400 border border-white/20 transition-all pointer-events-auto shadow-lg"
                      title="Alternar Frente e Verso"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCartaoFace(cartaoFace === 'frente' ? 'verso' : 'frente');
                      }}
                      className="p-2 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-yellow-400 border border-white/20 transition-all pointer-events-auto shadow-lg"
                      title="Alternar Frente e Verso"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Zoom Prompt Overlay */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-yellow-300 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded border border-yellow-500/30">
                      <Maximize2 className="w-3 h-3" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Caption */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-[#141416] border-t border-white/5">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {DUAL_PRINT_ITEMS[0].title}
                      </h3>
                      <span className="text-[10px] font-mono text-yellow-400/80 hidden sm:inline">
                        Hover p/ alternar
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">
                      {DUAL_PRINT_ITEMS[0].description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                    {/* Face Toggle Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCartaoFace('frente')}
                        className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-all ${
                          cartaoFace === 'frente'
                            ? 'bg-yellow-400 text-black shadow-md'
                            : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
                        }`}
                      >
                        Frente
                      </button>
                      <button
                        onClick={() => setCartaoFace('verso')}
                        className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-all ${
                          cartaoFace === 'verso'
                            ? 'bg-yellow-400 text-black shadow-md'
                            : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
                        }`}
                      >
                        Verso
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        setLightboxPrintData({
                          title: DUAL_PRINT_ITEMS[0].title,
                          description: DUAL_PRINT_ITEMS[0].description,
                          aspectNote: DUAL_PRINT_ITEMS[0].aspectNote,
                          currentSrc:
                            cartaoFace === 'frente'
                              ? DUAL_PRINT_ITEMS[0].frenteSrc
                              : DUAL_PRINT_ITEMS[0].versoSrc,
                          isDual: true,
                          frenteSrc: DUAL_PRINT_ITEMS[0].frenteSrc,
                          versoSrc: DUAL_PRINT_ITEMS[0].versoSrc,
                          face: cartaoFace
                        })
                      }
                      className="text-yellow-400/90 hover:text-yellow-400 transition-colors flex items-center gap-1 font-semibold"
                    >
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CARD 2: Folder Institucional (Frente + Verso) */}
              <div
                onMouseEnter={() => setIsHoveringFolder(true)}
                onMouseLeave={() => setIsHoveringFolder(false)}
                className="rounded-2xl bg-[#141416] border border-white/10 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden shadow-xl group flex flex-col"
              >
                {/* Image Container with Slider and Arrows */}
                <div
                  className="h-80 sm:h-96 w-full bg-[#0F0F12] flex items-center justify-center p-4 relative overflow-hidden cursor-pointer"
                  onClick={() =>
                    setLightboxPrintData({
                      title: DUAL_PRINT_ITEMS[1].title,
                      description: DUAL_PRINT_ITEMS[1].description,
                      aspectNote: DUAL_PRINT_ITEMS[1].aspectNote,
                      currentSrc:
                        folderFace === 'frente'
                          ? DUAL_PRINT_ITEMS[1].frenteSrc
                          : DUAL_PRINT_ITEMS[1].versoSrc,
                      isDual: true,
                      frenteSrc: DUAL_PRINT_ITEMS[1].frenteSrc,
                      versoSrc: DUAL_PRINT_ITEMS[1].versoSrc,
                      face: folderFace
                    })
                  }
                >
                  <img
                    src={
                      folderFace === 'frente'
                        ? DUAL_PRINT_ITEMS[1].frenteSrc
                        : DUAL_PRINT_ITEMS[1].versoSrc
                    }
                    alt={`Folder Institucional MOB3L - ${folderFace === 'frente' ? 'Frente' : 'Verso'}`}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-black/85 backdrop-blur-sm border border-white/10 text-gray-300">
                      {DUAL_PRINT_ITEMS[1].category}
                    </span>
                  </div>

                  {/* Navigation Arrows for Mobile & PC */}
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-between pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFolderFace(folderFace === 'frente' ? 'verso' : 'frente');
                      }}
                      className="p-2 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-yellow-400 border border-white/20 transition-all pointer-events-auto shadow-lg"
                      title="Alternar Frente e Verso"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setFolderFace(folderFace === 'frente' ? 'verso' : 'frente');
                      }}
                      className="p-2 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-yellow-400 border border-white/20 transition-all pointer-events-auto shadow-lg"
                      title="Alternar Frente e Verso"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Zoom Prompt Overlay */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-yellow-300 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded border border-yellow-500/30">
                      <Maximize2 className="w-3 h-3" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Caption */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-[#141416] border-t border-white/5">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {DUAL_PRINT_ITEMS[1].title}
                      </h3>
                      <span className="text-[10px] font-mono text-yellow-400/80 hidden sm:inline">
                        Hover p/ alternar
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">
                      {DUAL_PRINT_ITEMS[1].description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                    {/* Face Toggle Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setFolderFace('frente')}
                        className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-all ${
                          folderFace === 'frente'
                            ? 'bg-yellow-400 text-black shadow-md'
                            : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
                        }`}
                      >
                        Frente
                      </button>
                      <button
                        onClick={() => setFolderFace('verso')}
                        className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-all ${
                          folderFace === 'verso'
                            ? 'bg-yellow-400 text-black shadow-md'
                            : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
                        }`}
                      >
                        Verso
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        setLightboxPrintData({
                          title: DUAL_PRINT_ITEMS[1].title,
                          description: DUAL_PRINT_ITEMS[1].description,
                          aspectNote: DUAL_PRINT_ITEMS[1].aspectNote,
                          currentSrc:
                            folderFace === 'frente'
                              ? DUAL_PRINT_ITEMS[1].frenteSrc
                              : DUAL_PRINT_ITEMS[1].versoSrc,
                          isDual: true,
                          frenteSrc: DUAL_PRINT_ITEMS[1].frenteSrc,
                          versoSrc: DUAL_PRINT_ITEMS[1].versoSrc,
                          face: folderFace
                        })
                      }
                      className="text-yellow-400/90 hover:text-yellow-400 transition-colors flex items-center gap-1 font-semibold"
                    >
                      <span>Ver detalhes</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CARD 3: Outdoor Urbano */}
              <div
                onClick={() =>
                  setLightboxPrintData({
                    title: SINGLE_PRINT_ITEMS[0].title,
                    description: SINGLE_PRINT_ITEMS[0].description,
                    aspectNote: SINGLE_PRINT_ITEMS[0].aspectNote,
                    currentSrc: SINGLE_PRINT_ITEMS[0].imageSrc,
                    isDual: false
                  })
                }
                className="rounded-2xl bg-[#141416] border border-white/10 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden shadow-xl group cursor-pointer flex flex-col"
              >
                <div className="h-80 sm:h-96 w-full bg-[#0F0F12] flex items-center justify-center p-4 relative overflow-hidden">
                  <img
                    src={SINGLE_PRINT_ITEMS[0].imageSrc}
                    alt={SINGLE_PRINT_ITEMS[0].title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-black/85 backdrop-blur-sm border border-white/10 text-gray-300">
                      {SINGLE_PRINT_ITEMS[0].category}
                    </span>
                  </div>

                  {/* Zoom Prompt Overlay */}
                  <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-yellow-300 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded border border-yellow-500/30">
                      <Maximize2 className="w-3 h-3" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between bg-[#141416] border-t border-white/5">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {SINGLE_PRINT_ITEMS[0].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">
                      {SINGLE_PRINT_ITEMS[0].description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>{SINGLE_PRINT_ITEMS[0].aspectNote}</span>
                    <span className="text-yellow-400/90 group-hover:text-yellow-400 transition-colors flex items-center gap-1 font-semibold">
                      <span>Ver peça</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 4: Windbanner Promocional */}
              <div
                onClick={() =>
                  setLightboxPrintData({
                    title: SINGLE_PRINT_ITEMS[1].title,
                    description: SINGLE_PRINT_ITEMS[1].description,
                    aspectNote: SINGLE_PRINT_ITEMS[1].aspectNote,
                    currentSrc: SINGLE_PRINT_ITEMS[1].imageSrc,
                    isDual: false
                  })
                }
                className="rounded-2xl bg-[#141416] border border-white/10 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden shadow-xl group cursor-pointer flex flex-col"
              >
                <div className="h-80 sm:h-96 w-full bg-[#0F0F12] flex items-center justify-center p-4 relative overflow-hidden">
                  <img
                    src={SINGLE_PRINT_ITEMS[1].imageSrc}
                    alt={SINGLE_PRINT_ITEMS[1].title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded bg-black/85 backdrop-blur-sm border border-white/10 text-gray-300">
                      {SINGLE_PRINT_ITEMS[1].category}
                    </span>
                  </div>

                  {/* Zoom Prompt Overlay */}
                  <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-yellow-300 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded border border-yellow-500/30">
                      <Maximize2 className="w-3 h-3" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between bg-[#141416] border-t border-white/5">
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {SINGLE_PRINT_ITEMS[1].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">
                      {SINGLE_PRINT_ITEMS[1].description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>{SINGLE_PRINT_ITEMS[1].aspectNote}</span>
                    <span className="text-yellow-400/90 group-hover:text-yellow-400 transition-colors flex items-center gap-1 font-semibold">
                      <span>Ver peça</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* SECTION 4 — ESTRATÉGIA DE REDES SOCIAIS */}
        {/* "Conteúdo pensado para dois públicos" */}
        {/* ======================================================================= */}
        <section id="secao-social" className="space-y-8 scroll-mt-36">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-yellow-400 tracking-wider uppercase font-semibold">
              SEÇÃO 4 • ESTRATÉGIA DE REDES SOCIAIS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Conteúdo pensado para dois públicos
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl">
              A operação da MOB3L depende de dois motores simultâneos: passageiros que solicitam viagens diárias e
              motoristas parceiros dispostos a atender com excelência. Por isso, a linha editorial de redes sociais
              foi concebida com linguagem e gatilhos específicos para cada ponta — destacando oportunidade de renda e
              autonomia para os condutores, e praticidade, economia e segurança para quem viaja.
            </p>
          </div>

          {/* Interactive Showcase Card & Slideshow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left/Main Column: Interactive Cycling Card (7 cols on desktop, full width on mobile/tablet) */}
            <div
              className="lg:col-span-7 rounded-3xl bg-[#141416] border border-white/10 hover:border-yellow-500/40 transition-all duration-300 shadow-2xl p-6 sm:p-8 flex flex-col group relative overflow-hidden"
              onMouseEnter={() => setIsHoveringSlide(true)}
              onMouseLeave={() => setIsHoveringSlide(false)}
            >
              {/* Header of the Gallery Card */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold border bg-yellow-500/10 text-yellow-400 border-yellow-500/30">
                    GALERIA INTERATIVA
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    Post {currentSlideIndex + 1} de {SOCIAL_POSTS.length}
                  </span>
                </div>

                {/* Mobile Indicator Badge */}
                <span className="inline-flex sm:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-200 border border-white/10">
                  <FileText className="w-3 h-3 text-yellow-400" />
                  <span>6 fotos</span>
                </span>

                {/* Desktop Hover Indicator */}
                <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-gray-400">
                  {isHoveringSlide ? (
                    <span className="text-yellow-400 animate-pulse flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                      Slideshow ativo (~3s)
                    </span>
                  ) : (
                    <span>Passe o mouse para prévia</span>
                  )}
                </div>
              </div>

              {/* Main Visual Display Container - CLEAN: NO SPAN BADGE OVER THE IMAGE */}
              <div
                className="relative w-full h-80 sm:h-[420px] bg-[#0A0A0C] rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-white/5 cursor-pointer shadow-inner"
                onClick={() => setLightboxPostIndex(currentSlideIndex)}
              >
                <img
                  src={SOCIAL_POSTS[currentSlideIndex].imageSrc}
                  onError={(e) => {
                    if (SOCIAL_POSTS[currentSlideIndex].fallbackSrc) {
                      e.currentTarget.src = SOCIAL_POSTS[currentSlideIndex].fallbackSrc!;
                    }
                  }}
                  alt={SOCIAL_POSTS[currentSlideIndex].title}
                  className="max-h-full max-w-full object-contain transition-opacity duration-300 drop-shadow-2xl"
                />

                {/* Navigation Arrows for Direct Browsing (Mobile & Desktop) */}
                <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlideIndex((prev) => (prev - 1 + SOCIAL_POSTS.length) % SOCIAL_POSTS.length);
                    }}
                    className="p-2 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-yellow-400 border border-white/20 transition-all pointer-events-auto shadow-lg"
                    title="Post anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlideIndex((prev) => (prev + 1) % SOCIAL_POSTS.length);
                    }}
                    className="p-2 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-yellow-400 border border-white/20 transition-all pointer-events-auto shadow-lg"
                    title="Próximo post"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Subtly Animated Discoverability Prompt */}
                <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-yellow-300 border border-yellow-500/40 text-xs font-mono shadow-xl animate-pulse">
                    <Maximize2 className="w-3.5 h-3.5 text-yellow-400" />
                    <span className="hidden sm:inline">Clique para ampliar</span>
                    <span className="sm:hidden">Toque para ver em tela cheia</span>
                  </div>
                </div>
              </div>

              {/* Slide Caption & Context */}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {SOCIAL_POSTS[currentSlideIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                    {SOCIAL_POSTS[currentSlideIndex].caption}
                  </p>
                </div>

                <button
                  onClick={() => setLightboxPostIndex(currentSlideIndex)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white hover:text-yellow-300 text-xs font-semibold border border-white/10 hover:border-yellow-500/30 transition-all shrink-0 flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Ver detalhes</span>
                </button>
              </div>

              {/* Progress Dots / Direct Select */}
              <div className="mt-5 flex items-center justify-center gap-2">
                {SOCIAL_POSTS.map((post, idx) => (
                  <button
                    key={post.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlideIndex === idx
                        ? 'w-8 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    title={`Ver post ${idx + 1}: ${post.title}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Complete Thumbnail List (5 cols) - Hidden on Mobile & Tablet, Visible on Desktop */}
            <div className="hidden lg:block lg:col-span-5 space-y-3 lg:mt-0">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-mono text-gray-300 uppercase tracking-wider font-semibold">
                  Índice de Peças Sociais
                </span>
                <span className="text-xs font-mono text-yellow-400">Toque para selecionar</span>
              </div>

              <div className="space-y-2.5 max-h-[380px] sm:max-h-[580px] overflow-y-auto pr-1 custom-scrollbar">
                {SOCIAL_POSTS.map((post, index) => {
                  const isSelected = currentSlideIndex === index;
                  return (
                    <div
                      key={post.id}
                      onClick={() => {
                        setCurrentSlideIndex(index);
                        setLightboxPostIndex(index);
                      }}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center gap-3.5 ${
                        isSelected
                          ? 'bg-yellow-500/10 border-yellow-500/40 shadow-lg'
                          : 'bg-[#141416] border-white/5 hover:border-white/20 hover:bg-white/[0.03]'
                      }`}
                    >
                      {/* Thumbnail */}
                      <div className="w-16 h-16 rounded-xl bg-black border border-white/10 overflow-hidden shrink-0 flex items-center justify-center p-1">
                        <img
                          src={post.imageSrc}
                          onError={(e) => {
                            if (post.fallbackSrc) {
                              e.currentTarget.src = post.fallbackSrc;
                            }
                          }}
                          alt={post.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Metadata */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-sm font-bold text-white truncate">{post.title}</h4>
                          <span className="text-xs font-mono text-gray-300 shrink-0 font-semibold">#{index + 1}</span>
                        </div>
                        <p className="text-xs text-gray-300 truncate">{post.objective}</p>
                      </div>

                      <Maximize2 className="w-4 h-4 text-gray-400 hover:text-yellow-400 shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================= */}
        {/* FOOTER OF THE PAGE: CLOSING CTA BLOCK */}
        {/* ======================================================================= */}
        <section className="pt-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#18181B] via-[#141416] to-black border border-yellow-500/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="text-xs uppercase font-mono text-yellow-400 font-semibold tracking-wider block mb-2">
                TRANSFORME SUA PRESENÇA DIGITAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Quer um projeto de comunicação completo como o da MOB3L?
              </h3>
              <p className="text-gray-300 text-sm mt-2 max-w-xl leading-relaxed">
                Desenvolvemos identidades visuais de alto impacto, plataformas web responsivas e estratégias de comunicação sob medida para o seu segmento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 relative z-10 w-full md:w-auto">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:shadow-[0_0_35px_rgba(234,179,8,0.5)] transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleBackToProjects}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Ver outros casos
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* MODALS & LIGHTBOXES */}
      {/* ========================================================================= */}

      {/* 1. Web Project Modal (Full Page Capture) */}
      <ProjectModal
        project={selectedWebProject}
        onClose={() => setSelectedWebProject(null)}
      />

      {/* 2. Lightbox Modal for Physical Materials (Block 2) */}
      {lightboxPrintData && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxPrintData(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-[#18181B] shrink-0">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold">
                  Material Gráfico & Sinalização • MOB3L
                </p>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {lightboxPrintData.title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                {/* Face Toggle inside Modal for Dual Items */}
                {lightboxPrintData.isDual && (
                  <div className="flex items-center gap-1.5 mr-2">
                    <button
                      onClick={() =>
                        setLightboxPrintData({
                          ...lightboxPrintData,
                          currentSrc: lightboxPrintData.frenteSrc!,
                          face: 'frente'
                        })
                      }
                      className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-all ${
                        lightboxPrintData.face === 'frente'
                          ? 'bg-yellow-400 text-black shadow-md'
                          : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
                      }`}
                    >
                      Frente
                    </button>
                    <button
                      onClick={() =>
                        setLightboxPrintData({
                          ...lightboxPrintData,
                          currentSrc: lightboxPrintData.versoSrc!,
                          face: 'verso'
                        })
                      }
                      className={`px-3 py-1 rounded text-xs font-mono font-semibold transition-all ${
                        lightboxPrintData.face === 'verso'
                          ? 'bg-yellow-400 text-black shadow-md'
                          : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
                      }`}
                    >
                      Verso
                    </button>
                  </div>
                )}

                <button
                  onClick={() => setLightboxPrintData(null)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  title="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 bg-[#0A0A0C] p-4 sm:p-8 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px] relative">
              <img
                src={lightboxPrintData.currentSrc}
                alt={lightboxPrintData.title}
                className="max-w-full max-h-[65vh] object-contain drop-shadow-2xl"
              />

              {/* Prev / Next arrows inside modal for dual items */}
              {lightboxPrintData.isDual && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={() =>
                      setLightboxPrintData({
                        ...lightboxPrintData,
                        currentSrc:
                          lightboxPrintData.face === 'frente'
                            ? lightboxPrintData.versoSrc!
                            : lightboxPrintData.frenteSrc!,
                        face: lightboxPrintData.face === 'frente' ? 'verso' : 'frente'
                      })
                    }
                    className="p-3 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-yellow-400 border border-white/20 transition-all pointer-events-auto shadow-xl"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setLightboxPrintData({
                        ...lightboxPrintData,
                        currentSrc:
                          lightboxPrintData.face === 'frente'
                            ? lightboxPrintData.versoSrc!
                            : lightboxPrintData.frenteSrc!,
                        face: lightboxPrintData.face === 'frente' ? 'verso' : 'frente'
                      })
                    }
                    className="p-3 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-yellow-400 border border-white/20 transition-all pointer-events-auto shadow-xl"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-4 bg-[#18181B] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shrink-0">
              <p className="text-gray-300 leading-relaxed max-w-2xl">
                {lightboxPrintData.description}
              </p>
              <span className="font-mono text-gray-400 shrink-0">
                {lightboxPrintData.aspectNote}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 3. Lightbox Modal for Social Posts (Block 3) */}
      {lightboxPostIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxPostIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-[#18181B] shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-yellow-400 font-semibold uppercase">
                  Arte Redes Sociais • MOB3L
                </span>
                <span className="text-xs font-mono text-gray-500">
                  {lightboxPostIndex + 1} de {SOCIAL_POSTS.length}
                </span>
              </div>

              <button
                onClick={() => setLightboxPostIndex(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 bg-[#0A0A0C] p-4 sm:p-6 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px] relative">
              <img
                src={SOCIAL_POSTS[lightboxPostIndex].imageSrc}
                onError={(e) => {
                  if (SOCIAL_POSTS[lightboxPostIndex].fallbackSrc) {
                    e.currentTarget.src = SOCIAL_POSTS[lightboxPostIndex].fallbackSrc!;
                  }
                }}
                alt={SOCIAL_POSTS[lightboxPostIndex].title}
                className="max-w-full max-h-[62vh] object-contain drop-shadow-2xl"
              />

              {/* Prev / Next Arrows */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                <button
                  onClick={() =>
                    setLightboxPostIndex(
                      (prev) => (prev! - 1 + SOCIAL_POSTS.length) % SOCIAL_POSTS.length
                    )
                  }
                  className="p-3 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-yellow-400 border border-white/20 transition-all pointer-events-auto shadow-xl"
                  title="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setLightboxPostIndex((prev) => (prev! + 1) % SOCIAL_POSTS.length)
                  }
                  className="p-3 rounded-full bg-black/80 hover:bg-black text-gray-300 hover:text-yellow-400 border border-white/20 transition-all pointer-events-auto shadow-xl"
                  title="Próximo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-4 bg-[#18181B] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {SOCIAL_POSTS[lightboxPostIndex].title}
                </h4>
                <p className="text-xs text-gray-300 mt-1 max-w-xl">
                  {SOCIAL_POSTS[lightboxPostIndex].caption}
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-[11px] font-mono text-gray-400 block">Objetivo:</span>
                <span className="text-xs text-yellow-400/90 font-medium">
                  {SOCIAL_POSTS[lightboxPostIndex].objective}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
