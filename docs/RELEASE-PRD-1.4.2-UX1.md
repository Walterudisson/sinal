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

## Sequência de publicação após autorização específica

A mudança de regras cria dependência entre frontend e backend:

- O frontend **antigo** de PRD assume sinais por atualização simples, sem `lastEventId`; a nova regra exige o evento atômico correspondente.
- O frontend **novo** exige as novas regras para assumir e resolver sinais.
- Portanto, **publicar as regras definitivas antes da mudança do frontend pode interromper os atendimentos antigos**; publicar o frontend antes delas pode deixar as novas ações indisponíveis temporariamente.

Procedimento sugerido para uma janela curta de implantação coordenada, com testes em cada etapa:

1. Confirmar homologação, backup/exportação apropriada, permissões de acesso e janela com baixo volume. **Confirmar explicitamente o projeto Firebase de PRD em todos os comandos.**
2. Implantar primeiro a nova função `notifyTicketStatus` no projeto de PRD usando CLI, sem alterar as funções existentes. Isso é compatível com a versão anterior que ainda não gera `statusEvents`.
3. Preparar a publicação de `firestore.rules` de PRD, conferindo os diffs contra HML. **Não publicá-las antes do instante de transição sem planejar a compatibilidade com o frontend antigo.**
4. Aprovar merge de PRD para acionar a publicação GitHub Pages. Publicar imediatamente as novas regras no Firestore do projeto de PRD. Avisar aos usuários sobre possível intervalo curto até interface e regras estarem sincronizadas; se a indisponibilidade não for aceitável, implementar antes uma transição de regras retrocompatíveis em PR separado.
5. Verificar ambiente real `https://sinal.app.br/` com dois perfis: abrir, assumir, conversar, resolver sem mensagem pública e com mensagem pública; confirmar que o solicitante não acessa documento privado ou conteúdo sensível em notificações. Confirmar push, clique, botão Voltar e PWA instalada.
6. Se ocorrer falha, interromper novos merges/implantações e avaliar rollback **conjunto** das regras e do frontend, não apenas uma das partes.

**Não executar deploy integral de todas as Functions indiscriminadamente**: nesta release, a função adicional é `notifyTicketStatus` e as funções atuais mantêm a região de PRD. Não executar `firebase deploy` sem `--project` e `--only` adequados.

## Estado das aprovações

HML 1.4.1, HML 1.4.2 e HML UX-1: homologados. PRD: nenhuma alteração publicada por esta branch; integração e deploy aguardam nova autorização.
