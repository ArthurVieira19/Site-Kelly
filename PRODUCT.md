# Product

## Register

brand

## Users

Duas personas de mulheres adultas buscando psicoterapia, majoritariamente via Instagram/Google no celular:

- **Mariana, 34** — administradora em Nova Odessa/SP, casada, sobrecarregada entre trabalho e família. Já fez ou faz terapia, busca vínculo mais profundo, escuta acolhedora e direcionamento prático. Perfeccionista, exigente consigo.
- **Beatriz, 24** — analista de marketing em Campinas/SP, solteira, início de vida adulta. Ansiedade, comparação, medo de errar. Provavelmente na primeira terapia da vida — precisa que o processo seja desmistificado.

## Product Purpose

Landing page one-page para Kelly Cristina Cavalcante, psicóloga clínica (abordagem comportamental), atendimento presencial em Nova Odessa/SP e online para todo o Brasil. Objetivo de conversão: clique no WhatsApp com mensagem pré-preenchida. Objetivo secundário: seguir o Instagram. Sucesso = a visitante se reconhece emocionalmente, entende o processo e sente segurança suficiente para dar o primeiro passo — sem nenhum gatilho comercial.

## Brand Personality

Calma, serena, humana, próxima, ética, acolhedora. Autoridade vem da qualidade do cuidado, não de ostentação.

Evita explicitamente: tom comercial/de venda, motivacional em excesso, sensacionalismo, frieza clínica, jargão técnico, generalizações sobre saúde mental, informalidade excessiva.

## Anti-references

Regulado pela Resolução CFP nº 11/2018 (publicidade em psicologia) — estas restrições prevalecem sobre qualquer boa prática de conversão comum em landing pages:

- Nenhum depoimento, avaliação ou caso de paciente (mesmo anonimizado).
- Nenhuma promessa/garantia de resultado, cura ou prazo de melhora.
- Nenhum preço, desconto ou "promoção" exibido na página.
- Nenhum gatilho de urgência ou escassez artificial (contadores, "últimas vagas").
- Nenhuma autopromoção comparativa ("a melhor psicóloga de X").
- Nenhum ícone colorido, emoji, badge de certificado, contador animado, glassmorphism ou sombra pesada.
- Nada que confunda psicologia com coaching ou autoajuda.

## Design Principles

1. **Identificação emocional antes de autoridade.** A narrativa da página é: me reconheço → existe alguém que entende → confio nela → sei o que vai acontecer → não tenho mais motivo pra adiar. A ordem das seções não é arbitrária.
2. **Conversão sem pressão.** CTAs em voz ativa, sem caixa alta, sem urgência — "Conversar pelo WhatsApp", nunca "GARANTA SUA VAGA".
3. **O fio contínuo é o único elemento com destaque animado.** Motion no resto da página é funcional e disciplinado (reveal sutil ao rolar), nunca chamativo por si só.
4. **Paleta e tipografia são do manual de marca da cliente — fixas, não negociáveis.** Cormorant Garamond (display), Nunito Sans (corpo), Parisienne (script, uso mínimo) e os 9 tokens de cor em `src/styles/global.css` não devem ganhar variações nem substitutos "parecidos".
5. **Mobile é o design principal, não a adaptação.** Maior parte do tráfego vem do Instagram no celular.

## Accessibility & Inclusion

WCAG 2.1 AA obrigatório (checklist explícito do briefing do cliente). Já auditado com axe-core (0 violações) — atenção: os tokens `sage` e `taupe` de fundo só passam AA com texto `graphite`, nunca com branco ou `coffee` em corpo de texto normal. `prefers-reduced-motion` respeitado em toda animação (incluindo o fio contínuo, que fica estático). Alvos de toque ≥44px. Todo conteúdo permanece visível e funcional sem JavaScript.
