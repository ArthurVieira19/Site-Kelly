# Design

## Visual Theme

Editorial, cálido, orgânico — não corporativo, não clínico-frio. Fundo claro constante (`canvas`), blocos institucionais em verde-sálvia/taupe com cantos assimétricos generosos, um único fio dourado de 1,5px que costura as seções verticalmente. Fotografia real da profissional, sem filtros frios, molduras orgânicas (nunca retângulo duro). Identidade herdada do manual de marca da cliente — não é uma escolha de projeto, é preservação de identidade.

## Color Palette

Tokens fixos em `src/styles/global.css` (`@theme`). Não inventar tons "parecidos".

| Token | Hex | Papel |
|---|---|---|
| `canvas` | `#F7F5F2` | Fundo principal |
| `sage` | `#A8B5A2` | Cor institucional — blocos, botão primário (com texto `graphite`) |
| `taupe` | `#B7A89A` | Fundos secundários, cards |
| `coffee` | `#5C4B43` | Títulos, texto de exibição — só em texto grande (≥18.66px bold / 24px regular) |
| `gold` | `#B99A5A` | Ícones e detalhes, uso raro — nunca em texto corrido |
| `sand` | `#E9E2D8` | Apoio claro, cards, hovers |
| `warmgray` | `#D9D3CC` | Bordas, divisores |
| `terracotta` | `#C98F73` | Acento raríssimo — nunca botão principal, nunca texto pequeno (falha AA) |
| `graphite` | `#3F3F3F` | Texto corrido sempre que `coffee` não atinja 4,5:1 — inclui todo texto sobre `sage`/`taupe` e todo texto de botão |

**Regra de contraste já validada:** nem branco nem `coffee` passam AA para texto normal sobre `sage` (2,1:1 e 3,9:1). Só `graphite` passa (4,9:1). Por isso botões, eyebrows e legendas usam `graphite`; `coffee` fica reservado a títulos grandes.

## Typography

- **Display** — Cormorant Garamond Variable, pesos 400/600. H1 `clamp(2.5rem, 6vw, 4.5rem)`, H2 `clamp(2rem, 4vw, 3rem)`, H3 `1.5rem`. `text-wrap: balance`.
- **Corpo** — Nunito Sans, 400/600. Base 1.0625rem, `line-height: 1.7`. Medida máxima 65ch (`.measure`).
- **Acento** — Parisienne (script), uso disciplinado: hoje só o eyebrow do Hero. Nunca abaixo de 28px, nunca texto essencial sozinho.
- **Caption/eyebrow** — Nunito Sans 600, 0.875rem, uppercase, tracking 0.12em, cor `graphite`.

Fontes self-hosted via `@fontsource*` — sem chamada ao Google Fonts (LGPD/performance).

## Components

- **`.btn` / `.btn-primary` / `.btn-secondary`** — pill, min-height 44px. Primário: fundo `sage`, texto `graphite`. Secundário: borda `graphite`, transparente, inverte no hover.
- **`.radius-organic` / `.radius-organic-flip` / `.radius-organic-lg`** — cantos assimétricos grandes (`0 Xrem 0 Xrem` / invertido), aplicados a fotos e cards `sage`/`taupe`/`sand`.
- **`Icon.astro`** — ícones de linha únicos desenhados à mão (stroke 1,5px, `gold` por padrão), nunca preenchidos, nunca coloridos. Componente único, sem dependência externa.
- **`FioContinuo` / `FioMarker`** — o fio dourado contínuo (`clip-path` animado por scroll) e os marcadores de folha/pomba nas transições de seção. Elemento-assinatura da marca; é o único motion "com destaque" do site.
- **`Container.astro`** — largura máx. `84rem`, padding responsivo `clamp(2.75rem, 9vw, 5rem)`.

## Layout

- Seções de largura total, conteúdo centralizado em `Container`. Padding vertical de seção: `clamp(5rem, 10vw, 9rem)`.
- Ordem das seções é narrativa, não arbitrária (ver Design Principles no PRODUCT.md) — não reordenar sem motivo.
- Fotografia sempre com máscara orgânica assimétrica (`radius-organic*`), nunca retângulo duro nem círculo (círculo foi descartado por ser clichê de "foto de perfil corporativo").
- Mobile-first de verdade: a maioria do tráfego chega pelo Instagram no celular.

## Motion

- Reveal ao rolar em quase todo bloco de conteúdo: opacidade 0→1 + `translateY(16px)→0` + `blur(6px)→0`, `cubic-bezier(0.22, 0.61, 0.36, 1)` (`--ease-calm`), ~650ms, com pequeno stagger entre itens de um mesmo grupo (80-100ms).
- **Progressive enhancement obrigatório**: o estado oculto só é aplicado via classe adicionada pelo próprio script (`js-reveal`), nunca por padrão — conteúdo sem JS, com `prefers-reduced-motion: reduce`, ou impresso permanece sempre visível.
- Fio contínuo: único elemento com "coreografia" própria (desenho progressivo ligado ao scroll via `clip-path`), estático e completo sob `prefers-reduced-motion`.
