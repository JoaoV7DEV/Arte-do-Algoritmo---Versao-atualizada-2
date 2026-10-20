import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Maximize2,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Quote,
  Layers,
  MapPin,
  Calendar,
  X,
  FileText,
  Car,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { AGENCY_INFO, FLAGSHIP_PROJECT } from '../data/agencyData';
import { PageView } from './Navbar';
import { ProjectModal } from './ProjectModal';
import { WebsiteProject } from '../types';

interface ZeroOneCasePageProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

interface WebPageTab {
  id: string;
  label: string;
  imageSrc: string;
  description: string;
}

const WEB_PAGES: WebPageTab[] = [
  {
    id: 'home',
    label: 'Página Inicial (Home)',
    imageSrc: '/portfolio/sites/01s-mobilidade-completo.png',
    description: 'Apresentação da marca, transição de cara nova, segurança e direcionamento de motoristas e passageiros.'
  },
  {
    id: 'motoristas',
    label: 'Sou Motorista',
    imageSrc: '/portfolio/sites/01s-mobilidade-motoristas.png',
    description: 'Página com os diferenciais para motoristas parceiros, documentação necessária e cadastro simplificado.'
  },
  {
    id: 'passageiros',
    label: 'Sou Passageiro',
    imageSrc: '/portfolio/sites/01s-mobilidade-passageiros.png',
    description: 'Instruções para download do aplicativo, cálculo transparente e facilidade de locomoção.'
  },
  {
    id: 'sobre',
    label: 'Sobre Nós (Transição)',
    imageSrc: '/portfolio/sites/01s-mobilidade-sobre-transicao.png',
    description: 'História da empresa, evolução da frota e explicação da evolução da marca MOB3L para 01S Mobilidade.'
  }
];

const BRAND_COLORS_01S = [
  { name: 'Verde 01S', hex: '#4EA238', text: 'white' },
  { name: 'Laranja Dinâmico', hex: '#FF6B00', text: 'white' },
  { name: 'Grafite Escuro', hex: '#141416', text: 'white' },
  { name: 'Preto Profundo', hex: '#0B0B0C', text: 'white' },
  { name: 'Branco Puro', hex: '#FFFFFF', text: 'black' }
];

const PRINT_ITEMS = [
  {
    id: 'cartao',
    title: 'Cartão de Visita Comercial',
    category: 'Papelaria & Apresentação',
    imageSrc: '/portfolio/sites/01s-cartao-mockup.png',
    fallbackSrc: '/portfolio/sites/01s-cartao-frente.jpg',
    description: 'Identidade forte em fundo escuro com acabamento fosco e QR code para instalação rápida do app.'
  },
  {
    id: 'folder',
    title: 'Folder Institucional Trifold',
    category: 'Material Promocional',
    imageSrc: '/portfolio/sites/01s-folder-mockup.jpeg',
    fallbackSrc: '/portfolio/sites/01s-folder-plano-capa.jpg',
    description: 'Folder com 3 dobras explicando o funcionamento para passageiros e vantagens para motoristas parceiros.'
  },
  {
    id: 'outdoor',
    title: 'Outdoor de Impacto Urbano',
    category: 'Sinalização Externa',
    imageSrc: '/portfolio/sites/01s-outdoor.jpg',
    description: 'Comunicação limpa de alta legibilidade em vias urbanas para fixação imediata do novo nome.'
  },
  {
    id: 'windbanner',
    title: 'Windbanner Promocional',
    category: 'PDV & Ações Presenciais',
    imageSrc: '/portfolio/sites/01s-windbanner.jpg',
    description: 'Sinalização móvel de alto contraste para pontos de apoio e recrutamento presencial de condutores.'
  }
];

const SOCIAL_ITEMS = [
  {
    id: 'recrutamento',
    title: 'Captação de Motoristas',
    tag: 'Motoristas',
    imageSrc: '/portfolio/sites/01s-post-recrutamento.jpg',
    desc: 'Anúncio visual com foco em renda extra e autonomia.'
  },
  {
    id: 'rebranding',
    title: 'Anúncio do Rebranding',
    tag: 'Institucional',
    imageSrc: '/portfolio/sites/01s-post-rebranding.jpg',
    desc: 'Comunicação oficial da nova cara com o mesmo compromisso.'
  },
  {
    id: 'servicos',
    title: 'Diferenciais de Passageiro',
    tag: 'Passageiros',
    imageSrc: '/portfolio/sites/01s-post-servicos.jpg',
    desc: 'Foco em agilidade, segurança e corrida sem cancelamentos.'
  }
];

