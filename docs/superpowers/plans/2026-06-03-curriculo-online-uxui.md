# Curriculo Online UX/UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the online resume UI into a tech-modern, accessible, Front-end / Full-stack focused experience with dark and light themes.

**Architecture:** Keep the existing Vite + React + TypeScript + CSS structure. Expand `src/data.ts` into richer typed content for highlights, projects, skill groups, navigation, and PDF metadata; rewrite `src/App.tsx` around focused render sections; replace `src/styles.css` with the approved split-hybrid visual system.

**Tech Stack:** React 18, TypeScript, Vite, CSS custom properties, static assets in `public/`.

---

## File Structure

- Modify `src/data.ts`: normalize content to ASCII, add `Project`, `SkillGroup`, `Highlight`, and `NavItem` types/data, add `resumePdf`.
- Modify `src/App.tsx`: restructure page sections, improve accessibility, add project cards, grouped skills, highlight strip, internal nav, PDF CTA, and safer external links.
- Modify `src/styles.css`: implement tech-modern dark/light themes, responsive split-hybrid layout, focus states, project cards, grouped skills, compact education/certificates, and mobile behavior.
- Modify `index.html`: normalize metadata text to ASCII and keep semantic document metadata.
- Optional create `public/kaique-albuquerque-curriculo.pdf`: only if the PDF file is available. If not available, implement CTA as a disabled/secondary "PDF em breve" state or point to the agreed asset once provided.

## Task 1: Normalize Content Model

**Files:**
- Modify: `src/data.ts`
- Modify: `index.html`

- [ ] **Step 1: Replace `src/data.ts` with normalized typed data**

Use ASCII text to avoid the current encoding failures. Replace the full file with:

```ts
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
```

- [ ] **Step 2: Normalize `index.html` metadata**

Change only the corrupted/encoded text:

```html
<meta
  name="description"
  content="Curriculo online de Kaique Albuquerque, com foco em desenvolvimento front-end, full-stack, dados e tecnologia."
/>
<title>Kaique Albuquerque | Curriculo Online</title>
```

- [ ] **Step 3: Run build**

Run: `npm run build`

Expected: TypeScript and Vite build complete successfully.

- [ ] **Step 4: Commit**

```bash
git add src/data.ts index.html
git commit -m "feat: normalize resume content model"
```

## Task 2: Rebuild App Structure and Accessibility

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace imports and data usage**

Update the data import in `src/App.tsx`:

```ts
import {
  certificates,
  education,
  experiences,
  highlights,
  navItems,
  profile,
  projects,
  skillGroups,
} from "./data";
```

- [ ] **Step 2: Replace theme labels with ASCII and remove unused `resolvedTheme`**

Use:

```ts
const themeOptions: Array<{ value: ThemeMode; label: string }> = [
  { value: "auto", label: "Auto" },
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
];
```

Remove:

```ts
const resolvedTheme = useMemo(() => {
  if (themeMode !== "auto") {
    return themeMode;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}, [themeMode]);
```

Remove `useMemo` from the React import:

```ts
import { useEffect, useState } from "react";
```

- [ ] **Step 3: Replace the JSX returned by `App`**

Use this structure inside `return`:

