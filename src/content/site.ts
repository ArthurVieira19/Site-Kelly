// Conteúdo centralizado do site. Nenhum texto deve ficar hardcoded em componentes.
// Campos marcados com "[PREENCHER]" são placeholders pendentes — ver README.md.

export const PLACEHOLDER = "[PREENCHER]" as const;

export const site = {
  url: "https://www.kellycavalcante.com.br", // [PREENCHER] domínio final — ajustar aqui e no astro.config.mjs
  meta: {
    title: "Kelly Cavalcante | Psicóloga Clínica em Nova Odessa e Online",
    description:
      "Psicóloga clínica em Nova Odessa/SP e atendimento online para todo o Brasil. Um espaço seguro para mulheres compreenderem suas emoções, fortalecerem a autoestima e viverem com mais leveza.",
    ogImageAlt: "Kelly Cavalcante, psicóloga clínica",
  },
} as const;

export const professional = {
  fullName: "Kelly Cristina Cavalcante",
  shortName: "Kelly Cavalcante",
  role: "Psicóloga Clínica",
  crp: PLACEHOLDER, // ex.: CRP 06/XXXXX
  crpLabel: `CRP ${PLACEHOLDER}`,
  approach: "Psicologia comportamental (análise do comportamento)",
  city: "Nova Odessa",
  state: "SP",
  region: "Região Metropolitana de Campinas",
} as const;

export const contact = {
  whatsappNumber: PLACEHOLDER, // formato internacional, ex.: 5519XXXXXXXXX
  whatsappMessage:
    "Olá, Kelly. Vim pelo site e gostaria de saber mais sobre os atendimentos.",
  email: PLACEHOLDER, // ex.: contato@kellycavalcante.com.br
  instagram: {
    handle: PLACEHOLDER, // ex.: @kellycavalcante.psi
    url: PLACEHOLDER, // ex.: https://instagram.com/kellycavalcante.psi
  },
  address: {
    street: PLACEHOLDER, // endereço completo do consultório
    city: "Nova Odessa",
    state: "SP",
    zip: PLACEHOLDER,
    // Coordenadas aproximadas do centro de Nova Odessa/SP — ajustar após definição do endereço exato.
    lat: -22.7695,
    lng: -47.2958,
  },
} as const;

