# Automatic Resume PDF Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate `public/kaique-albuquerque-curriculo.pdf` from the live resume site every time `npm run build` runs.

**Architecture:** Add a local Playwright-based script that starts a Vite server, opens the resume page in Chromium, renders it with print CSS, writes the PDF to `public/`, and then stops the server. Update the UI CTA to download the generated PDF and add print-specific CSS so the PDF is readable.

**Tech Stack:** React 18, TypeScript, Vite, CSS print media, Node.js ESM script, Playwright Chromium.

---

## File Structure

- Modify `package.json`: add `generate:pdf` script, update `build`, add Playwright dev dependency.
- Modify `package-lock.json`: reflect installed Playwright dependency.
- Create `scripts/generate-pdf.mjs`: generate PDF from the local Vite-rendered site.
- Modify `src/App.tsx`: change both PDF CTAs from email request to file download.
- Modify `src/styles.css`: add print CSS and keep button text contrast variables.
- Create `public/kaique-albuquerque-curriculo.pdf`: generated artifact.

## Task 1: Install Playwright

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Install Playwright**

Run:

```powershell
npm install -D playwright
```

Expected: `playwright` appears in `devDependencies`, and `package-lock.json` updates.

- [ ] **Step 2: Install Chromium browser**

Run:

```powershell
npx playwright install chromium
```

Expected: Playwright downloads or confirms Chromium is installed.

- [ ] **Step 3: Commit dependency update**

```powershell
git add package.json package-lock.json
git commit -m "build: add playwright for pdf generation"
```

## Task 2: Add PDF Generation Script

**Files:**
- Create: `scripts/generate-pdf.mjs`

- [ ] **Step 1: Create `scripts` directory**

Run:

```powershell
New-Item -ItemType Directory -Force -Path scripts
```

- [ ] **Step 2: Add `scripts/generate-pdf.mjs`**

Create:

```js
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { createServer } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");
const outputPath = resolve(projectRoot, "public", "kaique-albuquerque-curriculo.pdf");

const server = await createServer({
  root: projectRoot,
  logLevel: "warn",
  server: {
    host: "127.0.0.1",
    port: 4177,
    strictPort: false,
  },
});

let browser;

try {
  await mkdir(dirname(outputPath), { recursive: true });
  await server.listen();

  const address = server.httpServer?.address();
  if (!address || typeof address === "string") {
    throw new Error("Nao foi possivel determinar a URL local para gerar o PDF.");
  }

  const url = `http://127.0.0.1:${address.port}/`;
  browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 1800 },
  });

  await page.emulateMedia({ media: "print" });
  await page.goto(url, { waitUntil: "networkidle" });

  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "12mm",
      right: "10mm",
      bottom: "12mm",
      left: "10mm",
    },
  });

  console.log(`PDF gerado em ${outputPath}`);
} catch (error) {
  console.error("Falha ao gerar PDF do curriculo.");
  console.error(error);
  process.exitCode = 1;
} finally {
  if (browser) {
    await browser.close();
  }

  await server.close();
}
```

- [ ] **Step 3: Commit script**

```powershell
git add scripts/generate-pdf.mjs
git commit -m "build: add resume pdf generation script"
```

## Task 3: Wire Build Scripts

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Update scripts in `package.json`**

Set scripts to:

```json
"scripts": {
  "dev": "vite",
  "generate:pdf": "node scripts/generate-pdf.mjs",
  "build": "npm run generate:pdf && tsc -b && vite build",
  "preview": "vite preview"
}
```

- [ ] **Step 2: Verify script command is listed**

Run:

```powershell
npm run
```

Expected: Output includes `generate:pdf`.

- [ ] **Step 3: Commit script wiring**

```powershell
git add package.json
git commit -m "build: generate resume pdf during build"
```

## Task 4: Restore Download CTA

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/data.ts`

- [ ] **Step 1: Add PDF path to `profile`**

In `src/data.ts`, add after `whatsapp`:

```ts
  resumePdf: "/kaique-albuquerque-curriculo.pdf",
```

- [ ] **Step 2: Replace both email PDF CTAs in `src/App.tsx`**

Replace:

```tsx
<a
  href={`mailto:${profile.email}?subject=Solicitacao%20de%20curriculo%20em%20PDF`}
  className="button button-primary"
>
  Solicitar PDF
</a>
```

with:

```tsx
<a href={profile.resumePdf} className="button button-primary" download>
  Baixar PDF
</a>
```

There are two occurrences: hero and footer.

- [ ] **Step 3: Commit CTA update**

