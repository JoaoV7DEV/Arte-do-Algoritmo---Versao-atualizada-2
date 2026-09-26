import { ServicePillar, WebsiteProject, GraphicDesignProject, TestimonialFeedback, ProcessStep, FaqItem } from '../types';

export const AGENCY_INFO = {
  name: 'Arte do Algoritmo',
  tagline: 'Design, Tecnologia e Estratégia Digital',
  headline: 'Design, tecnologia e estratégia para fortalecer sua presença digital.',
  subheadline: 'Unimos a sensibilidade artística do design e da identidade visual com a precisão dos sistemas digitais. Criamos sites de alta performance, marcas memoráveis e soluções pensadas para gerar resultados reais para o seu negócio.',
  phoneDisplay: '(71) 99184-5299',
  phoneRaw: '5571991845299',
  whatsappUrl: 'https://wa.me/5571991845299?text=Ol%C3%A1!%20Conheci%20a%20Arte%20do%20Algoritmo%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
  instagramHandle: '@arte_do_algoritmo',
  instagramUrl: 'https://instagram.com/arte_do_algoritmo',
  facebookHandle: 'Arte do Algoritmo',
  facebookUrl: 'https://facebook.com/artedoalgoritmo',
  city: 'Salvador',
  state: 'Bahia',
  country: 'Brasil',
  locationDisplay: 'Salvador, Bahia • Atendimento para todo o Brasil',
  pricingNote: 'projetos com escopo e cronograma claros, adaptados ao porte e ao momento do seu negócio.',
};

