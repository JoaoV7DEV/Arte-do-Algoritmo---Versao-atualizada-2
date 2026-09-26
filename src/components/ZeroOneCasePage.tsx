import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Layers,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  MousePointer,
  CheckCircle2,
  Quote,
  MessageCircle,
  X,
  Eye,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  Car,
  Star
} from 'lucide-react';
import { AGENCY_INFO, FLAGSHIP_PROJECT } from '../data/agencyData';

interface ZeroOneCasePageProps {
  onNavigate?: (page: 'home' | 'projetos' | 'sobre' | 'projeto-mob3l' | 'projeto-01s', anchor?: string) => void;
}

type TabKey = 'home' | 'passageiros' | 'motoristas' | 'sobre';

interface CasePageTab {
  id: TabKey;
  tabNumber: string;
  title: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  imageSrc: string;
  fallbackSrc: string;
  altText: string;
  heroHeadline: string;
  summarySections: {
    label: string;
    items: string[];
  }[];
}

const CASE_TABS: CasePageTab[] = [
  {
    id: 'home',
    tabNumber: '01',
    title: 'Página Inicial (Home)',
    shortLabel: 'Mobilidade inteligente, de cara nova',
    icon: Layers,
    imageSrc: '/portfolio/sites/01s-mobilidade-completo.png',
    fallbackSrc: '/portfolio/sites/screenshort da pagina inicial do site 01smobilidade-1.png',
    altText: 'Captura real da Página Inicial da plataforma 01S Mobilidade',
    heroHeadline: 'Mobilidade inteligente. Agora, de cara nova.',
    summarySections: [
      {
        label: 'Apresentação e Transição',
        items: [
          'Hero com apresentação da nova fase da marca',
          'Acessos direcionados: botão "Sou Passageiro" e "Sou Motorista"',
          'Comunicação clara da transição de MOB3L para 01S Mobilidade'
        ]
      },
      {
        label: 'Diferenciais e Conversão',
        items: [
          'Diferenciais operacionais da plataforma',
          'Bloco de download do aplicativo com QR code e links para lojas',
          'Canais de suporte rápido e atendimento humanizado via WhatsApp'
        ]
      }
    ]
  },
  {
    id: 'passageiros',
    tabNumber: '02',
    title: 'Página de Passageiros',
    shortLabel: 'Corrida simples, ágil e confiável',
    icon: Users,
    imageSrc: '/portfolio/sites/01s-mobilidade-passageiros.png',
    fallbackSrc: '/portfolio/sites/screenshort da pagina de passageiro do site 01smobilidade.png',
    altText: 'Captura real da Página de Passageiros da 01S Mobilidade',
    heroHeadline: 'Sua corrida, agora mais simples e confiável',
    summarySections: [
      {
        label: 'Benefícios ao Passageiro',
        items: [
          'Motoristas verificados',
          'Atendimento rápido',
          'Preços transparentes',
          'Suporte local'
        ]
      },
      {
        label: 'Fluxo e Recursos',
        items: [
          'Fluxo em 3 passos: Baixe o aplicativo → Solicite sua corrida → Acompanhe em tempo real',
          'Chamada de download do app com QR code para escaneamento',
          'Seção de Dúvidas Frequentes (FAQ) dedicada ao passageiro'
        ]
      }
    ]
  },
  {
    id: 'motoristas',
    tabNumber: '03',
    title: 'Página de Motoristas',
    shortLabel: 'Ganhe mais dirigindo com a 01S',
    icon: Car,
    imageSrc: '/portfolio/sites/01s-mobilidade-motoristas.png',
    fallbackSrc: '/portfolio/sites/screenshort da pagina de motorista do site 01smobilidade.png',
    altText: 'Captura real da Página de Motoristas da 01S Mobilidade',
    heroHeadline: 'Ganhe mais dirigindo com a 01S Mobilidade',
    summarySections: [
      {
        label: 'Diferenciais para Motoristas Parceiros',
        items: [
          'Ganhos consistentes',
          'Mais organização',
          'Suporte próximo',
          'Mais oportunidades'
        ]
      },
      {
        label: 'Como Começar & Requisitos',
        items: [
          'Fluxo em 3 passos "Como começar"',
          'Requisitos estruturados: Requisitos Pessoais, Documentos Necessários, Veículo e Cadastro na Plataforma',
          'Formulário direto de contato e FAQ com esclarecimento de dúvidas'
        ]
      }
    ]
  },
  {
    id: 'sobre',
    tabNumber: '04',
    title: 'Sobre Nós / Transição da Marca',
    shortLabel: 'De MOB3L para 01S Mobilidade',
    icon: ShieldCheck,
    imageSrc: '/portfolio/sites/01s-mobilidade-sobre-transicao.png',
    fallbackSrc: '/portfolio/sites/screenshort da pagina de sobre nos do site 01smobilidade.png',
    altText: 'Captura real da Página Sobre Nós e Transição da Marca da 01S Mobilidade',
    heroHeadline: 'Estamos de cara nova',
    summarySections: [
      {
        label: 'Transição da Marca (MOB3L → 01S)',
        items: [
          'Bloco "Antes: MOB3L → Agora: 01S Mobilidade"',
          'Atributos mantidos: Mesmo aplicativo, Mesmos motoristas, Mesmo atendimento, Mesma confiança',
          'História da empresa com foto do fundador'
        ]
      },
      {
        label: 'Valores e Abrangência',
        items: [
          'Valores: Atendimento humanizado, Organização e eficiência, Segurança em cada corrida, Respeito com todos',
          'Cobertura e atuação regional: Três Lagoas – MS',
          'Perguntas frequentes e formulário para contato'
        ]
      }
    ]
  }
];