```powershell
git add src/App.tsx src/data.ts
git commit -m "feat: restore resume pdf download action"
```

## Task 5: Add Print CSS

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Keep theme-aware button contrast**

Ensure `:root` contains:

```css
--button-primary-text: #08111f;
--button-primary-shadow: none;
```

Ensure `:root[data-theme="light"]` contains:

```css
--button-primary-text: #ffffff;
--button-primary-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
```

Ensure `.button-primary` uses:

```css
color: var(--button-primary-text);
text-shadow: var(--button-primary-shadow);
```

- [ ] **Step 2: Add print media block to end of `src/styles.css`**

Append:

```css
@media print {
  :root {
    color-scheme: light;
    --page-text: #111827;
    --page-muted: #374151;
    --page-strong: #111827;
    --page-accent: #047857;
    --page-accent-strong: #92400e;
    --page-border: rgba(17, 24, 39, 0.16);
    --page-border-soft: rgba(17, 24, 39, 0.1);
    --page-surface: #ffffff;
    --page-surface-soft: #f3f4f6;
    --page-surface-strong: #eef2f7;
    --page-shadow: none;
    --page-bg: #ffffff;
    --button-primary-text: #ffffff;
    --button-primary-shadow: none;
  }

  html,
  body {
    background: #ffffff;
  }

  body {
    font-size: 11px;
  }

  .page-shell {
    width: 100%;
    padding: 0;
  }

  .hero,
  .work-grid,
  .dual-grid,
  .skill-grid,
  .highlight-strip {
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
  }

  .hero-copy,
  .hero-card,
  .panel,
  .timeline-card,
  .project-card,
  .skill-card,
  .highlight-strip,
  .site-footer {
    box-shadow: none;
    backdrop-filter: none;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .section-nav,
  .theme-switcher {
    display: none;
  }

  .hero-copy,
  .hero-card,
  .panel,
  .timeline-card,
  .project-card,
  .skill-card,
  .site-footer {
    border-radius: 10px;
    padding: 0.75rem;
  }

  .hero h1 {
    font-size: 2.6rem;
  }

  .panel h2,
  .section-heading h2 {
    font-size: 1.25rem;
  }

  .profile-image {
    max-height: 180px;
  }

  .button {
    min-height: auto;
    padding: 0.45rem 0.7rem;
  }

  .timeline {
    gap: 0.55rem;
  }

  .project-grid,
  .stack-list,
  .certificate-list {
    gap: 0.55rem;
  }

  a[href^="http"]::after,
  a[href^="mailto"]::after {
    content: "";
  }
}
```

- [ ] **Step 3: Commit print CSS**

```powershell
git add src/styles.css
git commit -m "style: add print layout for resume pdf"
```

## Task 6: Generate and Validate PDF

**Files:**
- Create/modify: `public/kaique-albuquerque-curriculo.pdf`

- [ ] **Step 1: Generate PDF directly**

Run:

```powershell
npm run generate:pdf
```

Expected:

```text
PDF gerado em ...\public\kaique-albuquerque-curriculo.pdf
```

- [ ] **Step 2: Confirm PDF exists**

Run:

```powershell
Test-Path public\kaique-albuquerque-curriculo.pdf
```

Expected: `True`

- [ ] **Step 3: Run full build**

Run:

```powershell
npm run build
```

Expected: PDF generation runs first, then TypeScript and Vite build pass.

- [ ] **Step 4: Commit generated PDF**

```powershell
git add public/kaique-albuquerque-curriculo.pdf
git commit -m "build: generate resume pdf artifact"
```

## Task 7: Final Verification

**Files:**
- No planned edits unless verification finds issues.

- [ ] **Step 1: Search for old CTA text**

Run:

```powershell
rg -n "Solicitar PDF" src
```

Expected: No matches.

- [ ] **Step 2: Search for download CTA**

Run:

```powershell
rg -n "Baixar PDF|resumePdf" src
```

Expected: Matches in `src/App.tsx` and `src/data.ts`.

- [ ] **Step 3: Check git status**

Run:

```powershell
git status --short
```

Expected: Only `.superpowers/` may remain untracked.

- [ ] **Step 4: Report results**

Report:

- PDF generation command result.
- Full build result.
- PDF path.
- Whether the CTA now downloads the PDF.

## Self-Review

- Spec coverage: automatic build generation, manual command, Playwright script, print CSS, download CTA, generated artifact, and build failure behavior are all covered.
- Placeholder scan: no placeholder markers or unspecified steps remain.
- Type consistency: `profile.resumePdf` is restored in Task 4 before `App.tsx` uses it.