export const BENEFITS = [
  {
    id: 'design',
    title: 'Design Estratégico',
    description: 'Criamos identidades visuais e layouts pensados para comunicar credibilidade imediata e diferenciar sua marca no mercado.',
    iconName: 'Palette',
    badge: 'Criatividade Humana'
  },
  {
    id: 'performance',
    title: 'Sites com Foco em Resultado',
    description: 'Páginas rápidas, responsivas e otimizadas para guiar o visitante diretamente ao contato e à contratação do seu serviço.',
    iconName: 'Rocket',
    badge: 'Alta Conversão'
  },
  {
    id: 'agile',
    title: 'Entrega Ágil e Organizada',
    description: 'Metodologia estruturada em etapas transparentes, cronograma cumprido à risca e prévias claras em cada fase do projeto.',
    iconName: 'CheckCircle2',
    badge: 'Processo Claro'
  },
  {
    id: 'proximity',
    title: 'Comunicação Clara e Atendimento Próximo',
    description: 'Sem termos técnicos complicados ou enrolação. Você conversa diretamente com quem desenvolve seu projeto pelo WhatsApp.',
    iconName: 'MessageSquareText',
    badge: 'Atendimento Direto'
  }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'desenvolvimento',
    pillarNumber: '01',
    title: 'Desenvolvimento Digital',
    tagline: 'Sua empresa com um endereço digital rápido, seguro e profissional',
    description: 'Desenvolvemos páginas web modernas projetadas para carregar em segundos, funcionar com perfeição no celular e transformar visitantes em clientes.',
    accentColor: 'cyan',
    services: [
      {
        name: 'Sites Institucionais',
        description: 'Apresente sua empresa, histórico, equipe e serviços com autoridade e elegância.',
        features: ['100% responsivo para mobile', 'Otimização para Google (SEO básico)', 'Integração com WhatsApp e formulários', 'Painel fácil para atualizações']
      },
      {
        name: 'Landing Pages de Alta Conversão',
        description: 'Páginas de vendas diretas com copywriting persuasivo, ideais para anúncios e lançamentos.',
        features: ['Foco total em ação (WhatsApp/Lead)', 'Design visual de alto impacto', 'Velocidade de carregamento extrema', 'Integração com tags de tráfego pago']
      },
      {
        name: 'Lojas Virtuais & Catálogos',
        description: 'Venda produtos físicos ou digitais com sistema de pedidos direto e organizado.',
        features: ['Catálogo organizado por categorias', 'Integração de checkout e frete', 'Gestão simples de estoque e pedidos', 'Layout intuitivo para compradores']
      },
      {
        name: 'Sites Personalizados',
        description: 'Sistemas sob medida para necessidades específicas de captação, agendamento ou apresentação.',
        features: ['Arquitetura personalizada', 'Fluxos de agendamento online', 'Integração com APIs e bancos de dados', 'Identidade sob medida']
      }
    ]
  },
  {
    id: 'design',
    pillarNumber: '02',
    title: 'Design Estratégico',
    tagline: 'Identidade que encanta, posiciona e gera valor para o seu negócio',
    description: 'O design não é apenas estética: é como o seu cliente percebe o profissionalismo e a seriedade da sua empresa antes mesmo de falar com você.',
    accentColor: 'magenta',
    services: [
      {
        name: 'Identidade Visual Completa',
        description: 'Criação da alma visual da sua marca: logotipo, paleta de cores, tipografia e diretrizes de uso.',
        features: ['Manual de aplicação da marca', 'Arquivos em vetor (SVG, PDF, PNG)', 'Variações para fundos claros e escuros', 'Tipografia e paleta institucional']
      },
      {
        name: 'Design de Logotipos',
        description: 'Símbolos originais e memoráveis, construídos a partir da história e proposta de valor da sua marca.',
        features: ['Pesquisa de público e mercado', 'Desenvolvimento de conceitos exclusivos', 'Aplicações digitais e impressas', 'Direitos autorais 100% do cliente']
      },
      {
        name: 'Materiais Gráficos & Papelaria',
        description: 'Cartões de visita digitais e interativos, flyers, pastas corporativas, uniformes e banners.',
        features: ['Pronto para impressão em gráfica', 'Versões digitais para envio no WhatsApp', 'Padrão estético alinhado ao site', 'Acabamento refinado']
      },
      {
        name: 'Artes para Redes Sociais',
        description: 'Design consistente para feed, stories e destaques do Instagram que elevam a percepção de autoridade.',
        features: ['Templates reutilizáveis e organizados', 'Identidade visual padronizada', 'Composição focada em retenção e leitura', 'Formatos para feed e stories']
      }
    ]
  },
  {
    id: 'presenca',
    pillarNumber: '03',
    title: 'Presença e Marketing Digital',
    tagline: 'Colocando sua marca na frente de quem procura pelos seus serviços',
    description: 'Ter um site incrível é o primeiro passo. Conectar seu negócio com clientes locais e nas buscas do Google faz sua operação crescer.',
    accentColor: 'purple',
    services: [
      {
        name: 'Google Meu Negócio Otimizado',
        description: 'Configuração profissional para que sua empresa apareça no mapa e nas buscas de Salvador e região.',
        features: ['Cadastro completo e verificado', 'Catálogo de produtos e serviços', 'Otimização com fotos profissionais', 'Estratégia para receber mais avaliações']
      },
      {
        name: 'Suporte a Tráfego Pago',
        description: 'Estruturação técnica de pixels, tags e páginas preparadas para receber campanhas de Meta Ads e Google Ads.',
        features: ['Instalação correta de pixels de conversão', 'Páginas calibradas para menor custo por clique', 'Alinhamento da promessa do anúncio com o site', 'Apoio estratégico de público']
      },
      {
        name: 'SEO (Otimização para Buscas)',
        description: 'Boas práticas estruturais e semânticas para ajudar seu site a ser indexado organicamente pelo Google.',
        features: ['Metatags e títulos otimizados', 'Tempo de carregamento reduzido', 'Indexação garantida no Google Search Console', 'Estrutura semântica correta']
      },
      {
        name: 'Apoio Contínuo de Presença Digital',
        description: 'Suporte próximo para ajustes, novas páginas, atualizações de campanhas e acompanhamento de métricas.',
        features: ['Contato direto sem burocracia', 'Manutenção preventiva de domínios e hospedagem', 'Adição de novas seções e banners', 'Aconselhamento para expansão digital']
      }
    ]
  }
];

