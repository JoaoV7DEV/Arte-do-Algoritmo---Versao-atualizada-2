import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

// Coordenadas e configurações dos pixels algorítmicos dinâmicos que piscam no lado esquerdo
const CYBER_PIXELS = [
  { id: 1, x: 14, y: 16, size: 3.5, delay: 0.2, duration: 2.6, maxOpacity: 0.95, glow: true },
  { id: 2, x: 28, y: 12, size: 2.5, delay: 1.4, duration: 3.4, maxOpacity: 0.75, glow: false },
  { id: 3, x: 20, y: 28, size: 4, delay: 0.7, duration: 2.2, maxOpacity: 1, glow: true },
  { id: 4, x: 35, y: 22, size: 2.5, delay: 2.0, duration: 3.8, maxOpacity: 0.7, glow: false },
  { id: 5, x: 10, y: 40, size: 3.5, delay: 1.1, duration: 3.0, maxOpacity: 0.9, glow: true },
  { id: 6, x: 24, y: 44, size: 2.5, delay: 0.4, duration: 2.5, maxOpacity: 0.8, glow: false },
  { id: 7, x: 38, y: 36, size: 4.5, delay: 1.8, duration: 3.6, maxOpacity: 1, glow: true },
  { id: 8, x: 16, y: 56, size: 3, delay: 2.4, duration: 2.8, maxOpacity: 0.85, glow: true },
  { id: 9, x: 30, y: 62, size: 3.5, delay: 0.5, duration: 3.2, maxOpacity: 0.95, glow: true },
  { id: 10, x: 12, y: 72, size: 2.5, delay: 1.6, duration: 2.4, maxOpacity: 0.7, glow: false },
  { id: 11, x: 26, y: 78, size: 4, delay: 0.9, duration: 3.5, maxOpacity: 1, glow: true },
  { id: 12, x: 38, y: 70, size: 3, delay: 2.1, duration: 2.9, maxOpacity: 0.8, glow: false },
  { id: 13, x: 44, y: 26, size: 2.5, delay: 1.3, duration: 3.9, maxOpacity: 0.7, glow: false },
  { id: 14, x: 42, y: 52, size: 3.5, delay: 0.3, duration: 2.7, maxOpacity: 0.9, glow: true },
  { id: 15, x: 48, y: 42, size: 2, delay: 2.6, duration: 3.1, maxOpacity: 0.65, glow: false },
  { id: 16, x: 18, y: 86, size: 3, delay: 1.9, duration: 2.3, maxOpacity: 0.85, glow: true },
  { id: 17, x: 32, y: 90, size: 2.5, delay: 0.8, duration: 3.6, maxOpacity: 0.75, glow: false },
  { id: 18, x: 8, y: 24, size: 3, delay: 2.2, duration: 2.8, maxOpacity: 0.8, glow: true },
  { id: 19, x: 26, y: 34, size: 2.5, delay: 1.0, duration: 3.3, maxOpacity: 0.7, glow: false },
  { id: 20, x: 34, y: 48, size: 3.5, delay: 1.5, duration: 2.5, maxOpacity: 0.9, glow: true },
];

