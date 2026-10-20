import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Instagram,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  Palette,
  Layers,
  Smartphone,
  Eye,
  Video,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';
import { BrandIcon } from './BrandIcon';

interface ArtesRedesSociaisPageProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

interface NichePack {
  id: string;
  niche: string;
  title: string;
  src: string;
  alt: string;
  description: string;
}

const NICHE_PACKS: NichePack[] = [
  {
    id: 'auto-escola',
    niche: 'Autoescola / CFC',
    title: 'Pack para Autoescola e CFC',
    src: '/servicos/artes-redes-sociais/Pack para Auto Escola.jpg',
    alt: 'Pack de artes para Autoescola e Centro de Formação de Condutores',
    description: 'Postagens focadas em primeira habilitação, reciclagem, dicas de trânsito e chamadas para matrícula.',
  },
  {
    id: 'clinica-hospitalar',
    niche: 'Saúde & Clínicas',
    title: 'Pack para Clínica Hospitalar e Médica',
    src: '/servicos/artes-redes-sociais/Pack para Clinica Hospitalar.jpg',
    alt: 'Pack de artes para Clínica Hospitalar e Médica',
    description: 'Comunicação limpa e humanizada para especialidades médicas, exames, prevenção e agendamento de consultas.',
  },
  {
    id: 'contabilidade-imoveis',
    niche: 'Contabilidade & Imobiliárias',
    title: 'Pack para Contabilidade e Corretores de Imóveis',
    src: '/servicos/artes-redes-sociais/Pack para Contabilidade e Corretores de Imoveis.jpg',
    alt: 'Pack de artes para Contabilidade e Corretores de Imóveis',
    description: 'Layouts sóbrios e de alta autoridade para prazos fiscais, dicas tributárias e destaque de imóveis.',
  },
  {
    id: 'nutricionistas',
    niche: 'Nutrição & Bem-Estar',
    title: 'Pack para Nutricionistas',
    src: '/servicos/artes-redes-sociais/Pack para Nutricionistas.jpg',
    alt: 'Pack de artes para Nutricionistas e Saúde',
    description: 'Design moderno com dicas de alimentação, quebra de mitos nutricionais, planos e rotinas saudáveis.',
  },
  {
    id: 'petshop',
    niche: 'Pet Shop & Veterinária',
    title: 'Pack para Pet Shop e Clínica Veterinária',
    src: '/servicos/artes-redes-sociais/Pack para PetShop.jpg',
    alt: 'Pack de artes para Pet Shop e Veterinária',
    description: 'Cores vibrantes e foco em banho e tosa, cuidados com pets, vacinas e produtos da loja.',
  },
];

