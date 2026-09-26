import React, { useState, useEffect } from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export type PageView =
  | 'home'
  | 'servicos'
  | 'projetos'
  | 'sobre'
  | 'projeto-mob3l'
  | 'projeto-01s'
  | 'servico-trafego-pago'
  | 'servico-google-meu-negocio';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, anchor?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: string; label: string; page: PageView; anchor?: string }[] = [
    { id: 'nav-home', label: 'Início', page: 'home' },
    { id: 'nav-servicos', label: 'Serviços', page: 'servicos' },
    { id: 'nav-projetos', label: 'Projetos', page: 'projetos' },
    { id: 'nav-sobre', label: 'Sobre', page: 'sobre' },
  ];

  const handleItemClick = (page: PageView, anchor?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, anchor);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#18181B]/95 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.4)] py-3'
          : 'bg-transparent border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LEFT: Official Arte do Algoritmo logo (Untouched real asset) */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleItemClick('home');
          }}
          id="nav-logo-link"
          className="flex items-center group transition-transform hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          title="Arte do Algoritmo - Início"
        >
          <Logo id="nav-logo-image" size="md" />
        </a>

        {/* CENTER: Clean single-line desktop navigation links */}
        <nav
          className={`hidden md:flex items-center gap-1.5 p-1 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/[0.03] border border-white/[0.05]'
              : 'bg-[#18181B]/40 backdrop-blur-md border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.25)]'
          }`}
        >
          {navItems.map((item) => {
            const isActive =
              (item.page === 'servicos' &&
                (currentPage === 'servicos' ||
                  currentPage === 'servico-trafego-pago' ||
                  currentPage === 'servico-google-meu-negocio')) ||
              (item.page === 'projetos' &&
                (currentPage === 'projetos' || currentPage === 'projeto-mob3l' || currentPage === 'projeto-01s')) ||
              (item.page === 'sobre' && currentPage === 'sobre') ||
              (item.id === 'nav-home' && currentPage === 'home');

            return (
              <button
                key={item.id}
                id={item.id}
                type="button"
                onClick={() => handleItemClick(item.page, item.anchor)}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? 'text-white bg-white/[0.08] shadow-sm font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-[#00FFFF]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* RIGHT: Subtle Cyan Brand CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-cta"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-xs sm:text-sm shadow-[0_0_16px_rgba(0,255,255,0.25)] hover:shadow-[0_0_24px_rgba(0,255,255,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Fale no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className="md:hidden p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#18181B] border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-2 animate-fade-in-up">
          {navItems.map((item) => (
            <button
              key={`mobile-${item.id}`}
              type="button"
              onClick={() => handleItemClick(item.page, item.anchor)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-white/[0.08]">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
