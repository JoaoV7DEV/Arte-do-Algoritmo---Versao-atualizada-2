import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Sparkles,
  MapPin,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Star,
  Search,
  Building2,
  Image,
  FileText,
  QrCode,
  Link2,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';
import { BrandIcon } from './BrandIcon';

interface GoogleMeuNegocioPageProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

export const GoogleMeuNegocioPage: React.FC<GoogleMeuNegocioPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('servicos', 'pilar-presenca-digital');
    } else {
      window.history.pushState(null, '', '/servicos#pilar-presenca-digital');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleCaseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('projetos', 'case-google-meu-negocio');
    } else {
      window.history.pushState(null, '', '/projetos#case-google-meu-negocio');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const faqs = [
    {
      q: 'Meu negócio já tem perfil no Google, ainda preciso desse serviço?',
      a: 'Se não estiver 100% otimizado, fotos, categorias, avaliações, descrição, sim. A maioria dos perfis existe, mas está incompleto ou mal posicionado.',
    },
    {
      q: 'Em quanto tempo aparece resultado?',
      a: 'Varia, mas ajustes de otimização costumam mostrar sinal de melhora nas primeiras semanas, com resultado mais consistente ao longo dos meses.',
    },
    {
      q: 'Preciso pagar pra aparecer no Google Meu Negócio?',
      a: 'Não, é um posicionamento orgânico, gratuito. O investimento é só no meu serviço de otimização.',
    },
    {
      q: 'Isso substitui o tráfego pago?',
      a: 'Não, são complementares, um traz visibilidade orgânica constante, o outro impulsiona resultado mais rápido. Muitos clientes usam os dois juntos.',
    },
    {
      q: 'Depois da otimização inicial, você continua acompanhando meu perfil?',
      a: 'Sim! Além da otimização, ofereço acompanhamento contínuo pra manter seu perfil sempre atualizado e competitivo. A gente alinha o formato certo pra você na conversa.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#272727] text-white selection:bg-[#E71870] selection:text-white pb-24">
      {/* Top Header / Breadcrumb Hero (Compatible with transparent header) */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#18181B] via-[#202023] to-[#272727] border-b border-white/5 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute -top-16 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-16 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#00FFFF]/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <div className="mb-6">
            <a
              href="/servicos"
              onClick={handleBackToServices}
              id="back-to-services-link-gmb"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-[#00FFFF] transition-colors group px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar para Serviços</span>
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-bold shadow-sm">
                <MapPin className="w-3.5 h-3.5" />
                <span>ÁREA 03 • TRÁFEGO ORGÂNICO</span>
              </span>
              <span className="text-xs sm:text-sm font-mono text-gray-400">
                Perfil da Empresa no Google & Busca Local
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Apareça no Google Quando Seu Cliente Procurar por Você
            </h1>

            <p className="text-lg sm:text-2xl text-gray-200 font-medium max-w-3xl leading-relaxed">
              Otimização completa do seu Perfil da Empresa no Google, pra quem já é seu cliente te achar fácil, e pra quem nunca ouviu falar de você também.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
        {/* ========================================================================= */}
        {/* 2. O que é / pra quem é (UNBOXED: Plain text directly on page background) */}
        {/* ========================================================================= */}
        <section className="py-2 space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 font-mono uppercase text-emerald-400 font-bold tracking-wider">
            <BrandIcon icon={Search} size="sm" variant="cyan-magenta" />
            <span className="text-[14px]">O QUE É E PARA QUEM É?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Para negócios locais que querem destaque no mapa e na busca
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal pt-1">
            Trabalho na otimização do seu Perfil da Empresa no Google (Google Meu Negócio), pensado pra negócios locais que precisam aparecer nas buscas e no mapa quando alguém procura o que eles oferecem na região, mesmo sem nunca ter ouvido falar da marca antes.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 3. Como funciona (ASYMMETRIC DESKTOP LAYOUT + UNBOXED OUTER CONTAINER)   */}
        {/* ========================================================================= */}
        <section className="space-y-8 pt-2">
          {/* Asymmetric layout on desktop: Left column diagnosis & intro, Right column 3 step cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column (5 cols on desktop): Intro Narrative */}
            <div className="lg:col-span-5 space-y-5">
              {/* Typographic Result Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/15 via-[#00FFFF]/15 to-emerald-500/15 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-extrabold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-200 to-emerald-300">
                  Visibilidade no Google Maps
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[14px] font-mono uppercase text-emerald-400 block font-bold tracking-wider">
                  DIAGNÓSTICO E EXECUÇÃO
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Como funciona o processo?
                </h2>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed pt-1">
                Analiso como seu negócio aparece hoje no Google, se o perfil existe, se está completo, se as informações estão certas, se tem fotos, avaliações, categoria certa, e ajusto tudo pra melhorar o posicionamento nas buscas locais. Isso inclui otimização de descrição, categorias, horário, fotos profissionais e uma estratégia pra conseguir mais avaliações reais de clientes.
              </p>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 text-xs sm:text-sm text-gray-300 font-mono space-y-1 shadow-sm">
                <span className="text-emerald-400 font-bold block">OBJETIVO CENTRAL:</span>
                <span>Alcançar os 3 primeiros lugares do mapa (Google Local 3-Pack).</span>
              </div>
            </div>

            {/* Right Column (7 cols on desktop): 3 Action Cards (BOXED) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-emerald-500/40 transition-all space-y-2.5 shadow-lg group">
                <div className="flex items-center gap-3">
                  <BrandIcon icon={Building2} size="md" variant="cyan-magenta" />
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-bold block uppercase tracking-wider">
                      01. Configuração Precisa
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Categorias e Informações</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal pl-1">
                  Categorias primárias e secundárias corretas, horários de funcionamento, raio de atendimento e telefones verificados.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-cyan-500/40 transition-all space-y-2.5 shadow-lg group">
                <div className="flex items-center gap-3">
                  <BrandIcon icon={Image} size="md" variant="cyan" />
                  <div>
                    <span className="text-xs font-mono text-[#00FFFF] font-bold block uppercase tracking-wider">
                      02. Imagem e Autoridade
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Fotos e Apresentação</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal pl-1">
                  Fotos atraentes do espaço, produtos, serviços e equipe com títulos geolocalizados e padrão visual profissional.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-pink-500/40 transition-all space-y-2.5 shadow-lg group">
                <div className="flex items-center gap-3">
                  <BrandIcon icon={Star} size="md" variant="magenta" />
                  <div>
                    <span className="text-xs font-mono text-[#E71870] font-bold block uppercase tracking-wider">
                      03. Prova Social
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Avaliações e Respostas</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal pl-1">
                  Estratégia para captar depoimentos reais de 5 estrelas e modelos de resposta com palavras-chave relevantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. O que eu preciso de você (UNBOXED OUTER CONTAINER + BOXED REQUISITOS)  */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="space-y-2">
            <span className="text-[14px] font-mono uppercase text-yellow-400 block font-bold tracking-wider">
              O QUE EU PRECISO DE VOCÊ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Materiais e acessos iniciais
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl">
              Acesso ao seu Perfil da Empresa no Google (ou te ajudo a criar, se ainda não tiver), fotos do seu espaço, produto ou equipe, e as informações certas do negócio, endereço, horário, categorias, serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-emerald-500/30 transition-all space-y-2 shadow-lg">
              <BrandIcon icon={ShieldCheck} size="md" variant="emerald" />
              <span className="text-xs font-mono text-emerald-400 font-bold block uppercase">ACESSO</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Painel do Perfil</h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Acesso como administrador ou suporte para criação e validação do endereço junto ao Google.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-2 shadow-lg">
              <BrandIcon icon={Image} size="md" variant="cyan" />
              <span className="text-xs font-mono text-[#00FFFF] font-bold block uppercase">IMAGENS</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Fotos Reais</h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Fachada, recepção, produtos e rotina para gerar confiança imediata ao visitante.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-pink-500/30 transition-all space-y-2 shadow-lg">
              <BrandIcon icon={FileText} size="md" variant="magenta" />
              <span className="text-xs font-mono text-[#E71870] font-bold block uppercase">DADOS</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Informações Oficiais</h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Horários oficiais, telefone de atendimento, WhatsApp e lista detalhada de serviços prestados.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. Bônus / diferencial (2 items) (KEEP BOXED: discrete comparable items)  */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div>
            <span className="text-[14px] font-mono uppercase text-emerald-400 block mb-2 font-bold tracking-wider">
              BÔNUS INCLUSOS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Diferenciais exclusivos para o seu perfil
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-4.5 shadow-lg">
              <BrandIcon icon={QrCode} size="lg" variant="emerald" />
              <div className="space-y-2">
                <strong className="text-white text-lg sm:text-xl block font-bold">
                  Placa de Avaliação Personalizada
                </strong>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  Uma plaquinha com QR code que leva direto pro link de avaliação do seu perfil — nas cores do seu negócio. Você recebe em PDF pra usar no WhatsApp ou imprimir, e te ensino também a melhor forma de pedir avaliação pros seus clientes, de um jeito natural.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-4.5 shadow-lg">
              <BrandIcon icon={Link2} size="lg" variant="emerald" />
              <div className="space-y-2">
                <strong className="text-white text-lg sm:text-xl block font-bold">
                  Link Personalizado pro Instagram (Instabio)
                </strong>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  Uma página de links simples e no ar rápido — WhatsApp, Google Meu Negócio, Instagram, tudo num lugar só — pra colocar na bio do seu Instagram e facilitar pro seu cliente te achar em qualquer rede.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. Valor (PARTIAL ACCENT TREATMENT KEPT, NO FULL HEAVY BOX)              */}
        {/* ========================================================================= */}
        <section className="py-6 border-l-4 border-l-emerald-400 pl-6 sm:pl-8 space-y-3 max-w-4xl">
          <span className="text-[14px] font-mono uppercase text-emerald-300 block font-bold tracking-wider">
            O VALOR DE ESTAR VISÍVEL
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Por que otimizar seu perfil no Google?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed font-normal">
            Muita gente pesquisa no Google antes de decidir onde comprar ou contratar, se seu negócio não aparece bem ali, ou aparece incompleto, você perde cliente pra concorrente que só tá mais visível, não necessariamente melhor.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 7. Investimento (UNBOXED: Plain text with generous spacing)              */}
        {/* ========================================================================= */}
        <section className="py-4 space-y-4 max-w-4xl">
          <span className="text-[14px] font-mono uppercase text-gray-400 block font-bold tracking-wider">
            INVESTIMENTO SOB MEDIDA
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Investimento transparente
          </h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            O investimento nesse serviço é acessível e definido conforme o tamanho e a complexidade do seu negócio, os valores certos a gente fecha numa conversa rápida, olhando seu caso.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 8. Dúvidas frequentes (4 items) (KEEP BOXED: discrete accordion items)    */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="flex items-center gap-3">
            <BrandIcon icon={HelpCircle} size="md" variant="emerald" />
            <div>
              <span className="text-[14px] font-mono uppercase text-emerald-400 font-bold tracking-wider block">
                PERGUNTAS E RESPOSTAS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Dúvidas frequentes sobre Google Meu Negócio
              </h2>
            </div>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#18181B] border border-white/[0.08] hover:border-white/[0.15] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-gray-200 leading-relaxed border-t border-white/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. Dual CTA Buttons + 10. Discreet Footer Note                            */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-gmb-whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-base shadow-[0_0_24px_rgba(0,255,255,0.25)] hover:shadow-[0_0_36px_rgba(0,255,255,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>

            <a
              href="/projetos#case-google-meu-negocio"
              onClick={handleCaseClick}
              id="cta-gmb-case"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.18] text-white font-semibold text-base transition-all duration-200 group shrink-0"
            >
              <span>Ver exemplo real</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="text-[17px] text-gray-300 text-center sm:text-left pt-2 font-medium">
            Ficou com alguma dúvida? Fala comigo no WhatsApp, sem compromisso.
          </p>
        </section>
      </main>
    </div>
  );
};