```tsx
return (
  <div className="page-shell">
    <header className="hero" id="topo">
      <div className="hero-copy">
        <div className="hero-topbar">
          <span className="eyebrow">Curriculo Online</span>
          <div className="theme-switcher" role="group" aria-label="Selecionar tema">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={option.value === themeMode ? "theme-option is-active" : "theme-option"}
                onClick={() => setThemeMode(option.value)}
                aria-pressed={option.value === themeMode}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="hero-main">
          <p className="hero-kicker">Front-end / Full-stack</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-text">{profile.intro}</p>
        </div>

        <div className="hero-actions" aria-label="Acoes principais">
          <a href={profile.resumePdf} className="button button-primary" download>
            Baixar PDF
          </a>
          <a href="#projetos" className="button button-secondary">
            Ver projetos
          </a>
          <a href={`mailto:${profile.email}`} className="button button-ghost">
            Entrar em contato
          </a>
        </div>

        <SocialLinks className="social-links" />
      </div>

      <aside className="hero-card" aria-label="Resumo de contato e stack">
        <img src="/profile.png" alt={`Foto de ${profile.name}`} className="profile-image" />
        <div className="hero-meta">
          <p>{profile.location}</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="hero-skills">
          <span className="section-label">Stack curta</span>
          <ul className="focus-list">
            {profile.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </aside>
    </header>

    <nav className="section-nav" aria-label="Navegacao principal do curriculo">
      {navItems.map((item) => (
        <a key={item.href} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>

    <main className="content">
      <section className="highlight-strip" aria-label="Destaques profissionais">
        {highlights.map((item) => (
          <div className="highlight-item" key={`${item.value}-${item.label}`}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="panel panel-highlight" aria-labelledby="objetivo-title">
        <span className="section-label">Objetivo</span>
        <h2 id="objetivo-title">Produtos digitais com impacto operacional</h2>
        <p>{profile.objective}</p>
      </section>

      <section className="work-grid" aria-label="Experiencia e projetos">
        <div id="experiencia" className="content-grid" aria-labelledby="experiencia-title">
          <div className="section-heading">
            <span className="section-label">Experiencia</span>
            <h2 id="experiencia-title">Entrega tecnica em ambiente corporativo</h2>
          </div>
          <div className="timeline">
            {experiences.map((job) => (
              <article className="timeline-item" key={`${job.role}-${job.period}`}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.summary}</p>
                    </div>
                    <span>{job.period}</span>
                  </div>
                  <ul>
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <section id="projetos" className="content-grid" aria-labelledby="projetos-title">
          <div className="section-heading">
            <span className="section-label">Projetos</span>
            <h2 id="projetos-title">Cases aplicados e prova tecnica</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-header">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <p className="project-impact">{project.impact}</p>
                <ul className="project-stack" aria-label={`Stack do projeto ${project.title}`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.links.length > 0 ? (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} de ${project.title} em nova aba`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </section>

      <section id="stack" className="panel" aria-labelledby="stack-title">
        <span className="section-label">Stack</span>
        <h2 id="stack-title">Competencias organizadas por area</h2>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="formacao" className="dual-grid" aria-label="Formacao e certificados">
        <article className="panel" aria-labelledby="formacao-title">
          <span className="section-label">Formacao</span>
          <h2 id="formacao-title">Base academica e evolucao continua</h2>
          <div className="stack-list">
            {education.map((item) => (
              <div className="stack-item" key={`${item.title}-${item.period}`}>
                <div className="stack-header">
                  <h3>{item.title}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="stack-subtitle">{item.institution}</p>
                <p>{item.details}</p>
                {item.status ? <strong>{item.status}</strong> : null}
              </div>
            ))}
          </div>
        </article>

        <article className="panel" aria-labelledby="certificados-title">
          <span className="section-label">Certificados</span>
          <h2 id="certificados-title">Complementos relevantes</h2>
          <div className="certificate-list">
            {certificates.map((certificate) => (
              <a
                key={certificate.title}
                className={certificate.priority ? "certificate-card is-priority" : "certificate-card"}
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir certificado ${certificate.title} em nova aba`}
              >
                <span>{certificate.priority ? "Prioritario" : "Certificado"}</span>
                <strong>{certificate.title}</strong>
              </a>
            ))}
          </div>
        </article>
      </section>
    </main>

    <footer id="contato" className="site-footer">
      <div className="footer-brand">
        <strong>{profile.name}</strong>
        <p>{profile.title}</p>
      </div>
      <div className="footer-cta">
        <p className="footer-note">Disponivel para oportunidades, parcerias e projetos.</p>
        <a href={profile.resumePdf} className="button button-primary" download>
          Baixar PDF
        </a>
      </div>
      <SocialLinks className="footer-links" />
    </footer>
  </div>
);
```

- [ ] **Step 4: Add `SocialLinks` helper before `SocialIcon`**

```tsx
type SocialLinksProps = {
  className: string;
};

function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={className}>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir LinkedIn de Kaique Albuquerque em nova aba"
      >
        <SocialIcon kind="linkedin" />
        <span>LinkedIn</span>
      </a>
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir GitHub de Kaique Albuquerque em nova aba"
      >
        <SocialIcon kind="github" />
        <span>GitHub</span>
      </a>
      <a
        href={profile.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com Kaique Albuquerque pelo WhatsApp em nova aba"
      >
        <SocialIcon kind="whatsapp" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
```

- [ ] **Step 5: Run build**

Run: `npm run build`

Expected: If TypeScript fails because of missing imports or JSX nesting, fix the exact line and rerun.

- [ ] **Step 6: Commit**

```bash
git add src/App.tsx
git commit -m "feat: restructure resume sections"
```

## Task 3: Replace Visual System CSS

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Replace theme tokens and global foundations**

Replace the top of `src/styles.css` through `#root` with:

```css
:root {
  font-family: "Space Grotesk", sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: dark;
  --page-text: #f8fbff;
  --page-muted: #aebbd0;
  --page-strong: #e4ecff;
  --page-accent: #72f2c9;
  --page-accent-strong: #ffb86b;
  --page-border: rgba(255, 255, 255, 0.12);
  --page-border-soft: rgba(255, 255, 255, 0.08);
  --page-surface: rgba(8, 13, 24, 0.82);
  --page-surface-soft: rgba(255, 255, 255, 0.055);
  --page-surface-strong: rgba(15, 23, 42, 0.96);
  --page-shadow: 0 18px 54px rgba(0, 0, 0, 0.28);
  --page-bg:
    radial-gradient(circle at 8% 0%, rgba(114, 242, 201, 0.18), transparent 28%),
    radial-gradient(circle at 88% 12%, rgba(120, 160, 255, 0.2), transparent 24%),
    linear-gradient(160deg, #070b14 0%, #101827 52%, #111f32 100%);
}

:root[data-theme="light"] {
  color-scheme: light;
  --page-text: #111827;
  --page-muted: #4b5a72;
  --page-strong: #17233d;
  --page-accent: #047857;
  --page-accent-strong: #b45309;
  --page-border: rgba(17, 24, 39, 0.12);
  --page-border-soft: rgba(17, 24, 39, 0.08);
  --page-surface: rgba(255, 255, 255, 0.9);
  --page-surface-soft: rgba(17, 24, 39, 0.045);
  --page-surface-strong: rgba(249, 250, 251, 0.96);
  --page-shadow: 0 18px 46px rgba(25, 35, 55, 0.12);
  --page-bg:
    radial-gradient(circle at 8% 0%, rgba(4, 120, 87, 0.12), transparent 30%),
    radial-gradient(circle at 88% 12%, rgba(59, 130, 246, 0.12), transparent 24%),
    linear-gradient(160deg, #f8fafc 0%, #eef5f3 52%, #edf3fb 100%);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  color: var(--page-text);
  background: var(--page-bg);
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus-visible,
button:focus-visible {
  outline: 3px solid var(--page-accent);
  outline-offset: 4px;
}

p,
ul,
h1,
h2,
h3 {
  margin: 0;
}

ul {
  padding-left: 1.1rem;
}

#root {
  min-height: 100vh;
}
```

- [ ] **Step 2: Replace layout and component styles**

Replace the rest of the file with styles for:

```css
.page-shell {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
  padding: 2rem 0 4rem;
}

.hero,
.work-grid,
.dual-grid {
  display: grid;
  gap: 1.25rem;
}

.hero {
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.75fr);
  align-items: stretch;
}

.hero-copy,
.hero-card,
.panel,
.timeline-card,
.project-card,
.skill-card,
.highlight-strip,
.site-footer,
.section-nav {
  border: 1px solid var(--page-border);
  background: var(--page-surface);
  box-shadow: var(--page-shadow);
  backdrop-filter: blur(16px);
}

.hero-copy {
  border-radius: 28px;
  padding: clamp(1.75rem, 4vw, 3rem);
  display: grid;
  gap: 2rem;
}

.hero-topbar,
.timeline-header,
.stack-header,
.project-card-header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
}

.eyebrow,
.section-label,
.hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.76rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--page-accent);
  font-weight: 700;
}

.theme-switcher {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: min(100%, 320px);
  gap: 0.25rem;
  padding: 0.25rem;
  border-radius: 999px;
  border: 1px solid var(--page-border);
  background: var(--page-surface-soft);
}

.theme-option {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--page-muted);
  font: inherit;
  font-size: 0.82rem;
  font-weight: 700;
  padding: 0.7rem 0.8rem;
  border-radius: 999px;
  cursor: pointer;
}

.theme-option:hover,
.theme-option.is-active {
  background: var(--page-surface-strong);
  color: var(--page-text);
}

.hero-main {
  display: grid;
  gap: 1rem;
}

.hero h1,
.panel h2,
.section-heading h2 {
  font-family: "Archivo", sans-serif;
}

.hero h1 {
  font-size: clamp(2.8rem, 7vw, 5.4rem);
  line-height: 0.96;
  max-width: 12ch;
}

.hero-title {
  font-size: clamp(1.25rem, 3vw, 1.65rem);
  color: var(--page-strong);
  max-width: 30ch;
  font-weight: 700;
}

.hero-text {
  max-width: 64ch;
  color: var(--page-muted);
  font-size: 1.04rem;
}

.hero-actions,
.social-links,
.footer-links,
.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.9rem;
  padding: 0.85rem 1.15rem;
  border-radius: 999px;
  font-weight: 800;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button-primary {
  background: linear-gradient(135deg, var(--page-accent), var(--page-accent-strong));
  color: #08111f;
}

.button-secondary,
.button-ghost {
  border: 1px solid var(--page-border);
  color: var(--page-text);
}

.button-ghost {
  background: var(--page-surface-soft);
}

.social-links,
.footer-links {
  color: var(--page-muted);
}

.social-links a,
.footer-links a,
.project-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.5rem;
}

.social-links svg,
.footer-links svg {
  width: 1rem;
  height: 1rem;
  fill: currentColor;
}

.hero-card {
  border-radius: 28px;
  padding: 1rem;
  display: grid;
  gap: 1rem;
}

.profile-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  object-position: center top;
  border-radius: 20px;
  border: 1px solid var(--page-border);
}

.hero-meta,
.hero-skills,
.content,
.section-heading,
.timeline,
.stack-list,
.skill-card,
.project-card {
  display: grid;
  gap: 0.85rem;
}

.hero-meta {
  color: var(--page-strong);
}

.hero-skills {
  padding: 1rem;
  border-radius: 20px;
  background: var(--page-surface-soft);
  border: 1px solid var(--page-border-soft);
}

.focus-list,
.project-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  padding: 0;
  list-style: none;
}

.focus-list li,
.project-stack li {
  padding: 0.58rem 0.72rem;
  border-radius: 999px;
  background: var(--page-surface-strong);
  border: 1px solid var(--page-border-soft);
  font-size: 0.86rem;
  color: var(--page-text);
}

.section-nav {
  position: sticky;
  top: 0.75rem;
  z-index: 5;
  margin: 1rem 0;
  padding: 0.6rem;
  border-radius: 999px;
  display: flex;
  gap: 0.35rem;
  overflow-x: auto;
}

.section-nav a {
  white-space: nowrap;
  padding: 0.68rem 0.9rem;
  border-radius: 999px;
  color: var(--page-muted);
  font-weight: 700;
}

.section-nav a:hover {
  color: var(--page-text);
  background: var(--page-surface-soft);
}

.content {
  gap: 1.25rem;
}

.highlight-strip {
  border-radius: 24px;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
}

.highlight-item {
  display: grid;
  gap: 0.25rem;
  padding: 0.85rem;
  border-radius: 18px;
  background: var(--page-surface-soft);
}

.highlight-item strong {
  color: var(--page-accent);
  font-size: 1.1rem;
}

.highlight-item span,
.timeline-header p,
.timeline-card li,
.panel p,
.project-card p,
.skill-card li,
.stack-item p,
.footer-note {
  color: var(--page-muted);
}

.panel {
  border-radius: 24px;
  padding: clamp(1.25rem, 3vw, 1.8rem);
}

.panel-highlight {
  background:
    linear-gradient(135deg, rgba(114, 242, 201, 0.12), rgba(255, 184, 107, 0.12)),
    var(--page-surface);
}

.panel h2,
.section-heading h2 {
  font-size: clamp(1.55rem, 3vw, 2.45rem);
  line-height: 1.05;
  margin-top: 0.45rem;
}

.work-grid {
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.92fr);
  align-items: start;
}

.content-grid {
  display: grid;
  gap: 1rem;
}

.timeline {
  position: relative;
  gap: 1rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0.66rem;
  top: 0.25rem;
  bottom: 0.25rem;
  width: 1px;
  background: linear-gradient(var(--page-accent), rgba(120, 160, 255, 0.15));
}

.timeline-item {
  position: relative;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 1rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--page-accent), var(--page-accent-strong));
}

.timeline-card,
.project-card,
.skill-card {
  border-radius: 20px;
  padding: 1.15rem;
}

.timeline-card ul {
  display: grid;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.timeline-header h3,
.stack-item h3,
.project-card h3,
.skill-card h3 {
  font-family: "Archivo", sans-serif;
  font-size: 1.1rem;
}

.timeline-header span,
.stack-header span,
.project-card-header span,
.certificate-card span {
  color: var(--page-accent);
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-grid {
  display: grid;
  gap: 1rem;
}

.project-impact {
  color: var(--page-strong) !important;
  font-weight: 700;
}

.project-links a {
  color: var(--page-accent);
  font-weight: 800;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}

.skill-card ul {
  display: grid;
  gap: 0.45rem;
}

.dual-grid {
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.85fr);
}

.stack-item {
  padding: 1rem 0;
  border-top: 1px solid var(--page-border-soft);
}

.stack-item:first-of-type {
  border-top: 0;
  padding-top: 0;
}

.stack-subtitle {
  margin: 0.3rem 0;
  color: var(--page-accent);
}

.certificate-list {
  display: grid;
  gap: 0.8rem;
  margin-top: 1.25rem;
}

.certificate-card {
  display: grid;
  gap: 0.35rem;
  padding: 0.95rem;
  border-radius: 16px;
  background: var(--page-surface-soft);
  border: 1px solid var(--page-border);
}

.certificate-card.is-priority {
  border-color: color-mix(in srgb, var(--page-accent) 42%, transparent);
}

.site-footer {
  margin-top: 1.25rem;
  padding: 1.25rem;
  border-radius: 24px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
}

.footer-brand strong {
  display: block;
  color: var(--page-text);
  font-family: "Archivo", sans-serif;
  font-size: 1.15rem;
}

.footer-cta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.footer-links {
  grid-column: 1 / -1;
}
```

- [ ] **Step 3: Add responsive CSS**

Append:

```css
@media (max-width: 980px) {
  .hero,
  .work-grid,
  .dual-grid {
    grid-template-columns: 1fr;
  }

  .highlight-strip,
  .skill-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero h1 {
    max-width: none;
  }
}

@media (max-width: 680px) {
  .page-shell {
    width: min(100% - 1rem, 1180px);
    padding: 0.5rem 0 2rem;
  }

  .hero-copy,
  .hero-card,
  .panel,
  .highlight-strip,
  .site-footer,
  .section-nav {
    border-radius: 20px;
  }

  .hero-topbar,
  .timeline-header,
  .stack-header,
  .project-card-header,
  .site-footer,
  .footer-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .theme-switcher,
  .highlight-strip,
  .skill-grid {
    grid-template-columns: 1fr;
    width: 100%;
  }

  .hero-actions .button,
  .footer-cta .button {
    width: 100%;
  }

  .section-nav {
    border-radius: 18px;
  }
}
```

- [ ] **Step 4: Run build**

Run: `npm run build`

Expected: Build passes.

- [ ] **Step 5: Commit**

```bash
git add src/styles.css
git commit -m "style: apply tech resume visual system"
```

## Task 4: PDF CTA Behavior

**Files:**
- Modify: `src/App.tsx`
- Optional create/copy: `public/kaique-albuquerque-curriculo.pdf`

- [ ] **Step 1: Check if PDF exists**

Run:

```powershell
Test-Path public\kaique-albuquerque-curriculo.pdf
```

Expected:
- If `True`, keep the `download` CTAs as implemented.
- If `False`, do Step 2.

- [ ] **Step 2: Make PDF CTA honest if file is missing**

If the file is missing, change both PDF links in `src/App.tsx` from:

```tsx
<a href={profile.resumePdf} className="button button-primary" download>
  Baixar PDF
</a>
```

to:

```tsx
<a
  href={`mailto:${profile.email}?subject=Solicitacao%20de%20curriculo%20em%20PDF`}
  className="button button-primary"
>
  Solicitar PDF
</a>
```

- [ ] **Step 3: Run build**

Run: `npm run build`

Expected: Build passes and no broken local PDF link remains if the file is absent.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx public/kaique-albuquerque-curriculo.pdf
git commit -m "feat: add resume pdf call to action"
```

If no PDF file was added, use:

```bash
git add src/App.tsx
git commit -m "feat: add resume pdf request action"
```

## Task 5: Accessibility and Content Verification

**Files:**
- Modify only files needed to fix issues found in this task.

- [ ] **Step 1: Search for corrupted text**

Run:

```powershell
rg -n "Ã|Â|�" src index.html README.md docs
```

Expected: No matches in `src` or `index.html`. Matches in previously committed docs can be left only if they quote the original bug; prefer no matches in user-facing app files.

- [ ] **Step 2: Search for unsafe external links**

Run:

```powershell
rg -n "target=\"_blank\"" src\App.tsx
```

Expected: Every match has `rel="noopener noreferrer"` in the same JSX element.

- [ ] **Step 3: Search for missing section IDs**

Run:

```powershell
rg -n "id=\"(experiencia|projetos|stack|formacao|contato)\"" src\App.tsx
```

Expected: All five IDs are present.

- [ ] **Step 4: Run production build**

Run:

```powershell
npm run build
```

Expected: Build passes.

- [ ] **Step 5: Run local preview for manual QA**

Run:

```powershell
npm run dev -- --host 127.0.0.1
```

Expected: Vite serves the app on a local port, usually `http://127.0.0.1:5173/`.

- [ ] **Step 6: Manual QA checklist**

Open the local URL and verify:

- First fold says `Desenvolvedor Front-end / Full-stack`.
- Dark theme is tech-modern and legible.
- Light theme keeps strong contrast.
- Internal nav scrolls to Experiencia, Projetos, Stack, Formacao and Contato.
- Project cards appear before Formacao.
- Mobile width around 390px has no horizontal overflow.
- Keyboard Tab focus is visible on theme buttons, nav links, CTAs, social links and certificate links.

- [ ] **Step 7: Commit fixes**

If Step 1-6 required fixes:

```bash
git add src\App.tsx src\data.ts src\styles.css index.html
git commit -m "fix: polish resume accessibility and content"
```

If no fixes were needed, do not create an empty commit.

## Task 6: Final Review

**Files:**
- No planned edits unless verification finds issues.

- [ ] **Step 1: Check git status**

Run:

```powershell
git status --short
```

Expected: Only intentionally untracked `.superpowers/` may remain. No unstaged implementation files.

- [ ] **Step 2: Review final diff**

Run:

```powershell
git log --oneline -5
```

Expected: Recent commits show the spec and each implementation task commit.

- [ ] **Step 3: Summarize completion**

Report:

- Files changed.
- Build result.
- Manual QA result.
- Whether PDF file exists or CTA uses email request.
- Any remaining risk, especially missing public project/demo links.

## Self-Review

- Spec coverage: hero, highlight strip, experience, projects, stack groups, education/certificates, footer contact, accessibility, responsiveness, theme behavior, PDF CTA and encoding cleanup are all covered by Tasks 1-5.
- Placeholder scan: no placeholder markers, delayed-work notes, or unspecified test steps remain.
- Type consistency: `Project`, `SkillGroup`, `Highlight`, `NavItem`, `profile.resumePdf`, `projects`, `skillGroups`, `highlights`, and `navItems` are defined in Task 1 before they are imported in Task 2.