export const HeroBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Interpolação fluida do feixe de iluminação do mouse
  const mouseRef = useRef({
    targetX: 50,
    targetY: 45,
    currentX: 50,
    currentY: 45,
    active: false,
  });

  const [mouseGlow, setMouseGlow] = useState({
    x: 50,
    y: 45,
    active: false,
    color: 'rgba(0, 255, 255, 0.12)',
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (e.clientY >= rect.top - 80 && e.clientY <= rect.bottom + 80) {
        const x = Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100));
        const y = Math.max(5, Math.min(95, ((e.clientY - rect.top) / rect.height) * 100));
        mouseRef.current.targetX = x;
        mouseRef.current.targetY = y;
        mouseRef.current.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let animId: number;
    const updateGlow = () => {
      const m = mouseRef.current;
      m.currentX += (m.targetX - m.currentX) * 0.09;
      m.currentY += (m.targetY - m.currentY) * 0.09;

      // Transição harmoniosa de cor do rastro: Ciano -> Violeta -> Magenta
      let tint = 'rgba(0, 255, 255, 0.12)';
      if (m.currentX < 42) {
        tint = 'rgba(0, 255, 255, 0.14)';
      } else if (m.currentX > 58) {
        tint = 'rgba(231, 24, 112, 0.14)';
      } else {
        tint = 'rgba(199, 84, 240, 0.13)';
      }

      setMouseGlow({
        x: m.currentX,
        y: m.currentY,
        active: m.active,
        color: tint,
      });

      animId = requestAnimationFrame(updateGlow);
    };

    animId = requestAnimationFrame(updateGlow);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#18181B]"
    >
      {/* 1. MOUSE FOLLOW SPOTLIGHT (Rastro suave, vivo e orgânico no desktop) */}
      {!isMobile && (
        <div
          className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
          style={{ opacity: mouseGlow.active ? 1 : 0.55 }}
        >
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[120px] transition-colors duration-500 pointer-events-none"
            style={{
              left: `${mouseGlow.x}%`,
              top: `${mouseGlow.y}%`,
              backgroundColor: mouseGlow.color,
            }}
          />
        </div>
      )}

      {/* 2. LUZ VIVA: AURA CIANO (Lado Esquerdo - Suave e relaxante no mobile, viva e expansiva no desktop) */}
      <motion.div
        animate={
          isMobile
            ? {}
            : {
                x: [0, 45, -25, 30, 0],
                y: [0, -35, 40, -20, 0],
                scale: [1, 1.18, 0.94, 1.12, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-12 -left-12 sm:-top-16 sm:-left-20 sm:left-0 w-64 sm:w-[720px] h-64 sm:h-[720px] rounded-full bg-gradient-to-br from-[#00FFFF]/14 sm:from-[#00FFFF]/28 via-[#00D2FF]/08 sm:via-[#00D2FF]/18 to-transparent blur-[85px] sm:blur-[140px]"
      />

      {/* 3. LUZ VIVA: AURA MAGENTA (Lado Direito - Suave e relaxante no mobile, rica no desktop) */}
      <motion.div
        animate={
          isMobile
            ? {}
            : {
                x: [0, -45, 30, -25, 0],
                y: [0, 40, -35, 20, 0],
                scale: [1, 0.92, 1.18, 0.96, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-10 -right-10 sm:-top-12 sm:-right-20 sm:right-0 w-72 sm:w-[750px] h-72 sm:h-[750px] rounded-full bg-gradient-to-bl from-[#E71870]/16 sm:from-[#E71870]/30 via-[#C754F0]/10 sm:via-[#C754F0]/22 to-transparent blur-[90px] sm:blur-[145px]"
      />

      {/* 4. LUZ CENTRAL: FUSÃO ROXO/VIOLETA */}
      <motion.div
        animate={
          isMobile
            ? {}
            : {
                x: [0, 25, -25, 0],
                y: [0, -20, 25, 0],
                scale: [0.95, 1.15, 0.98, 0.95],
                opacity: [0.65, 0.95, 0.7, 0.65],
              }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 sm:w-[580px] h-44 sm:h-[480px] rounded-full bg-gradient-to-b from-[#C754F0]/10 sm:from-[#C754F0]/20 via-[#9333EA]/06 sm:via-[#9333EA]/12 to-transparent blur-[75px] sm:blur-[110px]"
      />

      {/* 5. MATRIZ DE PIXELS CIANO NÍTIDA E VISÍVEL (Apenas Desktop/Tablet - Oculto no celular para evitar poluição visual) */}
      <div className="hidden sm:block absolute top-14 left-6 w-[520px] h-[580px] pointer-events-none select-none [mask-image:radial-gradient(ellipse_70%_70%_at_40%_45%,#000_55%,transparent_100%)]">
        {/* Malha base de pixels ciano bem visíveis, limpos e sem blur borrado */}
        <div className="w-full h-full opacity-35 bg-[radial-gradient(#00FFFF_2px,transparent_2px)] [background-size:22px_22px]" />

        {/* Coordenada sutil de marcação técnica digital */}
        <div className="absolute top-6 left-12 text-[10px] font-mono text-[#00FFFF]/60 tracking-wider">
          + ALGO.MATRIX // 01
        </div>

        {/* PIXELS PISCANTES ALEATÓRIOS (Animação tecnológica, viva e confortável) */}
        {CYBER_PIXELS.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.2, scale: 0.8 }}
            animate={{
              opacity: [0.15, p.maxOpacity, 0.35, p.maxOpacity * 0.9, 0.15],
              scale: [0.85, 1.25, 0.9, 1.15, 0.85],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute rounded-sm"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: '#00FFFF',
              boxShadow: p.glow
                ? '0 0 10px #00FFFF, 0 0 20px rgba(0, 255, 255, 0.6)'
                : '0 0 6px rgba(0, 255, 255, 0.7)',
            }}
          />
        ))}

        {/* Conexão algorítmica sutil entre nós selecionados */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="14%"
            y1="16%"
            x2="28%"
            y2="12%"
            stroke="#00FFFF"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <line
            x1="20%"
            y1="28%"
            x2="35%"
            y2="22%"
            stroke="#00FFFF"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="10%"
            y1="40%"
            x2="24%"
            y2="44%"
            stroke="#00FFFF"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <line
            x1="24%"
            y1="44%"
            x2="38%"
            y2="36%"
            stroke="#00FFFF"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="16%"
            y1="56%"
            x2="30%"
            y2="62%"
            stroke="#00FFFF"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </svg>
      </div>

      {/* 6. MÁSCARA CENTRAL DE CONFORTO VISUAL (Garante contraste e legibilidade impecáveis) */}
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#18181B]/40 to-[#18181B]/75 pointer-events-none" />

      {/* 7. TRANSIÇÃO SUAVE INFERIOR PARA A PRÓXIMA SEÇÃO */}
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#222225] via-[#222225]/60 to-transparent pointer-events-none" />
    </div>
  );
};