interface MaterialGalleryItem {
  id: string;
  title: string;
  category: string;
  slides: {
    src: string;
    label: string;
  }[];
  description: string;
}

const MATERIAL_ITEMS: MaterialGalleryItem[] = [
  {
    id: 'uniforme',
    title: 'Camiseta Polo e Social Institucional',
    category: 'Vestuário Institucional',
    slides: [
      {
        src: '/portfolio/sites/01s-uniforme-mockup.png',
        label: 'Camiseta Polo e Social Institucional'
      }
    ],
    description: 'Padronização visual da equipe interna e atendimento, garantindo identificação imediata e reforço de confiança junto ao público.'
  },
  {
    id: 'cartao',
    title: 'Cartão de Visita Executivo',
    category: 'Papelaria Institucional',
    slides: [
      {
        src: '/portfolio/sites/01s-cartao-frente.jpg',
        label: 'Frente – Identidade e Contato'
      },
      {
        src: '/portfolio/sites/01s-cartao-verso.jpg',
        label: 'Verso – Assinatura Visual da Marca'
      },
      {
        src: '/portfolio/sites/01s-cartao-mockup.png',
        label: 'Mockup em Perspectiva'
      }
    ],
    description: 'Design refinado com contraste marcante verde/laranja sobre fundo escuro, transmitindo solidez no contato direto com parceiros comerciais.'
  },
  {
    id: 'folder',
    title: 'Folder Institucional Trifold',
    category: 'Apresentação Comercial',
    slides: [
      {
        src: '/portfolio/sites/01s-folder-plano-capa.jpg',
        label: 'Capa (fechado) • Três abas externas'
      },
      {
        src: '/portfolio/sites/01s-folder-plano-miolo.jpg',
        label: 'Miolo (aberto) • Conteúdo interno completo'
      },
      {
        src: '/portfolio/sites/01s-folder-mockup.jpeg',
        label: 'Mockup em Perspectiva'
      }
    ],
    description: 'Material impresso em 3 dobras explicando o funcionamento do aplicativo, benefícios para motoristas e vantagens para passageiros.'
  },
  {
    id: 'flyer',
    title: 'Flyer Promocional & Recrutamento',
    category: 'Material de Divulgação',
    slides: [
      {
        src: '/portfolio/sites/01s-flyer-mockup-1.jpg',
        label: 'Mockup 1 • Encarte promocional'
      },
      {
        src: '/portfolio/sites/01s-flyer-mockup-2.jpg',
        label: 'Mockup 2 • Aplicação em perspectiva'
      }
    ],
    description: 'Comunicação direta com chamadas de conversão, benefícios de remuneração e passo a passo rápido para download do app.'
  },
  {
    id: 'outdoor-banner',
    title: 'Mídia Exterior: Outdoor & Banner',
    category: 'Comunicação Visual em Grande Escala',
    slides: [
      {
        src: '/portfolio/sites/01s-outdoor.jpeg',
        label: 'Outdoor Rodoviário • Alta Visibilidade'
      },
      {
        src: '/portfolio/sites/01s-banner.jpeg',
        label: 'Banner de Pista & Eventos'
      }
    ],
    description: 'Peças em grande formato desenvolvidas para leitura em alta velocidade e impacto instantâneo nas principais vias da região.'
  },
  {
    id: 'windbanner',
    title: 'Windbanner Institucional',
    category: 'Comunicação Visual & PDV',
    slides: [
      {
        src: '/portfolio/sites/01s-windbanner.jpg',
        label: 'Windbanner em Formato Vela • Ativação de Rua'
      }
    ],
    description: 'Peça vertical em formato vela, desenvolvida para ativações de rua, pontos de credenciamento e presença da marca em eventos e ações locais.'
  }
];

interface SocialItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  details: string;
}

