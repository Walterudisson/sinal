# Sinal — Produção

## Release atual
**v1.6.3.1 — Notificações na conversa** (homologada em HML em 17/10/2026)

- Origem: `Walterudisson/sinal-HML` [PR #39](https://github.com/Walterudisson/sinal-HML/pull/39).
- Firebase PRD: `sinaldesk`.
- Site oficial: https://sinal.app.br
- Cache: `sinal-shell-prd-1.6.3.1-conversation-notifications`.

Ajuste: novas mensagens na conversa aberta e visível não exibem toast redundante.
Avisos correspondentes são marcados como lidos, mantendo as notificações para outros sinais
e o comportamento de Web Push em segundo plano. Sem alterações de Firestore Rules ou Cloud Functions.

## Processo
Atualizações são testadas primeiro em `Walterudisson/sinal-HML` (`sinaldesk-hml`).
A implantação em `main` é reservada a versões homologadas.