export const FLAGSHIP_PROJECT: WebsiteProject = {
  id: '01s-mobilidade',
  title: '01S Mobilidade',
  category: 'SITE INSTITUCIONAL',
  type: 'Rebranding + Desenvolvimento de Site Completo',
  statusBadge: 'Identidade Visual & Site Desenvolvidos',
  segment: 'Mobilidade urbana e transporte de passageiros',
  niche: 'Mobilidade urbana e transporte de passageiros',
  client: '01S Mobilidade',
  year: '2026',
  isFlagship: true,
  description: 'Rebranding completo e desenvolvimento de plataforma web para consolidar uma nova identidade de mobilidade urbana. O projeto incluiu criação de logotipo, paleta de cores, manual de marca e site institucional responsivo.',
  deliverables: [
    'Nova identidade visual e logotipo',
    'Site institucional responsivo',
    'Paleta de cores e manual de marca',
    'Aplicação em materiais físicos (cartão, papelaria, uniforme, banner)'
  ],
  tags: [
    'Rebranding Completo',
    'Identidade Visual',
    'Website Institucional Responsivo',
    'Manual de Marca',
    'Materiais Físicos'
  ],
  fullScreenshotUrl: '/portfolio/sites/01s-mobilidade-completo.png',
  logoUrl: '/portfolio/sites/01s-mobilidade-logo.png',
  altText: 'Página inicial do site institucional da 01S Mobilidade',
  hasLiveLink: false,
  attachedTestimonial: {
    name: 'Robson • 01S Mobilidade',
    text: 'João, obrigado por tudo. Você é um grande profissional. É bom saber que na minha Bahia tem gente como você, competente.'
  },
  sectionsPreview: [
    'Página Inicial: Apresentação da marca, transição de cara nova e diferenciais de segurança',
    'Página de Motorista: Como se cadastrar, documentação exigida e vantagens financeiras',
    'Página de Passageiro: Download do aplicativo, transparência de preços e suporte local'
  ],
  fullHeightPreview: {
    heroHeading: 'Mobilidade inteligente. Agora, de cara nova.',
    heroSub: 'A 01S Mobilidade evoluiu para oferecer mais eficiência, organização e confiança com a mesma operação que você já conhece.',
    themeColor: '#0c2214',
    accentColor: '#10b981',
    sections: [
      {
        type: 'hero',
        title: 'Mobilidade Inteligente. Agora, de cara nova.',
        description: 'A 01S Mobilidade evoluiu para oferecer mais eficiência, organização e confiança com a mesma operação que você já conhece.',
        items: ['Botão: Sou Motorista', 'Botão: Sou Passageiro', 'Visual 3D de fitas energéticas verde e laranja']
      },
      {
        type: 'rebrand',
        title: 'Estamos de cara nova — Da MOB3L para 01S Mobilidade',
        description: 'Mudamos nossa marca para oferecer uma experiência ainda melhor, mantendo a mesma equipe e o mesmo coração.',
        items: ['Mesmo aplicativo', 'Mesmos motoristas', 'Mesmo atendimento', 'Mesma qualidade']
      },
      {
        type: 'differentials',
        title: 'Por que escolher a 01S Mobilidade?',
        items: ['Organização real de frotas', 'Pontualidade garantida', 'Serviço profissional verificado', 'Suporte humanizado direto']
      },
      {
        type: 'drivers',
        title: 'Página de Motoristas: Dirija e Ganhe Mais',
        description: 'Área com requisitos claros (CNH com EAR, documento do veículo), fluxo de análise em 3 passos e cadastro simplificado.',
        items: ['Requisitos Pessoais', 'Documentos Necessários', 'Veículo Aprovado', 'Cadastro Direto na Plataforma']
      },
      {
        type: 'passengers',
        title: 'Página de Passageiros: Sua corrida mais simples e confiável',
        description: 'Apresentação do app para iOS e Android, escaneamento de QR Code na tela e valores prévios transparentes.',
        items: ['Motoristas verificados', 'Atendimento ágil', 'Preços transparentes', 'Suporte local']
      },
      {
        type: 'social-proof',
        title: 'Depoimentos de Passageiros & Motoristas',
        description: 'Avaliações reais validadas no lançamento da marca.',
        items: ['Carlos Henrique (Motorista Parceiro)', 'Fernanda Souza (Passageira)', 'Juliana Ribeiro (Passageira)']
      }
    ]
  }
};