const SOCIAL_ITEMS: SocialItem[] = [
  {
    id: 'recrutamento',
    title: 'Captação de Motoristas Parceiros',
    category: 'Campanha de Recrutamento',
    imageSrc: '/portfolio/sites/01s-post-recrutamento.jpg',
    description: 'Arte focada na atração de motoristas qualificados, destacando liberdade de horário, repasse justo e suporte próximo.',
    details: 'Copywriting estratégico com CTA direto para o link de cadastro na bio e suporte via WhatsApp.'
  },
  {
    id: 'servicos',
    title: 'Vitrine de Serviços & Aplicativo',
    category: 'Engajamento de Passageiros',
    imageSrc: '/portfolio/sites/01s-post-servicos.jpg',
    description: 'Divulgação dos recursos da plataforma: facilidade de solicitar a corrida, estimativa prévia de valor e motoristas verificados.',
    details: 'Design vibrante nas cores da marca para quebrar a linha do feed e gerar downloads imediatos.'
  },
  {
    id: 'rebranding',
    title: 'Anúncio da Nova Identidade (Transição)',
    category: 'Posicionamento Institucional',
    imageSrc: '/portfolio/sites/01s-post-rebranding.jpg',
    description: 'Comunicação essencial da transição MOB3L → 01S Mobilidade, reforçando que a qualidade e a equipe permanecem com mais tecnologia.',
    details: 'Eliminação de qualquer insegurança ou desconfiança dos passageiros veteranos.'
  }
];

