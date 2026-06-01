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
};

export const profile = {
  name: "Kaique Albuquerque",
  title: "Dados, TI e Desenvolvimento de Soluções Digitais",
  location: "Birigui - SP",
  email: "kaique.g.dias14@gmail.com",
  linkedin: "https://www.linkedin.com/in/kaique-dias/",
  github: "https://github.com/kaique-albquerque",
  whatsapp:
    "https://wa.me/5518988103982?text=Ol%C3%A1%2C+Kaique%2C+vi+o+seu+curr%C3%ADculo+online+e+isso+me+chamou+aten%C3%A7%C3%A3o...",
  intro:
    "Profissional com atuação em análise de dados, liderança técnica e desenvolvimento de soluções web e mobile. Combina Power BI, processos internos, suporte de infraestrutura e produto digital para transformar operação em resultado mensurável.",
  objective:
    "Atuar em projetos que exijam visão analítica, execução técnica e melhoria contínua, unindo dashboards, automação, desenvolvimento front-end e suporte estratégico ao negócio.",
  focus: [
    "Power BI e dashboards executivos",
    "Dashboard próprio em React e Node.js",
    "Automação e otimização de processos",
    "IA aplicada, RAG, embeddings e LangChain",
    "React, React Native e integrações com APIs",
    "Suporte de TI, infraestrutura e coordenação técnica",
  ],
};

export const experiences: Experience[] = [
  {
    role: "Supervisor Técnico",
    period: "Abr 2024 - Presente",
    summary:
      "Coordena manutenção tecnológica, supervisiona dashboards estratégicos e lidera frentes digitais da empresa.",
    highlights: [
      "Supervisão e atualização de dashboards em Power BI para apoio à tomada de decisão.",
      "Gestão de recursos de TI e suporte às operações internas.",
      "Desenvolvimento e manutenção do site institucional em React com integrações via API.",
      "Criação de aplicativo corporativo em React Native com Expo para otimizar processos internos da empresa.",
      "Responsável por consolidar indicadores como rentabilidade, custos, metas e participação de mercado.",
    ],
  },
  {
    role: "Analista de Dados Gerenciais",
    period: "Set 2023 - Abr 2024",
    summary:
      "Transformou dados internos em painéis, análises acionáveis e ferramentas de produtividade.",
    highlights: [
      "Criação de dashboards interativos e visões executivas em Power BI.",
      "Identificação de tendências, gargalos e oportunidades de melhoria operacional.",
      "Automatização de processos internos para reduzir esforço manual.",
      "Desenvolvimento e manutenção do website da empresa.",
      "Construção de ferramentas para representantes comerciais.",
    ],
  },
  {
    role: "Assistente Administrativo",
    period: "Jan 2023 - Set 2023",
    summary:
      "Atuou no suporte à logística com foco em relatórios, Excel e melhoria operacional.",
    highlights: [
      "Criação de relatórios detalhados com Power BI.",
      "Desenvolvimento e otimização de planilhas com VBA.",
      "Apoio à eficiência da logística de entregas.",
    ],
  },
  {
    role: "Suporte de Infraestrutura em TI",
    period: "Mar 2022 - Dez 2022",
    summary:
      "Apoiou redes, equipamentos e suporte técnico ao usuário em ambiente corporativo.",
    highlights: [
      "Auxílio na manutenção da infraestrutura de redes.",
      "Gestão e organização de equipamentos de TI.",
      "Diagnóstico e suporte técnico em notebooks corporativos.",
    ],
  },
  {
    role: "Secretário Executivo",
    period: "Fev 2020 - Jan 2022",
    summary:
      "Conduziu processos administrativos, logística e acompanhamento de metas da equipe.",
    highlights: [
      "Gestão documental para passaportes e viagens.",
      "Administração de contratos de moradia e negociações imobiliárias.",
      "Planejamento logístico para operações em diferentes locais.",
      "Definição e acompanhamento de metas operacionais.",
    ],
  },
  {
    role: "Aprendiz Eletricista de Manutenção - Eletroeletrônica",
    period: "Jan 2018 - Dez 2019",
    summary:
      "Base técnica em manutenção, elétrica, eletrônica e automação industrial.",
    highlights: [
      "Instalações e manutenções prediais, residenciais e comerciais.",
      "Eletrônica analógica e digital.",
      "Acionamentos pneumáticos e configuração de inversores de frequência.",
      "Programação com Arduino.",
    ],
  },
];

