# Release PRD: Sinal 1.4.1 + 1.4.2 + UX-1

**Estado:** preparação técnica. Não executar procedimentos de implantação sem aprovação explícita.

## Escopo aprovado em HML

- Sprint 1.4.1: resolução obrigatoriamente técnica e privada; mensagem pública opcional; histórico de mudança de status e candidatura manual à Base de Conhecimento
- Sprint 1.4.2: notificação ao solicitante quando o sinal é assumido ou resolvido, com push e link ao sinal, sem conteúdo interno
- UX-1: telas exclusivas para detalhes, conversa pública e resolução; celular imersivo na conversa; navegação/rascunho e correção de rolagem
- Fora do escopo: canais Equipe e Gestão e Central desktop em três colunas

## Arquivos PRD adaptados

- `index.html`: somente o bloco da tela de detalhes foi transplantado de HML; preservar título, barra lateral e identidade visual próprias de PRD.
- `css/app.css`, `js/ui/ticket-detail.js`, `js/ui/overlay-history.js`, `js/services/tickets.service.js`: UX-1 e resolução homologadas.
- `js/main.js`: incorporar integração de resolução e histórico; preservar mensagem genérica VAPID em produção.
- `firestore.rules`: controles da 1.4.1 que autorizam resolução atômica, eventos e documento técnico privado; este arquivo NÃO é publicado apenas por merge no GitHub Pages.
- `functions/index.js`, `functions/status-notifications.js`: notificação de status, idempotência da gravação e links em `https://sinal.app.br/`. As funções antigas `notifyNewTicket` e `notifyNewMessage` permanecem com região explícita `southamerica-east1`.
- `functions/package.json` + `functions/status-notifications.test.cjs`: testes específicos das notificações.
- `service-worker.js`: atualizar somente o nome do cache para `sinal-shell-prd-1.4.2-ux1`; manter intacta a configuração Firebase de PRD.
- `tests/ux1.test.cjs` e `tests/release-prd.test.cjs`: verificações de regressão e isolamento dos ambientes.
- **NÃO substituir** `js/config/firebase.js` de PRD; preservar a chave Web Push já configurada no serviço existente.

## Verificação estática, antes de qualquer publicação

Na branch `release/1.4.2-ux1` do repositório PRD, executar na raiz:

```bash
node --check js/ui/ticket-detail.js
node --check js/ui/overlay-history.js
node --check js/main.js
node --check js/services/tickets.service.js
node --check functions/index.js
node --test tests/ux1.test.cjs tests/release-prd.test.cjs
cd functions && npm ci && npm test
```

**Importante:** esta verificação não publica frontend, Firestore Rules nem Cloud Functions.

## Sequência de publicação com regras de transição

**Não fazer merge agora.** O deploy da função `notifyTicketStatus` no PRD foi realizado e as três funções foram confirmadas via `functions:list`.

A troca de frontend não é atômica para todas as sessões abertas e o service worker pode manter clientes com a interface anterior. Por isso, `firestore.transition.rules` foi preparada a partir das novas regras, acrescentando **somente** a atribuição legada já permitida pelas regras anteriores. As restrições de acesso à solução técnica privada e de resolução em lote permanecem iguais às definitivas.

1. **Antes de publicar:** na branch da release, executar os testes estáticos `node --test tests/ux1.test.cjs tests/release-prd.test.cjs`, `cd functions && npm ci && npm audit && npm test` e, na pasta `tests/security`, `npm install` e `npm test`. Os testes de segurança usam `demo-sinal-prd-release` e emulador local, nunca dados reais do projeto de produção.
2. **Verificação de segurança e autorização separada:** comparar `firestore.transition.rules` com `firestore.rules` e validar que a única concessão adicional é a atribuição antiga já autorizada em PRD. Conferir a janela da implantação e avisar usuários se necessário.
3. **Regras de transição primeiro:** mediante autorização, a partir da raiz, executar `npx firebase-tools deploy --only firestore:rules --project sinaldesk --config firebase.transition.json`. Isso libera tanto o fluxo novo quanto o antigo, sem liberar resolução isolada.
4. **Merge e publicação do frontend:** somente após confirmar o sucesso das regras temporárias, mudar PR #6 de rascunho para revisão e realizar o merge autorizado. Acompanhar a publicação do GitHub Pages de `sinal.app.br` e a renovação do cache da PWA.
5. **Smoke test PRD:** solicitante e atendente, criar/assumir, enviar mensagem, resolver com e sem mensagem pública, privacidade, notificações e push, navegação e rolagem. Validar contas e tickets criados apenas para o teste; não interagir indevidamente com solicitações reais.
6. **Regras definitivas:** quando o frontend atualizado e as sessões antigas tiverem sido tratados, e mediante **nova autorização**, publicar `npx firebase-tools deploy --only firestore:rules --project sinaldesk --config firebase.json`. **Não antecipar esse passo:** ele volta a rejeitar clientes antigos que fazem atribuição simples. Realizar testes de regressão e registrar data da retirada da compatibilidade.

**Rollback:** não publicar as regras definitivas caso a interface nova falhe. Enquanto as regras temporárias estão ativas, o frontend antigo continua autorizado a assumir sinais. Se necessário, reverter o frontend e conservar a regra de transição até encerrar o incidente; em todos os casos, conferir os eventos e dados antes de qualquer reversão de regras.

**Atenção:** deploy Firestore não é efetuado por GitHub Pages. Usar sempre projeto explícito `--project sinaldesk`; nunca usar `--only functions` genérico nesta etapa. A função de status já está implantada e a atualização de `functions/package.json` nesta branch não implica novo deploy.

## Estado das aprovações

HML 1.4.1, HML 1.4.2 e HML UX-1: homologados. PRD: nenhuma alteração publicada por esta branch; integração e deploy aguardam nova autorização.
