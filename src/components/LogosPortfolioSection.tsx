import React, { useState, useEffect } from 'react';
import { Palette, MessageCircle, ArrowRight, X, ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';

export interface LogoItem {
  id: string;
  name: string;
  caption?: string;
  tag: string;
  isClient?: boolean;
  src: string;
  alt: string;
}

interface LogoGroup {
  title: string;
  note?: string;
  logos: LogoItem[];
}

interface LogosPortfolioSectionProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

const LOGO_GROUPS: LogoGroup[] = [
  {
    title: 'Lojas online',
    logos: [
      {
        id: 'a-casa-dela',
        name: 'A Casa Dela',
        caption: 'Loja online de utensílios para casa',
        tag: 'Cliente',
        isClient: true,
        src: '/portfolio/identidade-visual/logos/clientes/logo-a-casa-dela.jpg',
        alt: 'Logotipo A Casa Dela - Loja online de utensílios para casa'
      },
      {
        id: 'compras-happy',
        name: 'Compras Happy',
        caption: 'Loja de variedades online',
        tag: 'Cliente',
        isClient: true,
        src: '/portfolio/identidade-visual/logos/clientes/logo-compras-happy.jpg',
        alt: 'Logotipo Compras Happy - Loja de variedades online'
      }
    ]
  },
  {
    title: 'Outros nichos',
    logos: [
      {
        id: 'vanessa-oliveira',
        name: 'Corretora Vanessa Oliveira',
        caption: 'Corretora de imóveis',
        tag: 'Cliente',
        isClient: true,
        src: '/portfolio/identidade-visual/logos/clientes/logo-vanessa-oliveira.jpg',
        alt: 'Logotipo Corretora Vanessa Oliveira - Corretora de imóveis'
      },
      {
        id: 'everton-limberger',
        name: 'Psicólogo Everton Limberger',
        caption: 'Psicologia',
        tag: 'Cliente',
        isClient: true,
        src: '/portfolio/identidade-visual/logos/clientes/logo-everton-limberger.jpg',
        alt: 'Logotipo Psicólogo Everton Limberger - Psicologia'
      },
      {
        id: 'refinatta-salgados',
        name: 'Refinatta Salgados',
        caption: 'Lanchonete de coxinhas',
        tag: 'Cliente',
        isClient: true,
        src: '/portfolio/identidade-visual/logos/clientes/logo-refinatta-salgados.jpg',
        alt: 'Logotipo Refinatta Salgados - Lanchonete de coxinhas'
      }
    ]
  },
  {
    title: 'Produtos naturais',
    note: 'Estudos conceituais de logos para o nicho de produtos naturais.',
    logos: [
      {
        id: 'raizes-verdes',
        name: 'Raízes Verdes',
        tag: 'Estudo conceitual',
        isClient: false,
        src: '/portfolio/identidade-visual/logos/produtos-naturais/logo-raizes-verdes.png',
        alt: 'Logotipo conceitual Raízes Verdes'
      },
      {
        id: 'aroma-organico',
        name: 'Aroma Orgânico',
        tag: 'Estudo conceitual',
        isClient: false,
        src: '/portfolio/identidade-visual/logos/produtos-naturais/logo-aroma-organico.png',
        alt: 'Logotipo conceitual Aroma Orgânico'
      },
      {
        id: 'nature',
        name: 'Nature',
        tag: 'Estudo conceitual',
        isClient: false,
        src: '/portfolio/identidade-visual/logos/produtos-naturais/logo-nature.png',
        alt: 'Logotipo conceitual Nature'
      },
      {
        id: 'puro-organico',
        name: 'Puro Orgânico',
        tag: 'Estudo conceitual',
        isClient: false,
        src: '/portfolio/identidade-visual/logos/produtos-naturais/logo-puro-organico.png',
        alt: 'Logotipo conceitual Puro Orgânico'
      },
      {
        id: 'natural-drink',
        name: 'NaturalDrink',
        tag: 'Estudo conceitual',
        isClient: false,
        src: '/portfolio/identidade-visual/logos/produtos-naturais/logo-natural-drink.png',
        alt: 'Logotipo conceitual NaturalDrink'
      },
      {
        id: 'coco-vida',
        name: 'Coco Vida',
        tag: 'Estudo conceitual',
        isClient: false,
        src: '/portfolio/identidade-visual/logos/produtos-naturais/logo-coco-vida.png',
        alt: 'Logotipo conceitual Coco Vida'
      },
      {
        id: 'biossencia',
        name: 'Biossência',
        tag: 'Estudo conceitual',
        isClient: false,
        src: '/portfolio/identidade-visual/logos/produtos-naturais/logo-biossencia.png',
        alt: 'Logotipo conceitual Biossência'
      },
      {
        id: 'navida-naturais',
        name: 'Navida Naturais',
        tag: 'Estudo conceitual',
        isClient: false,
        src: '/portfolio/identidade-visual/logos/produtos-naturais/logo-navida-naturais.png',
        alt: 'Logotipo conceitual Navida Naturais'
      }
    ]
  },
  {
    title: 'Estudos e experimentos',
    logos: [
      {
        id: 'digital-dreams-shop',
        name: 'Digital Dreams Shop',
        caption: 'Loja fictícia de eletrônicos',
        tag: 'Logo fictícia',
        isClient: false,
        src: '/portfolio/identidade-visual/logos/estudos/logo-digital-dreams-shop.jpg',
        alt: 'Logotipo fictício Digital Dreams Shop'
      },
      {
        id: 'cine-club-ia',
        name: 'Cine Club',
        caption: 'Conceito criado com IA',
        tag: 'Feita com IA',
        isClient: false,
        src: '/portfolio/identidade-visual/logos/estudos/logo-cine-club-ia.jpg',
        alt: 'Logotipo conceitual Cine Club'
      }
    ]
  }
];

export const LogosPortfolioSection: React.FC<LogosPortfolioSectionProps> = ({ onNavigate }) => {
  const [selectedLogoIndex, setSelectedLogoIndex] = useState<number | null>(null);

  // Flattened list of all logos for the lightbox carousel
  const allLogos = React.useMemo(() => {
    return LOGO_GROUPS.flatMap(group => group.logos);
  }, []);

  // Keyboard navigation & body scroll lock for lightbox
  useEffect(() => {
    if (selectedLogoIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedLogoIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedLogoIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedLogoIndex(prev => (prev !== null ? (prev - 1 + allLogos.length) % allLogos.length : null));
      } else if (e.key === 'ArrowRight') {
        setSelectedLogoIndex(prev => (prev !== null ? (prev + 1) % allLogos.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedLogoIndex, allLogos.length]);

  const handleOpenLightbox = (logoId: string) => {
    const idx = allLogos.findIndex(item => item.id === logoId);
    if (idx !== -1) {
      setSelectedLogoIndex(idx);
    }
  };

  const currentLogo = selectedLogoIndex !== null ? allLogos[selectedLogoIndex] : null;

  const handleNavigateCase = (page: PageView, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    } else {
      const url = page === 'projeto-01s' ? '/projetos/01s-mobilidade' : '/projetos/mob3l';
      window.history.pushState(null, '', url);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleNavigateServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('servicos', 'pilar-design-estrategico');
    } else {
      window.history.pushState(null, '', '/servicos#pilar-design-estrategico');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section
      id="case-identidade-visual"
      style={{ scrollMarginTop: '104px' }}
      className="py-16 sm:py-24 bg-[#18181B] border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E71870] font-mono font-semibold block mb-2">
            IDENTIDADE VISUAL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Logotipos e identidade visual
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-5">
            Logos criadas para negócios de diferentes nichos. Cada uma está marcada como projeto de cliente ou como estudo.
          </p>

          {/* Note row linking to 01S Mobilidade and MOB3L */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <Sparkles className="w-4 h-4 text-[#E71870] shrink-0 mt-0.5 sm:mt-0" />
            <p>
              Quer ver uma identidade completa, com manual de marca e aplicações em materiais? Veja os cases{' '}
              <a
                href="/projetos/01s-mobilidade"
                onClick={(e) => handleNavigateCase('projeto-01s', e)}
                className="text-[#E71870] hover:text-pink-400 font-semibold underline underline-offset-4 cursor-pointer inline-flex items-center gap-1"
              >
                01S Mobilidade
                <ExternalLink className="w-3 h-3 inline" />
              </a>{' '}
              e{' '}
              <a
                href="/projetos/mob3l"
                onClick={(e) => handleNavigateCase('projeto-mob3l', e)}
                className="text-[#E71870] hover:text-pink-400 font-semibold underline underline-offset-4 cursor-pointer inline-flex items-center gap-1"
              >
                MOB3L
                <ExternalLink className="w-3 h-3 inline" />
              </a>.
            </p>
          </div>
        </div>

        {/* 4 Groups */}
        <div className="space-y-16">
          {LOGO_GROUPS.map((group) => (
            <div key={group.title} className="space-y-6">
              <div className="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {group.title}
                </h3>
                {group.note && (
                  <p className="text-xs sm:text-sm text-gray-400 font-normal">
                    {group.note}
                  </p>
                )}
              </div>

              {/* Responsive Grid: desktop 4 columns, tablet 3, mobile 2 */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {group.logos.map((logo) => (
                  <div
                    key={logo.id}
                    onClick={() => handleOpenLightbox(logo.id)}
                    className="p-4 sm:p-5 rounded-2xl bg-[#1E1E22] hover:bg-[#232328] border border-white/10 hover:border-pink-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-lg hover:shadow-pink-500/10"
                  >
                    {/* Square image container */}
                    <div className="aspect-square w-full rounded-xl bg-[#141416] border border-white/5 p-4 sm:p-6 flex items-center justify-center mb-4 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-300">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain filter drop-shadow-md"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="space-y-2 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="mb-2">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wide ${
                              logo.isClient
                                ? 'bg-pink-500/15 text-[#E71870] border border-pink-500/30'
                                : 'bg-white/5 text-gray-400 border border-white/10'
                            }`}
                          >
                            {logo.tag}
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-pink-300 transition-colors">
                          {logo.name}
                        </h4>
                      </div>

                      {logo.caption && (
                        <p className="text-xs text-gray-400 leading-relaxed font-normal pt-1">
                          {logo.caption}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Row for Block A */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-base sm:text-lg font-bold text-white text-center sm:text-left">
            Quer uma marca assim pro seu negócio?
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-sm shadow-md hover:shadow-cyan-500/25 transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>

            <a
              href="/servicos"
              onClick={handleNavigateServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all text-center"
            >
              <span>Como funciona o serviço</span>
              <ArrowRight className="w-4 h-4 text-[#E71870]" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLogo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedLogoIndex(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#18181B] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
              <span
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold ${
                  currentLogo.isClient
                    ? 'bg-pink-500/15 text-[#E71870] border border-pink-500/30'
                    : 'bg-white/5 text-gray-400 border border-white/10'
                }`}
              >
                {currentLogo.tag}
              </span>

              <button
                type="button"
                onClick={() => setSelectedLogoIndex(null)}
                aria-label="Fechar"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview */}
            <div className="w-full max-h-[50vh] sm:max-h-[55vh] aspect-square max-w-md bg-[#141416] rounded-2xl border border-white/10 p-6 flex items-center justify-center overflow-hidden">
              <img
                src={currentLogo.src}
                alt={currentLogo.alt}
                className="max-h-full max-w-full object-contain filter drop-shadow-xl"
              />
            </div>

            {/* Logo Details */}
            <div className="w-full text-center space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentLogo.name}
              </h3>
              {currentLogo.caption && (
                <p className="text-sm text-gray-300">
                  {currentLogo.caption}
                </p>
              )}
            </div>

            {/* Navigation controls if multiple */}
            {allLogos.length > 1 && (
              <div className="flex items-center justify-between w-full pt-2">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedLogoIndex(prev => (prev !== null ? (prev - 1 + allLogos.length) % allLogos.length : 0))
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-gray-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <span className="text-xs font-mono text-gray-400">
                  {(selectedLogoIndex ?? 0) + 1} de {allLogos.length}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedLogoIndex(prev => (prev !== null ? (prev + 1) % allLogos.length : 0))
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-gray-300 hover:text-white transition-colors"
                >
                  <span>Próximo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
