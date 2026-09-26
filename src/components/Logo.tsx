import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

// Caminho padrão e variações aceitas do arquivo oficial na pasta public/
const OFFICIAL_LOGO_PATHS = [
  '/Logo Vertical - Arte do Algoritmo - Fundo Transparente 1.png',
  '/logo-arte-do-algoritmo.png',
  '/logo.png',
];

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  id,
}) => {
  const [srcIndex, setSrcIndex] = useState(0);

  const sizeClasses = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-10 sm:h-12 w-auto',
    lg: 'h-12 sm:h-14 w-auto',
    xl: 'h-16 sm:h-20 w-auto',
  };

  const handleImageError = () => {
    if (srcIndex < OFFICIAL_LOGO_PATHS.length - 1) {
      setSrcIndex((prev) => prev + 1);
    }
  };

  return (
    <img
      id={id}
      src={OFFICIAL_LOGO_PATHS[srcIndex]}
      alt="Arte do Algoritmo"
      className={`${sizeClasses[size]} object-contain select-none shrink-0 ${className}`}
      loading="eager"
      decoding="sync"
      onError={handleImageError}
    />
  );
};

