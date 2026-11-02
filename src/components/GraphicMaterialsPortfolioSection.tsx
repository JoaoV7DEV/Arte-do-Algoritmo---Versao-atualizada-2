import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';
import { AutoLoopRail } from './AutoLoopRail';

export interface BannerItem {
  id: string;
  src: string;
  title: string;
  store: string;
  alt: string;
}

interface GraphicMaterialsPortfolioSectionProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

const BANNERS_DATA: BannerItem[] = [
  {
    id: 'a-casa-dela-01',
    src: '/portfolio/materiais-graficos/banners/banner-a-casa-dela-01-arte-quadrada.png',
    title: 'Arte quadrada para publicidade',
    store: 'A Casa Dela',
    alt: 'Arte quadrada para publicidade da loja A Casa Dela',
  },
  {
    id: 'a-casa-dela-02',
    src: '/portfolio/materiais-graficos/banners/banner-a-casa-dela-02-vertical-celular.jpg',
    title: 'Banner vertical para celular',
    store: 'A Casa Dela',
    alt: 'Banner vertical para celular da loja A Casa Dela',
  },
  {
    id: 'a-casa-dela-03',
    src: '/portfolio/materiais-graficos/banners/banner-a-casa-dela-03-loja-online.png',
    title: 'Banner para loja online',
    store: 'A Casa Dela',
    alt: 'Banner para loja online da loja A Casa Dela',
  },
  {
    id: 'a-casa-dela-04',
    src: '/portfolio/materiais-graficos/banners/banner-a-casa-dela-04-celular-loja-online.jpg',
    title: 'Banner para celular, loja online',
    store: 'A Casa Dela',
    alt: 'Banner para celular, loja online da loja A Casa Dela',
  },
  {
    id: 'a-casa-dela-05',
    src: '/portfolio/materiais-graficos/banners/banner-a-casa-dela-05-achadinho-shoppe.png',
    title: 'Banner Achadinho Shoppe',
    store: 'A Casa Dela',
    alt: 'Banner Achadinho Shoppe da loja A Casa Dela',
  },
  {
    id: 'a-casa-dela-06',
    src: '/portfolio/materiais-graficos/banners/banner-a-casa-dela-06-frete-gratis.png',
    title: 'Banner frete grátis',
    store: 'A Casa Dela',
    alt: 'Banner frete grátis da loja A Casa Dela',
  },
  {
    id: 'a-casa-dela-07',
    src: '/portfolio/materiais-graficos/banners/banner-desconto-primeira-compra.jpg',
    title: 'Banner desconto na primeira compra',
    store: 'A Casa Dela',
    alt: 'Banner desconto na primeira compra da loja A Casa Dela',
  },
  {
    id: 'compras-happy-01',
    src: '/portfolio/materiais-graficos/banners/banner-compras-happy-01-achadinhos.png',
    title: 'Banner para loja de achadinhos',
    store: 'Compras Happy',
    alt: 'Banner para loja de achadinhos da loja Compras Happy',
  },
  {
    id: 'compras-happy-02',
    src: '/portfolio/materiais-graficos/banners/banner-compras-happy-02-loja-online.png',
    title: 'Banner para loja online',
    store: 'Compras Happy',
    alt: 'Banner para loja online da loja Compras Happy',
  },
];

