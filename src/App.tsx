/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjectsPreview } from './components/FeaturedProjectsPreview';
import { AboutPreview } from './components/AboutPreview';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectsPage } from './components/ProjectsPage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { TrafegoPagoPage } from './components/TrafegoPagoPage';
import { GoogleMeuNegocioPage } from './components/GoogleMeuNegocioPage';
import { Mob3lCasePage } from './components/Mob3lCasePage';
import { ZeroOneCasePage } from './components/ZeroOneCasePage';
import { PageView } from './components/Navbar';

const getInitialPage = (): PageView => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
  const hash = window.location.hash.toLowerCase();

  if (
    path === '/projetos/01s-mobilidade' ||
    path === '/projetos/01s' ||
    hash.startsWith('#projetos/01s') ||
    hash === '#01s' ||
    hash === '#01s-mobilidade'
  ) {
    return 'projeto-01s';
  }
  if (
    path === '/projetos/mob3l' ||
    hash.startsWith('#projetos/mob3l') ||
    hash === '#mob3l'
  ) {
    return 'projeto-mob3l';
  }
  if (
    path === '/servicos/trafego-pago' ||
    hash.startsWith('#servicos/trafego-pago') ||
    hash === '#trafego-pago'
  ) {
    return 'servico-trafego-pago';
  }
  if (
    path === '/servicos/google-meu-negocio' ||
    hash.startsWith('#servicos/google-meu-negocio') ||
    hash === '#google-meu-negocio'
  ) {
    return 'servico-google-meu-negocio';
  }
  if (
    path === '/servicos' ||
    hash.startsWith('#servicos') ||
    hash === '#servicos'
  ) {
    return 'servicos';
  }
  if (
    path === '/projetos' ||
    hash.startsWith('#projetos') ||
    hash.startsWith('#portfolio')
  ) {
    return 'projetos';
  }
  if (path === '/sobre' || hash.startsWith('#sobre')) {
    return 'sobre';
  }
  return 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>(getInitialPage);

  // Sync document title and SEO meta description on page change
  useEffect(() => {
    let pageTitle = 'Arte do Algoritmo | Design e Estratégia Digital';
    let pageDesc = 'Criação de sites de alta performance, identidades visuais marcantes e presença digital estratégica em Salvador, Bahia. Atendimento para todo o Brasil.';

    if (currentPage === 'servicos') {
      pageTitle = 'Serviços de Desenvolvimento Web, Design e Marketing | Arte do Algoritmo';
      pageDesc = 'Soluções completas para sua presença digital: sites institucionais, identidades visuais, Google Meu Negócio e gestão de tráfego pago em Salvador/BA para todo o Brasil.';
    } else if (currentPage === 'servico-trafego-pago') {
      pageTitle = 'Tráfego Pago para Negócios Locais | Arte do Algoritmo';
      pageDesc = 'Gestão completa de campanhas no Meta Ads e Google Ads para atrair clientes locais prontos para comprar. Relatórios claros e acompanhamento próximo.';
    } else if (currentPage === 'servico-google-meu-negocio') {
      pageTitle = 'Google Meu Negócio e Otimização Local | Arte do Algoritmo';
      pageDesc = 'Otimização completa do seu Perfil da Empresa no Google para negócios locais serem encontrados nas primeiras posições de busca e mapa.';
    } else if (currentPage === 'projetos') {
      pageTitle = 'Portfólio de Projetos | Arte do Algoritmo';
      pageDesc = 'Conheça cases reais de desenvolvimento de sites e identidades visuais criados pela Arte do Algoritmo com foco em autoridade e resultados.';
    } else if (currentPage === 'sobre') {
      pageTitle = 'Sobre a Agência | Arte do Algoritmo';
      pageDesc = 'Saiba quem somos, nossa metodologia e como unimos precisão técnica, design marcante e compromisso com o crescimento do seu negócio.';
    } else if (currentPage === 'projeto-mob3l') {
      pageTitle = 'Case MOB3L • Identidade, Site e Comunicação | Arte do Algoritmo';
      pageDesc = 'Case completo de desenvolvimento para a MOB3L: site institucional, identidade visual, papelaria, outdoor e estratégia para redes sociais em Três Lagoas/MS.';
    } else if (currentPage === 'projeto-01s') {
      pageTitle = 'Case 01S Mobilidade • Rebranding, Plataforma Web e Identidade | Arte do Algoritmo';
      pageDesc = 'Case completo de desenvolvimento para a 01S Mobilidade Urbana: identidade visual, plataforma web institucional, materiais físicos e presença digital estratégica.';
    }

    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);
  }, [currentPage]);

  // Sync state with URL pathname & browser history (popstate)
  useEffect(() => {
    const syncRouteFromLocation = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      const hash = window.location.hash.toLowerCase();

      if (path === '/projetos/01s-mobilidade' || path === '/projetos/01s') {
        setCurrentPage('projeto-01s');
        if (hash.startsWith('#secao-01s-')) {
          const sectionId = hash.replace('#', '');
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 80);
        }
      } else if (path === '/projetos/mob3l') {
        setCurrentPage('projeto-mob3l');
        if (hash.startsWith('#secao-')) {
          const sectionId = hash.replace('#', '');
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 80);
        }
      } else if (path === '/servicos/trafego-pago') {
        setCurrentPage('servico-trafego-pago');
      } else if (path === '/servicos/google-meu-negocio') {
        setCurrentPage('servico-google-meu-negocio');
      } else if (path === '/servicos') {
        setCurrentPage('servicos');
      } else if (path === '/projetos') {
        setCurrentPage('projetos');
      } else if (path === '/sobre') {
        setCurrentPage('sobre');
      } else {
        // Transparent legacy hash migration (e.g. bookmarks with /#projetos or /#servicos)
        if (hash.startsWith('#projetos/01s') || hash === '#01s' || hash === '#01s-mobilidade') {
          setCurrentPage('projeto-01s');
          window.history.replaceState(null, '', '/projetos/01s-mobilidade');
        } else if (hash.startsWith('#projetos/mob3l') || hash === '#mob3l') {
          setCurrentPage('projeto-mob3l');
          window.history.replaceState(null, '', '/projetos/mob3l');
        } else if (hash.startsWith('#servicos/trafego-pago') || hash === '#trafego-pago') {
          setCurrentPage('servico-trafego-pago');
          window.history.replaceState(null, '', '/servicos/trafego-pago');
        } else if (hash.startsWith('#servicos/google-meu-negocio') || hash === '#google-meu-negocio') {
          setCurrentPage('servico-google-meu-negocio');
          window.history.replaceState(null, '', '/servicos/google-meu-negocio');
        } else if (hash.startsWith('#servicos')) {
          setCurrentPage('servicos');
          window.history.replaceState(null, '', '/servicos');
        } else if (hash.startsWith('#projetos') || hash.startsWith('#portfolio')) {
          setCurrentPage('projetos');
          window.history.replaceState(null, '', '/projetos');
        } else if (hash.startsWith('#sobre')) {
          setCurrentPage('sobre');
          window.history.replaceState(null, '', '/sobre');
        } else {
          setCurrentPage('home');
        }
      }
    };

    syncRouteFromLocation();
    window.addEventListener('popstate', syncRouteFromLocation);
    window.addEventListener('hashchange', syncRouteFromLocation);
    return () => {
      window.removeEventListener('popstate', syncRouteFromLocation);
      window.removeEventListener('hashchange', syncRouteFromLocation);
    };
  }, []);

  const handleNavigate = (page: PageView, anchor?: string) => {
    // 1. Home page (Início / Logo)
    if (page === 'home') {
      setCurrentPage('home');
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 2. Independent pages: /servicos, /projetos, /sobre, /projetos/mob3l, /projetos/01s-mobilidade, /servicos/trafego-pago, /servicos/google-meu-negocio
    let targetPath = '/';
    if (page === 'servicos') targetPath = '/servicos';
    else if (page === 'servico-trafego-pago') targetPath = '/servicos/trafego-pago';
    else if (page === 'servico-google-meu-negocio') targetPath = '/servicos/google-meu-negocio';
    else if (page === 'projetos') targetPath = '/projetos';
    else if (page === 'sobre') targetPath = '/sobre';
    else if (page === 'projeto-mob3l') targetPath = '/projetos/mob3l';
    else if (page === 'projeto-01s') targetPath = '/projetos/01s-mobilidade';

    setCurrentPage(page);
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#272727] text-white flex flex-col selection:bg-[#E71870] selection:text-white">
      {/* Top Header with clean navigation: Início, Serviços, Projetos, Sobre + CTA */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main View Render */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. HERO */}
            <Hero onViewProjects={() => handleNavigate('projetos')} />

            {/* 2. BENEFITS / DIFFERENTIATORS */}
            <Benefits />

            {/* 3. SERVICES (3 Strategic Pillars) */}
            <ServicesSection onViewAllServices={() => handleNavigate('servicos')} />

            {/* 4. FEATURED PROJECTS PREVIEW (2-3 items + CTA to dedicated page) */}
            <FeaturedProjectsPreview
              onViewAllProjects={() => handleNavigate('projetos')}
              onViewMob3lCase={() => handleNavigate('projeto-mob3l')}
              onView01sCase={() => handleNavigate('projeto-01s')}
            />

            {/* 5. ABOUT PREVIEW (Concise agency intro + CTA to dedicated page) */}
            <AboutPreview onLearnMore={() => handleNavigate('sobre')} />

            {/* 6. PROCESS (Concise 5-step overview) */}
            <ProcessSection />

            {/* 7. SOCIAL PROOF (Real client testimonials) */}
            <TestimonialsSection />

            {/* 8. FINAL CTA */}
            <FinalCta />
          </>
        )}

        {currentPage === 'servicos' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'servico-trafego-pago' && <TrafegoPagoPage onNavigate={handleNavigate} />}
        {currentPage === 'servico-google-meu-negocio' && <GoogleMeuNegocioPage onNavigate={handleNavigate} />}

        {currentPage === 'projetos' && <ProjectsPage onNavigate={handleNavigate} />}

        {currentPage === 'sobre' && <AboutPage />}

        {currentPage === 'projeto-mob3l' && <Mob3lCasePage onNavigate={handleNavigate} />}

        {currentPage === 'projeto-01s' && <ZeroOneCasePage onNavigate={handleNavigate} />}
      </main>

      {/* Footer with simplified navigation groups */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
