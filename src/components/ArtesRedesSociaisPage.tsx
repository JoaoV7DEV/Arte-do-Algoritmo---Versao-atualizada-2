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
  Briefcase,
  Layers,
  Smartphone,
  Eye,
  Gift,
  Search,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageView } from './Navbar';
import { BrandIcon } from './BrandIcon';

interface ArtesRedesSociaisPageProps {
  onNavigate?: (page: PageView, anchor?: string) => void;
}

interface SegmentOption {
  name: string;
  file: string;
}

const SEGMENT_OPTIONS: SegmentOption[] = [
  { name: 'Auto escola', file: '/servicos/artes-redes-sociais/pack-auto-escola.jpg' },
  { name: 'Clínica hospitalar', file: '/servicos/artes-redes-sociais/pack-clinica-hospitalar.jpg' },
  { name: 'Contabilidade e corretores de imóveis', file: '/servicos/artes-redes-sociais/pack-contabilidade-corretores-imoveis.jpg' },
  { name: 'Nutricionistas', file: '/servicos/artes-redes-sociais/pack-nutricionistas.jpg' },
  { name: 'Petshop', file: '/servicos/artes-redes-sociais/pack-petshop.jpg' },
];

const AVAILABLE_SEGMENTS = [
  'Advocacia',
  'Arquitetura',
  'Hamburgueria',
  'Pizzaria',
  'Açaiteria',
  'Pastelaria',
  'Salão de beleza',
  'Marketing digital',
  'Nail designer',
  'Serviços digitais',
  'Eventos e shows',
  'Igrejas',
  'Churrascaria',
  'Contabilidade',
  'Corretores de imóveis',
  'Nutricionistas',
  'Autoescola',
  'Clínica hospitalar',
  'Petshop',
  'Dermatologista',
  'Odontologia',
  'Lanchonetes',
  'Assistência técnica',
];

interface LightboxModalData {
  src: string;
  alt: string;
  title: string;
  caption?: string;
}

