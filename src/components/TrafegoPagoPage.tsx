import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Target,
  BarChart3,
  Clock,
  HelpCircle,
  ChevronDown,
  Camera,
  FileCheck,
  TrendingUp,
  CheckCircle2,
  ShieldAlert,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';

interface TrafegoPagoPageProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

export const TrafegoPagoPage: React.FC<TrafegoPagoPageProps> = ({ onNavigate }) => {
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
      onNavigate('projetos', 'case-trafego-pago');
    } else {
      window.history.pushState(null, '', '/projetos#case-trafego-pago');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const faqs = [
    {
      q: 'Preciso ter site pra anunciar?',
      a: 'Não necessariamente, dá pra direcionar pro WhatsApp, Instagram ou uma landing page, depende do seu objetivo.',
    },
    {
      q: 'Quanto preciso investir em anúncio, além do seu serviço?',
      a: 'Começa baixo, o suficiente pra testar, a gente define o valor certo na reunião, olhando seu nicho e objetivo.',
    },
    {
      q: 'Em quanto tempo vejo resultado?',
      a: 'Varia por negócio, mas os primeiros sinais de performance geralmente aparecem nas primeiras semanas, enquanto a campanha é otimizada.',
    },
    {
      q: 'E se eu não tiver fotos ou vídeos do meu produto/serviço?',
      a: 'Sem problema, eu crio o criativo com apoio de IA ou imagem de referência, mas material real sempre traz mais autenticidade e resultado.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#272727] text-white selection:bg-[#E71870] selection:text-white pb-24">
      {/* Top Header / Breadcrumb Hero (Compatible with transparent header) */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#18181B] via-[#202023] to-[#272727] border-b border-white/5 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute -top-16 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#C754F0]/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-16 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#00FFFF]/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <div className="mb-6">
            <a
              href="/servicos"
              onClick={handleBackToServices}
              id="back-to-services-link"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-[#00FFFF] transition-colors group px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar para Serviços</span>
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C754F0]/15 border border-[#C754F0]/30 text-xs font-mono text-[#C754F0] font-bold">
                <Target className="w-3.5 h-3.5" />
                <span>ÁREA 03 • TRÁFEGO PAGO</span>
              </span>
              <span className="text-xs sm:text-sm font-mono text-gray-400">
                Meta Ads (Instagram / Facebook) & Google Ads
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Tráfego Pago que Leva Cliente até Você
            </h1>

            <p className="text-lg sm:text-2xl text-gray-200 font-medium max-w-3xl leading-relaxed">
              Anúncios pensados pro seu negócio local ser encontrado por quem já quer comprar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* 2. O que é / pra quem é */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#1E1E22] border border-white/[0.08] shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#00FFFF] font-bold tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>O QUE É E PARA QUEM É</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Para quem precisa parar de depender apenas de indicação
          </h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
            Gestão completa de campanhas no Meta Ads e Google Ads, pensada pra negócios locais e prestadores de serviço que querem parar de depender só do boca a boca e começar a aparecer pra quem está procurando o que eles oferecem, na hora certa.
          </p>
        </section>

        {/* 3. Como funciona */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#1E1E22] border border-white/[0.08] shadow-xl space-y-8">
          <div>
            <span className="text-xs font-mono uppercase text-[#C754F0] block mb-2 font-bold tracking-wider">
              ESTRATÉGIA PASSO A PASSO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
              Como funciona o processo
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
              Cuido da estratégia, segmentação e otimização da campanha do início ao fim, defino o público certo, ajusto o investimento e acompanho os resultados de perto, sempre te mantendo informado.
            </p>
          </div>

          {/* Creatives 2 paths */}
          <div className="space-y-4 pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Sobre os criativos (as artes e vídeos do anúncio), tem dois caminhos:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-[#141416] border border-white/[0.08] space-y-2.5">
                <span className="text-xs font-mono text-[#00FFFF] font-bold block uppercase tracking-wider">
                  Caminho 1: Material pronto
                </span>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Você já tem o material pronto? Eu uso, testo e otimizo em cima dele.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141416] border border-white/[0.08] space-y-2.5">
                <span className="text-xs font-mono text-[#E71870] font-bold block uppercase tracking-wider">
                  Caminho 2: Produção dedicada
                </span>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Não tem? Eu produzo pra você, com ou sem apoio de inteligência artificial, dependendo do que fizer mais sentido pro seu caso.
                </p>
              </div>
            </div>
          </div>

          {/* Image vs video based on data */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.025] border border-white/[0.08] space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Decisão por dados, não achismo
            </h3>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              Pra decidir se o anúncio vai ser em imagem, vídeo ou os dois, eu analiso o que costuma performar melhor no seu nicho. Por exemplo: pra petshop, análises mostram que vídeo geralmente converte mais que imagem, nesse caso, testamos primeiro em vídeo pra otimizar o resultado mais rápido. Se o nicho pedir imagem, ou os dois formatos, seguimos por ali. Sempre com base em dado, não em achismo.
            </p>
          </div>
        </section>

        {/* 4. O que eu preciso de você */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#18181B] border border-white/[0.08] shadow-xl space-y-6">
          <div>
            <span className="text-xs font-mono uppercase text-yellow-400 block mb-2 font-bold tracking-wider">
              ALINHAMENTO DE CONTEÚDO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
              O que eu preciso de você
            </h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              Se eu for produzir os criativos, pra manter autenticidade e gerar resultado real (não um anúncio genérico), eu preciso de material seu:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#141416] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
                <Camera className="w-5 h-5 text-[#00FFFF]" />
                <span>Produto físico</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Fotos reais e, se possível, um vídeo mostrando o produto em uso.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141416] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
                <FileCheck className="w-5 h-5 text-[#E71870]" />
                <span>Serviço</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Resultados reais, feedback de cliente ou uma boa explicação de como funciona.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed italic bg-white/[0.02] p-4 rounded-xl border border-white/5">
            Sem esse material, eu ainda consigo criar com apoio de IA ou imagem de referência, mas quanto mais real for o que você me manda, mais autêntico (e mais resultado) o anúncio traz.
          </p>
        </section>

        {/* 5. Bônus / diferencial (2 items) */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-mono uppercase text-emerald-400 block mb-2 font-bold tracking-wider">
              TRANSPARÊNCIA TOTAL
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Diferenciais exclusivos inclusos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <strong className="text-white text-base sm:text-lg block">
                  Relatório de performance simplificado
                </strong>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Relatório de performance simplificado, sem economês, te mostro o que os números significam de verdade pro seu negócio, não só gráfico bonito.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <strong className="text-white text-base sm:text-lg block">
                  Otimização estendida nos primeiros 15 dias
                </strong>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Otimização estendida nos primeiros 15 dias, sem custo adicional, período em que ajusto a campanha com mais atenção enquanto os dados de performance ainda estão se estabilizando.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Valor */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-white/[0.04] to-transparent border-l-4 border-l-[#00FFFF] border border-white/[0.08] space-y-3">
          <span className="text-xs font-mono uppercase text-cyan-300 block font-bold tracking-wider">
            RETORNO E VISIBILIDADE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Por que investir em tráfego pago agora?
          </h2>
          <p className="text-base sm:text-lg text-gray-100 leading-relaxed font-normal">
            Não adianta ter o melhor produto ou serviço da região se ninguém sabe que ele existe. Tráfego pago bem feito coloca seu negócio na frente de quem já está procurando, sem depender só de indicação, sem esperar o cliente &ldquo;passar na frente da loja&rdquo;.
          </p>
        </section>

        {/* 7. Investimento + observação sobre resultado */}
        <section className="p-8 sm:p-10 rounded-3xl bg-[#141416] border border-white/[0.08] space-y-3 shadow-xl">
          <span className="text-xs font-mono uppercase text-gray-400 block font-bold tracking-wider">
            CLAREZA SOBRE VALORES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Investimento transparente & expectativa real
          </h2>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            O investimento tem duas partes: o valor do meu serviço de gestão (acessível, sem comprometer o resultado) e a verba de anúncio, que vai direto pra Meta ou Google, começando com um valor diário baixo, o suficiente pra testar. Se eu for produzir os criativos, isso já entra no orçamento, os valores certos a gente fecha na reunião, olhando o seu caso. Vale lembrar: resultado depende de vários fatores além do anúncio (atendimento, site, verba investida), então não prometo resultado fácil e instantâneo, prometo trabalho com meta clara, acompanhamento de perto e suporte durante todo o contrato, buscando resultado real e alcançável.
          </p>
        </section>

        {/* 8. Dúvidas frequentes (4 items) */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-[#C754F0]" />
              <span className="text-xs font-mono uppercase text-[#C754F0] font-bold tracking-wider">
                PERGUNTAS E RESPOSTAS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Dúvidas frequentes sobre tráfego pago
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-[#18181B] border border-white/[0.08] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
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

        {/* 9. Dual CTA Buttons */}
        <section className="pt-8 border-t border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-trafego-pago-whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-base shadow-[0_0_24px_rgba(0,255,255,0.25)] hover:shadow-[0_0_36px_rgba(0,255,255,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>

            <a
              href="/projetos#case-trafego-pago"
              onClick={handleCaseClick}
              id="cta-trafego-pago-case"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.18] text-white font-semibold text-base transition-all duration-200 group shrink-0"
            >
              <span>Ver exemplo real</span>
              <ArrowRight className="w-4 h-4 text-[#C754F0] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* 10. Footer CTA: Discreet */}
          <p className="text-sm sm:text-base text-gray-300 text-center sm:text-left pt-2 font-medium">
            Ficou com alguma dúvida? Fala comigo no WhatsApp, sem compromisso.
          </p>
        </section>
      </main>
    </div>
  );
};
