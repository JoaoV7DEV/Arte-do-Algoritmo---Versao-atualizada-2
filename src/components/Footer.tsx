import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import { MessageCircle, Instagram, Facebook, MapPin, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

import { PageView } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: PageView, anchor?: string) => {
    if (onNavigate) {
      onNavigate(page, anchor);
    } else {
      if (page === 'home') {
        if (anchor === 'servicos') {
          if (window.location.pathname !== '/') {
            window.history.pushState(null, '', '/');
          }
          const el = document.getElementById('servicos');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          if (window.location.pathname !== '/') {
            window.history.pushState(null, '', '/');
          }
          scrollToTop();
        }
      } else {
        const path =
          page === 'servicos'
            ? '/servicos'
            : page === 'servico-trafego-pago'
            ? '/servicos/trafego-pago'
            : page === 'servico-google-meu-negocio'
            ? '/servicos/google-meu-negocio'
            : page === 'projetos'
            ? '/projetos'
            : page === 'sobre'
            ? '/sobre'
            : page === 'projeto-mob3l'
            ? '/projetos/mob3l'
            : page === 'projeto-01s'
            ? '/projetos/01s-mobilidade'
            : '/';
        window.history.pushState(null, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
        scrollToTop();
      }
    }
  };

  return (
    <footer className="bg-[#121214] border-t border-white/10 text-gray-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 4 Balanced Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* COLUMN 1: Brand Summary */}
          <div className="space-y-4">
            <button
              onClick={() => handleLinkClick('home')}
              className="inline-block transition-transform hover:opacity-95 text-left"
              title="Arte do Algoritmo"
            >
              <Logo id="footer-logo-image" size="lg" />
            </button>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Design, tecnologia e estratégia para fortalecer sua presença digital. Desenvolvimento de sites sob medida, identidades visuais marcantes e foco em resultados reais.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#00FFFF]" />
              <span>{AGENCY_INFO.city}, {AGENCY_INFO.state} • Atendimento em todo o Brasil</span>
            </div>
          </div>

          {/* COLUMN 2: Navigation */}
          <div className="space-y-3">
            <p className="text-white font-bold text-xs uppercase font-mono tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('projetos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('sobre')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sobre
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Main Services */}
          <div className="space-y-3">
            <p className="text-white font-bold text-xs uppercase font-mono tracking-wider">
              Principais Serviços
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Desenvolvimento Web
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Landing Pages
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Identidade Visual
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick('home', 'servicos')}
                  className="hover:text-white transition-colors text-left"
                >
                  Presença & Marketing Digital
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Direct Contact */}
          <div className="space-y-3">
            <p className="text-white font-bold text-xs uppercase font-mono tracking-wider">
              Contato Direto
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-[#00FFFF] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{AGENCY_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#E71870] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#E71870] shrink-0" />
                  <span>{AGENCY_INFO.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#00FFFF] transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#00FFFF] shrink-0" />
                  <span>{AGENCY_INFO.facebookHandle}</span>
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Arte do Algoritmo. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com design e precisão em Salvador, Bahia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
