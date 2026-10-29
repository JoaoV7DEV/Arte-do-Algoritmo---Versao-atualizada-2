import React, { useState, useEffect } from 'react';
import { Maximize2, MessageCircle, ArrowRight, X, Sparkles, Layers } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';

interface ProfileCase {
  id: string;
  name: string;
  niche: string;
  badge: string;
  coverImage: string;
  coverAlt: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  details: string;
}

interface SocialProfilesPortfolioSectionProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

const PROFILE_CASES: ProfileCase[] = [
  {
    id: 'petvet',
    name: 'Perfil do PetVet: antes e depois',
    niche: 'Petshop',
    badge: 'ANTES → DEPOIS',
    coverImage: '/portfolio/redes-sociais/identidade-perfis/petvet-antes-depois-colagem.jpg',
    coverAlt: 'Antes e depois do perfil do Instagram do PetVet',
    beforeImage: '/portfolio/redes-sociais/identidade-perfis/petvet-antes.jpg',
    beforeAlt: 'Feed do Instagram do PetVet antes da melhoria de identidade visual',
    afterImage: '/portfolio/redes-sociais/identidade-perfis/petvet-depois.jpg',
    afterAlt: 'Feed do Instagram do PetVet depois da melhoria de identidade visual',
    details: 'Perfil de um petshop e consultório veterinário. No antes, o feed repete o mesmo painel de madeira com o logo e mistura vídeos do dia a dia da loja. No depois, o feed segue a identidade da marca, em laranja e verde, com destaques e posts prontos feitos sob medida, com apoio de IA. Neste caso, o trabalho entrou como Social Media, para deixar o perfil mais completo.'
  },
  {
    id: 'arte-do-algoritmo',
    name: 'Perfil da Arte do Algoritmo: antes e depois',
    niche: 'Agência digital',
    badge: 'ANTES → DEPOIS',
    coverImage: '/portfolio/redes-sociais/identidade-perfis/arte-do-algoritmo-antes-depois-colagem.jpg',
    coverAlt: 'Antes e depois do perfil do Instagram da Arte do Algoritmo',
    beforeImage: '/portfolio/redes-sociais/identidade-perfis/arte-do-algoritmo-antes.jpg',
    beforeAlt: 'Feed do Instagram da Arte do Algoritmo antes da melhoria de identidade visual',
    afterImage: '/portfolio/redes-sociais/identidade-perfis/arte-do-algoritmo-depois.jpg',
    afterAlt: 'Feed do Instagram da Arte do Algoritmo depois da melhoria de identidade visual',
    details: 'Perfil da própria Arte do Algoritmo. No antes, o feed misturava artes de vários nichos, sem uma identidade única. No depois, o feed segue a identidade da marca, com cores e estilo próprios, posts sobre tráfego pago e Google Meu Negócio e destaques como Feedbacks, Trabalhos e Pack de Artes.'
  }
];

