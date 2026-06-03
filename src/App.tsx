import { useEffect, useState } from "react";
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

type ThemeMode = "auto" | "light" | "dark";

const themeOptions: Array<{ value: ThemeMode; label: string }> = [
  { value: "auto", label: "Auto" },
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
];

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = window.localStorage.getItem("theme-mode");

    if (saved === "light" || saved === "dark" || saved === "auto") {
      return saved;
    }

    return "auto";
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const nextTheme =
        themeMode === "auto" ? (media.matches ? "dark" : "light") : themeMode;

      document.documentElement.setAttribute("data-theme", nextTheme);
    };

    applyTheme();
    window.localStorage.setItem("theme-mode", themeMode);

    if (themeMode !== "auto") {
      return;
    }

    media.addEventListener("change", applyTheme);

    return () => {
      media.removeEventListener("change", applyTheme);
    };
  }, [themeMode]);

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
            <a
              href={`mailto:${profile.email}?subject=Solicitacao%20de%20curriculo%20em%20PDF`}
              className="button button-primary"
            >
              Solicitar PDF
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
          <a
            href={`mailto:${profile.email}?subject=Solicitacao%20de%20curriculo%20em%20PDF`}
            className="button button-primary"
          >
            Solicitar PDF
          </a>
        </div>
        <SocialLinks className="footer-links" />
      </footer>
    </div>
  );
}

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

type SocialIconProps = {
  kind: "linkedin" | "github" | "whatsapp";
};

function SocialIcon({ kind }: SocialIconProps) {
  if (kind === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 0 0 3.2 5.05c0 1.1.89 2.01 2 2.01h.02a2.03 2.03 0 0 0 .03-4.06ZM20.8 12.9c0-3.47-1.86-5.08-4.35-5.08-2 0-2.89 1.1-3.39 1.87V8.5H9.68c.04.79 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.68.12-.92.27-.68.88-1.38 1.92-1.38 1.35 0 1.89 1.03 1.89 2.54V20H20.8v-7.1Z" />
      </svg>
    );
  }

  if (kind === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.3 9.4 7.88 10.92.58.11.79-.25.79-.56v-2.18c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.35.97.1-.74.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.14 1.18a10.9 10.9 0 0 1 5.72 0c2.18-1.5 3.14-1.18 3.14-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.26 5.69.41.35.78 1.04.78 2.1v3.1c0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.66 18.35.5 12 .5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07.02C5.56.02.26 5.32.26 11.84c0 2.08.54 4.1 1.57 5.89L.16 23.82l6.23-1.64a11.78 11.78 0 0 0 5.66 1.44h.01c6.51 0 11.81-5.3 11.81-11.82 0-3.16-1.23-6.14-3.35-8.32ZM12.06 21.6a9.74 9.74 0 0 1-4.96-1.36l-.36-.21-3.69.97.98-3.6-.24-.37a9.8 9.8 0 0 1-1.5-5.18c0-5.42 4.41-9.83 9.84-9.83 2.62 0 5.08 1.02 6.93 2.88a9.72 9.72 0 0 1 2.89 6.93c0 5.42-4.42 9.83-9.84 9.83Zm5.39-7.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.91 1.23 3.11.15.2 2.11 3.22 5.1 4.51.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default App;