export const ArtesRedesSociaisPage: React.FC<ArtesRedesSociaisPageProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedSegmentIdx, setSelectedSegmentIdx] = useState(0);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState<{ [key: string]: boolean }>({
    'pack-editavel': true,
    'pack-editavel-edicao': false,
    'pack-pronto': false,
  });
  const [lightboxData, setLightboxData] = useState<LightboxModalData | null>(null);

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

  const currentSegment = SEGMENT_OPTIONS[selectedSegmentIdx];

  const prefilledWhatsappUrl = `https://wa.me/${AGENCY_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá! Vi as artes para redes sociais no site. Meu segmento é: '
  )}`;

  const faqs = [
    {
      q: 'Preciso pagar o Canva?',
      a: 'Não. Os templates usam elementos, fontes e recursos gratuitos do Canva. Você pode editar, trocar fotos e textos e exportar em alta resolução na conta gratuita, sem custo.',
    },
    {
      q: 'Consigo editar pelo celular?',
      a: 'Sim. O Canva funciona no navegador do computador e no aplicativo gratuito para celular (Android e iOS). Você pode editar e postar pelo celular, onde estiver.',
    },
    {
      q: 'E se eu não tiver logotipo ou cores definidas?',
      a: 'Não tem problema. Nos templates editáveis, você usa as cores que quiser, com ou sem logo. Nos posts prontos, as cores e as fotos do seu negócio ajudam a manter a identidade, e o logotipo é opcional. Se quiser uma marca completa, aí entra o serviço de Logotipo e Identidade Visual.',
    },
    {
      q: 'Qual a diferença entre o pack editável e o pack pronto?',
      a: 'No pack editável, você paga uma vez pelo conjunto de artes feitas à mão e edita no Canva quando quiser. No pack pronto, eu crio os posts com apoio de IA e revisão minha, a partir dos temas que você aprovar, e você só publica ou agenda. Ele inclui as artes, sem legenda e hashtags, que entram no serviço de Social Media.',
    },
    {
      q: 'Existe mensalidade ou renovação?',
      a: 'Não. Cada pack é pagamento único, sem mensalidade nem renovação. Existem pacotes base, com mais posts ou na quantidade que você precisar, além de posts avulsos.',
    },
    {
      q: 'Quanto tempo dura o suporte?',
      a: '6 meses, a partir da entrega do link, para dúvidas sobre edição, download e postagem. Junto com o link, também vai um vídeo curto mostrando como editar.',
    },
    {
      q: 'E se eu não tiver tempo de editar?',
      a: 'Eu posso editar os templates pra você, com os seus textos, cores e fotos. Isso entra no orçamento.',
    },
    {
      q: 'Meu segmento não está na lista. E agora?',
      a: 'Eu monto um pack novo pro seu segmento, normalmente com 20 a 30 posts, em poucos dias.',
    },
    {
      q: 'Posso repassar o link ou revender os templates?',
      a: 'O link é pessoal e os templates são pra uso no seu negócio: não é permitido repassar nem revender.',
    },
    {
      q: 'Em quanto tempo recebo o pack pronto?',
      a: 'Em geral, em até 3 dias úteis, e muitas vezes em 1. Em pacotes maiores, o prazo é combinado antes.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#272727] text-white selection:bg-[#E71870] selection:text-white pb-24">
      {/* ========================================================================= */}
      {/* TASK 1: HERO                                                              */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 bg-gradient-to-b from-[#18181B] via-[#202023] to-[#272727] border-b border-white/5 overflow-hidden">
        {/* Ambient background glows matching Area 2 magenta palette */}
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

            {/* Reduced by 15-20% and widened to max-w-5xl so it fits on 2 lines on desktop >= 1024px */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight max-w-5xl">
              Seu Instagram Sempre com Post Bonito, Mesmo sem Tempo nem Orçamento pra Social Media
            </h1>

            <p className="text-base sm:text-xl text-gray-200 font-medium max-w-3xl leading-relaxed">
              Template editável no Canva ou post pronto pra publicar: você escolhe.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
        {/* ========================================================================= */}
        {/* TASK 2: "PARA QUEM"                                                       */}
        {/* ========================================================================= */}
        <section className="py-2 space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 font-mono uppercase text-[#E71870] font-bold tracking-wider">
            <BrandIcon icon={Sparkles} size="sm" variant="magenta" />
            <span className="text-[14px]">O QUE É E PARA QUEM É?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Para quem precisa manter o feed profissional sem virar refém da criação
          </h2>

          <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
            <p>
              Packs de artes por segmento, prontos pra você editar no Canva, ou posts prontos pra publicar, feitos por mim. Ideal pra pequenos negócios, autônomos e prestadores de serviço que querem um perfil com cara profissional, sem pagar caro por social media e sem gastar horas diante de uma tela em branco.
            </p>
            <p>
              Hoje, muita gente procura um negócio no Instagram antes de entrar em contato ou comprar. Um perfil parado, ou com posts desencontrados, passa a impressão de um negócio que não está cuidando de si. Já um perfil com posts bonitos e com a mesma cara passa organização e ajuda a pessoa a confiar. Só que manter isso dá trabalho, e contratar um social media, no começo do negócio, nem sempre cabe no bolso. Por isso eu criei caminhos mais acessíveis.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href={prefilledWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E71870] to-[#C754F0] hover:from-[#d01564] hover:to-[#b348d8] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all text-center whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span>Pedir pack pro meu segmento</span>
            </a>

            <a
              href="#veja-na-pratica"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all text-center whitespace-nowrap shrink-0"
            >
              <span>Ver exemplos abaixo</span>
              <ChevronDown className="w-4 h-4 text-[#E71870]" />
            </a>
          </div>

          {/* Highlight Block */}
          <div className="w-full p-6 sm:p-7 rounded-2xl bg-[#1A1A1E] border border-pink-500/30 space-y-2 shadow-lg mt-6">
            <div className="flex items-center gap-2.5">
              <BrandIcon icon={Palette} size="sm" variant="magenta" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Consistência visual gera autoridade imediata
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Quando alguém chega ao seu perfil, por anúncio ou por indicação, decide rápido se confia no seu negócio. Cores, letras e layout com a mesma cara passam organização logo no primeiro olhar.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TASK 3: "ESCOLHA O SEU CAMINHO"                                           */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="space-y-2">
            <span className="text-[14px] font-mono uppercase text-[#E71870] block font-bold tracking-wider">
              CAMINHOS DISPONÍVEIS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Escolha o seu caminho
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-medium">
              Quanto tempo você tem?
            </p>
          </div>

          {/* Three comparison cards (desktop: three columns; mobile: stacked) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-[#1E1E22] border border-pink-500/25 flex flex-col justify-between space-y-5 shadow-lg group hover:border-pink-500/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <h3 className="text-xl font-bold text-white">
                    Pack editável
                  </h3>
                  <span className="text-xs font-mono text-[#E71870] font-bold px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                    Canva
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#E71870] font-bold block">
                    Quem faz
                  </span>
                  <p className="text-sm sm:text-base text-gray-200 font-medium">
                    Você, no Canva
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#E71870] font-bold block">
                    O que você recebe
                  </span>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                    Um pack de artes de feed prontas pro seu segmento. Você troca textos, imagens e as cores da sua marca e publica.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-1">
                <span className="text-xs font-mono uppercase text-gray-400 font-bold block">
                  Ideal pra
                </span>
                <p className="text-sm text-gray-200 font-medium">
                  Quem tem um tempinho por dia e quer começar com o menor custo.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-[#1E1E22] border border-pink-500/25 flex flex-col justify-between space-y-5 shadow-lg group hover:border-pink-500/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <h3 className="text-xl font-bold text-white">
                    Pack editável + edição por mim
                  </h3>
                  <span className="text-xs font-mono text-purple-300 font-bold px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    Com Suporte
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#E71870] font-bold block">
                    Quem faz
                  </span>
                  <p className="text-sm sm:text-base text-gray-200 font-medium">
                    Eu edito, você aprova
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#E71870] font-bold block">
                    O que você recebe
                  </span>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                    Os mesmos templates, já editados por mim com os seus textos, cores e fotos.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-1">
                <span className="text-xs font-mono uppercase text-gray-400 font-bold block">
                  Ideal pra
                </span>
                <p className="text-sm text-gray-200 font-medium">
                  Quem não quer editar e quer manter o custo baixo.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-[#1E1E22] border border-pink-500/25 flex flex-col justify-between space-y-5 shadow-lg group hover:border-pink-500/50 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <h3 className="text-xl font-bold text-white">
                    Pack pronto pra postar
                  </h3>
                  <span className="text-xs font-mono text-[#E71870] font-bold px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20">
                    Tudo Pronto
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#E71870] font-bold block">
                    Quem faz
                  </span>
                  <p className="text-sm sm:text-base text-gray-200 font-medium">
                    Eu crio, você publica
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[#E71870] font-bold block">
                    O que você recebe
                  </span>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                    Posts criados por mim, com apoio de IA e revisão minha, a partir dos temas que você aprovar, com as cores e fotos do seu negócio e cronograma de datas.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-1">
                <span className="text-xs font-mono uppercase text-gray-400 font-bold block">
                  Ideal pra
                </span>
                <p className="text-sm text-gray-200 font-medium">
                  Quem não tem tempo e quer tudo pronto.
                </p>
              </div>
            </div>
          </div>

          {/* Plain-text paragraph below cards with link on "Me chama no WhatsApp" */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-3 max-w-4xl">
            Quer posts únicos, feitos do zero por mim, com legenda e hashtags? Isso entra no serviço de Social Media, que é mensal e também inclui a criação ou o aprimoramento do seu perfil.{' '}
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E71870] hover:underline font-semibold cursor-pointer"
            >
              Me chama no WhatsApp
            </a>{' '}
            que a gente conversa.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* TASK 4: "VEJA NA PRÁTICA"                                                 */}
        {/* ========================================================================= */}
        <section id="veja-na-pratica" className="space-y-8 pt-2 scroll-mt-28">
          <div className="space-y-2">
            <span className="text-[14px] font-mono uppercase text-[#E71870] block font-bold tracking-wider">
              DEMONSTRAÇÃO
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Veja na prática
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-normal max-w-3xl">
              Vídeo de apresentação, prévias dos packs por segmento e uma simulação de como fica no perfil.
            </p>
          </div>

          {/* Desktop (>= 1024px): ONE row with three equal-height vertical cards (9:16 ratio, ~560-580px tall)
              Tablet (640-1023px): cards 1 & 2 side by side, card 3 below centered.
              Mobile: single column, each card centered with max-height 75vh keeping 9:16 ratio. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* CARD 1: Vídeo de apresentação */}
            <div className="w-full max-w-[360px] mx-auto flex flex-col space-y-3">
              {/* Header Label + Video Controls */}
              <div className="flex items-center justify-between min-h-[38px]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E71870]">
                  Vídeo de apresentação
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={toggleVideoPlay}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/15 text-white text-[11px] font-semibold transition-all cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                    <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={toggleVideoMute}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/15 text-white text-[11px] font-semibold transition-all cursor-pointer"
                    title={isMuted ? 'Ativar áudio' : 'Mutar áudio'}
                  >
                    {isMuted ? <VolumeX className="w-3 h-3 text-[#E71870]" /> : <Volume2 className="w-3 h-3" />}
                    <span>{isMuted ? 'Sem som' : 'Com som'}</span>
                  </button>
                </div>
              </div>

              {/* 9:16 Container (no black side bars, object-cover) */}
              <div className="relative w-full aspect-[9/16] h-[520px] sm:h-[560px] lg:h-[580px] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl">
                <video
                  ref={videoRef}
                  src="/servicos/artes-redes-sociais/video-apresentacao-pack.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                >
                  Seu navegador não suporta a exibição deste vídeo.
                </video>
              </div>

              {/* Caption */}
              <p className="text-xs text-gray-400 text-center leading-relaxed font-normal pt-1">
                Apresentação dos packs por segmento disponíveis. Os perfis do vídeo são fictícios.
              </p>
            </div>

            {/* CARD 2: Pack do seu segmento */}
            <div className="w-full max-w-[360px] mx-auto flex flex-col space-y-3">
              {/* Header Label + Compact Dropdown & Nav Arrows */}
              <div className="flex items-center justify-between min-h-[38px] gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E71870] shrink-0">
                  Pack do seu segmento
                </span>

                <div className="flex items-center gap-1">
                  {/* Compact Dropdown */}
                  <div className="relative">
                    <select
                      value={selectedSegmentIdx}
                      onChange={(e) => setSelectedSegmentIdx(Number(e.target.value))}
                      className="text-xs font-medium bg-[#141416] text-white border border-white/15 hover:border-pink-500/40 rounded-lg pl-2 pr-6 py-1 appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#E71870] max-w-[130px] sm:max-w-[150px] truncate"
                      aria-label="Selecionar segmento"
                    >
                      {SEGMENT_OPTIONS.map((seg, idx) => (
                        <option key={seg.name} value={idx} className="bg-[#18181B] text-white">
                          Pack para: {seg.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-3 h-3 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Arrow Buttons */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedSegmentIdx(
                        (selectedSegmentIdx - 1 + SEGMENT_OPTIONS.length) % SEGMENT_OPTIONS.length
                      )
                    }
                    className="p-1 rounded-md bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors cursor-pointer"
                    aria-label="Segmento anterior"
                    title="Segmento anterior"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedSegmentIdx((selectedSegmentIdx + 1) % SEGMENT_OPTIONS.length)
                    }
                    className="p-1 rounded-md bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors cursor-pointer"
                    aria-label="Próximo segmento"
                    title="Próximo segmento"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 9:16 Image Container */}
              <div
                className="relative w-full aspect-[9/16] h-[520px] sm:h-[560px] lg:h-[580px] rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-xl cursor-pointer group"
                onClick={() =>
                  setLightboxData({
                    src: currentSegment.file,
                    alt: `Prévia do pack de artes para ${currentSegment.name}`,
                    title: `Pack para: ${currentSegment.name}`,
                    caption: 'Prévia do pack',
                  })
                }
              >
                <img
                  src={currentSegment.file}
                  alt={`Prévia do pack de artes para ${currentSegment.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-white font-semibold text-xs shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-[#E71870]" />
                    <span>Ampliar imagem</span>
                  </div>
                </div>

                <div className="absolute bottom-2.5 right-2.5 pointer-events-none sm:hidden">
                  <div className="w-7 h-7 rounded-full bg-black/80 flex items-center justify-center text-white border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5 text-[#E71870]" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-xs text-gray-400 text-center leading-relaxed font-normal pt-1">
                Prévia do pack
              </p>
            </div>

            {/* CARD 3: Como fica no seu perfil */}
            <div className="w-full max-w-[360px] mx-auto md:col-span-2 lg:col-span-1 flex flex-col space-y-3">
              {/* Header Label + Ampliar button */}
              <div className="flex items-center justify-between min-h-[38px]">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E71870]">
                  Como fica no seu perfil
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setLightboxData({
                      src: '/servicos/artes-redes-sociais/exemplo-final-instagram-simulacao.jpg',
                      alt: 'Simulação de um perfil de Instagram usando o pack',
                      title: 'Simulação no Perfil do Instagram',
                      caption: 'Simulação de um perfil de Instagram usando o pack. Perfil fictício.',
                    })
                  }
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/15 text-white text-[11px] font-semibold transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3 text-[#E71870]" />
                  <span>Ampliar</span>
                </button>
              </div>

              {/* 9:16 Container */}
              <div
                className="relative w-full aspect-[9/16] h-[520px] sm:h-[560px] lg:h-[580px] rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-xl cursor-pointer group"
                onClick={() =>
                  setLightboxData({
                    src: '/servicos/artes-redes-sociais/exemplo-final-instagram-simulacao.jpg',
                    alt: 'Simulação de um perfil de Instagram usando o pack',
                    title: 'Simulação no Perfil do Instagram',
                    caption: 'Simulação de um perfil de Instagram usando o pack. Perfil fictício.',
                  })
                }
              >
                <img
                  src="/servicos/artes-redes-sociais/exemplo-final-instagram-simulacao.jpg"
                  alt="Simulação de um perfil de Instagram usando o pack"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/20 text-white font-semibold text-xs shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-[#E71870]" />
                    <span>Ampliar perfil</span>
                  </div>
                </div>

                <div className="absolute bottom-2.5 right-2.5 pointer-events-none sm:hidden">
                  <div className="w-7 h-7 rounded-full bg-black/80 flex items-center justify-center text-white border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5 text-[#E71870]" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <p className="text-xs text-gray-400 text-center leading-relaxed font-normal pt-1">
                Simulação de um perfil de Instagram usando o pack. Perfil fictício.
              </p>
            </div>
          </div>

          {/* Chips: Segmentos disponíveis */}
          <div className="pt-6 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 block">
              Segmentos disponíveis
            </span>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_SEGMENTS.map((seg) => (
                <span
                  key={seg}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-medium select-none"
                >
                  {seg}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400 pt-2 font-normal">
              Não achou o seu segmento? Eu monto um pack novo, normalmente com 20 a 30 posts, em poucos dias.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TASK 5: "O QUE VOCÊ RECEBE EM CADA CAMINHO"                               */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="space-y-2">
            <span className="text-[14px] font-mono uppercase text-[#E71870] block font-bold tracking-wider">
              ENTREGÁVEIS DETALHADOS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              O que você recebe em cada caminho
            </h2>
          </div>

          {/* Desktop: 3 columns. Mobile: accordion */}
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 items-start">
            {/* Column 1 */}
            <div className="p-7 rounded-2xl bg-[#1E1E22] border border-white/10 space-y-4 shadow-lg h-full">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                Pack editável
              </h3>
              <ul className="space-y-3 text-sm text-gray-300 leading-relaxed font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Normalmente de 20 a 30 artes de feed (1:1 e 4:5), alguns com carrossel</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Editáveis no Canva, inclusive no plano gratuito</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Link do Canva enviado pelo WhatsApp depois da confirmação do pagamento, junto com um vídeo curto mostrando como editar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Suporte por 6 meses, a partir da entrega, para dúvidas de edição, download e postagem</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Existem pacotes base, com mais posts ou na quantidade que você precisar, e posts avulsos, sob orçamento</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="p-7 rounded-2xl bg-[#1E1E22] border border-white/10 space-y-4 shadow-lg h-full">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                Pack editável + edição por mim
              </h3>
              <ul className="space-y-3 text-sm text-gray-300 leading-relaxed font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Os mesmos templates, editados com as suas preferências (textos, cores e fotos)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Entra no orçamento</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="p-7 rounded-2xl bg-[#1E1E22] border border-white/10 space-y-4 shadow-lg h-full">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                Pack pronto pra postar
              </h3>
              <ul className="space-y-3 text-sm text-gray-300 leading-relaxed font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Posts em 1:1, 4:5 ou 9:16 (só as artes, sem legenda nem hashtags)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Lista de temas pra você aprovar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Cores e fotos do seu negócio, pra manter a identidade (o logotipo é opcional)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Cronograma com a lista de datas, que você pode ajustar</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Pacotes de 7, 15, 30 dias ou mais: a quantidade de posts define o período</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Ajustes em post de que você não gostou ou que tenha informação errada</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                  <span>Entrega em geral em até 3 dias úteis. Em pacotes maiores, o prazo é combinado antes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="md:hidden space-y-3">
            {/* Accordion 1 */}
            <div className="rounded-2xl bg-[#1E1E22] border border-white/10 overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() =>
                  setMobileAccordionOpen((prev) => ({
                    ...prev,
                    'pack-editavel': !prev['pack-editavel'],
                  }))
                }
                className="w-full px-5 py-4 text-left flex items-center justify-between font-bold text-base text-white cursor-pointer"
              >
                <span>Pack editável</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    mobileAccordionOpen['pack-editavel'] ? 'rotate-180 text-[#E71870]' : ''
                  }`}
                />
              </button>
              {mobileAccordionOpen['pack-editavel'] && (
                <div className="px-5 pb-5 pt-1 border-t border-white/[0.06]">
                  <ul className="space-y-2.5 text-sm text-gray-300 leading-relaxed font-normal">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Normalmente de 20 a 30 artes de feed (1:1 e 4:5), alguns com carrossel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Editáveis no Canva, inclusive no plano gratuito</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Link do Canva enviado pelo WhatsApp depois da confirmação do pagamento, junto com um vídeo curto mostrando como editar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Suporte por 6 meses, a partir da entrega, para dúvidas de edição, download e postagem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Existem pacotes base, com mais posts ou na quantidade que você precisar, e posts avulsos, sob orçamento</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 2 */}
            <div className="rounded-2xl bg-[#1E1E22] border border-white/10 overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() =>
                  setMobileAccordionOpen((prev) => ({
                    ...prev,
                    'pack-editavel-edicao': !prev['pack-editavel-edicao'],
                  }))
                }
                className="w-full px-5 py-4 text-left flex items-center justify-between font-bold text-base text-white cursor-pointer"
              >
                <span>Pack editável + edição por mim</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    mobileAccordionOpen['pack-editavel-edicao'] ? 'rotate-180 text-[#E71870]' : ''
                  }`}
                />
              </button>
              {mobileAccordionOpen['pack-editavel-edicao'] && (
                <div className="px-5 pb-5 pt-1 border-t border-white/[0.06]">
                  <ul className="space-y-2.5 text-sm text-gray-300 leading-relaxed font-normal">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Os mesmos templates, editados com as suas preferências (textos, cores e fotos)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Entra no orçamento</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Accordion 3 */}
            <div className="rounded-2xl bg-[#1E1E22] border border-white/10 overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() =>
                  setMobileAccordionOpen((prev) => ({
                    ...prev,
                    'pack-pronto': !prev['pack-pronto'],
                  }))
                }
                className="w-full px-5 py-4 text-left flex items-center justify-between font-bold text-base text-white cursor-pointer"
              >
                <span>Pack pronto pra postar</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform ${
                    mobileAccordionOpen['pack-pronto'] ? 'rotate-180 text-[#E71870]' : ''
                  }`}
                />
              </button>
              {mobileAccordionOpen['pack-pronto'] && (
                <div className="px-5 pb-5 pt-1 border-t border-white/[0.06]">
                  <ul className="space-y-2.5 text-sm text-gray-300 leading-relaxed font-normal">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Posts em 1:1, 4:5 ou 9:16 (só as artes, sem legenda nem hashtags)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Lista de temas pra você aprovar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Cores e fotos do seu negócio, pra manter a identidade (o logotipo é opcional)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Cronograma com a lista de datas, que você pode ajustar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Pacotes de 7, 15, 30 dias ou mais: a quantidade de posts define o período</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Ajustes em post de que você não gostou ou que tenha informação errada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71870] mt-2 shrink-0" />
                      <span>Entrega em geral em até 3 dias úteis. Em pacotes maiores, o prazo é combinado antes</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Small note under the lists */}
          <p className="text-xs sm:text-sm text-gray-400 pt-1 leading-relaxed">
            Stories vêm nos brindes. Se quiser um pack só de stories, ou os dois formatos em maior quantidade, a gente monta um orçamento no WhatsApp.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* TASK 6: "BÔNUS NOS DOIS CAMINHOS"                                         */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="space-y-2">
            <span className="text-[14px] font-mono uppercase text-[#E71870] block font-bold tracking-wider">
              BÔNUS INCLUSOS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Bônus nos dois caminhos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Card 1 */}
            <div className="p-7 sm:p-8 rounded-3xl bg-pink-950/20 border border-pink-500/30 flex items-start gap-4.5 shadow-lg">
              <BrandIcon icon={Search} size="lg" variant="magenta" />
              <div className="space-y-2">
                <strong className="text-white text-lg sm:text-xl block font-bold">
                  Mini-diagnóstico do seu perfil
                </strong>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  Eu olho seu Instagram e te digo os principais pontos a melhorar em foto, bio, destaques e posts.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-7 sm:p-8 rounded-3xl bg-pink-950/20 border border-pink-500/30 flex items-start gap-4.5 shadow-lg">
              <BrandIcon icon={Gift} size="lg" variant="magenta" />
              <div className="space-y-2">
                <strong className="text-white text-lg sm:text-xl block font-bold">
                  Artes de brinde
                </strong>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                  No pack editável, 2 artes (1 de feed e 1 de story) pra uma promoção, oferta ou dica à sua escolha, ou eu te dou a ideia. No pack pronto, 4 artes (2 de feed e 2 de story).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TASK 7: "O QUE EU PRECISO DE VOCÊ"                                        */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="space-y-2">
            <span className="text-[14px] font-mono uppercase text-[#E71870] block font-bold tracking-wider">
              ALINHAMENTO INICIAL
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              O que eu preciso de você
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-pink-500/30 transition-all space-y-2.5 shadow-lg">
              <BrandIcon icon={Briefcase} size="md" variant="magenta" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Sobre o seu negócio
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Eu preciso entender melhor o seu negócio: o que você vende e pra quem.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-pink-500/30 transition-all space-y-2.5 shadow-lg">
              <BrandIcon icon={Palette} size="md" variant="magenta" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Sua marca (opcional)
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Nos posts prontos, as cores e as fotos do seu negócio ajudam a manter a identidade, e o logotipo é opcional. Nos templates editáveis, você usa as cores e o logo que quiser.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1E1E22] border border-white/[0.08] hover:border-pink-500/30 transition-all space-y-2.5 shadow-lg">
              <BrandIcon icon={Smartphone} size="md" variant="magenta" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Conta no Canva
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                Uma conta no Canva, grátis ou paga, pra editar os templates (nos caminhos em que você edita).
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-400">
            No pack pronto, você só aprova a lista de temas.
          </p>
        </section>

        {/* ========================================================================= */}
        {/* TASK 8: "O QUE MUDA O VALOR"                                              */}
        {/* ========================================================================= */}
        <section className="py-6 border-l-4 border-l-[#E71870] pl-6 sm:pl-8 space-y-4 max-w-4xl">
          <span className="text-[14px] font-mono uppercase text-pink-300 block font-bold tracking-wider">
            TRANSPARÊNCIA SOBRE VALORES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            O que muda o valor
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed font-normal">
            Os valores eu passo no WhatsApp, porque mudam conforme o seu caso. Cada pack é pagamento único, sem mensalidade. Existem pacotes base, com mais posts ou montados na quantidade que você precisar, além de posts avulsos. O que muda o valor: a quantidade de artes, o formato (feed, story ou os dois), se o seu segmento já tem pack ou precisa de um novo, e se você quer a edição feita por mim. O pack editável é o caminho mais acessível. Me conta o seu segmento e quantos posts você quer que eu te passo as opções.
          </p>

          <div className="pt-2">
            <a
              href={prefilledWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00D2FF] text-[#141416] font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Fale no WhatsApp</span>
            </a>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TASK 9: DÚVIDAS FREQUENTES (FAQ ACCORDION - 10 ITEMS)                     */}
        {/* ========================================================================= */}
        <section className="space-y-6 pt-2">
          <div className="flex items-center gap-3">
            <BrandIcon icon={HelpCircle} size="md" variant="magenta" />
            <div>
              <span className="text-[14px] font-mono uppercase text-[#E71870] font-bold tracking-wider block">
                PERGUNTAS E RESPOSTAS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Dúvidas frequentes
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
        {/* TASK 10: DUAL CTA BUTTONS + FOOTER CTA NOTE                               */}
        {/* ========================================================================= */}
        <section className="pt-8 border-t border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={prefilledWhatsappUrl}
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

      {/* Lightbox / Zoom Modal (same clean component style as /projetos) */}
      {lightboxData && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxData(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#141416] border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setLightboxData(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/80 hover:bg-black text-white hover:text-[#E71870] border border-white/20 transition-all cursor-pointer shadow-lg"
              title="Fechar (Esc)"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="w-full mb-3 pr-10">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {lightboxData.title}
              </h3>
              {lightboxData.caption && (
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  {lightboxData.caption}
                </p>
              )}
            </div>

            {/* Image Containment */}
            <div className="w-full flex items-center justify-center max-h-[76vh] overflow-hidden rounded-xl bg-black/70">
              <img
                src={lightboxData.src}
                alt={lightboxData.alt}
                className="max-h-[74vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
