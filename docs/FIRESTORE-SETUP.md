# Sinal — Firestore Setup PRD

## Sprint 1.2 — Atendimento e conversa

Firebase PRD: `sinaldesk`

### Atualizar Security Rules
Publique o arquivo raiz `firestore.rules` em:

**Firestore Database → Rules**

### Nova estrutura de mensagens
A subcoleção é criada automaticamente no primeiro envio:

`tenants/{tenantId}/tickets/{ticketId}/messages/{messageId}`

Campos:
- `body`
- `visibility: public`
- `authorUid`
- `authorName`
- `authorEmail`
- `authorRole`
- `createdAt`

### Permissões
Solicitante:
- lê e responde no próprio sinal.

Admin / Supervisor / Agente:
- leem os sinais do tenant;
- somente o atendente responsável pode responder.

Mensagens não podem ser editadas ou excluídas.

### Smoke test PRD
1. abrir `https://sinal.app.br`;
2. criar/abrir sinal com solicitante de teste;
3. assumir com atendente/admin;
4. responder pelo atendente;
5. responder pelo solicitante;
6. confirmar atualização em tempo real;
7. conferir `messages/{messageId}` no Firestore PRD;
8. testar botão/gesto Voltar no mobile;
9. logout.
