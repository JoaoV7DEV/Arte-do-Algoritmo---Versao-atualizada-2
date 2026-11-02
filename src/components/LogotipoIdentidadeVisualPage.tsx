import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Palette,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  HelpCircle,
  FileText,
  Briefcase,
  Eye,
  Check,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';
import { BrandIcon } from './BrandIcon';

interface LogotipoIdentidadeVisualPageProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

export const LogotipoIdentidadeVisualPage: React.FC<LogotipoIdentidadeVisualPageProps> = ({
  onNavigate,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('servicos', 'pilar-design-estrategico');
    } else {
      window.history.pushState(null, '', '/servicos#pilar-design-estrategico');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleCaseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('projetos', 'case-identidade-visual');
    } else {
      window.history.pushState(null, '', '/projetos#case-identidade-visual');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handle01sCaseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('projeto-01s');
    } else {
      window.history.pushState(null, '', '/projetos/01s-mobilidade');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const faqs = [
    {
      q: 'Qual a diferença entre logotipo e identidade visual?',
      a: 'O logotipo é o símbolo da marca. A identidade visual vai além: define cores, tipografia e regras de uso, num manual, pra marca ficar igual em todo lugar.',
      has01sLink: false,
    },
    {
      q: 'Já tenho um logo, mas ele está desatualizado. Dá pra reformular?',
      a: 'Dá. A gente avalia o que vale manter e o que atualizar. Um exemplo é o rebranding da 01S Mobilidade, que está no Portfólio.',
      has01sLink: true,
    },
    {
      q: 'Quanto tempo leva?',
      a: 'Depende do caminho escolhido e da rapidez nas aprovações. O prazo é combinado na conversa, antes de começar.',
      has01sLink: false,
    },
    {
      q: 'Posso pedir ajustes?',
      a: 'Sim. As rodadas de ajuste são combinadas no orçamento, pra ficar claro desde o começo.',
      has01sLink: false,
    },
  ];

  const steps = [
    '1. Briefing — conversa pra entender seu negócio, seu público, o que você gosta e o que quer evitar.',
    '2. Criação — desenvolvo o logotipo e a direção visual (cores e tipografia).',
    '3. Ajustes — refinamos juntos o que for preciso, dentro das rodadas combinadas no orçamento.',
    '4. Entrega — arquivos prontos pra uso e, na identidade completa, o manual de aplicação.',
  ];

  const deliverables = [
    'Logotipo em versões para fundo claro e fundo escuro',
    'Versões horizontal e vertical do logotipo',
    'Paleta de cores com os códigos de cada cor (identidade completa)',
    'Tipografia da marca (identidade completa)',
    'Manual de aplicação da marca (identidade completa)',
    'Aplicação em materiais, como cartão, papelaria, uniforme e banner (quando combinado)',
  ];

  const requirements = [
    {
      title: 'Sobre o negócio',
      desc: 'Nome, segmento, o que você oferece e quem é o seu público.',
    },
    {
      title: 'Referências',
      desc: 'Marcas que você admira, cores e estilos que gosta ou quer evitar.',
    },
    {
      title: 'Material atual',
      desc: 'Logo antigo e arquivos que já existem, se houver, e onde a marca vai ser usada.',
    },
  ];

  const differentiators = [
    'Marca aplicada em materiais reais, não só um arquivo de logo',
    'Manual de aplicação na identidade completa, pra marca ficar igual em qualquer lugar',
    'Contato direto comigo, sem intermediários',
  ];

  return (
    <div className="min-h-screen bg-[#272727] text-white selection:bg-[#E71870] selection:text-white pb-24">
      {/* ========================================================================= */}
      {/* 1. HERO & TOP BREADCRUMB                                                  */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#18181B] via-[#202023] to-[#272727] border-b border-white/5 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute -top-16 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#E71870]/15 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-16 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#C754F0]/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <div className="mb-6">
            <a
              href="/servicos#pilar-design-estrategico"
              onClick={handleBackToServices}
              id="back-to-services-link-identidade"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-[#E71870] transition-colors group px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar para Serviços</span>
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-xs font-mono text-[#E71870] font-bold shadow-sm">
                <Palette className="w-3.5 h-3.5" />
                <span>ÁREA 02 • DESIGN ESTRATÉGICO</span>
              </span>
              <span className="text-xs sm:text-sm font-mono text-gray-400">
                Logotipo, cores, tipografia e manual de marca
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-5xl">
              Logotipo e Identidade Visual pra Sua Marca Ser Lembrada
            </h1>

            <p className="text-lg sm:text-2xl text-gray-200 font-medium max-w-3xl leading-relaxed">
              Do logotipo ao manual de aplicação, uma identidade pensada pro seu negócio e pro público que você quer atingir.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
        {/* ========================================================================= */}
        {/* 2. O que é e pra quem é (UNBOXED: Plain text directly on page background) */}
        {/* ========================================================================= */}
        <section className="py-2 space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 font-mono uppercase text-[#E71870] font-bold tracking-wider">
            <BrandIcon icon={Sparkles} size="sm" variant="magenta" />
            <span className="text-[14px]">O QUE É E PRA QUEM É</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Para quem quer uma marca com identidade própria
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal pt-1">
            Criação de logotipo e de identidade visual completa para negócios locais, profissionais autônomos e empreendedores que querem uma marca coerente, reconhecida em todos os lugares onde aparece: redes sociais, materiais impressos e site.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 3. Como funciona (Two path cards + Passo a passo)                         */}
        {/* ========================================================================= */}
        <section className="space-y-8 pt-2">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono uppercase text-[#E71870] font-bold tracking-wider">
              <BrandIcon icon={Layers} size="sm" variant="magenta" />
              <span className="text-[14px]">COMO FUNCIONA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Dois caminhos, conforme o que seu negócio precisa
            </h2>
          </div>

          {/* Two Path Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Path 1 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#141416]/95 border-2 border-white/[0.08] hover:border-pink-500/40 transition-all flex flex-col justify-between shadow-lg group">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#E71870] uppercase tracking-wider block">
                  OPÇÃO 01
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-200 transition-colors">
                  Caminho 1 · Só o logotipo
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal pt-1">
                  Um símbolo autoral, pensado pro seu segmento, pra você começar com uma marca bem desenhada.
                </p>
              </div>
            </div>

            {/* Path 2 */}
            <div className="p-7 sm:p-8 rounded-2xl bg-[#141416]/95 border-2 border-pink-500/35 hover:border-pink-500/60 transition-all flex flex-col justify-between shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-mono font-bold text-[#E71870] uppercase tracking-wider block">
                  OPÇÃO 02 • COMPLETA
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-200 transition-colors">
                  Caminho 2 · Identidade visual completa
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal pt-1">
                  Logotipo, paleta de cores, tipografia e manual de aplicação, pra sua marca ficar igual em qualquer lugar.
                </p>
              </div>
            </div>
          </div>

          {/* Passo a passo */}
          <div className="pt-6 space-y-5 max-w-4xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Passo a passo
            </h3>

            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 text-base sm:text-lg text-gray-200 leading-relaxed"
                >
                  <div className="w-2 h-2 rounded-full bg-[#E71870] mt-2.5 shrink-0" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. O que você recebe (UNBOXED plain text list)                            */}
        {/* ========================================================================= */}
        <section className="space-y-6 max-w-4xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono uppercase text-[#E71870] font-bold tracking-wider">
              <BrandIcon icon={FileText} size="sm" variant="magenta" />
              <span className="text-[14px]">ENTREGÁVEIS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              O que você recebe
            </h2>
            <p className="text-base sm:text-lg text-gray-400 font-normal">
              Os itens variam conforme o caminho escolhido.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 text-base text-gray-200 leading-relaxed"
              >
                <div className="w-5 h-5 rounded-md bg-pink-500/15 border border-pink-500/30 text-[#E71870] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. O que eu preciso de você (Cards)                                       */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono uppercase text-[#E71870] font-bold tracking-wider">
              <BrandIcon icon={Briefcase} size="sm" variant="magenta" />
              <span className="text-[14px]">PRÉ-REQUISITOS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              O que eu preciso de você
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {requirements.map((req, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#141416]/95 border border-white/[0.08] hover:border-pink-500/30 transition-all space-y-2.5 shadow-lg group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#E71870]">0{idx + 1}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-200 transition-colors">
                    {req.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  {req.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. O que faz diferença (Plain narrative items)                            */}
        {/* ========================================================================= */}
        <section className="space-y-6 max-w-4xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono uppercase text-[#E71870] font-bold tracking-wider">
              <BrandIcon icon={Eye} size="sm" variant="magenta" />
              <span className="text-[14px]">DIFERENCIAIS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              O que faz diferença
            </h2>
          </div>

          <div className="space-y-3.5 pt-1">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 text-base sm:text-lg text-gray-200 leading-relaxed"
              >
                <div className="w-5 h-5 rounded-full bg-pink-500/15 border border-pink-500/30 text-[#E71870] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>{diff}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. Por que investir numa identidade visual (accent-border block)          */}
        {/* ========================================================================= */}
        <section className="p-7 sm:p-10 rounded-2xl bg-gradient-to-br from-pink-500/10 via-[#141416]/95 to-[#141416]/95 border-2 border-pink-500/35 shadow-xl max-w-4xl space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Por que investir numa identidade visual
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
            Quando o logotipo, as cores e as letras seguem o mesmo padrão, seu negócio parece mais organizado e fica mais fácil de lembrar. É a primeira impressão de quem ainda não te conhece.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 8. Investimento                                                           */}
        {/* ========================================================================= */}
        <section className="space-y-3 max-w-4xl">
          <div className="inline-flex items-center gap-2 font-mono uppercase text-[#E71870] font-bold tracking-wider">
            <span className="text-[14px]">VALOR E CONTRATAÇÃO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Investimento
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal pt-1">
            O valor depende do caminho escolhido (só o logotipo ou a identidade completa) e do que será aplicado. Os detalhes a gente fecha numa conversa, olhando o seu caso.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 9. FAQ ACCORDION (4 items)                                                */}
        {/* ========================================================================= */}
        <section className="space-y-6 max-w-4xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono uppercase text-[#E71870] font-bold tracking-wider">
              <BrandIcon icon={HelpCircle} size="sm" variant="magenta" />
              <span className="text-[14px]">DÚVIDAS FREQUENTES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-3 pt-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#141416]/95 border border-white/[0.08] hover:border-pink-500/30 transition-all overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-base sm:text-lg text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E71870] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/[0.06] pt-4">
                      {faq.has01sLink ? (
                        <p>
                          Dá. A gente avalia o que vale manter e o que atualizar. Um exemplo é o rebranding da{' '}
                          <a
                            href="/projetos/01s-mobilidade"
                            onClick={handle01sCaseClick}
                            className="text-[#E71870] hover:text-pink-300 underline font-semibold transition-colors"
                          >
                            01S Mobilidade
                          </a>
                          , que está no Portfólio.
                        </p>
                      ) : (
                        <p>{faq.a}</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. DUAL CTA & FOOTER CTA                                                 */}
        {/* ========================================================================= */}
        <section className="pt-6 space-y-12">
          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-extrabold text-base shadow-[0_0_25px_rgba(0,255,255,0.25)] hover:shadow-[0_0_35px_rgba(0,255,255,0.4)] transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>

            <a
              href="/projetos#case-identidade-visual"
              onClick={handleCaseClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-pink-500/40 text-white font-semibold text-base transition-all text-center group"
            >
              <span>Ver exemplo real</span>
              <ArrowRight className="w-4 h-4 text-[#E71870] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Footer CTA Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#18181B] to-black border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-lg sm:text-xl font-bold text-white">
                Ficou com alguma dúvida? Fala comigo no WhatsApp, sem compromisso.
              </p>
            </div>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#E71870]/40 text-white font-semibold text-sm transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#E71870]" />
              <span>Conversar agora</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
