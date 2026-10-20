import React from 'react';
import { LucideIcon } from 'lucide-react';

export type BrandIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BrandIconVariant = 'cyan' | 'magenta' | 'cyan-magenta' | 'emerald';

interface BrandIconProps {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  size?: BrandIconSize;
  variant?: BrandIconVariant;
  className?: string;
}

const sizeClasses: Record<BrandIconSize, { container: string; icon: string }> = {
  xs: { container: 'w-6 h-6 rounded-md', icon: 'w-3.5 h-3.5' },
  sm: { container: 'w-8 h-8 rounded-lg', icon: 'w-4 h-4' },
  md: { container: 'w-10 h-10 rounded-xl', icon: 'w-5 h-5' },
  lg: { container: 'w-12 h-12 rounded-xl', icon: 'w-6 h-6' },
  xl: { container: 'w-14 h-14 rounded-2xl', icon: 'w-7 h-7' },
};

const variantClasses: Record<BrandIconVariant, string> = {
  cyan: 'bg-cyan-500/10 border border-cyan-500/25 text-[#00FFFF]',
  magenta: 'bg-[#E71870]/10 border border-[#E71870]/25 text-[#E71870]',
  'cyan-magenta': 'bg-gradient-to-br from-cyan-500/15 to-[#E71870]/15 border border-cyan-500/25 text-[#00FFFF]',
  emerald: 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400',
};

export const BrandIcon: React.FC<BrandIconProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'cyan',
  className = '',
}) => {
  const currentSize = sizeClasses[size] || sizeClasses.md;
  const currentVariant = variantClasses[variant] || variantClasses.cyan;

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 ${currentSize.container} ${currentVariant} ${className}`}
    >
      <Icon className={currentSize.icon} />
    </div>
  );
};
