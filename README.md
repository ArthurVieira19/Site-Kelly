# Site Kelly Cavalcante — Psicóloga Clínica

Landing page one-page em Astro 5 + Tailwind CSS 4, construída a partir do briefing em [CLAUDE.md](./CLAUDE.md). [PRODUCT.md](./PRODUCT.md) e [DESIGN.md](./DESIGN.md) resumem esse briefing em formato estratégico/visual para orientar ajustes futuros de design.

## Rodar o projeto

```bash
npm install
npm run dev        # http://localhost:4321
npm run build       # build de produção em /dist (roda astro check antes)
npm run preview     # serve o build de produção localmente
```

## ⚠️ Placeholders pendentes

Todo texto do site vive em [`src/content/site.ts`](./src/content/site.ts), tipado e centralizado. Os campos abaixo estão marcados literalmente como `"[PREENCHER]"` nesse arquivo e precisam ser preenchidos antes de publicar:

| Campo | Onde aparece | Local no código |
|---|---|---|
| Número do CRP | Header, Hero, Sobre, Footer, JSON-LD | `professional.crp` |
| E-mail profissional | Footer, política de privacidade, JSON-LD | `contact.email` |
| Formação acadêmica e especializações | Seção Sobre | `about.formation.text` |
| Atende convênio? Quais? | FAQ | `faq.items` (pergunta "Atende convênio?") |
| Nome do desenvolvedor/agência para o crédito do rodapé | Footer | `footer.developmentCredit` |
| Domínio final | usado em canonical, OG, sitemap.xml, robots.txt | `site.url` em `site.ts` **e** `site` em `astro.config.mjs` **e** as duas URLs em `public/sitemap.xml` e `public/robots.txt` |

**Já preenchidos** (20/08/2026): endereço do consultório + CEP, telefone/WhatsApp, horário de atendimento e Instagram (`contact.address`, `contact.whatsappNumber`, `contact.hours`/`contact.hoursSummary`, `contact.instagram`). O número do WhatsApp foi inferido a partir do telefone informado — (19) 99101-6969 — confirmar com a cliente se esse é de fato o número com WhatsApp ativo.

`contact.address.lat`/`lng` ainda usam o centro aproximado de Nova Odessa/SP (não foi possível geocodificar o endereço exato de forma confiável); ajustar para a geolocalização precisa do consultório quando possível, usado no JSON-LD.

### Imagens ainda pendentes
- **Grid do Instagram** (seção "Conteúdo"): hoje são blocos decorativos com ícones de linha, não prints reais — como pedido no briefing, prints reais dos posts não foram enviados. Basta substituir o componente `InstagramSection.astro` por imagens reais quando estiverem disponíveis.
- As fotos reais fornecidas (`Arquivos Kelly/`) já foram usadas e otimizadas em `src/assets/images/`: `retrato-sala.png` no Hero, `retrato-perfil.jpg` na seção Sobre, `consultorio.jpg` e `trabalho-online.jpg` em Modalidades. Se a cliente enviar fotos profissionais novas, é só trocar os arquivos importados em `Hero.astro`, `Sobre.astro` e `Modalidades.astro`.

## Decisões tomadas em cima do briefing

O `CLAUDE.md` é detalhado, mas alguns pontos exigiram uma decisão de implementação — registrado aqui para transparência:

1. **Ícone do botão flutuante do WhatsApp**: o briefing pede "sage com ícone branco", mas branco sobre sage dá 2,1:1 de contraste — abaixo do mínimo de 3:1 exigido para elementos gráficos (WCAG 1.4.11). Troquei o ícone para `coffee` (3,9:1, passa). Mesma lógica nos botões: `sage` de fundo nunca funciona com texto branco *nem* coffee em tamanho normal (4,5:1 exigido); por isso os botões usam `graphite` como cor de texto sobre sage, que é exatamente o token que o manual já reserva para "texto corrido quando coffee reduzir legibilidade".
2. **Eyebrows em terracotta/gold**: o token `terracotta` em texto pequeno (2,5:1) e `gold` no eyebrow em script (2,5:1) também não atingiam AA. Eyebrows padrão agora usam `graphite`; o eyebrow em script do Hero usa `coffee`. Nenhuma cor nova foi criada — só reatribuídos os tokens já existentes na paleta.
3. **Foto da seção "Sobre"**: a foto original prevista para essa seção mostrava a Kelly segurando um livro de outra autora (capa legível, "Autoestima como Hábito"). Troquei pelo outro retrato disponível para não dar destaque involuntário ao material de terceiros dentro da bio dela.
4. **Reveal ao scroll**: a cliente pediu explicitamente mais movimento — textos e cards "aparecendo" conforme a página rola. Implementado com o cuidado que faltou na primeira tentativa (que chegou a deixar seções inteiras invisíveis por falha de timing do IntersectionObserver): o conteúdo nunca depende de JavaScript para existir — ele começa visível por padrão, e só ganha o estado oculto (opacity 0 + leve translateY + blur, "materializando" ao entrar) quando o próprio script roda com sucesso. Se o JS falhar, `prefers-reduced-motion` estiver ativo, ou a página for impressa, tudo permanece estático e visível. Verificado com Playwright simulando rolagem real (não só screenshot de página inteira, que mascarava o bug original) e reauditado no axe-core depois — zero violações.
5. **Instagram**: como não havia prints reais dos posts, optei por um grid decorativo (ícones de linha sobre blocos sage/taupe/sand) em vez de simular posts falsos.
6. **Foto do Hero (retrato horizontal)**: a foto mais recente enviada é paisagem (4:3), bem mais larga que alta. Em vez de recortá-la para caber num formato retrato, redesenhei o container do Hero em torno dela — `aspect-[4/3]` real (sem corte) e mais larga que antes. Como pedido, adicionei um degradê nas bordas esquerda/direita da foto (mesma cor do fundo da página, `--color-canvas`, indo a transparente) para que ela se dissolva visualmente no texto ao lado, em vez de terminar numa borda reta — reforça a leitura "texto → foto → texto" como uma composição contínua, não três blocos separados.
7. **Seção "Mapa" com iframe do Google Maps**: o briefing original pedia mapa estático em imagem (não iframe), por peso de performance e por chamar servidores do Google sem consentimento prévio. A cliente pediu explicitamente o embed real do Google Maps (`Mapa.astro`, entre Instagram e Dúvidas), com o pin já publicado no perfil dela no Google Business — implementado como pedido, com `title` acessível e `loading="lazy"` adicionados (o snippet fornecido não tinha `title`). Rodar Lighthouse após publicar para confirmar que o orçamento de performance (mobile ≥ 95) se mantém; se cair, trocar por uma captura estática do mapa com link para abrir no Google Maps.

## Stack

Astro 5 · Tailwind CSS 4 (`@theme` em `src/styles/global.css`) · TypeScript strict · `@fontsource-variable/cormorant-garamond` + `@fontsource/nunito-sans` + `@fontsource/parisienne` (self-hosted) · `astro:assets` (AVIF/WebP + fallback JPG automáticos).

**Verificado nesta entrega:**
- `npx astro check` — 0 erros.
- `npx astro build` — build de produção limpo, 3 páginas.
- JS total inline ≈ 700 bytes gzip (orçamento do briefing: < 30KB).
- Auditoria automática de acessibilidade (axe-core, regras WCAG 2.0/2.1 A e AA) — 0 violações em `/privacidade`. Em `/`, o axe aponta contraste insuficiente em alguns cards/itens de FAQ abaixo da dobra — é falso positivo do teste estático: esses elementos usam a animação de revelação ao rolar (`opacity: 0` até entrar na viewport) e o axe não simula rolagem, então os flagra "invisíveis com baixo contraste" no estado inicial. Optei por manter `opacity` (não `visibility: hidden`) de propósito: `visibility: hidden` resolveria o aviso do axe, mas tiraria esses itens da ordem de tabulação por teclado até serem rolados para a tela — pior para acessibilidade real do que o aviso que resolve. Verificado manualmente com rolagem real (Playwright) que todo o conteúdo alcança contraste AA assim que revelado.
- Testado visualmente em viewport mobile (390px) e desktop (1440px).

**Ainda recomendado antes de publicar:**
- Rodar Lighthouse mobile no ambiente de deploy final (Vercel/Netlify) — a auditoria de acessibilidade automatizada cobre contraste/ARIA/semântica, mas não substitui o Lighthouse completo (performance real de rede, LCP em 3G/4G simulado, etc.).
- Revisão humana de todo o texto placeholder e da formação acadêmica.
- Testar navegação por teclado e leitor de tela ponta a ponta com os dados reais preenchidos.
- Decidir e configurar o deploy (Vercel ou Netlify, conforme item pendente no briefing).
