export type Experience = {
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Education = {
  title: string;
  institution: string;
  period: string;
  details: string;
  status?: string;
};

export type Certificate = {
  title: string;
  url: string;
  priority?: boolean;
};

export type Highlight = {
  value: string;
  label: string;
};

export type Project = {
  title: string;
  type: string;
  description: string;
  stack: string[];
  impact: string;
  links: Array<{
    label: string;
    url: string;
  }>;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type NavItem = {
  label: string;
  href: string;
};

export const profile = {
  name: "Kaique Albuquerque",
  title: "Desenvolvedor Front-end / Full-stack",
  location: "Birigui - SP",
  email: "kaique.g.dias14@gmail.com",
  linkedin: "https://www.linkedin.com/in/kaique-dias/",
  github: "https://github.com/kaique-albquerque",
  whatsapp:
    "https://wa.me/5518988103982?text=Ola%2C+Kaique%2C+vi+o+seu+curriculo+online+e+gostaria+de+conversar.",
  resumePdf: "/kaique-albuquerque-curriculo.pdf",
  intro:
    "Desenvolvedor com experiencia em React, TypeScript, APIs e produtos internos. Une front-end, dashboards, automacao e visao de negocio para criar interfaces uteis, mensuraveis e sustentaveis.",
  objective:
    "Atuar em times que precisem transformar processos, dados e necessidades internas em produtos digitais com boa experiencia de uso, codigo organizado e impacto operacional.",
  focus: [
    "React + TypeScript",
    "Interfaces responsivas",
    "Integracao com APIs",
    "Dashboards e produtos internos",
    "React Native + Expo",
    "Dados e IA aplicada",
  ],
};

export const navItems: NavItem[] = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Formacao", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

export const highlights: Highlight[] = [
  { value: "React", label: "Interfaces web com TypeScript" },
  { value: "APIs", label: "Integracoes e produtos internos" },
  { value: "BI", label: "Dashboards e indicadores" },
  { value: "Mobile", label: "Apps internos com Expo" },
];

export const experiences: Experience[] = [
  {
    role: "Supervisor Tecnico",
    period: "Abr 2024 - Presente",
    summary:
      "Coordena frentes digitais, suporte tecnico e evolucao de dashboards e produtos internos.",
    highlights: [
      "Desenvolvimento e manutencao de site institucional em React com integracoes via API.",
      "Criacao de aplicativo corporativo em React Native com Expo para otimizar processos internos.",
      "Supervisao de dashboards em Power BI para apoiar decisoes executivas.",
      "Consolidacao de indicadores como rentabilidade, custos, metas e participacao de mercado.",
    ],
  },
  {
    role: "Analista de Dados Gerenciais",
    period: "Set 2023 - Abr 2024",
    summary:
      "Transformou dados internos em paineis, analises acionaveis e ferramentas de produtividade.",
    highlights: [
      "Criacao de dashboards interativos e visoes executivas em Power BI.",
      "Automatizacao de processos internos para reduzir esforco manual.",
      "Desenvolvimento e manutencao do website da empresa.",
      "Construcao de ferramentas para representantes comerciais.",
    ],
  },
  {
    role: "Assistente Administrativo",
    period: "Jan 2023 - Set 2023",
    summary:
      "Atuou no suporte a logistica com foco em relatorios, Excel e melhoria operacional.",
    highlights: [
      "Criacao de relatorios com Power BI.",
      "Desenvolvimento e otimizacao de planilhas com VBA.",
      "Apoio a eficiencia da logistica de entregas.",
    ],
  },
  {
    role: "Suporte de Infraestrutura em TI",
    period: "Mar 2022 - Dez 2022",
    summary:
      "Apoiou redes, equipamentos e suporte tecnico ao usuario em ambiente corporativo.",
    highlights: [
      "Auxilio na manutencao da infraestrutura de redes.",
      "Gestao e organizacao de equipamentos de TI.",
      "Diagnostico e suporte tecnico em notebooks corporativos.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Dashboard corporativo em React e Node.js",
    type: "Case corporativo",
    description:
      "Migracao de visoes de indicadores para uma solucao propria com interface web, API e leitura mais rapida para operacao.",
    stack: ["React", "Node.js", "APIs", "Power BI"],
    impact:
      "Centralizou indicadores de rentabilidade, custos, metas e participacao de mercado.",
    links: [],
  },
  {
    title: "Aplicativo corporativo com React Native",
    type: "App interno",
    description:
      "Aplicativo criado com Expo para reduzir etapas manuais e melhorar rotinas internas da empresa.",
    stack: ["React Native", "Expo", "APIs"],
    impact: "Apoiou a digitalizacao de processos internos e padronizacao de operacoes.",
    links: [],
  },
  {
    title: "Site institucional em React",
    type: "Produto web",
    description:
      "Manutencao e evolucao de site institucional com foco em performance, clareza de conteudo e integracoes.",
    stack: ["React", "CSS", "APIs"],
    impact: "Melhorou a presenca digital e a manutencao de conteudo institucional.",
    links: [],
  },
  {
    title: "Projetos publicos no GitHub",
    type: "Prova tecnica",
    description:
      "Repositorio publico para avaliacao de codigo, estrutura de componentes e evolucao tecnica.",
    stack: ["React", "TypeScript", "Vite"],
    impact: "Permite avaliacao tecnica direta por recrutadores e lideres de engenharia.",
    links: [{ label: "Ver GitHub", url: "https://github.com/kaique-albquerque" }],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Front-end",
    items: ["React", "TypeScript", "CSS responsivo", "Consumo de APIs"],
  },
  {
    title: "Back-end / APIs",
    items: ["Node.js", "Integracoes", "Modelagem para dashboards"],
  },
  {
    title: "Mobile",
    items: ["React Native", "Expo", "Apps corporativos"],
  },
  {
    title: "Dados / BI",
    items: ["Power BI", "Indicadores executivos", "Analise gerencial"],
  },
  {
    title: "IA / Automacao",
    items: ["RAG", "Embeddings", "LangChain", "Assistentes personalizados"],
  },
  {
    title: "Infra / TI",
    items: ["Suporte tecnico", "Redes", "Coordenacao tecnica"],
  },
];

export const strengths = skillGroups.flatMap((group) => group.items);

export const education: Education[] = [
  {
    title: "Pos-graduacao em Engenharia de IA Aplicada",
    institution: "Especializacao em andamento",
    period: "Abr 2026 - Abr 2027",
    details:
      "Formacao pratica em inteligencia artificial aplicada, RAGs, embeddings, personalizacao de assistentes, memoria de contexto, MCP, LangChain e Neo4j.",
    status: "Em andamento",
  },
  {
    title: "Tecnologo em Analise e Desenvolvimento de Sistemas",
    institution: "Universidade Norte do Parana",
    period: "Fev 2022 - Dez 2023",
    details: "Formacao concluida.",
    status: "Concluido",
  },
  {
    title: "Especializacao em Power BI",
    institution: "Ninja do Excel",
    period: "Jan 2023 - Cursando",
    details: "Formacao online com foco em dashboards e analise de dados.",
    status: "Em andamento",
  },
  {
    title: "Curso Basico de Python",
    institution: "SENAI",
    period: "Fev 2023 - Mai 2023",
    details: "Fundamentos de programacao em Python.",
  },
  {
    title: "Azure Data Fundamentals - DP-900",
    institution: "SENAI",
    period: "Mai 2023 - Jun 2023",
    details: "Conceitos de dados e computacao em nuvem.",
  },
  {
    title: "Programacao Oracle - Java Foundations",
    institution: "SENAI",
    period: "Mai 2023 - Jul 2023",
    details: "Base de programacao com Java.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Aprendendo estruturas de dados e algoritmos",
    url: "https://drive.google.com/file/d/1sqhWvPEjZ4ekUDdSig7JKZjV7zVVuTip/view?usp=sharing",
    priority: true,
  },
  {
    title: "Logica de programacao essencial",
    url: "https://drive.google.com/file/d/1OZIG3wBHfCWytLsKIbAmubNRqafVi-5E/view?usp=sharing",
    priority: true,
  },
  {
    title: "Programacao em Python",
    url: "https://drive.google.com/file/d/1QePkL-dAHb60qApALlmOQrzBVBXiy-Up/view?usp=share_link",
    priority: true,
  },
  {
    title: "Implantacao e Analise de Dados em Nuvem - Microsoft DP-900",
    url: "https://drive.google.com/file/d/10H0DDm1vUWi_R2J9LStAciwKONGj5PMF/view?usp=sharing",
    priority: true,
  },
  {
    title: "Programacao Oracle - Java Foundations",
    url: "https://drive.google.com/file/d/14lL070kjjR6gX3IBCRkYZ0AyRfvQxVeZ/view?usp=sharing",
    priority: true,
  },
  {
    title: "Estrutura de redes",
    url: "https://drive.google.com/file/d/1CQBKwm8F4r90Z-eG71lyuXf9YxzKYHCR/view?usp=sharing",
  },
];
