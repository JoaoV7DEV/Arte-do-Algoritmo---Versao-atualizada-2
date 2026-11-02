import React, { useState, useEffect } from 'react';
import { Maximize2, MessageCircle, ArrowRight, X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';
import { AutoLoopRail } from './AutoLoopRail';

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

export interface StoryItem {
  id: string;
  src: string;
  caption: string;
  alt: string;
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
    details: 'Perfil de um petshop e consultório veterinário. No antes, o feed repete o mesmo painel de madeira com o logo e mistura vídeos do dia a dia da loja. No depois, o feed segue a identidade da marca, em laranja e verde, com destaques e posts prontos feitos sob medida, com apoio de IA. Neste caso, o trabalho entrou como Social Media, para deixar o perfil mais completo.',
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
    details: 'Perfil da própria Arte do Algoritmo. No antes, o feed misturava artes de vários nichos, sem uma identidade única. No depois, o feed segue a identidade da marca, com cores e estilo próprios, posts sobre tráfego pago e Google Meu Negócio e destaques como Feedbacks, Trabalhos e Pack de Artes.',
  },
];

const TOCA_DO_ACAI_STORIES: StoryItem[] = [
  {
    id: 'toca-01',
    src: '/portfolio/redes-sociais/stories/toca-do-acai-story-01.jpg',
    caption: 'Divulgação do pedido pelo iFood',
    alt: 'Story do Instagram da Toca do Açaí: Divulgação do pedido pelo iFood',
  },
  {
    id: 'toca-02',
    src: '/portfolio/redes-sociais/stories/toca-do-acai-story-02.jpg',
    caption: 'Divulgação do pedido pelo iFood',
    alt: 'Story do Instagram da Toca do Açaí: Divulgação do pedido pelo iFood',
  },
  {
    id: 'toca-03',
    src: '/portfolio/redes-sociais/stories/toca-do-acai-story-03.jpg',
    caption: 'Divulgação do pedido pelo iFood',
    alt: 'Story do Instagram da Toca do Açaí: Divulgação do pedido pelo iFood',
  },
  {
    id: 'toca-04',
    src: '/portfolio/redes-sociais/stories/toca-do-acai-story-04.jpg',
    caption: 'Milkshakes',
    alt: 'Story do Instagram da Toca do Açaí: Milkshakes',
  },
  {
    id: 'toca-05',
    src: '/portfolio/redes-sociais/stories/toca-do-acai-story-05.jpg',
    caption: 'Milkshakes',
    alt: 'Story do Instagram da Toca do Açaí: Milkshakes',
  },
  {
    id: 'toca-06',
    src: '/portfolio/redes-sociais/stories/toca-do-acai-story-06.jpg',
    caption: 'Batidinha de açaí',
    alt: 'Story do Instagram da Toca do Açaí: Batidinha de açaí',
  },
];

const HINODE_STORIES: StoryItem[] = [
  {
    id: 'hinode-01',
    src: '/portfolio/redes-sociais/stories/hinode-story-01.jpg',
    caption: 'Story de divulgação, consultora Hinode (1)',
    alt: 'Story do Instagram da consultora Hinode (1)',
  },
  {
    id: 'hinode-02',
    src: '/portfolio/redes-sociais/stories/hinode-story-02.jpg',
    caption: 'Story de divulgação, consultora Hinode (2)',
    alt: 'Story do Instagram da consultora Hinode (2)',
  },
  {
    id: 'hinode-03',
    src: '/portfolio/redes-sociais/stories/hinode-story-03.png',
    caption: 'Story de divulgação, consultora Hinode (3)',
    alt: 'Story do Instagram da consultora Hinode (3)',
  },
];