export const WEBSITE_GALLERY: WebsiteProject[] = [
  FLAGSHIP_PROJECT,
  {
    id: 'mob3l',
    title: 'MOB3L',
    category: 'SITE INSTITUCIONAL',
    type: 'Site Institucional',
    statusBadge: 'Projeto Ativo',
    segment: 'Mobilidade urbana, Três Lagoas/MS',
    niche: 'Mobilidade urbana, Três Lagoas/MS',
    client: 'MOB3L',
    year: '2025',
    isFlagship: false,
    description: 'Desenvolvimento completo do site institucional e identidade digital para aplicativo de mobilidade urbana, incluindo páginas para passageiros e motoristas parceiros.',
    deliverables: [
      'Site institucional completo',
      'Identidade digital para aplicativo',
      'Página para passageiros com recursos do app',
      'Página para motoristas com requisitos e cadastro'
    ],
    tags: [
      'Site Institucional',
      'Identidade Digital',
      'Mobilidade Urbana',
      'Três Lagoas/MS',
      'Passageiros & Motoristas'
    ],
    fullScreenshotUrl: '/portfolio/sites/mob3l-completo.png',
    logoUrl: '/portfolio/sites/mob3l-logo.png',
    altText: 'Página inicial do site institucional da MOB3L em Três Lagoas/MS',
    liveUrl: 'https://mob3l.com.br',
    hasLiveLink: true,
    attachedTestimonial: {
      name: 'Junior • MOB3L',
      text: 'O Google mandou um e-mail parabenizando os acessos, em menos de 1 mês tantas views lá. Seu trabalho é muito profissional, João! Meu irmão é da área e elogiou pra caramba! Parabéns pelo trabalho, ficou excelente, muito profissional.'
    },
    sectionsPreview: [
      'Página Inicial: Apresentação do app de mobilidade e chamada para ação',
      'Página de Motoristas: Informações sobre requisitos e ganhos',
      'Página de Passageiros: Benefícios, facilidade de uso e suporte'
    ],
    fullHeightPreview: {
      heroHeading: 'Mobilidade com segurança e rapidez em Três Lagoas.',
      heroSub: 'O aplicativo de mobilidade urbana pensado para conectar passageiros e motoristas com confiança e agilidade.',
      themeColor: '#18181B',
      accentColor: '#EAB308',
      sections: [
        { type: 'hero', title: 'MOB3L - Seu App de Mobilidade', description: 'Viagens acessíveis e motoristas capacitados para você se locomover com tranquilidade.' },
        { type: 'services', title: 'Para Passageiros e Motoristas', items: ['Corridas rápidas', 'Tarifas transparentes', 'Suporte dedicado', 'App fácil de usar'] },
        { type: 'cta', title: 'Baixe o Aplicativo', description: 'Disponível para Android e iOS.' }
      ]
    }
  }
];

export const GRAPHIC_DESIGN_PROJECTS: GraphicDesignProject[] = [
  {
    id: 'social-media-pack-pro',
    title: 'Social Media Pack & Templates Estratégicos',
    category: 'Design Gráfico & Redes Sociais',
    classification: 'Redes Sociais',
    description: 'Sistema modular de artes para feed, stories e carrosséis desenvolvido para marcas que buscam constância e sofisticação no Instagram.',
    deliverables: [
      'Templates Editáveis no Figma / Canva',
      'Identidade Padronizada para Destaques',
      'Paleta Cromática de Conteúdo',
      'Guia de Uso para Equipe Interna'
    ],
    colors: ['#00FFFF', '#E71870', '#272727', '#FFFFFF'],
    thumbnailGradient: 'from-pink-600 via-purple-700 to-cyan-500',
    details: 'Solução sob medida que permite aos clientes manterem a estética profissional do perfil sem perder tempo na criação do dia a dia.',
    altText: 'Pack de templates estratégicos para redes sociais'
  }
];

