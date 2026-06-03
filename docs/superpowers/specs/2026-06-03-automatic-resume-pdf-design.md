# Design: PDF automatico do curriculo no build

## Contexto

O curriculo online e um site React/Vite estatico. Atualmente o CTA do PDF usa email porque nao existe `public/kaique-albuquerque-curriculo.pdf`. O objetivo agora e fazer o PDF ser gerado a partir do proprio site sempre que o build rodar.

## Objetivo

Ao executar:

```bash
npm run build
```

o projeto deve gerar ou atualizar automaticamente:

```text
public/kaique-albuquerque-curriculo.pdf
```

Esse PDF deve refletir o conteudo atual do curriculo online.

## Direcao aprovada

- Gerar o PDF sempre durante `npm run build`.
- Manter um comando manual `npm run generate:pdf` para depuracao e uso direto.
- Atualizar o CTA de `Solicitar PDF` para `Baixar PDF`.
- Falhar o build se o PDF nao puder ser gerado.

## Arquitetura

Adicionar Playwright como dependencia de desenvolvimento e criar um script local:

```text
scripts/generate-pdf.mjs
```

O script deve:

1. Subir uma previa local do site.
2. Abrir o site no Chromium headless.
3. Forcar uma renderizacao adequada para PDF.
4. Gerar `public/kaique-albuquerque-curriculo.pdf`.
5. Encerrar o servidor usado para geracao.

## Scripts

O `package.json` deve passar a ter:

```json
{
  "generate:pdf": "node scripts/generate-pdf.mjs",
  "build": "npm run generate:pdf && tsc -b && vite build"
}
```

## Estilo de impressao

Adicionar regras `@media print` em `src/styles.css` para:

- Usar fundo claro.
- Remover sombras, blur e efeitos pesados.
- Evitar que cards importantes quebrem no meio da pagina.
- Manter textos legiveis.
- Ocultar ou simplificar navegacao que nao faz sentido no PDF.
- Preservar secoes principais: hero, destaques, experiencia, projetos, stack, formacao, certificados e contato.

## CTA

Os botoes principais devem voltar para:

```tsx
<a href="/kaique-albuquerque-curriculo.pdf" className="button button-primary" download>
  Baixar PDF
</a>
```

## Criterios de aceite

- `npm run generate:pdf` cria `public/kaique-albuquerque-curriculo.pdf`.
- `npm run build` tambem cria ou atualiza o PDF antes do build final.
- O botao `Baixar PDF` aponta para o arquivo gerado.
- O PDF usa o conteudo atual do site.
- O PDF fica legivel em A4.
- O build falha se a geracao do PDF falhar.
- `npm run build` termina com sucesso quando tudo esta correto.

## Riscos e observacoes

- A primeira execucao pode exigir download/instalacao do Chromium do Playwright.
- Em ambientes sem browser do Playwright instalado, o comando deve informar claramente como resolver.
- O PDF sera um artefato versionado em `public/`, pois sites estaticos precisam do arquivo pronto para download.