export const SocialProfilesPortfolioSection: React.FC<SocialProfilesPortfolioSectionProps> = ({ onNavigate }) => {
  // Before/after comparison lightbox state
  const [selectedCase, setSelectedCase] = useState<ProfileCase | null>(null);
  const [mobileTab, setMobileTab] = useState<'antes' | 'depois'>('depois');

  // Stories shared lightbox state
  const [activeStoryGroup, setActiveStoryGroup] = useState<StoryItem[] | null>(null);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);

  // Body scroll lock & ESC key listener for both lightboxes
  useEffect(() => {
    if (selectedCase || selectedStoryIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCase(null);
        setActiveStoryGroup(null);
        setSelectedStoryIndex(null);
      } else if (selectedStoryIndex !== null && activeStoryGroup) {
        if (e.key === 'ArrowLeft') {
          setSelectedStoryIndex((prev) => (prev !== null ? (prev - 1 + activeStoryGroup.length) % activeStoryGroup.length : null));
        } else if (e.key === 'ArrowRight') {
          setSelectedStoryIndex((prev) => (prev !== null ? (prev + 1) % activeStoryGroup.length : null));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCase, selectedStoryIndex, activeStoryGroup]);

  const handleOpenModal = (item: ProfileCase) => {
    setSelectedCase(item);
    setMobileTab('depois');
  };

  const handleOpenStoryLightbox = (group: StoryItem[], index: number) => {
    setActiveStoryGroup(group);
    setSelectedStoryIndex(index);
  };

  const currentStory = activeStoryGroup && selectedStoryIndex !== null ? activeStoryGroup[selectedStoryIndex] : null;

  const handleNavigateToSocialMediaService = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('servico-artes-para-redes-sociais');
    } else {
      window.history.pushState(null, '', '/servicos/artes-para-redes-sociais');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const isLightboxActive = selectedCase !== null || selectedStoryIndex !== null;

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

        {/* Task 5a: Before/After Cards using AutoLoopRail with autoLoop=false */}
        <AutoLoopRail
          items={PROFILE_CASES}
          autoLoop={false}
          renderItem={(item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#1E1E22] border border-white/10 hover:border-pink-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group w-[78vw] max-w-[340px] md:w-full md:max-w-[380px] text-left"
            >
              {/* 9:16 Cover Image */}
              <div className="w-full flex justify-center mb-6">
                <div
                  onClick={() => handleOpenModal(item)}
                  className="w-full max-w-[280px] aspect-[9/16] rounded-2xl bg-black/60 border border-white/10 overflow-hidden relative cursor-pointer group-hover:scale-[1.01] transition-transform duration-300 shadow-2xl"
                >
                  <img
                    src={item.coverImage}
                    alt={item.coverAlt}
                    loading="lazy"
                    width={280}
                    height={498}
                    className="w-full h-full object-cover pointer-events-none"
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
          )}
        />

        {/* Task 5b: Group H3 "Artes para stories" with two AutoLoopRails */}
        <div className="mt-20 space-y-12">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Artes para stories
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Stories feitos para clientes de diferentes nichos.
            </p>
          </div>

          {/* Rail 1: Toca do Açaí · açaiteria */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm sm:text-base font-bold font-mono text-white">
                Toca do Açaí · açaiteria
              </span>
            </div>

            <AutoLoopRail
              items={TOCA_DO_ACAI_STORIES}
              autoLoop={true}
              isPausedExternal={isLightboxActive}
              renderItem={(story, idx, isDuplicate) => (
                <div
                  onClick={() => handleOpenStoryLightbox(TOCA_DO_ACAI_STORIES, idx)}
                  tabIndex={isDuplicate ? -1 : 0}
                  role="button"
                  onKeyDown={(e) => {
                    if (!isDuplicate && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleOpenStoryLightbox(TOCA_DO_ACAI_STORIES, idx);
                    }
                  }}
                  className="p-3 sm:p-4 rounded-2xl bg-[#1E1E22] hover:bg-[#232328] border border-white/10 hover:border-pink-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-lg hover:shadow-pink-500/10 shrink-0 select-none text-left"
                >
                  {/* 9:16 Image: ~420px desktop, ~340px mobile, width auto */}
                  <div className="h-[340px] sm:h-[420px] w-auto aspect-[9/16] rounded-xl bg-black border border-white/5 overflow-hidden relative mb-3 group-hover:scale-[1.01] transition-transform duration-300">
                    <img
                      src={story.src}
                      alt={story.alt}
                      loading="lazy"
                      width={236}
                      height={420}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>

                  <div className="space-y-1.5 max-w-[236px]">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wide bg-pink-500/15 text-[#E71870] border border-pink-500/30">
                      Cliente
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-snug group-hover:text-pink-300 transition-colors">
                      {story.caption}
                    </p>
                  </div>
                </div>
              )}
            />
          </div>

          {/* Rail 2: Hinode · consultora de cosméticos */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm sm:text-base font-bold font-mono text-white">
                Hinode · consultora de cosméticos
              </span>
            </div>

            <AutoLoopRail
              items={HINODE_STORIES}
              autoLoop={true}
              isPausedExternal={isLightboxActive}
              renderItem={(story, idx, isDuplicate) => (
                <div
                  onClick={() => handleOpenStoryLightbox(HINODE_STORIES, idx)}
                  tabIndex={isDuplicate ? -1 : 0}
                  role="button"
                  onKeyDown={(e) => {
                    if (!isDuplicate && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleOpenStoryLightbox(HINODE_STORIES, idx);
                    }
                  }}
                  className="p-3 sm:p-4 rounded-2xl bg-[#1E1E22] hover:bg-[#232328] border border-white/10 hover:border-pink-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-lg hover:shadow-pink-500/10 shrink-0 select-none text-left"
                >
                  {/* 9:16 Image: ~420px desktop, ~340px mobile, width auto */}
                  <div className="h-[340px] sm:h-[420px] w-auto aspect-[9/16] rounded-xl bg-black border border-white/5 overflow-hidden relative mb-3 group-hover:scale-[1.01] transition-transform duration-300">
                    <img
                      src={story.src}
                      alt={story.alt}
                      loading="lazy"
                      width={236}
                      height={420}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>

                  <div className="space-y-1.5 max-w-[236px]">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wide bg-pink-500/15 text-[#E71870] border border-pink-500/30">
                      Cliente
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-snug group-hover:text-pink-300 transition-colors">
                      {story.caption}
                    </p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>

        {/* Task 5d: Closing Row moved to the END of Block B (after the stories) */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-base sm:text-lg font-bold text-white text-center sm:text-left">
            Quer um perfil com identidade assim?
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
              href="/servicos/artes-para-redes-sociais"
              onClick={handleNavigateToSocialMediaService}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-pink-500/15 hover:bg-pink-500/25 border border-pink-500/35 text-pink-300 hover:text-white font-semibold text-sm transition-all text-center cursor-pointer"
            >
              <span>Conheça os packs e caminhos</span>
              <ArrowRight className="w-4 h-4 text-[#E71870]" />
            </a>
          </div>
        </div>
      </div>

      {/* Comparison Lightbox Modal for Before/After */}
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
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
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

      {/* Shared Lightbox Modal for Stories */}
      {currentStory && activeStoryGroup && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => {
            setActiveStoryGroup(null);
            setSelectedStoryIndex(null);
          }}
        >
          <div
            className="relative max-w-lg w-full bg-[#18181B] border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col items-center space-y-5 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-pink-500/15 text-[#E71870] border border-pink-500/30">
                Cliente
              </span>

              <button
                type="button"
                onClick={() => {
                  setActiveStoryGroup(null);
                  setSelectedStoryIndex(null);
                }}
                aria-label="Fechar"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 9:16 Story Preview */}
            <div className="w-full max-h-[65vh] flex justify-center bg-black rounded-2xl border border-white/10 overflow-hidden p-2">
              <img
                src={currentStory.src}
                alt={currentStory.alt}
                className="max-h-[60vh] w-auto aspect-[9/16] object-contain filter drop-shadow-xl"
              />
            </div>

            {/* Caption */}
            <div className="w-full text-center space-y-1">
              <p className="text-base font-bold text-white">
                {currentStory.caption}
              </p>
            </div>

            {/* Navigation controls */}
            {activeStoryGroup.length > 1 && (
              <div className="flex items-center justify-between w-full pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedStoryIndex((prev) => (prev !== null ? (prev - 1 + activeStoryGroup.length) % activeStoryGroup.length : 0))
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <span className="text-xs font-mono text-gray-400">
                  {(selectedStoryIndex ?? 0) + 1} de {activeStoryGroup.length}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedStoryIndex((prev) => (prev !== null ? (prev + 1) % activeStoryGroup.length : 0))
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
