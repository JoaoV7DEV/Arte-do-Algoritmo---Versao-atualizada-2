import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BrandIconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'cyan-magenta' | 'cyan' | 'magenta' | 'emerald' | 'purple';
  className?: string;
  badgeClassName?: string;
}

export const BrandIcon: React.FC<BrandIconProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'cyan-magenta',
  className = '',
  badgeClassName = '',
}) => {
  const sizeMap = {
    sm: { box: 'w-8 h-8 rounded-lg p-1.5', icon: 'w-4 h-4' },
    md: { box: 'w-10 h-10 rounded-xl p-2', icon: 'w-5 h-5' },
    lg: { box: 'w-12 h-12 rounded-2xl p-2.5', icon: 'w-6 h-6' },
    xl: { box: 'w-14 h-14 rounded-2xl p-3', icon: 'w-7 h-7' },
  };

  const variantStyles = {
    'cyan-magenta': {
      box: 'bg-gradient-to-br from-[#00FFFF]/15 via-[#C754F0]/10 to-[#E71870]/15 border border-white/20 shadow-[0_0_15px_rgba(0,255,255,0.18)]',
      gradientId: 'brandGradCyanMagenta',
      fallbackText: 'text-[#00FFFF]',
    },
    cyan: {
      box: 'bg-cyan-500/10 border border-cyan-500/25 shadow-[0_0_12px_rgba(0,255,255,0.18)]',
      gradientId: 'brandGradCyan',
      fallbackText: 'text-[#00FFFF]',
    },
    magenta: {
      box: 'bg-pink-500/10 border border-pink-500/25 shadow-[0_0_12px_rgba(231,24,112,0.18)]',
      gradientId: 'brandGradMagenta',
      fallbackText: 'text-[#E71870]',
    },
    purple: {
      box: 'bg-[#C754F0]/10 border border-[#C754F0]/25 shadow-[0_0_12px_rgba(199,84,240,0.18)]',
      gradientId: 'brandGradPurple',
      fallbackText: 'text-[#C754F0]',
    },
    emerald: {
      box: 'bg-emerald-500/10 border border-emerald-500/25 shadow-[0_0_12px_rgba(16,185,129,0.18)]',
      gradientId: 'brandGradEmerald',
      fallbackText: 'text-emerald-400',
    },
  };

  const selectedSize = sizeMap[size];
  const selectedVariant = variantStyles[variant];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${selectedSize.box} ${selectedVariant.box} ${badgeClassName}`}
    >
      {/* SVG linearGradient definitions shared across icon instances */}
      <svg className="sr-only" aria-hidden="true" width="0" height="0">
        <defs>
          <linearGradient id="brandGradCyanMagenta" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="50%" stopColor="#C754F0" />
            <stop offset="100%" stopColor="#E71870" />
          </linearGradient>
          <linearGradient id="brandGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#00B8D4" />
          </linearGradient>
          <linearGradient id="brandGradMagenta" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C754F0" />
            <stop offset="100%" stopColor="#E71870" />
          </linearGradient>
          <linearGradient id="brandGradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="50%" stopColor="#C754F0" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="brandGradEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>

      {/* Subtle brand inner highlight */}
      <div className="absolute inset-0 rounded-[inherit] bg-white/[0.04] pointer-events-none" />

      {/* Duotone icon with brand gradient stroke and subtle translucent fill */}
      <Icon
        className={`${selectedSize.icon} ${selectedVariant.fallbackText} ${className}`}
        stroke={`url(#${selectedVariant.gradientId})`}
        fill={`url(#${selectedVariant.gradientId})`}
        fillOpacity={0.15}
        strokeWidth={2.2}
      />
    </div>
  );
};