export const GraphicMaterialsPortfolioSection: React.FC<GraphicMaterialsPortfolioSectionProps> = ({ onNavigate }) => {
  const [selectedBannerIndex, setSelectedBannerIndex] = useState<number | null>(null);

  // Keyboard navigation & body scroll lock for lightbox
  useEffect(() => {
    if (selectedBannerIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedBannerIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedBannerIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedBannerIndex((prev) => (prev !== null ? (prev - 1 + BANNERS_DATA.length) % BANNERS_DATA.length : null));
      } else if (e.key === 'ArrowRight') {
        setSelectedBannerIndex((prev) => (prev !== null ? (prev + 1) % BANNERS_DATA.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedBannerIndex]);

  const handleOpenLightbox = (index: number) => {
    setSelectedBannerIndex(index);
  };

  const currentBanner = selectedBannerIndex !== null ? BANNERS_DATA[selectedBannerIndex] : null;

  const handleNavigateServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('servicos', 'materiais-graficos');
    } else {
      window.history.pushState(null, '', '/servicos#materiais-graficos');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section
      id="galeria-materiais-graficos"
      style={{ scrollMarginTop: '104px' }}
      className="py-16 sm:py-24 bg-[#18181B] border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E71870] font-mono font-semibold block mb-2">
            DESIGN GRÁFICO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Materiais gráficos
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Banners e artes para lojas online, feitos para as lojas A Casa Dela e Compras Happy.
          </p>
        </div>

        {/* Group: Banners para lojas online */}
        <div className="space-y-4">
          <div className="border-b border-white/10 pb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Banners para lojas online
            </h3>
          </div>

          {/* AutoLoopRail for banners (height fixed ~300px desktop, ~240px mobile, width auto) */}
          <AutoLoopRail
            items={BANNERS_DATA}
            autoLoop={true}
            isPausedExternal={selectedBannerIndex !== null}
            renderItem={(banner, idx, isDuplicate) => (
              <div
                onClick={() => handleOpenLightbox(idx)}
                tabIndex={isDuplicate ? -1 : 0}
                role="button"
                onKeyDown={(e) => {
                  if (!isDuplicate && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleOpenLightbox(idx);
                  }
                }}
                className="p-4 sm:p-5 rounded-2xl bg-[#1E1E22] hover:bg-[#232328] border border-white/10 hover:border-pink-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-lg hover:shadow-pink-500/10 shrink-0 select-none text-left"
              >
                {/* Image container: fixed height ~300px desktop, ~240px mobile, width auto, no crop, no black bars */}
                <div className="h-[240px] sm:h-[300px] w-auto rounded-xl bg-[#141416] border border-white/5 p-2 sm:p-3 flex items-center justify-center mb-4 overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-300">
                  <img
                    src={banner.src}
                    alt={banner.alt}
                    loading="lazy"
                    className="max-h-full w-auto object-contain filter drop-shadow-md pointer-events-none"
                  />
                </div>

                {/* Card Meta */}
                <div className="space-y-2 flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wide bg-pink-500/15 text-[#E71870] border border-pink-500/30">
                      Cliente
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-gray-300 bg-white/5 border border-white/10">
                      {banner.store}
                    </span>
                  </div>

                  <h4 className="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-pink-300 transition-colors">
                    {banner.title}
                  </h4>
                </div>
              </div>
            )}
          />
        </div>

        {/* Closing Row for Block C */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-base sm:text-lg font-bold text-white text-center sm:text-left">
            Precisa de banners e artes pro seu negócio?
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-sm shadow-md hover:shadow-cyan-500/25 transition-all text-center cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>

            <a
              href="/servicos#materiais-graficos"
              onClick={handleNavigateServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all text-center cursor-pointer"
            >
              <span>Ver o serviço</span>
              <ArrowRight className="w-4 h-4 text-[#E71870]" />
            </a>
          </div>
        </div>
      </div>

      {/* Shared Lightbox Modal for Banners */}
      {currentBanner && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedBannerIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#18181B] border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl flex flex-col items-center space-y-6 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/15 text-[#E71870] border border-pink-500/30">
                  Cliente
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-gray-300 bg-white/5 border border-white/10">
                  {currentBanner.store}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedBannerIndex(null)}
                aria-label="Fechar"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview with intact aspect ratio */}
            <div className="w-full max-h-[60vh] sm:max-h-[65vh] bg-[#141416] rounded-2xl border border-white/10 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
              <img
                src={currentBanner.src}
                alt={currentBanner.alt}
                className="max-h-full w-auto max-w-full object-contain filter drop-shadow-xl"
              />
            </div>

            {/* Banner Details */}
            <div className="w-full text-center space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {currentBanner.title}
              </h3>
              <p className="text-sm text-gray-400">
                {currentBanner.store}
              </p>
            </div>

            {/* Navigation controls */}
            {BANNERS_DATA.length > 1 && (
              <div className="flex items-center justify-between w-full pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedBannerIndex((prev) => (prev !== null ? (prev - 1 + BANNERS_DATA.length) % BANNERS_DATA.length : 0))
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <span className="text-xs font-mono text-gray-400">
                  {(selectedBannerIndex ?? 0) + 1} de {BANNERS_DATA.length}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedBannerIndex((prev) => (prev !== null ? (prev + 1) % BANNERS_DATA.length : 0))
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
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