export const ZeroOneCasePage: React.FC<ZeroOneCasePageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [isSiteScrolled, setIsSiteScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('secao-01s-site');

  // Mini-galleries slide indexes for materials
  const [galleryIndexes, setGalleryIndexes] = useState<{ [key: string]: number }>({
    uniforme: 0,
    cartao: 0,
    folder: 0,
    flyer: 0,
    'outdoor-banner': 0
  });

  // Lightbox modal state
  const [lightboxData, setLightboxData] = useState<{
    src: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  // Social modal state with left/right carousel
  const [socialModalIndex, setSocialModalIndex] = useState<number | null>(null);

  // References for sticky horizontal nav bar and section buttons
  const navScrollRef = useRef<HTMLDivElement>(null);
  const navButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Robust Scroll Spy to update active section on vertical scroll (both down and up)
  useEffect(() => {
    const sections = [
      'secao-01s-site',
      'secao-01s-identidade',
      'secao-01s-materiais',
      'secao-01s-redes'
    ];

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

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -110; // sticky header compensation
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
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

  const currentTab = CASE_TABS.find((t) => t.id === activeTab) || CASE_TABS[0];

  const setSlideForGallery = (galleryId: string, index: number) => {
    setGalleryIndexes((prev) => ({ ...prev, [galleryId]: index }));
  };

  return (
    <div className="bg-[#121214] text-white min-h-screen selection:bg-[#4EA238] selection:text-black">
      {/* 1. TOP HERO & HEADER */}
      <section className="relative pt-36 sm:pt-40 pb-14 sm:pb-18 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#18181B] via-[#141416] to-[#121214]">
        {/* Ambient Brand Glows (01S Green & Orange) */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#4EA238]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#F38512]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Back button */}
          <div className="mb-6">
            <button
              onClick={handleBackToProjects}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#4EA238]" />
              <span>← Voltar para Todos os Projetos</span>
            </button>
          </div>

          {/* Main Title & Status Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#4EA238]/15 border border-[#4EA238]/30 text-[#4EA238] text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4EA238] animate-pulse" />
                  CASE DE SUCESSO COMPLETO
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono">
                  Identidade Visual & Site Desenvolvidos
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-mono">
                  Ano: 2026
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                01S Mobilidade
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mt-3 font-normal leading-relaxed">
                Do Rebranding à Plataforma Web Completa: Construindo uma marca de autoridade no transporte urbano.
              </p>
            </div>

            {/* Quick Meta Pills / Caixa de informações padronizada */}
            <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 text-xs font-mono text-gray-300">
              <div className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-2">
                <span className="text-gray-500 uppercase">Segmento:</span>
                <span className="text-white font-semibold">Mobilidade Urbana</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-2">
                <span className="text-gray-500 uppercase">Localização:</span>
                <span className="text-[#4EA238] font-semibold">Três Lagoas / MS</span>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 flex items-center gap-2">
                <span className="text-gray-500 uppercase">Entregáveis:</span>
                <span className="text-emerald-300 font-semibold">Web • Rebranding • Papelaria • PDV</span>
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
                ref={(el) => { navButtonRefs.current['secao-01s-site'] = el; }}
                onClick={() => scrollToSection('secao-01s-site')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer shrink-0 ${
                  activeSection === 'secao-01s-site'
                    ? 'bg-[#4EA238] text-black shadow-md font-bold border-[#4EA238]'
                    : 'text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Seção 1 • Site Institucional</span>
              </button>

              <button
                ref={(el) => { navButtonRefs.current['secao-01s-identidade'] = el; }}
                onClick={() => scrollToSection('secao-01s-identidade')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer shrink-0 ${
                  activeSection === 'secao-01s-identidade'
                    ? 'bg-[#4EA238] text-black shadow-md font-bold border-[#4EA238]'
                    : 'text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Seção 2 • Identidade Visual</span>
              </button>

              <button
                ref={(el) => { navButtonRefs.current['secao-01s-materiais'] = el; }}
                onClick={() => scrollToSection('secao-01s-materiais')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer shrink-0 ${
                  activeSection === 'secao-01s-materiais'
                    ? 'bg-[#4EA238] text-black shadow-md font-bold border-[#4EA238]'
                    : 'text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Seção 3 • Materiais & Aplicações</span>
              </button>

              <button
                ref={(el) => { navButtonRefs.current['secao-01s-redes'] = el; }}
                onClick={() => scrollToSection('secao-01s-redes')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer shrink-0 ${
                  activeSection === 'secao-01s-redes'
                    ? 'bg-[#4EA238] text-black shadow-md font-bold border-[#4EA238]'
                    : 'text-gray-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>Seção 4 • Redes Sociais</span>
              </button>
            </div>

            <a
              href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
                'Olá João! Vi o case completo da 01S Mobilidade e gostaria de solicitar uma proposta para meu projeto.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#F38512] hover:bg-[#fa9224] text-black font-extrabold text-xs transition-colors shrink-0 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Solicitar projeto</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 3. MAIN CASE CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-24">
        {/* ========================================================================= */}
        {/* SESSÃO 1: SITE INSTITUCIONAL MULTI-PAGE SHOWCASE                          */}
        {/* ========================================================================= */}
        <section id="secao-01s-site" className="scroll-mt-24 space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1 text-xs font-mono text-[#4EA238] uppercase font-bold tracking-wider">
                <span>Seção 1</span>
                <span>•</span>
                <span>Plataforma Web Multi-Página</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Site Institucional Completo
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-lg">
              Estrutura pensada para conversão dupla: download do aplicativo por passageiros e credenciamento de novos motoristas parceiros.
            </p>
          </div>

          {/* 4-Tab Real Multi-Page Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Screen Selector Tabs & Real Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              {/* Tab Selector */}
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="px-2 pt-1 pb-2">
                  <span className="text-[11px] font-mono uppercase text-gray-400 tracking-wider">
                    Páginas desenvolvidas no projeto:
                  </span>
                </div>

                {CASE_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsSiteScrolled(false);
                      }}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-[#4EA238]/30 via-[#4EA238]/15 to-transparent border border-[#4EA238]/50 text-white shadow-md'
                          : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-2 rounded-lg shrink-0 ${
                            isActive ? 'bg-[#4EA238] text-black shadow-sm' : 'bg-white/5 text-gray-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <p className="text-sm font-bold text-white truncate">
                            {tab.tabNumber}. {tab.title}
                          </p>
                          <p className="text-xs text-gray-400 truncate mt-0.5">
                            {tab.shortLabel}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive ? 'rotate-90 text-[#4EA238]' : 'text-gray-600'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Active Tab Real Content Breakdown */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4EA238]" />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#4EA238] font-bold">
                      Conteúdo Verificado • {currentTab.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    Print Real
                  </span>
                </div>

                <div>
                  <p className="text-xs text-gray-400 uppercase font-mono mb-1">Headline em destaque no print:</p>
                  <p className="text-sm font-bold text-white italic">
                    &ldquo;{currentTab.heroHeadline}&rdquo;
                  </p>
                </div>

                <div className="space-y-3.5 pt-1">
                  {currentTab.summarySections.map((sec, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <p className="text-xs font-semibold text-gray-200 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4EA238]/80" />
                        {sec.label}
                      </p>
                      <ul className="space-y-1 pl-3.5 border-l border-white/10 text-xs text-gray-300">
                        {sec.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Entregáveis Realizados Summary */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#4EA238]" />
                    <span>Entregáveis Realizados pela Arte do Algoritmo</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {FLAGSHIP_PROJECT.deliverables?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4EA238] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="text-[#4EA238] font-semibold">Escopo 100% Concluído</span>
                  <span>4 Frentes Principais</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Browser Showcase with Live Scroll + Avaliação Alinhada */}
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-2xl bg-[#111827] border border-white/15 shadow-2xl overflow-hidden">
                {/* Browser Top Chrome */}
                <div className="px-4 py-3 bg-[#0B0F19] border-b border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>

                  {/* Tab Indicator */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/50 border border-white/5 text-xs text-gray-300 font-mono truncate max-w-xs sm:max-w-md">
                    <span className="text-[#4EA238] font-semibold shrink-0">01S Mobilidade</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300 truncate">{currentTab.title}</span>
                  </div>

                  {/* Lightbox / Fullscreen Button */}
                  <button
                    onClick={() =>
                      setLightboxData({
                        src: currentTab.imageSrc,
                        title: currentTab.title,
                        subtitle: 'Captura real da tela em alta resolução'
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs transition-colors shrink-0"
                    title="Ampliar captura em tela cheia"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#4EA238]" />
                    <span className="hidden sm:inline text-[11px] font-mono">Ver ampliado</span>
                  </button>
                </div>

                {/* Screenshot Viewport with Hover/Click Scroll Effect */}
                <div
                  className="relative h-[480px] sm:h-[520px] overflow-hidden bg-[#0A0D14] cursor-pointer group select-none"
                  onClick={() => setIsSiteScrolled(!isSiteScrolled)}
                >
                  <img
                    key={currentTab.id}
                    src={currentTab.imageSrc}
                    onError={(e) => {
                      if (currentTab.fallbackSrc) {
                        e.currentTarget.src = currentTab.fallbackSrc;
                      }
                    }}
                    alt={currentTab.altText}
                    className={`w-full object-cover object-top transition-transform duration-[2000ms] ease-out group-hover:duration-[26000ms] group-hover:ease-linear ${
                      isSiteScrolled
                        ? '-translate-y-[calc(100%-480px)] sm:-translate-y-[calc(100%-520px)] duration-[26000ms] ease-linear'
                        : 'group-hover:-translate-y-[calc(100%-480px)] sm:group-hover:-translate-y-[calc(100%-520px)]'
                    }`}
                  />

                  {/* Top Overlay Badge with Scroll Hint */}
                  <div className="absolute top-3 right-3 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-gray-200 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-xl transition-opacity group-hover:opacity-30">
                      <MousePointer className="w-3 h-3 text-[#4EA238] animate-bounce" />
                      <span>Passe o mouse ou clique para rolar o print</span>
                    </span>
                  </div>

                  {/* Bottom Gradient Fade Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B0F19] to-transparent pointer-events-none opacity-85 group-hover:opacity-20 transition-opacity" />

                  {/* Bottom Left Status Pill */}
                  <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                    <span className="text-[10px] font-mono text-[#4EA238] bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#4EA238]/30">
                      {currentTab.shortLabel}
                    </span>
                  </div>
                </div>

                {/* Browser Bottom Status Bar */}
                <div className="px-4 py-3 bg-[#0B0F19] border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4EA238]" />
                    <span>01S Mobilidade • Desenvolvido pela Arte do Algoritmo</span>
                  </div>
                  <button
                    onClick={() =>
                      setLightboxData({
                        src: currentTab.imageSrc,
                        title: currentTab.title,
                        subtitle: 'Captura real da tela em alta resolução'
                      })
                    }
                    className="text-[#4EA238] hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1 text-[11px] font-mono"
                  >
                    <span>Abrir imagem completa</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Depoimento Real Verificado do Cliente (Robson) - Posicionado no espaço destacado à direita, alinhado com Entregáveis */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#4EA238]/30 shadow-xl relative flex flex-col justify-between hover:border-[#4EA238]/50 transition-all">
                <Quote className="w-7 h-7 text-[#4EA238]/20 absolute top-5 right-5 pointer-events-none" />
                <div>
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#4EA238]/20 text-[#4EA238] font-bold text-sm flex items-center justify-center border border-[#4EA238]/40 shrink-0">
                      RB
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Robson • Fundador da 01S Mobilidade</p>
                      <p className="text-xs text-gray-400 font-mono">Validação real pós-lançamento via WhatsApp</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm italic text-gray-200 leading-relaxed">
                    &ldquo;João, obrigado por tudo. Você é um grande profissional. É bom saber que na minha Bahia tem gente como você, competente.&rdquo;
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="text-[#4EA238] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4EA238]" />
                    <span>Print Real Comprovado</span>
                  </span>
                  <div className="flex items-center gap-1" title="Avaliação 5 estrelas">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SEÇÃO 2: IDENTIDADE VISUAL (Fundo Escuro + Fundo Claro + Color Palette)  */}
        {/* ========================================================================= */}
        <section id="secao-01s-identidade" className="scroll-mt-24 space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1 text-xs font-mono text-[#4EA238] uppercase font-bold tracking-wider">
                <span>Seção 2</span>
                <span>•</span>
                <span>Sistema de Identidade Visual</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Logotipo Oficial & Manual de Aplicação
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-lg">
              Construção visual da marca em orientações horizontal e vertical, testadas com legibilidade rigorosa em fundos escuros e fundos claros.
            </p>
          </div>

          {/* Two Wide Logo Cards: Fundo Escuro vs Fundo Claro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Fundo Escuro */}
            <div className="rounded-3xl bg-[#0E0E10] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="text-xs font-mono text-gray-300 uppercase tracking-wider font-bold">
                      Aplicação em Fundo Escuro
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#4EA238] bg-[#4EA238]/10 border border-[#4EA238]/30 px-2 py-0.5 rounded">
                    Primária
                  </span>
                </div>

                {/* Logo Display Area */}
                <div className="my-8 space-y-6">
                  {/* Horizontal Version */}
                  <div className="p-6 rounded-2xl bg-black/60 border border-white/5 flex flex-col items-center justify-center min-h-[160px] group relative">
                    <img
                      src="/portfolio/sites/01s-logo-horizontal-fundo-escuro.png"
                      alt="Logo 01S Mobilidade Horizontal Fundo Escuro"
                      className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="mt-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      Orientação Horizontal • Aplicação Principal
                    </span>
                  </div>

                  {/* Vertical Version */}
                  <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col items-center justify-center min-h-[140px] group relative">
                    <img
                      src="/portfolio/sites/01s-logo-vertical-fundo-escuro.png"
                      alt="Logo 01S Mobilidade Vertical Fundo Escuro"
                      className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="mt-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      Orientação Vertical • Aplicação Compacta / Ícone
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>Contraste otimizado para interfaces digitais</span>
                <span className="text-[#4EA238]">Fundo: #0E0E10</span>
              </div>
            </div>

            {/* Card 2: Fundo Claro */}
            <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 flex flex-col justify-between shadow-2xl text-gray-900">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-400" />
                    <span className="text-xs font-mono text-gray-700 uppercase tracking-wider font-bold">
                      Aplicação em Fundo Claro
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#2F7A32] bg-[#4EA238]/15 border border-[#4EA238]/40 px-2 py-0.5 rounded font-semibold">
                    Papelaria & Ofício
                  </span>
                </div>

                {/* Logo Display Area */}
                <div className="my-8 space-y-6">
                  {/* Horizontal Version */}
                  <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200 flex flex-col items-center justify-center min-h-[160px] group relative">
                    <img
                      src="/portfolio/sites/01s-logo-horizontal-fundo-claro.png"
                      alt="Logo 01S Mobilidade Horizontal Fundo Claro"
                      className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="mt-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      Orientação Horizontal • Aplicação em Impressos Claros
                    </span>
                  </div>

                  {/* Vertical Version */}
                  <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-gray-200 flex flex-col items-center justify-center min-h-[140px] group relative">
                    <img
                      src="/portfolio/sites/01s-logo-vertical-fundo-claro.png"
                      alt="Logo 01S Mobilidade Vertical Fundo Claro"
                      className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="mt-4 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      Orientação Vertical • Aplicação Compacta em Fundo Branco
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>Legibilidade certificada para impressos e documentos</span>
                <span className="text-[#2F7A32]">Fundo: #FFFFFF</span>
              </div>
            </div>
          </div>

          {/* Color Palette Swatches (Full-Width Distributed Row) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#141416] border border-white/10 space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Paleta de Cores Institucionais
              </h3>
              <p className="text-xs font-mono text-[#4EA238]">
                Códigos HEX Oficiais da Marca
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Swatch 1: Verde Principal */}
              <div className="rounded-2xl bg-[#0E0E10] border border-white/10 p-4 space-y-4 hover:border-[#4EA238]/30 transition-all duration-300 flex flex-col justify-between">
                <div className="h-24 sm:h-28 rounded-xl bg-[#4EA238] shadow-md flex items-center justify-center">
                  <span className="text-black font-extrabold text-xs font-mono px-2.5 py-1 rounded-md bg-white/85 backdrop-blur-sm shadow-sm">
                    #4EA238
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white">Verde Principal</p>
                  <p className="text-[11px] font-mono text-gray-400">RGB: 78, 162, 56</p>
                </div>
              </div>

              {/* Swatch 2: Laranja Principal */}
              <div className="rounded-2xl bg-[#0E0E10] border border-white/10 p-4 space-y-4 hover:border-[#F38512]/30 transition-all duration-300 flex flex-col justify-between">
                <div className="h-24 sm:h-28 rounded-xl bg-[#F38512] shadow-md flex items-center justify-center">
                  <span className="text-black font-extrabold text-xs font-mono px-2.5 py-1 rounded-md bg-white/85 backdrop-blur-sm shadow-sm">
                    #F38512
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white">Laranja Principal</p>
                  <p className="text-[11px] font-mono text-gray-400">RGB: 243, 133, 18</p>
                </div>
              </div>

              {/* Swatch 3: Verde Escuro */}
              <div className="rounded-2xl bg-[#0E0E10] border border-white/10 p-4 space-y-4 hover:border-[#2F7A32]/30 transition-all duration-300 flex flex-col justify-between">
                <div className="h-24 sm:h-28 rounded-xl bg-[#2F7A32] shadow-md flex items-center justify-center">
                  <span className="text-white font-extrabold text-xs font-mono px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm shadow-sm">
                    #2F7A32
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white">Verde Escuro</p>
                  <p className="text-[11px] font-mono text-gray-400">RGB: 47, 122, 50</p>
                </div>
              </div>

              {/* Swatch 4: Laranja Escuro */}
              <div className="rounded-2xl bg-[#0E0E10] border border-white/10 p-4 space-y-4 hover:border-[#F36414]/30 transition-all duration-300 flex flex-col justify-between">
                <div className="h-24 sm:h-28 rounded-xl bg-[#F36414] shadow-md flex items-center justify-center">
                  <span className="text-white font-extrabold text-xs font-mono px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm shadow-sm">
                    #F36414
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-white">Laranja Escuro</p>
                  <p className="text-[11px] font-mono text-gray-400">RGB: 243, 100, 20</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SEÇÃO 3: MATERIAIS & APLICAÇÕES (Uniforme, Cartão, Folder, Flyer, Outdoor, Windbanner) */}
        {/* ========================================================================= */}
        <section id="secao-01s-materiais" className="scroll-mt-24 space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1 text-xs font-mono text-[#F38512] uppercase font-bold tracking-wider">
                <span>Seção 3</span>
                <span>•</span>
                <span>Além do Site: A Identidade Aplicada</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Materiais Gráficos, PDV e Mídia Exterior
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-lg">
              Ecossistema completo de peças físicas: da padronização dos colaboradores até mídias urbanas de alto alcance regional.
            </p>
          </div>

          {/* Grid of Materials (6 pieces aligned in 3x2 grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {MATERIAL_ITEMS.map((item) => {
              const currentSlideIndex = galleryIndexes[item.id] || 0;
              const currentSlide = item.slides[currentSlideIndex] || item.slides[0];
              const hasMultipleSlides = item.slides.length > 1;

              return (
                <div
                  key={item.id}
                  className="rounded-3xl bg-[#141416] border border-white/10 hover:border-[#4EA238]/40 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between shadow-xl group"
                >
                  <div>
                    {/* Header of Card */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <span className="text-xs font-mono text-[#4EA238] uppercase font-semibold">
                        {item.category}
                      </span>
                      {hasMultipleSlides && (
                        <span className="text-xs font-mono text-gray-300 bg-white/5 px-2 py-0.5 rounded">
                          {currentSlideIndex + 1} de {item.slides.length} vistas
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Image Viewport (Strictly object-contain, no cropping) */}
                    <div
                      className="relative h-[260px] sm:h-[280px] rounded-2xl bg-black/70 border border-white/5 p-3 flex items-center justify-center overflow-hidden cursor-pointer"
                      onClick={() =>
                        setLightboxData({
                          src: currentSlide.src,
                          title: item.title,
                          subtitle: currentSlide.label
                        })
                      }
                    >
                      <img
                        src={currentSlide.src}
                        alt={`${item.title} - ${currentSlide.label}`}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                      />

                      {/* Enlarge Hint */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="p-1.5 rounded-lg bg-black/80 text-white border border-white/10 flex items-center justify-center">
                          <Maximize2 className="w-3.5 h-3.5 text-[#4EA238]" />
                        </span>
                      </div>

                      {/* Slide Caption Pill */}
                      <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                        <span className="text-xs font-mono text-gray-100 bg-black/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10 truncate block text-center">
                          {currentSlide.label}
                        </span>
                      </div>
                    </div>

                    {/* Carousel Controls if multiple slides */}
                    {hasMultipleSlides && (
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          {item.slides.map((s, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSlideForGallery(item.id, sIdx);
                              }}
                              className={`h-1.5 rounded-full transition-all ${
                                sIdx === currentSlideIndex
                                  ? 'w-6 bg-[#4EA238]'
                                  : 'w-2 bg-white/20 hover:bg-white/40'
                              }`}
                              title={s.label}
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const newIdx =
                                (currentSlideIndex - 1 + item.slides.length) % item.slides.length;
                              setSlideForGallery(item.id, newIdx);
                            }}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5"
                            title="Slide anterior"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const newIdx = (currentSlideIndex + 1) % item.slides.length;
                              setSlideForGallery(item.id, newIdx);
                            }}
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5"
                            title="Próximo slide"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <button
                      onClick={() =>
                        setLightboxData({
                          src: currentSlide.src,
                          title: item.title,
                          subtitle: currentSlide.label
                        })
                      }
                      className="text-[#4EA238] hover:text-[#64bf50] transition-colors flex items-center gap-1 font-semibold text-xs text-left"
                    >
                      <span>Clique para abrir</span>
                    </button>
                    <button
                      onClick={() =>
                        setLightboxData({
                          src: currentSlide.src,
                          title: item.title,
                          subtitle: currentSlide.label
                        })
                      }
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-[#4EA238]/20 text-gray-300 hover:text-[#4EA238] border border-white/10 hover:border-[#4EA238]/40 transition-all flex items-center justify-center group/btn"
                      title="Visualizar imagem de perto"
                      aria-label="Visualizar imagem de perto"
                    >
                      <Eye className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SEÇÃO 4: REDES SOCIAIS (Comunicação para Conversão - Mosaic 3 Cards)    */}
        {/* ========================================================================= */}
        <section id="secao-01s-redes" className="scroll-mt-24 space-y-8">
          <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1 text-xs font-mono text-[#4EA238] uppercase font-bold tracking-wider">
                <span>Seção 4</span>
                <span>•</span>
                <span>Comunicação para Conversão</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Redes Sociais & Campanhas de Aquisição
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-lg">
              Campanhas táticas desenvolvidas para aquisição de motoristas parceiros, esclarecimento da transição da marca e engajamento dos usuários.
            </p>
          </div>

          {/* 3-Card Mosaic (Distinct layout, no sidebar list) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SOCIAL_ITEMS.map((post, idx) => (
              <div
                key={post.id}
                onClick={() => setSocialModalIndex(idx)}
                className="rounded-3xl bg-[#141416] border border-white/10 hover:border-[#F38512]/50 transition-all duration-300 p-5 flex flex-col justify-between shadow-xl cursor-pointer group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-[11px] font-mono text-[#F38512] uppercase font-bold">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                      Post 0{idx + 1}
                    </span>
                  </div>

                  {/* Image Viewport (object-contain with hover lift) */}
                  <div className="relative aspect-square rounded-2xl bg-black/80 border border-white/5 overflow-hidden flex items-center justify-center p-2 mb-4">
                    <img
                      src={post.imageSrc}
                      alt={post.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white border border-[#F38512]/40 text-xs font-mono flex items-center gap-1.5 shadow-xl">
                        <Maximize2 className="w-3.5 h-3.5 text-[#F38512]" />
                        <span>Abrir em tela cheia</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#F38512] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-3">
                    {post.description}
                  </p>

                  <p className="text-[11px] text-gray-500 leading-relaxed italic">
                    {post.details}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="text-[#F38512]">Clique para ampliar</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-1 group-hover:text-[#F38512] transition-all" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CLOSING CTA BLOCK                                                         */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#18181B] via-[#1A2518] to-[#1F1A12] border border-[#4EA238]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4EA238]/20 text-[#4EA238] text-xs font-mono font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transformação Digital Estruturada</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Quer uma transformação completa como a da 01S Mobilidade?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Cuidamos de tudo: do rebranding e logotipo à plataforma web de alta conversão, papelaria institucional e peças para redes sociais.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
            <a
              href={`https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
                'Olá João! Vi o case completo de sucesso da 01S Mobilidade no site da Arte do Algoritmo e quero um projeto com essa mesma qualidade para minha empresa.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#4EA238] to-[#F38512] hover:from-[#57B53E] hover:to-[#fa9224] text-black font-extrabold text-sm shadow-[0_0_30px_rgba(78,162,56,0.4)] transition-all hover:scale-105 flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Quero um projeto como esse</span>
            </a>

            <button
              onClick={handleBackToProjects}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-semibold transition-colors"
            >
              Ver outros cases
            </button>
          </div>
        </div>
      </main>

      {/* LIGHTBOX MODAL (For screenshots & materials) */}
      {lightboxData && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxData(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#141416] rounded-2xl border border-white/15 overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-[#0E0E10] border-b border-white/10 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white">{lightboxData.title}</p>
                {lightboxData.subtitle && (
                  <p className="text-xs text-gray-400 font-mono">{lightboxData.subtitle}</p>
                )}
              </div>
              <button
                onClick={() => setLightboxData(null)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Fechar (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 bg-black/90 overflow-y-auto custom-scrollbar flex-1 flex items-center justify-center">
              <img
                src={lightboxData.src}
                alt={lightboxData.title}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      {/* SOCIAL MEDIA CAROUSEL MODAL */}
      {socialModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSocialModalIndex(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#141416] rounded-3xl border border-white/15 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#0E0E10] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#F38512] uppercase font-bold block">
                  {SOCIAL_ITEMS[socialModalIndex].category} • {socialModalIndex + 1} de {SOCIAL_ITEMS.length}
                </span>
                <h3 className="text-base font-bold text-white">
                  {SOCIAL_ITEMS[socialModalIndex].title}
                </h3>
              </div>
              <button
                onClick={() => setSocialModalIndex(null)}
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body with Image + Navigation Buttons */}
            <div className="relative p-6 bg-black/95 flex items-center justify-center min-h-[420px]">
              <img
                src={SOCIAL_ITEMS[socialModalIndex].imageSrc}
                alt={SOCIAL_ITEMS[socialModalIndex].title}
                className="max-h-[60vh] w-auto object-contain rounded-xl shadow-2xl"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSocialModalIndex(
                    (socialModalIndex - 1 + SOCIAL_ITEMS.length) % SOCIAL_ITEMS.length
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 hover:bg-black text-white border border-white/20 transition-all hover:scale-110"
                title="Peça anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSocialModalIndex((socialModalIndex + 1) % SOCIAL_ITEMS.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 hover:bg-black text-white border border-white/20 transition-all hover:scale-110"
                title="Próxima peça"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-4 bg-[#0E0E10] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300">
              <p className="italic text-center sm:text-left">
                {SOCIAL_ITEMS[socialModalIndex].description}
              </p>
              <div className="flex items-center gap-1.5 shrink-0">
                {SOCIAL_ITEMS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSocialModalIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === socialModalIndex ? 'w-6 bg-[#F38512]' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