export const ZeroOneCasePage: React.FC<ZeroOneCasePageProps> = ({ onNavigate }) => {
  const [activeWebTab, setActiveWebTab] = useState<string>('home');
  const [selectedWebProject, setSelectedWebProject] = useState<WebsiteProject | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const currentTab = WEB_PAGES.find((p) => p.id === activeWebTab) || WEB_PAGES[0];

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('projetos');
    } else {
      window.history.pushState(null, '', '/projetos');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#141416] text-white pt-24 pb-20 selection:bg-[#4EA238] selection:text-white">
      {/* Top Header / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between gap-4">
          <a
            href="/projetos"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Portfólio</span>
          </a>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-[#4EA238] animate-pulse" />
            <span>CASE DE SUCESSO COMPLETO</span>
          </div>
        </div>
      </div>

      {/* Hero Presentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-gradient-to-b from-[#18181B] to-[#141416] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4EA238]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4EA238] bg-[#4EA238]/10 px-3 py-1 rounded-full border border-[#4EA238]/20">
                01S Mobilidade Urbana
              </span>
              <span className="text-xs font-mono text-gray-400">
                Rebranding + Site + Materiais + Redes Sociais
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Construindo uma marca moderna de transporte e mobilidade urbana
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              A 01S Mobilidade passou por uma transformação completa de posicionamento: do novo logotipo e manual de cores até a criação de plataforma web institucional, materiais promocionais físicos e peças para redes sociais.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              <div>
                <span className="text-xs font-mono text-gray-500 block mb-1">CLIENTE</span>
                <p className="text-sm font-semibold text-white">01S Mobilidade</p>
              </div>
              <div>
                <span className="text-xs font-mono text-gray-500 block mb-1">SEGMENTO</span>
                <p className="text-sm font-semibold text-white">Transporte de Passageiros</p>
              </div>
              <div>
                <span className="text-xs font-mono text-gray-500 block mb-1">SERVIÇO</span>
                <p className="text-sm font-semibold text-white">Design & Web Full-Stack</p>
              </div>
              <div>
                <span className="text-xs font-mono text-gray-500 block mb-1">ANO</span>
                <p className="text-sm font-semibold text-white">2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Site Institucional Desenvolvido */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono text-[#4EA238] uppercase tracking-wider font-semibold">
              SEÇÃO 1 • DESENVOLVIMENTO WEB
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Plataforma Web Institucional
            </h2>
            <p className="text-sm text-gray-400 mt-1 max-w-xl">
              Site responsivo com páginas segmentadas para passageiros, motoristas e apresentação de transição da marca.
            </p>
          </div>

          {/* Page Tabs */}
          <div className="flex flex-wrap gap-2">
            {WEB_PAGES.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveWebTab(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeWebTab === tab.id
                    ? 'bg-[#4EA238] text-white shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Browser Mockup */}
        <div className="rounded-2xl bg-[#1A1A1E] border border-white/10 shadow-2xl overflow-hidden">
          <div className="px-4 py-3 bg-[#111113] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs font-mono text-gray-400 ml-2">01smobilidade.com.br</span>
            </div>
            <button
              onClick={() => setSelectedWebProject(FLAGSHIP_PROJECT)}
              className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-mono py-1 px-2.5 rounded bg-white/5 hover:bg-white/10"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Ver em tela cheia</span>
            </button>
          </div>

          <div className="p-4 sm:p-6 bg-[#0E0E10]">
            <p className="text-xs sm:text-sm text-gray-400 mb-4 font-mono">
              {currentTab.description}
            </p>
            <div className="rounded-xl overflow-hidden border border-white/10 bg-black max-h-[580px] overflow-y-auto">
              <img
                src={currentTab.imageSrc}
                alt={currentTab.label}
                className="w-full h-auto object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Identidade Visual & Rebranding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-8">
          <span className="text-xs font-mono text-[#00FFFF] uppercase tracking-wider font-semibold">
            SEÇÃO 2 • IDENTIDADE & REBRANDING
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Logotipo, Cores e Manual da Marca
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Logo Showcase Dark & Light */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="p-8 rounded-2xl bg-[#0E0E10] border border-white/10 flex flex-col items-center justify-center text-center">
              <img
                src="/portfolio/sites/01s-logo-horizontal-fundo-escuro.png"
                alt="Logotipo 01S em fundo escuro"
                className="max-h-20 max-w-full object-contain mb-4"
              />
              <span className="text-xs font-mono text-gray-400">Aplicação Oficial em Fundo Escuro</span>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-200 flex flex-col items-center justify-center text-center">
              <img
                src="/portfolio/sites/01s-logo-horizontal-fundo-claro.png"
                alt="Logotipo 01S em fundo claro"
                className="max-h-20 max-w-full object-contain mb-4"
              />
              <span className="text-xs font-mono text-gray-600">Aplicação Oficial em Fundo Claro</span>
            </div>
          </div>

          {/* Color Palette & Principles */}
          <div className="p-8 rounded-2xl bg-[#18181B] border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Paleta de Cores e Energia</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                O verde transmite segurança, confiança e sustentabilidade operacional, enquanto o laranja traz dinamismo, agilidade no atendimento e entusiasmo.
              </p>

              <div className="grid grid-cols-5 gap-2 mb-6">
                {BRAND_COLORS_01S.map((c) => (
                  <div key={c.hex} className="space-y-1.5 text-center">
                    <div
                      className="w-full h-16 rounded-xl border border-white/10 shadow-inner"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-[10px] font-mono text-gray-400 block truncate">{c.name}</span>
                    <span className="text-[9px] font-mono text-gray-500 block">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#4EA238]" />
                <span>Tipografia moderna com geometria sólida</span>
              </div>
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#4EA238]" />
                <span>Alta legibilidade em escala reduzida (ícones de app e favicons)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Materiais Físicos & PDV */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-8">
          <span className="text-xs font-mono text-[#E71870] uppercase tracking-wider font-semibold">
            SEÇÃO 3 • MATERIAIS GRÁFICOS & SINALIZAÇÃO
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Peças Impressas e Materiais de Ponto de Venda
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Do cartão de visita nas mãos do cliente à sinalização em vias de alta velocidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#18181B] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#4EA238]/40 transition-all cursor-pointer"
              onClick={() => setLightboxSrc(item.imageSrc)}
            >
              <div className="aspect-[4/3] bg-black/60 relative overflow-hidden flex items-center justify-center p-3">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    if (item.fallbackSrc) {
                      (e.currentTarget as HTMLImageElement).src = item.fallbackSrc;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-xs font-mono text-white bg-black/70 px-3 py-1.5 rounded-lg border border-white/20">
                    Ampliar visualização
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-mono text-[#4EA238] font-semibold uppercase block mb-1">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Redes Sociais */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-8">
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
            SEÇÃO 4 • PRESENÇA SOCIAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Campanhas e Postagens Estratégicas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIAL_ITEMS.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl bg-[#18181B] border border-white/10 overflow-hidden flex flex-col justify-between cursor-pointer group hover:border-[#4EA238]/40 transition-all"
              onClick={() => setLightboxSrc(post.imageSrc)}
            >
              <div className="aspect-square bg-black relative overflow-hidden">
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-black/70 border border-white/20 text-white">
                    {post.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-white mb-1">{post.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{post.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#18181B] to-emerald-950/30 border border-[#4EA238]/30 p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
          <Quote className="w-10 h-10 text-[#4EA238]/40 mx-auto mb-4" />
          <p className="text-lg sm:text-xl text-gray-100 font-medium leading-relaxed italic mb-6">
            "João, obrigado por tudo. Você é um grande profissional. É bom saber que na minha Bahia tem gente como você, competente."
          </p>
          <div className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4EA238]" />
            <span className="text-sm font-bold text-white">Robson</span>
            <span className="text-xs text-gray-400 font-mono">• 01S Mobilidade</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-[#18181B] border border-white/10 p-10 sm:p-14 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Quer uma transformação como essa para a sua empresa?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Seja para criar um novo site, reformular sua identidade visual ou estruturar seus anúncios, podemos conversar agora mesmo.
          </p>
          <div>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp sobre meu projeto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Web Project Fullscreen Modal */}
      {selectedWebProject && (
        <ProjectModal
          project={selectedWebProject}
          onClose={() => setSelectedWebProject(null)}
        />
      )}

      {/* Image Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxSrc}
            alt="Visualização ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
