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