export function whatsappUrl(message: string = contact.whatsappMessage): string {
  const number = contact.whatsappNumber === PLACEHOLDER ? "" : contact.whatsappNumber;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const emergency = {
  text:
    "Este site não presta atendimento de emergência. Em caso de crise, ligue 188 (CVV, 24h) ou 192 (SAMU).",
  short: "Se você está em crise agora, ligue 188 (CVV) ou procure o CAPS mais próximo.",
  cvv: "188",
  samu: "192",
} as const;

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export const hero = {
  eyebrow: "Psicologia clínica para mulheres",
  headline: "Há quanto tempo você cuida de todos antes de cuidar de você?",
  sub:
    "Um espaço seguro para compreender suas emoções, reconstruir sua identidade e viver com mais leveza. Atendimento presencial em Nova Odessa e online para todo o Brasil.",
  ctaPrimary: "Conversar pelo WhatsApp",
  ctaSecondary: "Entender como funciona",
  imageAlt: "Kelly Cavalcante, psicóloga clínica, sorrindo em seu espaço de atendimento",
} as const;

export const identification = {
  eyebrow: "Identificação",
  heading: "Talvez você se reconheça aqui",
  items: [
    "Eu dou conta de tudo — mas por dentro estou exausta.",
    "Sinto culpa toda vez que digo não.",
    "Cuido de todo mundo e não sei mais do que eu gosto.",
    "A ansiedade aparece antes mesmo do problema.",
    "Já tentei terapia, mas não criei vínculo.",
    "Sei que preciso mudar algo. Só não sei por onde começar.",
  ],
  closing:
    "Se você se reconheceu em alguma dessas frases, não é fraqueza. É um sinal de que algo em você pede atenção.",
} as const;

export const about = {
  eyebrow: "Sobre",
  heading: "Quem escreveu aquilo que você acabou de ler",
  paragraphs: [
    `${professional.fullName} é psicóloga clínica (${professional.crpLabel}), com abordagem em ${professional.approach}. Seu trabalho parte da compreensão da relação entre pensamentos, emoções e comportamentos, ajudando cada paciente a desenvolver novos repertórios, fortalecer a autoestima e construir uma vida mais equilibrada.`,
    "Une ciência, acolhimento e humanização, respeitando a individualidade de cada pessoa que passa por seu consultório — presencial ou online.",
    "Não prometo resultados rápidos nem fórmulas prontas. O que ofereço é um processo construído junto com você, no seu tempo.",
  ],
  formation: {
    heading: "Formação",
    text: `Graduação em Psicologia — ${PLACEHOLDER} · Especialização em ${PLACEHOLDER}`,
  },
  traits: [
    {
      title: "Acolhedora e humana",
      text: "Cada história é ouvida com respeito, sem julgamento.",
    },
    {
      title: "Serena e confiável",
      text: "Um espaço seguro para você se abrir no seu tempo.",
    },
    {
      title: "Ética e inspiradora",
      text: "Ciência e cuidado guiando cada etapa do processo.",
    },
  ],
  imageAlt: "Retrato de Kelly Cavalcante, psicóloga clínica, em seu espaço de atendimento",
} as const;

export const howItWorks = {
  eyebrow: "Como funciona",
  heading: "Como a terapia funciona",
  items: [
    {
      title: "O que é psicologia comportamental",
      text: "É a abordagem que busca compreender a relação entre o que você pensa, sente e faz. A partir dessa compreensão, é possível construir novos repertórios de comportamento, mais alinhados com a forma como você deseja viver.",
    },
    {
      title: "O que acontece em uma sessão",
      text: "Cada sessão é um espaço de escuta e conversa, no seu tempo. Juntas, organizamos o que você traz, entendemos padrões e construímos, aos poucos, novas formas de lidar com o que te incomoda.",
    },
    {
      title: "Quanto tempo dura um processo",
      text: "Cada pessoa tem seu próprio ritmo. O tempo de acompanhamento varia para cada caso e é conversado abertamente com você ao longo do processo.",
    },
    {
      title: "Sigilo profissional",
      text: "Tudo o que é dito em sessão é protegido por sigilo profissional, conforme o Código de Ética do Psicólogo. Este é um espaço seguro para você se expressar livremente.",
    },
  ],
} as const;

export const path = {
  eyebrow: "O caminho",
  heading: "Como começamos",
  steps: [
    {
      number: "01",
      title: "Primeiro contato",
      text: "Você manda uma mensagem no WhatsApp. Sem formulário, sem formalidade.",
    },
    {
      number: "02",
      title: "Primeira sessão",
      text: "Um espaço para você contar sua história e entendermos juntas o que você busca.",
    },
    {
      number: "03",
      title: "Acompanhamento",
      text: "Encontros regulares, no seu ritmo, com direcionamento claro.",
    },
  ],
} as const;

export const modalities = {
  eyebrow: "Atendimento",
  heading: "Modalidades de atendimento",
  presencial: {
    title: "Presencial — Nova Odessa/SP",
    text: "Atendimento presencial em consultório acolhedor, pensado para que você se sinta à vontade desde a chegada.",
    address: contact.address.street,
    imageAlt: "Consultório de Kelly Cavalcante em Nova Odessa/SP",
  },
  online: {
    title: "Online — Brasil e exterior",
    text: `Atendimento por videochamada, com a mesma qualidade de acompanhamento do presencial. Atendo a ${professional.region} e pacientes de todo o Brasil e do exterior.`,
    imageAlt: "Atendimento psicológico online por videochamada",
  },
} as const;

export const forWho = {
  eyebrow: "Para quem é",
  heading: "Para quem é e o que este espaço não é",
  isForHeading: "É para você que:",
  isFor: [
    "busca autoconhecimento e deseja compreender melhor suas emoções",
    "sente que a ansiedade e a sobrecarga têm tomado espaço no seu dia a dia",
    "quer reconstruir sua identidade e sua relação consigo mesma",
    "procura um acompanhamento com vínculo, no seu tempo",
  ],
  isNotHeading: "Não é:",
  isNot: [
    "atendimento de emergência",
    "consulta psiquiátrica ou prescrição de medicamentos",
    "coaching ou aconselhamento rápido",
  ],
  emergencyNote: emergency.short,
} as const;

export const instagramSection = {
  eyebrow: "Conteúdo",
  heading: "Para acompanhar entre uma sessão e outra",
  text: "No Instagram, compartilho reflexões e conteúdo educativo sobre saúde emocional, autoconhecimento e psicologia comportamental.",
  ctaLabel: "Seguir no Instagram",
} as const;

export const faq = {
  eyebrow: "Dúvidas",
  heading: "Dúvidas frequentes",
  items: [
    {
      q: "Como sei se preciso de terapia?",
      a: "Não existe um momento certo ou um sofrimento mínimo necessário para começar. Se você sente que algo pede atenção — cansaço emocional, ansiedade, dificuldade em lidar com alguma situação — já é um bom motivo para conversar.",
    },
    {
      q: "Nunca fiz terapia. Como é a primeira sessão?",
      a: "A primeira sessão é um momento de escuta. Você conta um pouco da sua história e do que te trouxe até aqui, e juntas entendemos o que faz sentido para o seu processo.",
    },
    {
      q: "A terapia online funciona igual à presencial?",
      a: "Sim. O acompanhamento por videochamada segue a mesma estrutura, ética e qualidade de escuta do atendimento presencial.",
    },
    {
      q: "Quanto tempo dura o processo?",
      a: "Varia para cada pessoa e é conversado com você ao longo do acompanhamento. Não há um prazo fixo — o ritmo é definido junto com você.",
    },
    {
      q: "O que eu falo fica em sigilo?",
      a: "Sim. Tudo o que é compartilhado em sessão é protegido por sigilo profissional, conforme o Código de Ética do Psicólogo.",
    },
    {
      q: "Como funcionam os valores e o pagamento?",
      a: "Os valores e as formas de pagamento são informados no primeiro contato, pelo WhatsApp.",
    },
    {
      q: "E se eu não souber o que falar?",
      a: "Não tem problema. Não é preciso chegar com um roteiro pronto — a conversa vai se construindo aos poucos, no seu tempo.",
    },
    {
      q: "Atende convênio?",
      a: PLACEHOLDER,
    },
  ],
} as const;

export const ctaFinal = {
  heading: "Dar o primeiro passo pode ser mais simples do que parece.",
  sub: "Me mande uma mensagem. Podemos conversar sobre o que você está sentindo e ver se faz sentido começarmos juntas.",
  ctaLabel: "Conversar pelo WhatsApp",
} as const;

export const footer = {
  developmentCredit: PLACEHOLDER, // nome do desenvolvedor/agência para o crédito no rodapé
  privacyLabel: "Política de Privacidade",
} as const;

export const approvedPhrases = [
  "Reconectar-se é o primeiro passo para transformar a própria história.",
  "O cuidado começa quando você se permite olhar para si.",
  "A terapia é um espaço para compreender, fortalecer e reconstruir.",
  "Você não precisa enfrentar tudo sozinha.",
  "Sua história merece ser ouvida com respeito.",
  "Aqui, cada emoção tem espaço.",
  "Você será recebida exatamente como é.",
  "Autoconhecimento é liberdade.",
  "Cuidar de si também é um ato de coragem.",
  "Pequenas mudanças internas transformam grandes capítulos da vida.",
  "Às vezes, ao oferecer tanto cuidado aos outros, esquecemos de reservar um espaço para nós mesmas.",
  "Há quanto tempo você se olha com carinho e se reconhece na sua própria jornada?",
] as const;