export const REAL_TESTIMONIALS: TestimonialFeedback[] = [
  {
    id: 'feedback-robson',
    name: 'Robson • 01S Mobilidade',
    project: '01S Mobilidade',
    serviceType: 'Desenvolvimento de site e design',
    text: 'João, obrigado por tudo. Você é um grande profissional. É bom saber que na minha Bahia tem gente como você, competente.',
    avatarText: 'RB',
    verified: true,
    rating: 5,
    feedbackImage: '/portfolio/feedbacks/Story 4 - Feedback Robson - Projeto 01S Mobilidade.jpg'
  },
  {
    id: 'feedback-junior',
    name: 'Junior • MOB3L',
    project: 'MOB3L',
    serviceType: 'Desenvolvimento de site e SEO',
    text: 'O Google mandou um e-mail parabenizando os acessos, em menos de 1 mês tantas views lá. Seu trabalho é muito profissional, João! Meu irmão é da área e elogiou pra caramba! Parabéns pelo trabalho, ficou excelente, muito profissional.',
    avatarText: 'JR',
    verified: true,
    rating: 5,
    feedbackImage: '/portfolio/feedbacks/Story 6 - Feedback Junior - Socio - MOB3L.jpg'
  },
  {
    id: 'feedback-natan',
    name: 'Natan • Assistência Técnica de Eletrodomésticos',
    project: 'Assistência Técnica de Eletrodomésticos',
    serviceType: 'Perfil Google Meu Negócio',
    text: 'Tem muita gente que liga, ótimo, muito obrigado, estou trabalhando pra lhe pagar.',
    avatarText: 'NT',
    verified: true,
    rating: 5,
    feedbackImage: '/portfolio/feedbacks/Story 7 - Natan - crescimento da assistencia tecnica no Google meu negocio.jpg'
  },
  {
    id: 'feedback-paulo',
    name: 'Paulo • Site para Advogado',
    project: 'Site para Advogado',
    serviceType: 'Site para Advogado',
    text: 'Com relação ao site... Parabéns pelo trabalho João... ficou excelente... muito profissional.',
    avatarText: 'PL',
    verified: true,
    rating: 5,
    feedbackImage: '/portfolio/feedbacks/Story 5 - Feedback  - Paulo - site.jpg'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Briefing & Diagnóstico',
    subtitle: 'Entendendo a fundo o seu momento',
    description: 'Uma conversa descontraída e direta para compreender sua empresa, seu público-alvo, suas metas e o que você precisa alcançar com o projeto.',
    deliverable: 'Mapeamento de escopo e objetivos alinhados',
    duration: 'Dia 1'
  },
  {
    number: 2,
    title: 'Estratégia & Arquitetura',
    subtitle: 'Planejamento antes da execução',
    description: 'Definimos a estrutura ideal da página ou marca: quais seções devem existir, como será a jornada do visitante e qual mensagem guiará cada clique.',
    deliverable: 'Estrutura do site (wireframe) e estratégia de conversão',
    duration: 'Dias 2 a 3'
  },
  {
    number: 3,
    title: 'Direção Visual & Arte',
    subtitle: 'A identidade ganha vida',
    description: 'Criação visual com paleta de cores, tipografia, ícones e hierarquia estética que transmitem a autoridade da sua empresa com autenticidade.',
    deliverable: 'Design do layout para aprovação prévia',
    duration: 'Dias 4 a 6'
  },
  {
    number: 4,
    title: 'Desenvolvimento & Tecnologia',
    subtitle: 'Código limpo, rápido e responsivo',
    description: 'Transformamos o design em um site real, otimizado para celulares, com carregamento veloz, botões de WhatsApp ativos e segurança técnica.',
    deliverable: 'Versão navegável em link de testes exclusivo',
    duration: 'Dias 7 a 10'
  },
  {
    number: 5,
    title: 'Revisão & Ajustes Finos',
    subtitle: 'Aperfeiçoamento detalhe por detalhe',
    description: 'Você navega na página, testa os fluxos no seu próprio celular e nós realizamos todos os ajustes necessários para que fique 100% como você imaginou.',
    deliverable: 'Ajustes pontuais de textos, fotos e diagramação',
    duration: 'Dias 11 a 12'
  },
  {
    number: 6,
    title: 'Entrega & Publicação Oficial',
    subtitle: 'Seu endereço digital no ar',
    description: 'Configuramos seu domínio oficial (.com.br), instalamos o certificado de segurança SSL, conectamos as tags do Google e colocamos seu site ativo para o mundo.',
    deliverable: 'Site publicado e arquivos de alta resolução entregues',
    duration: 'Dia 13'
  },
  {
    number: 7,
    title: 'Suporte & Parceria Contínua',
    subtitle: 'Você nunca fica desamparado',
    description: 'Depois do lançamento, fornecemos orientação sobre como acompanhar os acessos e estamos sempre a uma mensagem no WhatsApp de distância para melhorias.',
    deliverable: 'Apoio técnico contínuo e orientação de crescimento',
    duration: 'Pós-lançamento'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Como funciona o processo de desenvolvimento de um site?',
    answer: 'Nosso processo é simples e transparente, dividido em 7 etapas claras: Briefing inicial, Estratégia de conteúdo, Criação do layout visual, Desenvolvimento técnico responsivo, Revisão com você, Publicação no seu domínio e Suporte contínuo. Você acompanha a evolução em um link de teste antes de o site ir ao ar oficialmente.'
  },
  {
    question: 'Quais tipos de negócio a Arte do Algoritmo atende?',
    answer: 'Atendemos empresas de serviços, profissionais liberais (médicos, nutricionistas, advogados, consultores), empresas de transporte e mobilidade, clínicas, gastronomia, energia solar e e-commerces que buscam uma presença digital sólida, confiável e pensada para converter visitantes em clientes.'
  },
  {
    question: 'Vocês criam sites totalmente personalizados ou usam modelos prontos?',
    answer: 'Todos os nossos projetos são desenvolvidos de forma personalizada, respeitando as necessidades, cores e objetivos específicos do seu negócio. Não entregamos templates genéricos que parecem iguais a milhares de outros. Cada estrutura é pensada estrategicamente para o seu nicho.'
  },
  {
    question: 'Quanto tempo leva para desenvolver e colocar um site no ar?',
    answer: 'Uma Landing Page de alta conversão costuma ficar pronta entre 5 e 10 dias úteis. Sites institucionais completos com múltiplas páginas e seções detalhadas levam em média de 10 a 20 dias úteis, dependendo da rapidez no envio das informações e aprovações pelo cliente.'
  },
  {
    question: 'Vocês realizam projetos de design gráfico e identidade visual?',
    answer: 'Sim! Além do desenvolvimento web, a nossa vertente de "Arte" cuida de todo o design: criação e reformulação de logotipos (rebranding), manuais de identidade visual, cartões de visita digitais, apresentações comerciais, materiais para impressão e templates para redes sociais.'
  },
  {
    question: 'Como funciona o orçamento do projeto?',
    answer: 'Trabalhamos com investimento sob medida: cada projeto possui escopo, entregáveis e cronograma claros, adaptados ao porte e ao momento do seu negócio, sem cobranças desnecessárias. O pagamento pode ser facilitado via Pix e parcelamento.'
  },
  {
    question: 'Vocês atendem clientes de outras cidades e estados fora da Bahia?',
    answer: 'Sim! Embora a Arte do Algoritmo tenha orgulho de ter suas raízes em Salvador, Bahia, todo o nosso fluxo de atendimento, alinhamento e homologação é 100% digital e funciona perfeitamente para clientes de qualquer região do Brasil ou do exterior.'
  },
  {
    question: 'O primeiro contato pode ser feito diretamente pelo WhatsApp?',
    answer: 'Com certeza! Preferimos e incentivamos o contato pelo WhatsApp. É rápido, direto e sem burocracias. Você clica no botão do site, conversa diretamente com o João e recebe uma orientação inicial e estimativa para o seu projeto em poucos minutos.'
  }
];
