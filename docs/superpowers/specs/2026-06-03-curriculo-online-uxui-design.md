# Design: melhoria UX/UI do curriculo online

## Contexto

O projeto e um curriculo online em React, TypeScript, Vite e CSS puro. A interface atual ja tem uma base moderna com temas claro, escuro e automatico, hero com foto, experiencia em timeline, formacao, competencias, certificados e links de contato.

O reposicionamento aprovado para a proxima iteracao e um curriculo hibrido com foco principal em Front-end / Full-stack. A pagina deve continuar funcionando bem para recrutadores e RH, mas tambem precisa demonstrar capacidade tecnica por meio de projetos, stack e links verificaveis.

## Objetivos

- Comunicar na primeira dobra o foco em Desenvolvedor Front-end / Full-stack.
- Manter uma identidade visual tech moderna, com dark mode como experiencia primaria e tema claro equivalente.
- Dar destaque a projetos aplicados, combinando cases corporativos e projetos publicos quando houver.
- Melhorar legibilidade, navegacao, semantica HTML e acessibilidade.
- Adicionar CTA visivel para baixar curriculo em PDF.
- Corrigir todos os textos com encoding quebrado.

## Nao objetivos

- Nao criar backend.
- Nao adicionar CMS.
- Nao reescrever o projeto em outro framework.
- Nao trocar CSS puro por biblioteca de UI.
- Nao implementar as mudancas nesta etapa de brainstorming.

## Direcao aprovada

### Estrutura

A estrutura aprovada e o split hibrido:

1. Hero
2. Barra de destaques
3. Experiencia relevante e projetos aplicados
4. Stack tecnica
5. Formacao e certificados
6. Contato final

Essa ordem prioriza leitura rapida para recrutadores e, ao mesmo tempo, coloca provas tecnicas cedo o bastante para avaliadores tecnicos.

### Tom visual

O tom visual aprovado e tech moderno com opcao de tema claro:

- Dark mode como experiencia principal.
- Tema claro com contraste forte e aparencia profissional.
- Cards, profundidade e contraste, mas com menos peso visual que a versao atual.
- Espacamento consistente baseado em escala previsivel.
- Tipografia forte no hero e mais compacta nas secoes internas.

## Arquitetura de UI

### Hero

O hero deve conter:

- Nome.
- Titulo-alvo: "Desenvolvedor Front-end / Full-stack".
- Resumo curto de 2 a 3 linhas com React, TypeScript, APIs, dashboards e produtos internos.
- CTAs principais:
  - Baixar PDF.
  - Ver projetos.
  - Entrar em contato.
- Links para LinkedIn, GitHub e WhatsApp.
- Foto, localizacao, email e stack curta em uma coluna lateral no desktop.

No mobile, o hero deve virar uma coluna unica, com CTAs responsivos e sem quebra visual estranha.

### Barra de destaques

Adicionar uma faixa curta abaixo do hero com 3 ou 4 destaques, por exemplo:

- React + TypeScript.
- Dashboards corporativos.
- Apps internos.
- Dados + IA aplicada.

Essa faixa deve funcionar como leitura rapida de credenciais.

### Experiencia relevante

Manter a experiencia profissional em timeline ou lista estruturada, mas com bullets mais curtos e orientados a impacto.

A experiencia deve destacar:

- Desenvolvimento de interfaces em React.
- Integracoes com API.
- Dashboards e produtos internos.
- Aplicativos internos.
- Lideranca tecnica quando relevante.

### Projetos aplicados

Criar uma secao propria de projetos antes de formacao e certificados. A secao deve combinar:

- Cases corporativos de impacto.
- Projetos publicos/GitHub como prova tecnica.

Projetos iniciais sugeridos:

- Dashboard corporativo em React/Node.
- App corporativo em React Native/Expo.
- Site institucional em React com integracao via API.
- Projetos publicos do GitHub quando houver links relevantes.

Cada card de projeto deve conter:

- Nome.
- Tipo: case corporativo, app interno, site, dashboard ou projeto publico.
- Descricao curta.
- Stack usada.
- Impacto ou resultado.
- Links quando disponiveis.

### Stack tecnica

Substituir a lista longa de competencias por grupos:

- Front-end: React, TypeScript, CSS, responsividade, consumo de APIs.
- Back-end / APIs: Node.js e integracoes.
- Mobile: React Native e Expo.
- Dados / BI: Power BI, dashboards, indicadores.
- IA / Automacao: RAG, embeddings, LangChain, assistentes e automacoes.
- Infra / TI: suporte, redes e coordenacao tecnica.

Os grupos devem ser escaneaveis e evitar tags muito longas.

### Formacao e certificados

Formacao e certificados devem ficar mais compactos que as secoes de experiencia e projetos.

Certificados devem ser priorizados por relevancia para tecnologia. Certificados basicos podem aparecer em lista compacta para nao competir visualmente com projetos.

### Contato final

O rodape deve funcionar como CTA final:

- Email.
- LinkedIn.
- GitHub.
- WhatsApp.
- Baixar PDF.

## Acessibilidade e navegacao

Implementar:

- Navegacao interna para Experiencia, Projetos, Stack, Formacao e Contato.
- `aria-labelledby` nas secoes principais.
- `aria-label` descritivo em links sociais e certificados.
- `rel="noopener noreferrer"` em links externos com `target="_blank"`.
- `aria-hidden="true"` em icones e elementos puramente decorativos.
- Foco visivel para links e botoes.
- Seletor de tema com semantica de grupo.
- Textos de links claros e previsiveis.

## Responsividade

A interface deve ser mobile-first:

- Mobile: uma coluna, CTAs acessiveis, projetos antes de formacao.
- Tablet: grids simples de uma ou duas colunas.
- Desktop: hero em split, experiencia e projetos lado a lado quando houver espaco.

O texto deve permanecer legivel sem overflow, especialmente em tags, botoes e cards.

## Conteudo

Corrigir todos os textos com encoding quebrado antes de qualquer refinamento visual.

Exemplos de problemas atuais:

- Textos renderizados como `CurrÃ­culo`, `ExperiÃªncia` e `SoluÃ§Ãµes` devem ser corrigidos.
- A versao implementada deve escolher uma estrategia unica: texto ASCII sem acentos, ou texto acentuado com arquivos normalizados em UTF-8.

A implementacao deve escolher uma estrategia consistente. Como o projeto atual usa varios textos sem acento no README, uma opcao segura e manter conteudo ASCII. Se forem usados acentos, todos os arquivos devem estar em UTF-8 real.

## Criterios de aceite

- A primeira dobra comunica claramente foco Front-end / Full-stack.
- Existe CTA visivel para baixar PDF no hero.
- Projetos aparecem antes de formacao e certificados.
- Stack tecnica aparece agrupada por categoria.
- Tema claro e escuro mantem contraste e legibilidade.
- Layout funciona em mobile, tablet e desktop.
- Links externos usam atributos seguros.
- Navegacao interna funciona.
- Foco de teclado e visivel.
- Nenhum texto aparece com caracteres quebrados.
- Build do projeto passa sem erro.

## Riscos e decisoes pendentes

- O PDF precisa existir em `public/` ou ser criado antes da implementacao do CTA final.
- Projetos publicos dependem de links reais do GitHub ou demos disponiveis.
- Cases corporativos devem evitar expor dados sensiveis da empresa.
- Se a versao final usar acentos, os arquivos devem ser normalizados para UTF-8 para evitar regressao de encoding.
