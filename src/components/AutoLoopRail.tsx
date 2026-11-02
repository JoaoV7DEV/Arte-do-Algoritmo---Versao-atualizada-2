import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

export interface AutoLoopRailProps<T> {
  items: T[];
  renderItem: (item: T, index: number, isDuplicate?: boolean) => React.ReactNode;
  autoLoop?: boolean;
  gap?: number; // Gap in pixels, default 24
  speed?: number; // Speed in px/s, default 40
  isPausedExternal?: boolean; // Paused when lightbox is open
  ariaLabel?: string;
  className?: string;
  headerRightContent?: React.ReactNode;
}

export function AutoLoopRail<T>({
  items,
  renderItem,
  autoLoop = true,
  gap = 24,
  speed = 40,
  isPausedExternal = false,
  ariaLabel = 'Carrossel de itens',
  className = '',
  headerRightContent,
}: AutoLoopRailProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const secondSetRef = useRef<HTMLDivElement>(null);

  const [canLoop, setCanLoop] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isLightboxPaused, setIsLightboxPaused] = useState(false);

  const interactionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lightboxTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mouse drag state
  const isPointerDownRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const pointerStartScrollLeftRef = useRef(0);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Measure container and content with ResizeObserver
  useEffect(() => {
    if (!autoLoop || items.length === 0) {
      setCanLoop(false);
      return;
    }

    const checkOverflow = () => {
      if (!containerRef.current || !firstSetRef.current) return;
      const containerW = containerRef.current.clientWidth;
      const contentW = firstSetRef.current.scrollWidth;
      // If items total width exceeds container width, it overflows and needs looping
      setCanLoop(contentW > containerW + 4);
    };

    checkOverflow();

    const ro = new ResizeObserver(() => {
      checkOverflow();
    });

    if (containerRef.current) ro.observe(containerRef.current);
    if (firstSetRef.current) ro.observe(firstSetRef.current);

    return () => ro.disconnect();
  }, [autoLoop, items, gap]);

  // Handle external lightbox pause (pause immediately, resume 5s after closing)
  useEffect(() => {
    if (isPausedExternal) {
      if (lightboxTimerRef.current) clearTimeout(lightboxTimerRef.current);
      setIsLightboxPaused(true);
    } else {
      lightboxTimerRef.current = setTimeout(() => {
        setIsLightboxPaused(false);
      }, 5000);
    }

    return () => {
      if (lightboxTimerRef.current) clearTimeout(lightboxTimerRef.current);
    };
  }, [isPausedExternal]);

  // Interaction handlers (pause on hover/focus/drag, resume 5s after interaction ends)
  const startInteraction = useCallback(() => {
    if (interactionTimerRef.current) {
      clearTimeout(interactionTimerRef.current);
      interactionTimerRef.current = null;
    }
    setIsInteracting(true);
  }, []);

  const endInteraction = useCallback(() => {
    if (interactionTimerRef.current) {
      clearTimeout(interactionTimerRef.current);
    }
    interactionTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 5000);
  }, []);

  // Pointer drag events for desktop mouse swipe
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || !containerRef.current) return;
    isPointerDownRef.current = true;
    pointerStartXRef.current = e.clientX;
    pointerStartScrollLeftRef.current = containerRef.current.scrollLeft;
    startInteraction();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current || !containerRef.current) return;
    const dx = e.clientX - pointerStartXRef.current;
    containerRef.current.scrollLeft = pointerStartScrollLeftRef.current - dx;
    startInteraction();
  };

  const handlePointerUpOrCancel = () => {
    if (isPointerDownRef.current) {
      isPointerDownRef.current = false;
      endInteraction();
    }
  };

  // Scroll event handler for wrap-around & user scroll detection
  const handleScroll = () => {
    startInteraction();
    endInteraction();

    if (!canLoop || !containerRef.current || !firstSetRef.current || !secondSetRef.current) return;
    const container = containerRef.current;
    const loopDistance = secondSetRef.current.offsetLeft - firstSetRef.current.offsetLeft;

    if (loopDistance > 0) {
      if (container.scrollLeft >= loopDistance * 1.95) {
        container.scrollLeft -= loopDistance;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += loopDistance;
      }
    }
  };

  // Manual scroll helper for reduced motion or buttons
  const scrollByAmount = (amount: number) => {
    if (!containerRef.current) return;
    startInteraction();
    containerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    endInteraction();
  };

  // Continuous animation loop using requestAnimationFrame (~40px/s)
  useEffect(() => {
    if (!autoLoop || !canLoop || prefersReducedMotion) return;

    let animId: number;
    let lastTime: number | null = null;

    const step = (now: number) => {
      if (lastTime === null) lastTime = now;
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const isBlocked = userPaused || isInteracting || isLightboxPaused;

      if (!isBlocked && containerRef.current && firstSetRef.current && secondSetRef.current) {
        const container = containerRef.current;
        const loopDistance = secondSetRef.current.offsetLeft - firstSetRef.current.offsetLeft;

        if (loopDistance > 0) {
          container.scrollLeft += speed * delta;
          if (container.scrollLeft >= loopDistance) {
            container.scrollLeft -= loopDistance;
          }
        }
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [autoLoop, canLoop, prefersReducedMotion, userPaused, isInteracting, isLightboxPaused, speed]);

  // CASE 1: autoLoop === false
  // Desktop: centered grid of up to 4 cards per row.
  // Mobile: normal swipe rail with scroll-snap and no automatic movement.
  if (!autoLoop) {
    return (
      <div className={`relative ${className}`}>
        {/* Desktop: Centered grid up to 4 cards */}
        <div className="hidden md:flex md:flex-wrap md:justify-center gap-6 sm:gap-8 max-w-5xl mx-auto">
          {items.map((item, idx) => (
            <div key={idx} className="flex justify-center shrink-0">
              {renderItem(item, idx, false)}
            </div>
          ))}
        </div>

        {/* Mobile: Normal swipe rail with scroll-snap and no motion */}
        <div
          className="md:hidden overflow-x-auto scrollbar-none snap-x snap-mandatory flex gap-4 px-4 py-2"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="snap-center shrink-0">
              {renderItem(item, idx, false)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // CASE 2: autoLoop === true, but items FIT in one row (no overflow)
  // Render a static row with no duplication and no motion
  if (!canLoop) {
    return (
      <div className={`relative ${className}`}>
        {headerRightContent && (
          <div className="flex justify-end mb-3">{headerRightContent}</div>
        )}
        <div
          ref={containerRef}
          className="w-full overflow-hidden"
        >
          <div
            ref={firstSetRef}
            className="flex flex-wrap gap-4 sm:gap-6 items-stretch justify-start"
          >
            {items.map((item, idx) => (
              <div key={idx} className="shrink-0 flex">
                {renderItem(item, idx, false)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // CASE 3: autoLoop === true and OVERFLOWS (Loop mode)
  return (
    <div className={`relative group/rail ${className}`}>
      {/* Top toolbar / Controls: Toggle pause/play or Prev/Next if reduced motion */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div>{headerRightContent}</div>

        <div className="ml-auto flex items-center gap-2">
          {prefersReducedMotion ? (
            /* Reduced motion: Show previous/next buttons */
            <div className="inline-flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => scrollByAmount(-280)}
                aria-label="Item anterior"
                className="p-1.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount(280)}
                aria-label="Próximo item"
                className="p-1.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            /* Standard: Show small pause/play toggle */
            <button
              type="button"
              onClick={() => setUserPaused((prev) => !prev)}
              aria-label={userPaused ? 'Retomar rolagem automática' : 'Pausar rolagem automática'}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-mono transition-all shadow-sm cursor-pointer select-none"
            >
              {userPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#00FFFF] fill-current" />
                  <span className="text-[11px] font-semibold">Retomar</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#E71870] fill-current" />
                  <span className="text-[11px] font-semibold">Pausar</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Main Continuous Scroll Track */}
      <div
        ref={containerRef}
        aria-label={ariaLabel}
        onMouseEnter={() => startInteraction()}
        onMouseLeave={() => endInteraction()}
        onFocusCapture={() => startInteraction()}
        onBlurCapture={() => endInteraction()}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUpOrCancel}
        onPointerCancel={handlePointerUpOrCancel}
        onScroll={handleScroll}
        className="w-full overflow-x-auto scrollbar-none flex select-none cursor-grab active:cursor-grabbing pb-2"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: isPointerDownRef.current ? 'auto' : 'smooth',
        }}
      >
        {/* Set 1: Real Items */}
        <div
          ref={firstSetRef}
          className="flex shrink-0 items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6"
        >
          {items.map((item, idx) => (
            <div key={`orig-${idx}`} className="shrink-0 flex">
              {renderItem(item, idx, false)}
            </div>
          ))}
        </div>

        {/* Set 2: Duplicate Items for seamless continuous loop */}
        <div
          ref={secondSetRef}
          aria-hidden="true"
          className="flex shrink-0 items-stretch gap-4 sm:gap-6 pr-4 sm:pr-6 pointer-events-auto"
        >
          {items.map((item, idx) => (
            <div
              key={`dup-${idx}`}
              className="shrink-0 flex"
              tabIndex={-1}
            >
              {renderItem(item, idx, true)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