export const education: Education[] = [
  {
    title: "Pós-graduação em Engenharia de IA Aplicada",
    institution: "Especialização em andamento",
    period: "Abr 2026 - Abr 2027",
    details:
      "Formação prática em inteligência artificial aplicada, com estudo de RAGs, attention, embeddings, vetorização de palavras, personalização de assistentes, memória de contexto, MCP, LangChain, Neo4j para bases em grafos e uso de modelos via OpenRouter para testes e projetos pessoais.",
    status: "Em andamento",
  },
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Norte do Paraná",
    period: "Fev 2022 - Dez 2023",
    details: "Formação concluída.",
    status: "Concluído",
  },
  {
    title: "Especialização em Power BI",
    institution: "Ninja do Excel",
    period: "Jan 2023 - Cursando",
    details: "Formação online com foco em dashboards e análise de dados.",
    status: "Em andamento",
  },
  {
    title: "Especialização em Excel",
    institution: "Ninja do Excel",
    period: "Jan 2023 - Cursando",
    details: "Aprofundamento em planilhas, fórmulas e produtividade.",
    status: "Em andamento",
  },
  {
    title: "Curso Básico de Python",
    institution: "SENAI",
    period: "Fev 2023 - Mai 2023",
    details: "Fundamentos de programação em Python.",
  },
  {
    title: "Azure Data Fundamentals - DP-900",
    institution: "SENAI",
    period: "Mai 2023 - Jun 2023",
    details: "Conceitos de dados e computação em nuvem.",
  },
  {
    title: "Programação Oracle - Java Foundations",
    institution: "SENAI",
    period: "Mai 2023 - Jul 2023",
    details: "Base de programação com Java.",
  },
  {
    title: "CCNAv7: Introduction to Networks",
    institution: "SENAI",
    period: "Jul 2023 - Set 2023",
    details: "Fundamentos de redes e equipamentos Cisco.",
  },
];

export const strengths = [
  "Power BI e indicadores executivos",
  "Migração de dashboard corporativo de Power BI para solução própria em React e Node.js",
  "Automação de processos internos",
  "React e TypeScript para interfaces web",
  "React Native para aplicativos corporativos",
  "Integração com APIs e sistemas internos",
  "IA aplicada com RAG, embeddings e LangChain",
  "Memória de contexto e personalização de assistentes",
  "Neo4j e estruturas para busca semântica",
  "Suporte de TI e coordenação técnica",
];

export const certificates: Certificate[] = [
  {
    title: "Aprendendo estruturas de dados e algoritmos",
    url: "https://drive.google.com/file/d/1sqhWvPEjZ4ekUDdSig7JKZjV7zVVuTip/view?usp=sharing",
  },
  {
    title: "Boas-vindas ao Java",
    url: "https://drive.google.com/file/d/1NN8MJGXTzJ8GZhBwk777Uyn_aVQygKSf/view?usp=sharing",
  },
  {
    title: "Lógica de programação essencial",
    url: "https://drive.google.com/file/d/1OZIG3wBHfCWytLsKIbAmubNRqafVi-5E/view?usp=sharing",
  },
  {
    title: "Hardware (parte física do computador ou notebook)",
    url: "https://drive.google.com/file/d/1h7bKuDQl2viyTVPMGmyPy9gS175WWbl6/view?usp=sharing",
  },
  {
    title: "Eletricista e eletroeletrônica",
    url: "https://drive.google.com/file/d/1AL05_EwqJwrHyZZkf2I3ANlkJvxE4YuO/view?usp=sharing",
  },
  {
    title: "Trabalho voluntário de 24 meses",
    url: "https://drive.google.com/file/d/1LLS2o_Snj8j8LnllUILgbe8D4W9Mt1y3/view?usp=sharing",
  },
  {
    title: "Estrutura de redes",
    url: "https://drive.google.com/file/d/1CQBKwm8F4r90Z-eG71lyuXf9YxzKYHCR/view?usp=sharing",
  },
  {
    title: "Programação em Python",
    url: "https://drive.google.com/file/d/1QePkL-dAHb60qApALlmOQrzBVBXiy-Up/view?usp=share_link",
  },
  {
    title: "Implantação e Análise de Dados em Nuvem - Microsoft DP900",
    url: "https://drive.google.com/file/d/10H0DDm1vUWi_R2J9LStAciwKONGj5PMF/view?usp=sharing",
  },
  {
    title: "Programação Oracle - Java Foundations",
    url: "https://drive.google.com/file/d/14lL070kjjR6gX3IBCRkYZ0AyRfvQxVeZ/view?usp=sharing",
  },
];