export const SocialProfilesPortfolioSection: React.FC<SocialProfilesPortfolioSectionProps> = ({ onNavigate }) => {
  const [selectedCase, setSelectedCase] = useState<ProfileCase | null>(null);
  const [mobileTab, setMobileTab] = useState<'antes' | 'depois'>('depois');

  // Body scroll lock & ESC key listener for lightbox
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCase(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCase]);

  const handleOpenModal = (item: ProfileCase) => {
    setSelectedCase(item);
    setMobileTab('depois');
  };

  const handleNavigateToSocialMediaService = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('servico-artes-para-redes-sociais');
    } else {
      window.history.pushState(null, '', '/servicos/artes-para-redes-sociais');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section
      id="galeria-redes-sociais"
      style={{ scrollMarginTop: '104px' }}
      className="py-16 sm:py-24 bg-[#141416] border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#E71870] font-mono font-semibold block mb-2">
            REDES SOCIAIS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Identidade visual em perfis do Instagram
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Antes e depois do feed de perfis que passaram por melhoria de identidade visual.
          </p>
        </div>

        {/* 2 Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PROFILE_CASES.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#1E1E22] border border-white/10 hover:border-pink-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              {/* 9:16 Cover Image */}
              <div className="w-full flex justify-center mb-6">
                <div
                  onClick={() => handleOpenModal(item)}
                  className="w-[78vw] max-w-[280px] aspect-[9/16] rounded-2xl bg-black/60 border border-white/10 overflow-hidden relative cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 shadow-2xl"
                >
                  <img
                    src={item.coverImage}
                    alt={item.coverAlt}
                    loading="lazy"
                    width={280}
                    height={498}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 border border-white/20 text-xs text-white font-medium backdrop-blur-md">
                      <Maximize2 className="w-3.5 h-3.5 text-[#E71870]" />
                      <span>Ampliar</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="space-y-4">
                {/* Badge + Niche chip row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/15 text-[#E71870] border border-pink-500/30">
                    {item.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-gray-300 bg-white/5 border border-white/10">
                    {item.niche}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.name}
                </h3>

                <button
                  type="button"
                  onClick={() => handleOpenModal(item)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-xs sm:text-sm transition-all text-center cursor-pointer group/btn"
                >
                  <Maximize2 className="w-4 h-4 text-[#E71870] group-hover/btn:scale-110 transition-transform" />
                  <span>Ampliar e ver detalhes</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Row for Block B */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-base sm:text-lg font-bold text-white text-center sm:text-left">
            Quer um perfil com identidade assim?
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
              href="/servicos/artes-para-redes-sociais"
              onClick={handleNavigateToSocialMediaService}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-pink-500/15 hover:bg-pink-500/25 border border-pink-500/35 text-pink-300 hover:text-white font-semibold text-sm transition-all text-center"
            >
              <span>Artes para redes sociais</span>
              <ArrowRight className="w-4 h-4 text-[#E71870]" />
            </a>
          </div>
        </div>

        {/* Slim Banner at the End of Block B */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#18181B] via-[#202025] to-[#18181B] border border-white/10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <p className="text-sm sm:text-base text-gray-200 font-medium">
            Conheça os packs de artes para redes sociais, editáveis no Canva ou prontos pra postar.
          </p>

          <a
            href="/servicos/artes-para-redes-sociais"
            onClick={handleNavigateToSocialMediaService}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all shrink-0"
          >
            <span>Ver os packs</span>
            <ArrowRight className="w-4 h-4 text-[#E71870]" />
          </a>
        </div>
      </div>

      {/* Comparison Lightbox Modal */}
      {selectedCase && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#18181B] border border-white/15 rounded-3xl p-5 sm:p-8 shadow-2xl flex flex-col max-h-[92vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/15 text-[#E71870] border border-pink-500/30">
                  {selectedCase.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-gray-300 bg-white/5 border border-white/10">
                  {selectedCase.niche}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                aria-label="Fechar"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile View: Two-Tab Toggle (Antes | Depois) */}
            <div className="md:hidden flex flex-col items-center space-y-4">
              <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
                <button
                  type="button"
                  onClick={() => setMobileTab('antes')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    mobileTab === 'antes'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Antes
                </button>
                <button
                  type="button"
                  onClick={() => setMobileTab('depois')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    mobileTab === 'depois'
                      ? 'bg-[#E71870]/20 text-pink-300 border border-pink-500/30'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Depois
                </button>
              </div>

              <div className="w-[78vw] max-w-[300px] aspect-[9/16] rounded-2xl bg-black border border-white/10 overflow-hidden shadow-xl">
                <img
                  src={mobileTab === 'antes' ? selectedCase.beforeImage : selectedCase.afterImage}
                  alt={mobileTab === 'antes' ? selectedCase.beforeAlt : selectedCase.afterAlt}
                  width={280}
                  height={498}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Desktop View: Side-by-Side (Antes left, Depois right) with equal height */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 items-center">
              {/* Antes */}
              <div className="flex flex-col items-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/15 text-red-300 border border-red-500/30">
                  <span>Antes</span>
                </div>
                <div className="w-full max-w-[280px] aspect-[9/16] rounded-2xl bg-black border border-white/10 overflow-hidden shadow-xl">
                  <img
                    src={selectedCase.beforeImage}
                    alt={selectedCase.beforeAlt}
                    width={280}
                    height={498}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Depois */}
              <div className="flex flex-col items-center space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/15 text-[#E71870] border border-pink-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Depois</span>
                </div>
                <div className="w-full max-w-[280px] aspect-[9/16] rounded-2xl bg-black border border-white/10 overflow-hidden shadow-xl">
                  <img
                    src={selectedCase.afterImage}
                    alt={selectedCase.afterAlt}
                    width={280}
                    height={498}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Details Panel below */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedCase.name}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {selectedCase.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
