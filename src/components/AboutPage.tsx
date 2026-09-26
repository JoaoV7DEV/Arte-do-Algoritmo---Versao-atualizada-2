import React from 'react';
import { Sparkles, MapPin, Heart, Code2, Palette, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Lightbulb, Users, Compass } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { FaqSection } from './FaqSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#272727] text-white">
      {/* Top Banner */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#18181B] via-[#272727] to-[#272727] border-b border-white/5 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00FFFF] mb-6 shadow-inner">
            <MapPin className="w-3.5 h-3.5" />
            <span>Salvador, Bahia • Atendimento para todo o Brasil</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            A união entre a sensibilidade artística e a precisão do código
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conheça a história, os princípios e o método por trás da <strong>Arte do Algoritmo</strong>. Criamos identidades memoráveis e plataformas digitais pensadas para colocar seu negócio em outro patamar de autoridade.
          </p>
        </div>
      </section>

      {/* Philosophy & Dual Nature Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs uppercase font-mono text-[#00FFFF] font-semibold tracking-wider block mb-2">
              NOSSA FILOSOFIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Por que nos chamamos Arte do Algoritmo?
            </h2>
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                No universo digital, quase sempre encontramos dois extremos: de um lado, sites visualmente atraentes mas lentos, pesados e sem foco comercial; de outro lado, páginas construídas por programadores que entendem de código mas esquecem a estética, a harmonia e o impacto emocional de uma marca.
              </p>
              <p>
                A <strong>Arte do Algoritmo</strong> nasceu para eliminar essa separação. Acreditamos que a verdadeira potência de uma presença digital reside no encontro entre o calor do design autoral e o rigor da engenharia de software moderna.
              </p>
            </div>
          </div>

          {/* Arte vs Algoritmo Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Vertente Arte */}
            <div className="p-6 rounded-3xl bg-[#18181B] border border-pink-500/20 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-[#E71870] flex items-center justify-center mb-4">
                  <Palette className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#E71870] uppercase block mb-1">
                  VERTENTE ARTE
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Criatividade & Harmonia
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Identidade visual, paleta cromática, tipografia refinada e design de interfaces que geram conexão emocional imediata.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-pink-400">
                • Autoridade instantânea
              </div>
            </div>

            {/* Vertente Algoritmo */}
            <div className="p-6 rounded-3xl bg-[#18181B] border border-cyan-500/20 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-[#00FFFF] flex items-center justify-center mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold text-[#00FFFF] uppercase block mb-1">
                  VERTENTE ALGORITMO
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Tecnologia & Precisão
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Carregamento instantâneo, código otimizado para o Google, responsividade em qualquer smartphone e botões de alta conversão.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-cyan-400">
                • Velocidade & Conversão
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Roots */}
      <section className="py-20 bg-[#18181B] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase font-mono text-[#00FFFF] font-semibold tracking-wider">
                LIDERANÇA & ATENDIMENTO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Tecnologia de ponta com o calor e a transparência do contato direto
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                Liderada por <strong>João</strong> em Salvador, Bahia, a agência atua com um modelo direto, ágil e sem burocracias. Quando você fecha um projeto conosco, você não fala com um robô ou um atendente comercial despreparado: você conversa diretamente com quem pensa na estratégia e desenvolve cada detalhe.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Atendemos clientes de todo o Brasil via WhatsApp, alinhando reuniões objetivas, enviando prévias funcionais e garantindo que cada investimento faça total sentido econômico para o porte da sua empresa.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Conversar diretamente no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Principles Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#272727] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF]" />
                  <span>Sem templates pré-fabricados</span>
                </div>
                <p className="text-xs text-gray-400">
                  Cada projeto possui arquitetura visual pensada para o seu posicionamento real, sem modelos repetitivos.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#272727] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF]" />
                  <span>Comunicação transparente e sem jargões</span>
                </div>
                <p className="text-xs text-gray-400">
                  Explicamos cada decisão técnica em português claro para você participar com segurança de cada etapa.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#272727] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#00FFFF]" />
                  <span>Investimento sob medida e transparente</span>
                </div>
                <p className="text-xs text-gray-400">
                  Projetos com escopo e cronograma claros, adaptados ao porte e ao momento do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-12">
        <FaqSection />
      </section>

      {/* Final Contact Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#18181B] to-black border border-white/10 shadow-2xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Vamos conversar sobre o seu projeto?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Envie uma mensagem sem compromisso no WhatsApp. Analisamos o seu momento atual e sugerimos o caminho ideal para sua empresa.
          </p>
          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#18181B] font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Fale no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};