export const ArtesRedesSociaisPage: React.FC<ArtesRedesSociaisPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedPackIndex, setSelectedPackIndex] = useState(0);
  const [zoomModalItem, setZoomModalItem] = useState<{ src: string; alt: string; title: string; desc?: string } | null>(null);

  // Video state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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
      onNavigate('projetos', 'galeria-redes-sociais');
    } else {
      window.history.pushState(null, '', '/projetos#galeria-redes-sociais');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleVideoMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const faqs = [
    {
      q: 'Preciso da versão paga do Canva (Canva Pro) para editar os templates?',
      a: 'Não! Todos os templates são desenvolvidos utilizando elementos, fontes e recursos 100% gratuitos do Canva. Você pode editar, trocar fotos, textos e exportar tudo em alta resolução usando a conta gratuita normal sem custo algum.',
    },
    {
      q: 'Consigo editar pelo celular?',
      a: 'Sim! O Canva funciona tanto pelo navegador no computador quanto pelo aplicativo gratuito no smartphone (disponível para Android e iOS). Você pode editar e postar diretamente pelo seu celular onde estiver.',
    },
    {
      q: 'E se eu não tiver logotipo ou cores definidas para a minha marca?',
      a: 'Não tem problema! Posso sugerir uma paleta de cores limpa, profissional e harmoniosa para os seus posts. E se você quiser, podemos desenvolver sua identidade visual completa e logotipo como serviço de design.',
    },
    {
      q: 'Qual a diferença entre o Pack de Templates e o serviço de posts prontos?',
      a: 'No Pack de Templates, você paga uma taxa única pelo conjunto completo de artes prontas no Canva e tem total liberdade para editar e postar quando quiser. No formato de posts prontos, você não precisa mexer em nada: eu crio os conteúdos e artes finalizados para você só postar ou agendar.',
    },
    {
      q: 'Existe mensalidade ou renovação obrigatória nos packs?',
      a: 'Nenhuma. O Pack de Templates é um investimento único: uma vez adquirido, os templates ficam salvos na sua conta do Canva para sempre, sem cobranças futuras.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#272727] text-white selection:bg-[#E71870] selection:text-white pb-24">
      {/* Top Header / Breadcrumb Hero (Compatible with transparent header) */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#18181B] via-[#202023] to-[#272727] border-b border-white/5 overflow-hidden">
        {/* Ambient background glows matching Area 2 magenta / purple palette */}
        <div className="absolute -top-16 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#E71870]/20 via-pink-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-16 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#C754F0]/20 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <div className="mb-6">
            <a
              href="/servicos"
              onClick={handleBackToServices}
              id="back-to-services-link-social"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-[#E71870] transition-colors group px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar para Serviços</span>
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-xs font-mono text-[#E71870] font-bold shadow-sm">
                <Instagram className="w-3.5 h-3.5" />
                <span>ÁREA 02 • ARTES PARA REDES SOCIAIS</span>
              </span>
              <span className="text-xs sm:text-sm font-mono text-gray-400">
                Packs editáveis no Canva e posts prontos
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Seu Instagram Sempre com Post Bonito, Mesmo sem Tempo nem Orçamento pra Social Media
            </h1>

            <p className="text-lg sm:text-2xl text-gray-200 font-medium max-w-3xl leading-relaxed">
              Template editável no Canva ou post pronto pra publicar: você escolhe.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
        {/* ========================================================================= */}
        {/* 2. O QUE É E PARA QUEM É (UNBOXED: Plain text directly on page background)*/}
        {/* ========================================================================= */}
        <section className="py-2 space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 font-mono uppercase text-[#E71870] font-bold tracking-wider">
            <BrandIcon icon={Sparkles} size="sm" variant="magenta" />
            <span className="text-[14px]">O QUE É E PARA QUEM É?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Para quem precisa manter o feed profissional sem virar refém da criação
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal pt-1">
            Packs de templates por segmento de atuação prontos para você editar no Canva em poucos minutos, ou posts prontos para publicar feitos diretamente por mim. Ideal para pequenos negócios, autônomos e prestadores de serviço que querem passar credibilidade imediata no Instagram, sem depender de agência cara nem gastar horas na frente de uma tela em branco.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 3. COMO FUNCIONA (ASYMMETRIC DESKTOP LAYOUT + 2 CREATIVE PATHWAYS)       */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column (6 cols): Intro Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[14px] font-mono uppercase text-[#E71870] block font-bold tracking-wider">
                FORMATOS FLEXÍVEIS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Você escolhe o formato que melhor se adapta à sua rotina
              </h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed pt-1">
                Cuidar de uma empresa já toma muito tempo. Não faz sentido perder a tarde inteira brigando com aplicativo para criar uma arte básica. Ofereço dois caminhos práticos para você nunca mais deixar seu perfil abandonado.
              </p>

              {/* Responsive CTA Group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-4">
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-sm shadow-md hover:shadow-lg transition-all text-center whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Pedir pack para meu nicho</span>
                </a>

                <a
                  href="#galeria-packs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all text-center whitespace-nowrap shrink-0"
                >
                  <span>Ver exemplos abaixo</span>
                  <ChevronDown className="w-4 h-4 text-[#E71870]" />
                </a>
              </div>
            </div>

            {/* Right Column (6 cols): The 2 Pathways (BOXED) */}
            <div className="lg:col-span-6 space-y-3.5">
              {/* Caminho 1 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-pink-500/25 hover:border-pink-500/45 transition-all space-y-2.5 shadow-lg group">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-mono text-[#E71870] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                    Caminho 1: Packs editáveis no Canva
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#E71870]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Templates prontos para o seu nicho
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  Desenvolvo um pacote completo de artes estratégicas personalizadas para o seu segmento, organizadas no Canva. Você só precisa abrir pelo celular ou computador, trocar a foto ou o texto quando quiser e postar em menos de 2 minutos. Totalmente seu, sem mensalidades.
                </p>
              </div>

              {/* Caminho 2 */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-purple-500/25 hover:border-purple-500/45 transition-all space-y-2.5 shadow-lg group">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    Caminho 2: Posts prontos pra publicar
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Produção dedicada sob medida
                </h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  Não tem tempo nem quer mexer em template? Eu crio os posts prontos com conteúdo, arte e legenda pensados pro seu objetivo. É só aprovar e publicar no seu feed.
                </p>
              </div>
            </div>
          </div>

          {/* Wide Rectangular Card */}
          <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#1A1A1E] border border-white/[0.1] hover:border-pink-500/30 transition-all space-y-3 shadow-lg">
            <div className="flex items-center gap-2.5">
              <BrandIcon icon={Palette} size="sm" variant="magenta" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Consistência visual gera autoridade imediata
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Quando um cliente em potencial entra no seu perfil pelo anúncio ou por indicação, ele decide em poucos segundos se confia no seu negócio. Cores padronizadas, tipografia limpa e layout harmônico aumentam a percepção de valor dos seus serviços na hora.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SHOWCASE DE VÍDEO + GALERIA INTERATIVA DOS PACKS REAIS                 */}
        {/* ========================================================================= */}
        <section id="galeria-packs" className="space-y-10 pt-2 scroll-mt-28">
          <div>
            <span className="text-[14px] font-mono uppercase text-[#E71870] block mb-2 font-bold tracking-wider">
              VEJA NA PRÁTICA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Vídeo de Apresentação e Modelos por Nicho
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl mt-1">
              Confira como os packs funcionam na prática no vídeo e navegue pelos modelos reais desenvolvidos para diferentes segmentos.
            </p>
          </div>

          {/* Video Showcase Card */}
          <div className="rounded-3xl bg-[#18181B] border border-pink-500/25 p-6 sm:p-8 lg:p-10 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <BrandIcon icon={Video} size="md" variant="magenta" />
                <div>
                  <span className="text-xs font-mono text-[#E71870] font-bold uppercase block tracking-wider">
                    VÍDEO DEMONSTRATIVO
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Como funciona o Pack de Artes no Canva
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={toggleVideoPlay}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
                </button>
                <button
                  type="button"
                  onClick={toggleVideoMute}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
                  title={isMuted ? 'Ativar áudio' : 'Mutar áudio'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-pink-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{isMuted ? 'Sem som' : 'Com som'}</span>
                </button>
              </div>
            </div>

            {/* Video player element */}
            <div className="relative w-full aspect-video max-h-[560px] rounded-2xl overflow-hidden bg-black shadow-inner flex items-center justify-center border border-white/10">
              <video
                ref={videoRef}
                src="/servicos/artes-redes-sociais/video-apresentacao-pack.mp4"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-contain"
              >
                Seu navegador não suporta a exibição direta deste vídeo.
              </video>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              O vídeo mostra como é simples abrir o template, editar as informações do seu negócio e baixar os arquivos prontos para publicar no feed do Instagram.
            </p>
          </div>

          {/* Interactive Niche Packs Browser */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#E71870] font-bold uppercase tracking-wider block">
                  PACKS POR SEGMENTO
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Modelos reais desenvolvidos para clientes
                </h3>
              </div>
              <span className="text-xs font-mono text-gray-400">
                {selectedPackIndex + 1} de {NICHE_PACKS.length}
              </span>
            </div>

            {/* Niche Tabs Selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
              {NICHE_PACKS.map((pack, idx) => {
                const isActive = selectedPackIndex === idx;
                return (
                  <button
                    key={pack.id}
                    type="button"
                    onClick={() => setSelectedPackIndex(idx)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer snap-start ${
                      isActive
                        ? 'bg-gradient-to-r from-[#E71870] to-[#C754F0] text-white shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5'
                    }`}
                  >
                    {pack.niche}
                  </button>
                );
              })}
            </div>

            {/* Selected Pack Card & Zoom Viewer */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1E1E22] border border-white/10 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-[#E71870] font-bold uppercase block tracking-wider">
                    {NICHE_PACKS[selectedPackIndex].niche}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {NICHE_PACKS[selectedPackIndex].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    {NICHE_PACKS[selectedPackIndex].description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPackIndex(
                        (selectedPackIndex - 1 + NICHE_PACKS.length) % NICHE_PACKS.length
                      )
                    }
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 cursor-pointer"
                    aria-label="Pack anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPackIndex((selectedPackIndex + 1) % NICHE_PACKS.length)
                    }
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 cursor-pointer"
                    aria-label="Próximo pack"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Artwork Container with Zoom Button */}
              <div
                className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 group cursor-pointer max-h-[620px] flex items-center justify-center"
                onClick={() =>
                  setZoomModalItem({
                    src: NICHE_PACKS[selectedPackIndex].src,
                    alt: NICHE_PACKS[selectedPackIndex].alt,
                    title: NICHE_PACKS[selectedPackIndex].title,
                    desc: NICHE_PACKS[selectedPackIndex].description,
                  })
                }
              >
                <img
                  src={NICHE_PACKS[selectedPackIndex].src}
                  alt={NICHE_PACKS[selectedPackIndex].alt}
                  className="w-full max-h-[580px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 text-white font-semibold text-xs sm:text-sm shadow-xl">
                    <Maximize2 className="w-4 h-4 text-[#E71870]" />
                    <span>Clique para ampliar e ver detalhes</span>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 pointer-events-none sm:hidden">
                  <div className="w-8 h-8 rounded-full bg-black/80 flex items-center justify-center text-white border border-white/20">
                    <Maximize2 className="w-4 h-4 text-[#E71870]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Feed Preview Mockup */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#18181B] border border-white/10 shadow-xl space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#E71870] font-bold uppercase tracking-wider block">
                    RESULTADO FINAL NO FEED
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    Como o seu Instagram fica com o pack aplicado
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setZoomModalItem({
                      src: '/servicos/artes-redes-sociais/Exemplo Final - Instagram com o pack de artes.jpg',
                      alt: 'Exemplo Final do Instagram com o pack de artes aplicado',
                      title: 'Exemplo Final • Feed do Instagram Organizado',
                      desc: 'Demonstração de coerência estética, paleta alinhada e visual profissional em todo o feed.',
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-pink-500/15 hover:bg-pink-500/25 border border-pink-500/30 text-pink-300 text-xs font-semibold transition-all self-start sm:self-auto cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#E71870]" />
                  <span>Ampliar Feed</span>
                </button>
              </div>

              <div
                className="relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 group cursor-pointer max-h-[520px] flex items-center justify-center"
                onClick={() =>
                  setZoomModalItem({
                    src: '/servicos/artes-redes-sociais/Exemplo Final - Instagram com o pack de artes.jpg',
                    alt: 'Exemplo Final do Instagram com o pack de artes aplicado',
                    title: 'Exemplo Final • Feed do Instagram Organizado',
                    desc: 'Demonstração de coerência estética, paleta alinhada e visual profissional em todo o feed.',
                  })
                }
              >
                <img
                  src="/servicos/artes-redes-sociais/Exemplo Final - Instagram com o pack de artes.jpg"
                  alt="Exemplo Final do feed do Instagram com o pack de artes aplicado"
                  className="w-full max-h-[480px] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 text-white font-semibold text-xs sm:text-sm shadow-xl">
                    <Maximize2 className="w-4 h-4 text-[#E71870]" />
                    <span>Clique para ampliar visualização do feed</span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400">
                Uma grade harmoniosa transforma visitantes curiosos em seguidores engajados e contatos prontos para fechar negócio.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. O QUE EU PRECISO DE VOCÊ (ALINHAMENTO DE CONTEÚDO)                     */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="space-y-2">
            <span className="text-[14px] font-mono uppercase text-yellow-400 block font-bold tracking-wider">
              ALINHAMENTO DE CONTEÚDO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              O que eu preciso para começar
            </h2>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl">
              Para montar templates que realmente funcionem para o seu negócio e tenham a cara da sua empresa:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-pink-500/30 transition-all space-y-2.5 shadow-lg">
              <BrandIcon icon={Palette} size="md" variant="magenta" />
              <span className="text-xs font-mono text-[#E71870] font-bold block uppercase">MARCA & CORES</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Sua Identidade</h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Seu logotipo em PNG ou vetor e suas cores principais (se não tiver, definimos uma paleta moderna juntos).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-2.5 shadow-lg">
              <BrandIcon icon={Layers} size="md" variant="cyan" />
              <span className="text-xs font-mono text-[#00FFFF] font-bold block uppercase">SERVIÇOS & NICHOS</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Temas Principais</h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Quais serviços você mais quer vender e as dúvidas mais frequentes que os seus clientes têm no dia a dia.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-purple-500/30 transition-all space-y-2.5 shadow-lg">
              <BrandIcon icon={Smartphone} size="md" variant="cyan-magenta" />
              <span className="text-xs font-mono text-purple-300 font-bold block uppercase">FOTOS REAIS</span>
              <h3 className="text-base sm:text-lg font-bold text-white">Fotos & Referências</h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Fotos do seu espaço, produtos ou equipe se tiver; se não tiver, selecionamos fotografias profissionais de banco.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. DIFERENCIAIS EXCLUSIVOS INCLUSOS (BÔNUS)                              */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div>
            <span className="text-[14px] font-mono uppercase text-emerald-400 block mb-2 font-bold tracking-wider">
              BÔNUS INCLUSOS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Tudo pronto pra você usar com segurança
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="p-7 sm:p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-4.5 shadow-lg">
              <BrandIcon icon={Video} size="lg" variant="emerald" />
              <div className="space-y-2">
                <strong className="text-white text-lg sm:text-xl block font-bold">
                  Vídeo tutorial passo a passo no Canva
                </strong>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  Te mostro na prática em um vídeo curto e direto como abrir, trocar textos, substituir fotos e exportar seus posts no Canva sem segredo.
                </p>
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-4.5 shadow-lg">
              <BrandIcon icon={Palette} size="lg" variant="emerald" />
              <div className="space-y-2">
                <strong className="text-white text-lg sm:text-xl block font-bold">
                  Paleta de cores e tipografia organizadas
                </strong>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  Códigos hexadecimais e fontes configuradas para sua comunicação ficar uniforme e marcante em qualquer canal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. INVESTIMENTO SOB MEDIDA                                               */}
        {/* ========================================================================= */}
        <section className="py-6 border-l-4 border-l-[#E71870] pl-6 sm:pl-8 space-y-3 max-w-4xl">
          <span className="text-[14px] font-mono uppercase text-pink-300 block font-bold tracking-wider">
            INVESTIMENTO SOB MEDIDA
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Sem mensalidade obrigatória, pague pelo que usar
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed font-normal">
            Os packs têm valor único (você paga uma vez e o template é seu para sempre), e os posts avulsos ou sob demanda são combinados conforme sua necessidade. Me chama no WhatsApp pra ver o catálogo e valores para o seu segmento.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 8. DÚVIDAS FREQUENTES (FAQ ACCORDION)                                    */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="flex items-center gap-3">
            <BrandIcon icon={HelpCircle} size="md" variant="magenta" />
            <div>
              <span className="text-[14px] font-mono uppercase text-[#E71870] font-bold tracking-wider block">
                PERGUNTAS E RESPOSTAS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Dúvidas frequentes sobre artes para redes sociais
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
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-pink-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#E71870]' : ''
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
        {/* 9. DUAL CTA BUTTONS + 10. DISCREET FOOTER NOTE                            */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-social-whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-base shadow-[0_0_24px_rgba(0,255,255,0.25)] hover:shadow-[0_0_36px_rgba(0,255,255,0.45)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>

            <a
              href="/projetos#galeria-redes-sociais"
              onClick={handleCaseClick}
              id="cta-social-case"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.18] text-white font-semibold text-base transition-all duration-200 group shrink-0"
            >
              <span>Ver exemplo real</span>
              <ArrowRight className="w-4 h-4 text-[#E71870] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="text-[17px] text-gray-300 text-center sm:text-left pt-2 font-medium">
            Ficou com alguma dúvida? Fala comigo no WhatsApp, sem compromisso.
          </p>
        </section>
      </main>

      {/* Lightbox / Zoom Modal */}
      {zoomModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setZoomModalItem(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-[#18181B] rounded-3xl border border-white/20 p-4 sm:p-6 shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomModalItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#E71870] border border-white/20 transition-all cursor-pointer shadow-lg"
              title="Fechar visualização"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full mb-3 pr-10">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {zoomModalItem.title}
              </h3>
              {zoomModalItem.desc && (
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  {zoomModalItem.desc}
                </p>
              )}
            </div>

            <div className="w-full flex items-center justify-center max-h-[75vh] overflow-hidden rounded-xl bg-black/60">
              <img
                src={zoomModalItem.src}
                alt={zoomModalItem.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
