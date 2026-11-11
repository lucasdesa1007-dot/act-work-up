/* act Work&Up — catálogo, navegação e interações locais do protótipo */
(() => {
  /* Profissionais, perfis, avaliações e dúvidas frequentes */
  const profissionais = [
    {
      id: 'ana-martins',
      nome: 'Ana Martins',
      iniciais: 'AM',
      cidade: 'Indaiatuba',
      nota: '4,9',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
      bio: 'Sou designer gráfica e ajudo pequenos negócios a construir uma identidade visual consistente e fácil de reconhecer.',
      prazo: 'Primeira proposta em até 5 dias úteis',
      incluidos: ['Reunião de briefing online', 'Logotipo principal e variações', 'Paleta de cores e tipografia', 'Arquivos finais para uso digital'],
      portfolio: ['photo-1545235617-9465d2a55698', 'photo-1558655146-9f40138edfeb', 'photo-1634942536790-2536d7f0e2e8'],
      avaliacoes: [
        ['Mariana Lopes', '5', '12/10/2026', 'A Ana entendeu a proposta da minha marca e entregou tudo muito bem organizado.'],
        ['Pedro Almeida', '5', '28/09/2026', 'Comunicação clara e ótimo cuidado com os detalhes.'],
        ['Fernanda Reis', '4', '15/08/2026', 'Gostei bastante do resultado e do prazo combinado.']
      ],
      perguntas: [['Posso pedir ajustes?', 'Sim. O pacote inclui duas rodadas de ajustes após a apresentação da proposta.'], ['Como recebo os arquivos?', 'Os arquivos finais são enviados em formatos prontos para uso digital e impressão.']],
      respostas: ['Obrigada pela mensagem! Me conte um pouco mais sobre a ideia e o prazo que você tem em mente.']
    },
    {
      id: 'rafael-costa',
      nome: 'Rafael Costa',
      iniciais: 'RC',
      cidade: 'Indaiatuba',
      nota: '4,8',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
      bio: 'Trabalho com manutenção residencial e pequenos reparos, sempre combinando escopo, materiais e horário antes da visita.',
      prazo: 'Visita disponível em até 2 dias úteis',
      incluidos: ['Avaliação inicial no local', 'Mão de obra para o reparo combinado', 'Orientação sobre materiais necessários', 'Garantia de 30 dias sobre o serviço'],
      portfolio: ['photo-1581578731548-c64695cc6952', 'photo-1621905251918-48416bd8575a', 'photo-1504148455328-c376907d081c'],
      avaliacoes: [
        ['Carlos Mendes', '5', '03/11/2026', 'Pontual e cuidadoso. Resolveu o problema da torneira no mesmo dia.'],
        ['Lívia Prado', '5', '20/10/2026', 'Explicou o que precisava ser feito antes de começar. Recomendo.'],
        ['Roberto Nunes', '4', '02/09/2026', 'Bom atendimento e serviço bem executado.']
      ],
      perguntas: [['O orçamento é feito antes do serviço?', 'Sim. A avaliação é feita antes e nenhum reparo começa sem sua aprovação.'], ['Atende fora de Indaiatuba?', 'Atendo Indaiatuba e cidades próximas mediante consulta de disponibilidade.']],
      respostas: ['Olá! Posso ajudar com seu reparo. Se puder, envie uma foto e o bairro para eu avaliar a visita.']
    },
    {
      id: 'webpro-studio',
      nome: 'WebPro Studio',
      iniciais: 'WP',
      cidade: 'Atendimento online',
      nota: '5,0',
      avatar: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=160&h=160&q=80',
      bio: 'Estúdio independente de desenvolvimento web. Criamos sites rápidos, responsivos e fáceis de atualizar para negócios locais.',
      prazo: 'Projeto inicial em até 15 dias úteis',
      incluidos: ['Site responsivo de até 5 páginas', 'Formulário de contato demonstrativo', 'Configuração visual e publicação orientada', '30 dias de suporte após a entrega'],
      portfolio: ['photo-1498050108023-c5249f4df085', 'photo-1460925895917-afdab827c52f', 'photo-1559028012-481c04fa702d'],
      avaliacoes: [
        ['Bruno Tavares', '5', '05/11/2026', 'Site muito bonito e ficou ótimo no celular. Atendimento sempre disponível.'],
        ['Camila Duarte', '5', '17/10/2026', 'Cumpriram o prazo e explicaram como atualizar o conteúdo.'],
        ['Renato Lima', '5', '29/08/2026', 'Projeto organizado do início ao fim.']
      ],
      perguntas: [['O domínio está incluso?', 'O domínio e a hospedagem são contratados pelo cliente; orientamos a configuração.'], ['Posso solicitar novas páginas?', 'Sim. Páginas adicionais podem ser incluídas em um orçamento complementar.']],
      respostas: ['Olá! Para preparar uma estimativa, me diga qual é o objetivo do site e quantas páginas imagina.']
    },
    {
      id: 'joao-lima',
      nome: 'João Lima',
      iniciais: 'JL',
      cidade: 'Indaiatuba',
      nota: '4,9',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80',
      bio: 'Professor particular com foco em reforço escolar e acompanhamento individual para estudantes do ensino fundamental.',
      prazo: 'Aulas agendadas conforme disponibilidade semanal',
      incluidos: ['Aula individual de 60 minutos', 'Material de apoio digital', 'Resumo dos tópicos estudados', 'Plano de acompanhamento personalizado'],
      portfolio: ['photo-1509062522246-3755977927d7', 'photo-1427504494785-3a9ca7044f45', 'photo-1503676260728-1c00da094a0b'],
      avaliacoes: [
        ['Sílvia Rocha', '5', '30/10/2026', 'Meu filho está mais confiante e as aulas são bem dinâmicas.'],
        ['Paulo César', '5', '11/10/2026', 'Explica com paciência e adapta os exercícios.'],
        ['Aline Batista', '4', '19/08/2026', 'Ótimo acompanhamento e comunicação com a família.']
      ],
      perguntas: [['As aulas podem ser online?', 'Sim, as aulas podem acontecer online ou presencialmente em Indaiatuba.'], ['Como funciona o material?', 'O material é preparado de acordo com o conteúdo que o aluno está estudando.']],
      respostas: ['Oi! Me diga a matéria e o ano escolar para eu sugerir um formato de acompanhamento.']
    },
    {
      id: 'marcenaria-silva',
      nome: 'Marcenaria Silva',
      iniciais: 'MS',
      cidade: 'Salto e região',
      nota: '4,7',
      avatar: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=160&h=160&q=80',
      bio: 'Oficina familiar especializada em móveis sob medida e restauração de peças de madeira para residências e pequenos comércios.',
      prazo: 'Prazo médio de 10 a 20 dias úteis após aprovação',
      incluidos: ['Medição e desenho inicial', 'Escolha de acabamento', 'Montagem no local', 'Orientações de conservação'],
      portfolio: ['photo-1600585154340-be6161a56a0c', 'photo-1600607687939-ce8a6c25118c', 'photo-1616486338812-3dadae4b4ace'],
      avaliacoes: [
        ['Marta Figueiredo', '5', '01/11/2026', 'O armário ficou sob medida e o acabamento é excelente.'],
        ['Daniel Moreira', '5', '16/09/2026', 'Equipe atenciosa e montagem cuidadosa.'],
        ['Joana Pires', '4', '22/07/2026', 'Bom resultado, conforme o projeto combinado.']
      ],
      perguntas: [['O orçamento é gratuito?', 'A avaliação inicial é gratuita em Salto e cidades próximas.'], ['Posso escolher o acabamento?', 'Sim. Apresentamos as opções disponíveis antes da confirmação do projeto.']],
      respostas: ['Olá! Envie as medidas aproximadas e uma referência do móvel para iniciarmos a conversa.']
    },
    {
      id: 'beatriz-nogueira',
      nome: 'Beatriz Nogueira',
      iniciais: 'BN',
      cidade: 'Indaiatuba',
      nota: '4,9',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80',
      bio: 'Fotógrafa de família e eventos intimistas. Gosto de registrar momentos espontâneos com luz natural e direção leve.',
      prazo: 'Galeria digital entregue em até 7 dias úteis',
      incluidos: ['Ensaio de até 1 hora', 'Orientação de local e figurino', '25 fotos editadas em alta resolução', 'Galeria digital privada'],
      portfolio: ['photo-1511285560929-80b456fea0bc', 'photo-1519741497674-611481863552', 'photo-1511895426328-dc8714191300'],
      avaliacoes: [
        ['Bruna Martins', '5', '06/11/2026', 'As fotos da família ficaram lindas e naturais.'],
        ['Diego Campos', '5', '21/10/2026', 'Muito atenciosa e deixou todo mundo à vontade.'],
        ['Rita Oliveira', '4', '14/09/2026', 'Entrega rápida e fotos com ótima qualidade.']
      ],
      perguntas: [['Onde acontece o ensaio?', 'O local é combinado com você; atendo Indaiatuba e região.'], ['Posso comprar fotos extras?', 'Sim, fotos adicionais podem ser selecionadas na galeria.']],
      respostas: ['Oi! Qual tipo de ensaio você procura e para qual data? Vou adorar conversar.']
    },
    {
      id: 'marcos-oliveira',
      nome: 'Marcos Oliveira',
      iniciais: 'MO',
      cidade: 'Indaiatuba e região',
      nota: '4,8',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
      bio: 'Pedreiro e profissional de reformas com experiência em pintura, assentamento de revestimentos e revitalização de ambientes.',
      prazo: 'Cronograma definido após vistoria',
      incluidos: ['Vistoria e orçamento detalhado', 'Proteção básica das áreas de trabalho', 'Execução conforme escopo aprovado', 'Limpeza da área ao final do serviço'],
      portfolio: ['photo-1503387762-592deb58ef4e', 'photo-1600607687920-4e2a09cf159d', 'photo-1600566753086-00f18fb6b3ea'],
      avaliacoes: [
        ['Eduardo Freitas', '5', '27/10/2026', 'Reforma entregue no prazo e com acabamento caprichado.'],
        ['Nádia Ribeiro', '5', '09/09/2026', 'Explicou cada etapa e manteve o local organizado.'],
        ['Lauro Souza', '4', '02/08/2026', 'Bom profissional, orçamento bem detalhado.']
      ],
      perguntas: [['O valor inclui materiais?', 'O orçamento informa separadamente mão de obra e materiais necessários.'], ['Faz vistoria antes de orçar?', 'Sim, a vistoria permite entender o escopo e planejar o serviço.']],
      respostas: ['Olá! Qual ambiente você pretende reformar? Podemos combinar uma vistoria para avaliar o escopo.']
    },
    {
      id: 'camila-ferreira',
      nome: 'Camila Ferreira',
      iniciais: 'CF',
      cidade: 'Indaiatuba',
      nota: '5,0',
      avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=160&h=160&q=80',
      bio: 'Atuo com maquiagem social e penteados para eventos, oferecendo atendimento em estúdio ou no local combinado.',
      prazo: 'Agendamento conforme disponibilidade',
      incluidos: ['Conversa breve sobre o evento', 'Maquiagem social de longa duração', 'Preparação de pele', 'Ajustes finais antes do evento'],
      portfolio: ['photo-1522337360788-8b13dee7a37e', 'photo-1487412720507-e7ab37603c6f', 'photo-1524504388940-b1c1722653e1'],
      avaliacoes: [
        ['Letícia Ramos', '5', '04/11/2026', 'A maquiagem durou a festa toda e ficou do jeito que eu queria.'],
        ['Mônica Alves', '5', '13/10/2026', 'Pontual, cuidadosa e muito simpática.'],
        ['Talita Gouveia', '5', '25/08/2026', 'Adorei o resultado e o atendimento.']
      ],
      perguntas: [['Atende no local do evento?', 'Sim, o atendimento externo pode ser combinado para Indaiatuba e região.'], ['Preciso levar produtos?', 'Não. Os produtos necessários para o serviço estão incluídos.']],
      respostas: ['Oi! Para qual ocasião e data você gostaria de agendar?']
    },
    {
      id: 'eletrica-andrade',
      nome: 'Elétrica Andrade',
      iniciais: 'EA',
      cidade: 'Indaiatuba e região',
      nota: '4,9',
      avatar: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=160&h=160&q=80',
      bio: 'Equipe de eletricistas para instalação, manutenção e diagnóstico de problemas elétricos residenciais e comerciais.',
      prazo: 'Atendimento geralmente em até 48 horas',
      incluidos: ['Diagnóstico no local', 'Orçamento antes da execução', 'Teste de funcionamento', 'Orientação de segurança elétrica'],
      portfolio: ['photo-1621905251918-48416bd8575a', 'photo-1621905251189-08b45d6a269e', 'photo-1558008258-3256797b43f3'],
      avaliacoes: [
        ['Fábio Melo', '5', '08/11/2026', 'Identificaram o problema e resolveram com rapidez.'],
        ['Denise Carvalho', '5', '19/10/2026', 'Equipe organizada e muito profissional.'],
        ['Alex Sandro', '4', '07/09/2026', 'Atendimento eficiente e preço combinado com clareza.']
      ],
      perguntas: [['Atende emergências?', 'Consulte a disponibilidade pelo chat. Casos urgentes dependem da agenda da equipe.'], ['O orçamento é aprovado antes?', 'Sim. A equipe informa o valor antes de iniciar qualquer execução.']],
      respostas: ['Olá! Descreva o problema e informe seu bairro para verificarmos a agenda de atendimento.']
    },
    {
      id: 'denise-rocha',
      nome: 'Denise Rocha',
      iniciais: 'DR',
      cidade: 'Indaiatuba',
      nota: '4,9',
      avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=160&h=160&q=80',
      bio: 'Trabalho com limpeza residencial detalhada, organizando cada visita conforme a rotina e as prioridades de cada família.',
      prazo: 'Agendamento em até 3 dias úteis',
      incluidos: ['Limpeza de cozinha e banheiros', 'Aspiração e limpeza de pisos', 'Panos e produtos básicos inclusos', 'Checklist combinado antes da visita'],
      portfolio: ['photo-1581578731548-c64695cc6952', 'photo-1600607687920-4e2a09cf159d', 'photo-1600566753086-00f18fb6b3ea'],
      avaliacoes: [
        ['Sonia Martins', '5', '02/11/2026', 'A casa ficou muito bem cuidada e a Denise é super atenciosa.'],
        ['Andréa Costa', '5', '18/10/2026', 'Combinamos as prioridades e tudo foi feito com capricho.'],
        ['Marcela Vieira', '4', '01/09/2026', 'Pontual e cuidadosa com os móveis.']
      ],
      perguntas: [['Preciso fornecer os produtos?', 'Os produtos básicos estão incluídos. Itens específicos podem ser combinados antes da visita.'], ['Atende apartamentos?', 'Sim, faço limpeza em casas e apartamentos em Indaiatuba.']],
      respostas: ['Olá! Quantos cômodos tem o imóvel e qual dia seria melhor para a limpeza?']
    }
  ];

  /* Catálogo de serviços e faixa inicial de preço */
  const servicos = [
    {
      id: 'identidade-visual',
      titulo: 'Identidade visual e design',
      categoria: 'Design',
      modalidade: 'Online',
      preco: 180,
      precoTexto: 'A partir de R$ 180',
      descricao: 'Criação de materiais visuais para sua marca.',
      profissional: 'ana-martins',
      imagem: 'photo-1545235617-9465d2a55698'
    },
    {
      id: 'manutencao-residencial',
      titulo: 'Manutenção residencial',
      categoria: 'Manutenção',
      modalidade: 'Presencial',
      preco: 90,
      precoTexto: 'A partir de R$ 90',
      descricao: 'Pequenos reparos e serviços para sua casa.',
      profissional: 'rafael-costa',
      imagem: 'photo-1581578731548-c64695cc6952'
    },
    {
      id: 'criacao-sites',
      titulo: 'Criação de sites',
      categoria: 'Desenvolvimento',
      modalidade: 'Online',
      preco: 450,
      precoTexto: 'A partir de R$ 450',
      descricao: 'Sites institucionais responsivos para negócios.',
      profissional: 'webpro-studio',
      imagem: 'photo-1498050108023-c5249f4df085'
    },
    {
      id: 'aulas-particulares',
      titulo: 'Aulas particulares',
      categoria: 'Aulas',
      modalidade: 'Online Presencial',
      preco: 70,
      precoTexto: 'A partir de R$ 70 / hora',
      descricao: 'Reforço escolar individual e acompanhamento.',
      profissional: 'joao-lima',
      imagem: 'photo-1509062522246-3755977927d7'
    },
    {
      id: 'marcenaria-sob-medida',
      titulo: 'Marcenaria sob medida',
      categoria: 'Reformas',
      modalidade: 'Presencial',
      preco: 320,
      precoTexto: 'A partir de R$ 320',
      descricao: 'Móveis planejados e restauração de madeira.',
      profissional: 'marcenaria-silva',
      imagem: 'photo-1600585154340-be6161a56a0c'
    },
    {
      id: 'fotografia-eventos',
      titulo: 'Fotografia de eventos',
      categoria: 'Fotografia',
      modalidade: 'Presencial',
      preco: 380,
      precoTexto: 'A partir de R$ 380',
      descricao: 'Ensaios e registros de momentos especiais.',
      profissional: 'beatriz-nogueira',
      imagem: 'photo-1511285560929-80b456fea0bc'
    },
    {
      id: 'reforma-ambientes',
      titulo: 'Reforma e pintura',
      categoria: 'Reformas',
      modalidade: 'Presencial',
      preco: 250,
      precoTexto: 'Orçamento a partir de R$ 250',
      descricao: 'Pintura, revestimentos e melhorias em ambientes.',
      profissional: 'marcos-oliveira',
      imagem: 'photo-1503387762-592deb58ef4e'
    },
    {
      id: 'maquiagem-social',
      titulo: 'Maquiagem social',
      categoria: 'Beleza',
      modalidade: 'Presencial',
      preco: 160,
      precoTexto: 'A partir de R$ 160',
      descricao: 'Maquiagem para festas e ocasiões especiais.',
      profissional: 'camila-ferreira',
      imagem: 'photo-1522337360788-8b13dee7a37e'
    },
    {
      id: 'eletricista-residencial',
      titulo: 'Serviços de eletricista',
      categoria: 'Eletricista',
      modalidade: 'Presencial',
      preco: 110,
      precoTexto: 'A partir de R$ 110',
      descricao: 'Instalações e reparos elétricos com segurança.',
      profissional: 'eletrica-andrade',
      imagem: 'photo-1621905251918-48416bd8575a'
    },
    {
      id: 'limpeza-residencial',
      titulo: 'Limpeza residencial',
      categoria: 'Limpeza',
      modalidade: 'Presencial',
      preco: 180,
      precoTexto: 'A partir de R$ 180',
      descricao: 'Limpeza cuidadosa para casas e apartamentos.',
      profissional: 'denise-rocha',
      imagem: 'photo-1581578731548-c64695cc6952'
    },
    {
      id: 'gestao-redes-sociais',
      titulo: 'Gestão de redes sociais',
      categoria: 'Marketing',
      modalidade: 'Online',
      preco: 350,
      precoTexto: 'A partir de R$ 350 / mês',
      descricao: 'Planejamento de conteúdo para pequenos negócios.',
      profissional: 'ana-martins',
      imagem: 'photo-1432888622747-4eb9a8efeb07'
    },
    {
      id: 'consultoria-digital',
      titulo: 'Consultoria para pequenos negócios',
      categoria: 'Consultoria',
      modalidade: 'Online',
      preco: 220,
      precoTexto: 'A partir de R$ 220',
      descricao: 'Orientação prática para organizar sua presença digital.',
      profissional: 'webpro-studio',
      imagem: 'photo-1556761175-b413da4baf72'
    }
  ];

  const detalhesDePreco = {
    'identidade-visual': 'logotipo principal, variações e duas rodadas de ajustes',
    'manutencao-residencial': 'visita e primeira hora de mão de obra; materiais à parte',
    'criacao-sites': 'site inicial de até cinco páginas',
    'aulas-particulares': 'aula individual de 60 minutos',
    'marcenaria-sob-medida': 'avaliação e projeto inicial; materiais definidos no orçamento',
    'fotografia-eventos': 'ensaio de até uma hora com 25 fotos editadas',
    'reforma-ambientes': 'valor inicial de mão de obra por ambiente; materiais à parte',
    'maquiagem-social': 'maquiagem social com preparação de pele',
    'eletricista-residencial': 'avaliação e mão de obra inicial; peças à parte',
    'limpeza-residencial': 'limpeza de imóvel compacto; escopo combinado antes da visita',
    'gestao-redes-sociais': 'plano mensal inicial para um canal',
    'consultoria-digital': 'sessão individual de orientação de até 90 minutos'
  };

  /* Conversas fictícias mantidas em memória durante a navegação */
  const conversas = profissionais.map((profissional, indice) => ({
    profissionalId: profissional.id,
    mensagens: [
      { tipo: 'received', texto: profissional.respostas[0] },
      { tipo: 'sent', texto: indice === 0 ? 'Olá! Gostaria de saber mais sobre o serviço.' : `Olá, ${profissional.nome}! Gostaria de conversar sobre um orçamento.` }
    ]
  }));
  const perfilUsuario = {
    nome: 'Lucas Silva',
    iniciais: 'LS',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80'
  };
  const telas = [...document.querySelectorAll('.screen')];
  const cabecalho = document.getElementById('site-header');
  const rodape = document.getElementById('site-footer');
  const idsAutenticacao = new Set(['login', 'cadastro-tipo', 'cadastro-pessoal', 'cadastro-empresa']);
  const gradeExplorar = document.getElementById('explore-grid');
  const gradeInicio = document.querySelector('#inicio .service-grid');
  const gradeProfissionais = document.querySelector('.professional-grid');
  const campoBusca = document.getElementById('service-search');
  const filtroCategoria = document.getElementById('category-filter');
  const filtroModalidade = document.getElementById('mode-filter');
  const filtroOrdenacao = document.getElementById('sort-filter');
  const totalResultados = document.getElementById('result-count');
  const estadoVazio = document.getElementById('empty-results');
  const listaConversas = document.getElementById('conversation-list');
  const areaMensagens = document.getElementById('chat-messages');
  let conversaAtual = profissionais[0].id;
  let temporizadorPagamento;

  function buscarProfissional(id) {
    return profissionais.find(profissional => profissional.id === id);
  }

  function criarIcone(tipo) {
    const namespace = 'http://www.w3.org/2000/svg';
    const icone = document.createElementNS(namespace, 'svg');
    const caminho = document.createElementNS(namespace, 'path');

    icone.setAttribute('class', `ui-icon icon-${tipo}`);
    icone.setAttribute('viewBox', '0 0 24 24');
    icone.setAttribute('aria-hidden', 'true');
    icone.setAttribute('fill', tipo === 'star' ? 'currentColor' : 'none');
    icone.setAttribute('stroke', 'currentColor');
    icone.setAttribute('stroke-width', '2');
    caminho.setAttribute(
      'd',
      tipo === 'star'
        ? 'm12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z'
        : 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z'
    );
    icone.append(caminho);
    return icone;
  }

  function definirAvaliacao(elemento, texto) {
    elemento.replaceChildren(criarIcone('star'), document.createTextNode(` ${texto}`));
  }

  function criarAvatar(profissional, classe = 'avatar') {
    const avatar = document.createElement('span');
    avatar.className = classe;
    avatar.textContent = profissional.iniciais;
    avatar.setAttribute('aria-label', profissional.nome);

    const imagem = document.createElement('img');
    imagem.src = profissional.avatar;
    imagem.alt = '';
    imagem.loading = 'lazy';
    imagem.addEventListener('error', () => imagem.remove(), { once: true });
    avatar.append(imagem);
    return avatar;
  }

  /* Renderização do catálogo e filtros */
  function criarCardServico(servico) {
    const profissional = buscarProfissional(servico.profissional);
    const card = document.createElement('article');
    card.className = 'service-card';
    card.dataset.category = servico.categoria;
    card.dataset.mode = servico.modalidade;
    card.dataset.price = String(servico.preco);
    card.dataset.order = String(servicos.indexOf(servico));

    const foto = document.createElement('div');
    foto.className = 'service-photo';
    foto.style.backgroundImage =
      `url("https://images.unsplash.com/${servico.imagem}?auto=format&fit=crop&w=800&q=80")`;

    const categoria = document.createElement('span');
    categoria.textContent = servico.categoria;
    foto.append(categoria);

    const favorito = document.createElement('button');
    favorito.className = 'favorite';
    favorito.type = 'button';
    favorito.setAttribute('aria-label', 'Favoritar serviço');
    favorito.setAttribute('aria-pressed', 'false');
    favorito.append(criarIcone('heart'));
    foto.append(favorito);

    const conteudo = document.createElement('div');
    conteudo.className = 'service-content';

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = servico.modalidade.replace('Online', 'Online').replace('Presencial', 'presencial');

    const titulo = document.createElement('h3');
    titulo.textContent = servico.titulo;

    const descricao = document.createElement('p');
    descricao.textContent = servico.descricao;

    const prestador = document.createElement('div');
    prestador.className = 'provider';
    prestador.append(criarAvatar(profissional));

    const dadosProfissional = document.createElement('span');
    const nome = document.createElement('strong');
    nome.textContent = profissional.nome;
    const avaliacao = document.createElement('small');
    definirAvaliacao(avaliacao, `${profissional.nota} · ${profissional.cidade}`);
    dadosProfissional.append(nome, avaliacao);
    prestador.append(dadosProfissional);

    const rodapeCard = document.createElement('div');
    rodapeCard.className = 'card-bottom';
    const preco = document.createElement('strong');
    preco.textContent = servico.precoTexto;

    const contratar = document.createElement('button');
    contratar.className = 'btn small primary';
    contratar.type = 'button';
    contratar.dataset.openProfile = servico.id;
    contratar.textContent = 'Conhecer';
    rodapeCard.append(preco, contratar);
    conteudo.append(tag, titulo, descricao, prestador, rodapeCard);
    card.append(foto, conteudo);
    return card;
  }

  function renderizarCatalogo() {
    gradeExplorar.replaceChildren(...servicos.map(criarCardServico));
    gradeInicio.replaceChildren(...servicos.slice(0, 4).map(criarCardServico));
    gradeProfissionais.replaceChildren(...profissionais.map(profissional => {
      const card = document.createElement('button');
      card.className = 'professional-card';
      card.type = 'button';
      card.dataset.openProfile = servicos.find(servico => servico.profissional === profissional.id).id;
      card.append(criarAvatar(profissional, 'avatar xl'));

      const nome = document.createElement('strong');
      nome.textContent = profissional.nome;
      const local = document.createElement('small');
      local.textContent = profissional.cidade;
      const nota = document.createElement('span');
      nota.className = 'rating';
      definirAvaliacao(nota, profissional.nota);
      card.append(nome, local, nota);
      return card;
    }));
    filtrarServicos();
  }

  function filtrarServicos() {
    if (!gradeExplorar) {
      return;
    }

    const busca = (campoBusca.value || '').trim().toLocaleLowerCase('pt-BR');
    const categoria = filtroCategoria.value;
    const modalidade = filtroModalidade.value;
    const cards = [...gradeExplorar.querySelectorAll('.service-card')];

    cards.forEach(card => {
      const correspondeBusca = card.textContent.toLocaleLowerCase('pt-BR').includes(busca);
      const correspondeCategoria = categoria === 'all' || card.dataset.category === categoria;
      const modalidades = card.dataset.mode.split(' ');
      const correspondeModalidade = modalidade === 'all' || modalidades.includes(modalidade);
      card.classList.toggle('hidden', !(correspondeBusca && correspondeCategoria && correspondeModalidade));
    });

    cards.sort((a, b) => {
      if (filtroOrdenacao.value === 'price') {
        return Number(a.dataset.price) - Number(b.dataset.price);
      }

      return Number(a.dataset.order) - Number(b.dataset.order);
    });
    cards.forEach(card => gradeExplorar.append(card));

    const visiveis = cards.filter(card => !card.classList.contains('hidden')).length;
    totalResultados.textContent = `${visiveis} ${visiveis === 1 ? 'serviço encontrado' : 'serviços encontrados'}`;
    estadoVazio.classList.toggle('hidden', visiveis !== 0);
  }

  function renderizarAvatarComFallback(elemento, profissional) {
    elemento.textContent = profissional.iniciais;
    elemento.setAttribute('aria-label', profissional.nome);
    const imagem = document.createElement('img');
    imagem.src = profissional.avatar;
    imagem.alt = '';
    imagem.addEventListener('error', () => imagem.remove(), { once: true });
    elemento.append(imagem);
  }

  /* Perfil dinâmico, galeria, avaliações e pagamento */
  function renderizarPerfil(servico) {
    const profissional = buscarProfissional(servico.profissional);
    const tituloCapa = document.getElementById('profile-cover-title');
    const avatar = document.getElementById('profile-avatar');
    const nota = document.getElementById('profile-rating');
    const textoModo = servico.modalidade.replace('Online', 'online').replace('Presencial', 'presencial');
    const galeria = document.getElementById('profile-gallery');
    const inclusoes = document.getElementById('profile-included');
    const perguntas = document.getElementById('profile-faq');
    const avaliacoes = document.getElementById('profile-reviews');

    tituloCapa.textContent = servico.titulo;
    document.getElementById('profile-cover').style.backgroundImage =
      `url("https://images.unsplash.com/${servico.imagem}?auto=format&fit=crop&w=1400&q=85")`;
    document.getElementById('profile-name').textContent = profissional.nome;
    definirAvaliacao(nota, `${profissional.nota} · ${profissional.cidade}`);
    document.getElementById('profile-description').textContent = servico.descricao;
    document.getElementById('profile-delivery').textContent = profissional.bio;
    renderizarAvatarComFallback(avatar, profissional);
    document.getElementById('profile-mode').lastChild.textContent = `Atendimento ${textoModo}`;
    document.getElementById('profile-location').lastChild.textContent = profissional.cidade;
    document.getElementById('profile-deadline').lastChild.textContent = profissional.prazo;
    document.getElementById('profile-starting-price').textContent =
      `${servico.precoTexto} · ${detalhesDePreco[servico.id]}`;

    galeria.replaceChildren(...profissional.portfolio.map((imagem, indice) => {
      const foto = document.createElement('img');
      foto.src = `https://images.unsplash.com/${imagem}?auto=format&fit=crop&w=600&h=420&q=80`;
      foto.alt = `Trabalho ${indice + 1} do portfólio de ${profissional.nome}`;
      foto.loading = 'lazy';
      return foto;
    }));

    inclusoes.replaceChildren(...profissional.incluidos.map(item => {
      const linha = document.createElement('li');
      linha.textContent = item;
      return linha;
    }));

    perguntas.replaceChildren(...profissional.perguntas.map(([pergunta, resposta]) => {
      const item = document.createElement('details');
      const titulo = document.createElement('summary');
      titulo.textContent = pergunta;
      const texto = document.createElement('p');
      texto.textContent = resposta;
      item.append(titulo, texto);
      return item;
    }));

    avaliacoes.replaceChildren(...profissional.avaliacoes.map(([nome, estrelas, data, comentario]) => {
      const avaliacao = document.createElement('article');
      avaliacao.className = 'review-card';
      const cabecalho = document.createElement('div');
      const autor = document.createElement('strong');
      autor.textContent = nome;
      const detalhe = document.createElement('span');
      definirAvaliacao(detalhe, `${estrelas} · ${data}`);
      cabecalho.append(autor, detalhe);
      const texto = document.createElement('p');
      texto.textContent = comentario;
      avaliacao.append(cabecalho, texto);
      return avaliacao;
    }));

    const linhasPagamento = document.querySelectorAll('#pagamento .summary-row strong');
    const valorExato = servico.preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    linhasPagamento[0].textContent = profissional.nome;
    linhasPagamento[1].textContent = valorExato;
    linhasPagamento[2].textContent = valorExato;
    conversaAtual = profissional.id;
    renderizarConversas();
  }

  function criarQrVisual() {
    const namespace = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(namespace, 'svg');
    svg.setAttribute('viewBox', '0 0 29 29');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Ilustração de QR Code para demonstração Pix');

    const fundo = document.createElementNS(namespace, 'rect');
    fundo.classList.add('qr-background');
    fundo.setAttribute('width', '29');
    fundo.setAttribute('height', '29');
    svg.append(fundo);

    function desenharLocalizador(x, y) {
      const exterior = document.createElementNS(namespace, 'rect');
      exterior.classList.add('qr-module');
      exterior.setAttribute('x', String(x));
      exterior.setAttribute('y', String(y));
      exterior.setAttribute('width', '7');
      exterior.setAttribute('height', '7');
      svg.append(exterior);

      const interior = document.createElementNS(namespace, 'rect');
      interior.classList.add('qr-background');
      interior.setAttribute('x', String(x + 2));
      interior.setAttribute('y', String(y + 2));
      interior.setAttribute('width', '3');
      interior.setAttribute('height', '3');
      svg.append(interior);

      const centro = document.createElementNS(namespace, 'rect');
      centro.classList.add('qr-module');
      centro.setAttribute('x', String(x + 3));
      centro.setAttribute('y', String(y + 3));
      centro.setAttribute('width', '1');
      centro.setAttribute('height', '1');
      svg.append(centro);
    }

    desenharLocalizador(1, 1);
    desenharLocalizador(21, 1);
    desenharLocalizador(1, 21);

    for (let linha = 1; linha < 28; linha += 1) {
      for (let coluna = 1; coluna < 28; coluna += 1) {
        const dentroLocalizador = (coluna <= 8 && linha <= 8)
          || (coluna >= 20 && linha <= 8)
          || (coluna <= 8 && linha >= 20);
        const padrao = ((linha * 13 + coluna * 7 + linha * coluna) % 5) < 2;

        if (dentroLocalizador || !padrao) {
          continue;
        }

        const modulo = document.createElementNS(namespace, 'rect');
        modulo.classList.add('qr-module');
        modulo.setAttribute('x', String(coluna));
        modulo.setAttribute('y', String(linha));
        modulo.setAttribute('width', '1');
        modulo.setAttribute('height', '1');
        svg.append(modulo);
      }
    }

    const espacoQr = document.querySelector('.qr-placeholder');
    espacoQr.replaceChildren(svg);
    espacoQr.setAttribute('aria-label', 'QR Code visual ilustrativo para demonstração');
  }

  function atualizarPagamento() {
    const status = document.querySelector('.payment-status');
    const titulo = status.querySelector('strong');
    const detalhe = status.querySelector('small');
    const icone = status.querySelector('.ui-icon');
    status.classList.remove('confirmed');
    icone.innerHTML = '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>';
    titulo.textContent = 'Aguardando confirmação do pagamento';
    detalhe.textContent = 'Demonstração local: o status será confirmado em alguns segundos.';
    window.clearTimeout(temporizadorPagamento);
    temporizadorPagamento = window.setTimeout(() => {
      status.classList.add('confirmed');
      icone.innerHTML = '<path d="m5 12 4 4L19 6"/>';
      titulo.textContent = 'Pagamento confirmado';
      detalhe.textContent = 'Confirmação simulada. Nenhuma cobrança foi realizada.';
    }, 7000);
  }

  function mostrarTela(id) {
    const destino = document.getElementById(id);
    if (!destino) {
      return;
    }

    telas.forEach(tela => tela.classList.toggle('active', tela === destino));
    const autenticacao = idsAutenticacao.has(id);
    cabecalho.style.display = autenticacao ? 'none' : 'flex';
    rodape.style.display = autenticacao ? 'none' : '';
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.screen === id);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (id === 'pagamento') {
      atualizarPagamento();
    }

    if (id === 'mensagens') {
      renderizarMensagens();
    }
  }

  /* Conversas, respostas automáticas e cópia da chave Pix */
  function renderizarMensagens() {
    const conversa = conversas.find(item => item.profissionalId === conversaAtual);
    const profissional = buscarProfissional(conversaAtual);
    document.getElementById('chat-provider-name').textContent = profissional.nome;
    document.getElementById('chat-provider-status').textContent = 'Disponível para conversar';
    document.getElementById('chat-provider-status').style.color = 'var(--success)';
    areaMensagens.replaceChildren(...conversa.mensagens.map(mensagem => {
      const item = document.createElement('div');
      item.className = `message ${mensagem.tipo}`;
      item.textContent = mensagem.texto;
      return item;
    }));
    areaMensagens.scrollTop = areaMensagens.scrollHeight;
  }

  function renderizarConversas() {
    const titulo = listaConversas.querySelector('h2');
    const botoes = profissionais.map(profissional => {
      const botao = document.createElement('button');
      botao.className = `conversation${profissional.id === conversaAtual ? ' active' : ''}`;
      botao.type = 'button';
      botao.dataset.conversation = profissional.id;
      botao.append(criarAvatar(profissional));

      const resumo = document.createElement('span');
      const nome = document.createElement('strong');
      nome.textContent = profissional.nome;
      const estado = document.createElement('small');
      estado.textContent = profissional.cidade;
      resumo.append(nome, estado);
      botao.append(resumo);
      return botao;
    });
    listaConversas.replaceChildren(titulo, ...botoes);
  }

  function selecionarServico(id) {
    const servico = servicos.find(item => item.id === id);
    if (!servico) {
      return;
    }

    renderizarPerfil(servico);
    mostrarTela('perfil-publico');
  }

  function adicionarMensagem(tipo, texto) {
    const conversa = conversas.find(item => item.profissionalId === conversaAtual);
    conversa.mensagens.push({ tipo, texto });
    renderizarMensagens();
    const ultimaMensagem = areaMensagens.lastElementChild;
    ultimaMensagem?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  function copiarChavePix(botao) {
    const campo = document.getElementById('pix-key');
    const chave = campo.value;

    function confirmarCopia() {
      botao.textContent = 'Copiado!';
      window.setTimeout(() => {
        botao.textContent = 'Copiar';
      }, 2500);
    }

    function copiarComSelecao() {
      campo.focus();
      campo.select();
      const copiado = document.execCommand('copy');
      campo.setSelectionRange(0, 0);

      if (copiado) {
        confirmarCopia();
        return;
      }

      botao.textContent = 'Selecione a chave';
      window.setTimeout(() => {
        botao.textContent = 'Copiar';
      }, 2500);
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(chave).then(confirmarCopia).catch(copiarComSelecao);
      return;
    }

    copiarComSelecao();
  }

  document.addEventListener('click', event => {
    const alvo = event.target;
    const navegacao = alvo.closest('[data-screen]');

    if (navegacao) {
      if (navegacao.type === 'submit' && navegacao.form) {
        return;
      }

      event.preventDefault();
      mostrarTela(navegacao.dataset.screen);
    }

    const abrirPerfil = alvo.closest('[data-open-profile]');
    if (abrirPerfil) {
      selecionarServico(abrirPerfil.dataset.openProfile);
    }

    const conversa = alvo.closest('[data-conversation]');
    if (conversa) {
      conversaAtual = conversa.dataset.conversation;
      listaConversas.querySelectorAll('.conversation').forEach(botao => {
        botao.classList.toggle('active', botao === conversa);
      });
      renderizarMensagens();
    }

    const favorito = alvo.closest('.favorite');
    if (favorito) {
      const ativo = favorito.classList.toggle('active');
      favorito.setAttribute('aria-pressed', String(ativo));
      favorito.setAttribute('aria-label', ativo ? 'Remover serviço dos favoritos' : 'Favoritar serviço');
    }
  });

  document.querySelectorAll('[data-settings-tab]').forEach(botao => {
    botao.addEventListener('click', () => {
      const nome = botao.dataset.settingsTab;
      document.querySelectorAll('[data-settings-tab]').forEach(item => {
        item.classList.toggle('active', item === botao);
      });
      document.querySelectorAll('[data-settings-pane]').forEach(painel => {
        painel.classList.toggle('active', painel.dataset.settingsPane === nome);
      });
    });
  });

  [campoBusca, filtroCategoria, filtroModalidade, filtroOrdenacao].forEach(controle => {
    controle.addEventListener('input', filtrarServicos);
    controle.addEventListener('change', filtrarServicos);
  });

  document.getElementById('filter-form').addEventListener('reset', () => {
    window.requestAnimationFrame(filtrarServicos);
  });

  document.querySelectorAll('[data-search-form]').forEach(formulario => {
    formulario.addEventListener('submit', evento => {
      evento.preventDefault();
      campoBusca.value = formulario.querySelector('input').value;
      mostrarTela('explorar');
      filtrarServicos();
    });
  });

  document.getElementById('message-form').addEventListener('submit', evento => {
    evento.preventDefault();
    const campo = document.getElementById('message-input');
    const texto = campo.value.trim();

    if (!texto) {
      return;
    }

    const profissionalId = conversaAtual;
    adicionarMensagem('sent', texto);
    campo.value = '';
    window.setTimeout(() => {
      const resposta = buscarProfissional(profissionalId).respostas[0];
      const conversa = conversas.find(item => item.profissionalId === profissionalId);
      conversa.mensagens.push({ tipo: 'received', texto: resposta });

      if (conversaAtual === profissionalId) {
        renderizarMensagens();
        areaMensagens.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 2500);
  });

  document.getElementById('copy-pix').addEventListener('click', evento => {
    copiarChavePix(evento.currentTarget);
  });

  document.querySelectorAll('[data-local-form]').forEach(formulario => {
    const senhas = formulario.querySelectorAll('input[type="password"]');
    if (senhas.length === 2) {
      const [senha, confirmacao] = senhas;
      const validarConfirmacao = () => {
        confirmacao.setCustomValidity(
          confirmacao.value && senha.value !== confirmacao.value ? 'As senhas não coincidem.' : ''
        );
      };
      senha.addEventListener('input', validarConfirmacao);
      confirmacao.addEventListener('input', validarConfirmacao);
    }

    formulario.addEventListener('submit', evento => {
      evento.preventDefault();
      if (!formulario.reportValidity()) {
        return;
      }

      const proximaTela = evento.submitter?.dataset.screen;
      if (proximaTela) {
        mostrarTela(proximaTela);
        return;
      }

      const botao = evento.submitter;
      if (!botao) {
        return;
      }

      const textoOriginal = botao.textContent;
      botao.textContent = 'Concluído ✓';
      botao.disabled = true;
      window.setTimeout(() => {
        if (formulario.matches('[data-service-form]')) {
          formulario.reset();
          formulario.closest('dialog').close();
        }
        botao.textContent = textoOriginal;
        botao.disabled = false;
      }, 1800);
    });
  });

  const dialogoServico = document.getElementById('service-dialog');
  document.querySelectorAll('[data-open-service-dialog]').forEach(botao => {
    botao.addEventListener('click', () => {
      dialogoServico.showModal();
      document.getElementById('service-title').focus();
    });
  });
  document.querySelectorAll('[data-close-service-dialog]').forEach(botao => {
    botao.addEventListener('click', () => dialogoServico.close());
  });
  dialogoServico.addEventListener('click', evento => {
    if (evento.target === dialogoServico) {
      dialogoServico.close();
    }
  });

  document.getElementById('pix-key').value = 'chave-pix-demo@actworkup.com.br';
  document.querySelector('.payment-status').setAttribute('role', 'status');
  document.querySelectorAll('.user-menu .avatar, .account-mini .avatar, .profile-edit .avatar').forEach(avatar => {
    renderizarAvatarComFallback(avatar, perfilUsuario);
  });
  criarQrVisual();
  renderizarConversas();
  renderizarMensagens();
  renderizarCatalogo();
  mostrarTela('login');
})();
