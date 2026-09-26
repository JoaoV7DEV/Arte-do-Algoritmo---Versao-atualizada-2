import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Sparkles, Layers, ExternalLink } from 'lucide-react';

interface Mob3lCaseButtonProps {
  onClick: (e: React.MouseEvent) => void;
  href?: string;
  className?: string;
  id?: string;
}

interface PreviewSlide {
  image: string;
  fallbackImage?: string;
  title: string;
  category: string;
  objectFit?: 'cover' | 'contain';
  bgClass?: string;
}

const PREVIEW_SLIDES: PreviewSlide[] = [
  {
    image: '/portfolio/sites/mob3l-completo.png',
    title: 'Página Completa do Site',
    category: 'Seção 1 • Web & Digital',
    objectFit: 'cover'
  },
  {
    image: '/portfolio/sites/mob3l-logo-claro.png',
    title: 'Logotipo Oficial (Nome Branco)',
    category: 'Seção 2 • Identidade Visual',
    objectFit: 'contain',
    bgClass: 'bg-[#0A0A0C] p-4'
  },
  {
    image: '/portfolio/sites/mob3l-folder-frente.jpg',
    title: 'Folder Institucional (Frente)',
    category: 'Seção 3 • Materiais & PDV',
    objectFit: 'cover'
  },
  {
    image: '/portfolio/sites/mob3l-post-recrutamento-motorista.jpg',
    title: 'Recrutamento de Motoristas',
    category: 'Seção 4 • Redes Sociais',
    objectFit: 'cover'
  }
];

export const Mob3lCaseButton: React.FC<Mob3lCaseButtonProps> = ({
  onClick,
  href = '/projetos/mob3l',
  className = '',
  id = 'btn-ver-case-mob3l'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const cycleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Detect touch / non-hover capability on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const matchTouch =
        window.matchMedia('(hover: none)').matches ||
        window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window;
      setIsTouchDevice(matchTouch);
    }
  }, []);

  // Slide cycling effect when preview is visible (every ~1.5s)
  useEffect(() => {
    if (showPreview && !isTouchDevice) {
      cycleTimerRef.current = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % PREVIEW_SLIDES.length);
      }, 1500);
    } else {
      if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
    }

    return () => {
      if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
    };
  }, [showPreview, isTouchDevice]);

  // Handle mouse enter with 180ms delay to prevent flashing on fast cursor pass-through
  const handleMouseEnter = (e: React.MouseEvent) => {
    if (isTouchDevice) return;
    setIsHovered(true);
    setCursorPos({ x: e.clientX, y: e.clientY });

    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);

    hoverTimerRef.current = setTimeout(() => {
      setShowPreview(true);
    }, 180);
  };

  // Track cursor position with offset
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice) return;
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // Handle mouse leave: instantly clean up
  const handleMouseLeave = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setIsHovered(false);
    setShowPreview(false);
  };

  // Safe portal position calculation so preview remains neatly on-screen
  const getPanelPosition = () => {
    if (typeof window === 'undefined') return { left: 0, top: 0 };
    const panelWidth = 280;
    const panelHeight = 220;
    const padding = 16;

    // By default: offset to top-right of cursor
    let left = cursorPos.x + 18;
    let top = cursorPos.y - (panelHeight + 12);

    // If too close to top, show below cursor instead
    if (top < padding) {
      top = cursorPos.y + 24;
    }

    // If too close to right edge, flip to left of cursor
    if (left + panelWidth > window.innerWidth - padding) {
      left = cursorPos.x - panelWidth - 18;
    }

    // Keep within left boundary
    if (left < padding) {
      left = padding;
    }

    return { left, top };
  };

  const { left, top } = getPanelPosition();
  const currentSlide = PREVIEW_SLIDES[slideIndex];

  return (
    <>
      <a
        id={id}
        href={href}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs transition-all duration-300 group select-none min-h-[46px] active:scale-[0.98] mob3l-mobile-pulse ${className}`}
      >
        {/* Subtle mobile shimmer highlight */}
        <span className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none sm:hidden">
          <span className="absolute -inset-x-full inset-y-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_3s_infinite]" />
        </span>

        {/* Small subtle spark/expand icon */}
        <Sparkles className="w-3.5 h-3.5 text-black/70 group-hover:text-black group-hover:rotate-12 transition-transform shrink-0" />

        <span className="tracking-tight whitespace-nowrap">Ver case completo</span>

        {/* Dynamic arrow icon with micro-translation */}
        <ArrowRight className="w-4 h-4 text-black transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
      </a>

      {/* DESKTOP HOVER PREVIEW PANEL (Rendered via Portal to escape parent overflow:hidden) */}
      {!isTouchDevice &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className={`fixed z-[9999] pointer-events-none select-none transition-all duration-200 ease-out transform ${
              showPreview
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-95 translate-y-1.5 pointer-events-none'
            }`}
            style={{
              left: `${left}px`,
              top: `${top}px`,
              width: '280px',
              transitionProperty: 'opacity, transform'
            }}
          >
            <div className="relative rounded-2xl bg-[#141416]/95 backdrop-blur-xl border border-yellow-500/30 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(234,179,8,0.2)] overflow-hidden">
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 pb-2 border-b border-white/10 text-[10px] font-mono">
                <div className="flex items-center gap-1.5 text-yellow-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  <span className="tracking-wider uppercase">Prévia do Case MOB3L</span>
                </div>
                {/* Dots indicator for cycling slides */}
                <div className="flex items-center gap-1">
                  {PREVIEW_SLIDES.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === slideIndex ? 'w-3.5 bg-yellow-400' : 'w-1 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Teaser Preview Image Area (soft, low-opacity ~55-65% peek as requested) */}
              <div className={`relative mt-2.5 h-[130px] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center ${currentSlide.bgClass || 'bg-black/60'}`}>
                {/* Soft dimmed background peek */}
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  onError={(e) => {
                    if (currentSlide.fallbackImage) {
                      e.currentTarget.src = currentSlide.fallbackImage;
                    }
                  }}
                  className={`w-full h-full transition-opacity duration-500 transform ${
                    currentSlide.objectFit === 'contain'
                      ? 'object-contain max-h-[85%] max-w-[85%] opacity-90'
                      : 'object-cover object-top opacity-60 filter blur-[0.6px] brightness-90 scale-105'
                  }`}
                />

                {/* Soft atmospheric gradient wash over preview */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-black/20 to-transparent pointer-events-none" />

                {/* Overlaid Slide Caption Info */}
                <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between gap-2 z-10">
                  <div className="bg-black/85 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 max-w-[85%]">
                    <span className="text-[9px] font-mono text-yellow-400 uppercase tracking-wide block font-semibold">
                      {currentSlide.category}
                    </span>
                    <span className="text-[11px] font-bold text-white truncate block">
                      {currentSlide.title}
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-md bg-yellow-400/20 border border-yellow-500/30 flex items-center justify-center shrink-0">
                    <Layers className="w-3 h-3 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Bottom Guidance Tag */}
              <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-400 font-mono">
                <span className="text-gray-300">Seções 1 a 4 • Case Completo</span>
                <span className="text-yellow-400/90 flex items-center gap-1 font-semibold">
                  Clique para abrir →
                </span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
