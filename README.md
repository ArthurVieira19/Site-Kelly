# Site Kelly Cavalcante — Psicóloga Clínica

Landing page one-page em Astro 5 + Tailwind CSS 4, construída a partir do briefing em [CLAUDE.md](./CLAUDE.md).

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
| Número do WhatsApp (formato `5519XXXXXXXXX`) | Botão flutuante, todos os CTAs | `contact.whatsappNumber` |
| E-mail profissional | Footer, política de privacidade, JSON-LD | `contact.email` |
| @ do Instagram + URL | Footer, seção Instagram | `contact.instagram` |
| Endereço completo do consultório (+ CEP) | Modalidades, Footer, JSON-LD | `contact.address` |
| Formação acadêmica e especializações | Seção Sobre | `about.formation.text` |
| Atende convênio? Quais? | FAQ | `faq.items` (pergunta "Atende convênio?") |
| Nome do desenvolvedor/agência para o crédito do rodapé | Footer | `footer.developmentCredit` |
| Domínio final | usado em canonical, OG, sitemap.xml, robots.txt | `site.url` em `site.ts` **e** `site` em `astro.config.mjs` **e** as duas URLs em `public/sitemap.xml` e `public/robots.txt` |

Depois de preencher o endereço real, ajuste também `contact.address.lat`/`lng` (hoje é o centro aproximado de Nova Odessa/SP, usado no JSON-LD) para a geolocalização exata do consultório.

### Imagens ainda pendentes
- **Grid do Instagram** (seção "Conteúdo"): hoje são blocos decorativos com ícones de linha, não prints reais — como pedido no briefing, prints reais dos posts não foram enviados. Basta substituir o componente `InstagramSection.astro` por imagens reais quando estiverem disponíveis.
- As 4 fotos reais fornecidas (`Arquivos Kelly/`) já foram usadas e otimizadas em `src/assets/images/`: retrato do hero, retrato da seção Sobre, foto do consultório e foto do atendimento online. Se a cliente enviar fotos profissionais novas, é só trocar os arquivos importados em `Hero.astro`, `Sobre.astro` e `Modalidades.astro`.

## Decisões tomadas em cima do briefing

O `CLAUDE.md` é detalhado, mas alguns pontos exigiram uma decisão de implementação — registrado aqui para transparência:

1. **Ícone do botão flutuante do WhatsApp**: o briefing pede "sage com ícone branco", mas branco sobre sage dá 2,1:1 de contraste — abaixo do mínimo de 3:1 exigido para elementos gráficos (WCAG 1.4.11). Troquei o ícone para `coffee` (3,9:1, passa). Mesma lógica nos botões: `sage` de fundo nunca funciona com texto branco *nem* coffee em tamanho normal (4,5:1 exigido); por isso os botões usam `graphite` como cor de texto sobre sage, que é exatamente o token que o manual já reserva para "texto corrido quando coffee reduzir legibilidade".
2. **Eyebrows em terracotta/gold**: o token `terracotta` em texto pequeno (2,5:1) e `gold` no eyebrow em script (2,5:1) também não atingiam AA. Eyebrows padrão agora usam `graphite`; o eyebrow em script do Hero usa `coffee`. Nenhuma cor nova foi criada — só reatribuídos os tokens já existentes na paleta.
3. **Foto da seção "Sobre"**: a foto original prevista para essa seção mostrava a Kelly segurando um livro de outra autora (capa legível, "Autoestima como Hábito"). Troquei pelo outro retrato disponível para não dar destaque involuntário ao material de terceiros dentro da bio dela.
4. **Reveal ao scroll**: a cliente pediu explicitamente mais movimento — textos e cards "aparecendo" conforme a página rola. Implementado com o cuidado que faltou na primeira tentativa (que chegou a deixar seções inteiras invisíveis por falha de timing do IntersectionObserver): o conteúdo nunca depende de JavaScript para existir — ele começa visível por padrão, e só ganha o estado oculto (opacity 0 + leve translateY + blur, "materializando" ao entrar) quando o próprio script roda com sucesso. Se o JS falhar, `prefers-reduced-motion` estiver ativo, ou a página for impressa, tudo permanece estático e visível. Verificado com Playwright simulando rolagem real (não só screenshot de página inteira, que mascarava o bug original) e reauditado no axe-core depois — zero violações.
5. **Instagram**: como não havia prints reais dos posts, optei por um grid decorativo (ícones de linha sobre blocos sage/taupe/sand) em vez de simular posts falsos.

## Stack

Astro 5 · Tailwind CSS 4 (`@theme` em `src/styles/global.css`) · TypeScript strict · `@fontsource-variable/cormorant-garamond` + `@fontsource/nunito-sans` + `@fontsource/parisienne` (self-hosted) · `astro:assets` (AVIF/WebP + fallback JPG automáticos).

**Verificado nesta entrega:**
- `npx astro check` — 0 erros.
- `npx astro build` — build de produção limpo, 3 páginas.
- JS total inline ≈ 700 bytes gzip (orçamento do briefing: < 30KB).
- Auditoria automática de acessibilidade (axe-core, regras WCAG 2.0/2.1 A e AA) — 0 violações em `/` e `/privacidade`.
- Testado visualmente em viewport mobile (390px) e desktop (1440px).

**Ainda recomendado antes de publicar:**
- Rodar Lighthouse mobile no ambiente de deploy final (Vercel/Netlify) — a auditoria de acessibilidade automatizada cobre contraste/ARIA/semântica, mas não substitui o Lighthouse completo (performance real de rede, LCP em 3G/4G simulado, etc.).
- Revisão humana de todo o texto placeholder e da formação acadêmica.
- Testar navegação por teclado e leitor de tela ponta a ponta com os dados reais preenchidos.
- Decidir e configurar o deploy (Vercel ou Netlify, conforme item pendente no briefing).
