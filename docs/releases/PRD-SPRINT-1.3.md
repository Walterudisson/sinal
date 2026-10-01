# Sinal — Promoção Sprint 1.3.2

**Origem:** HML homologada em 01/10/2026.  
**Destino:** Firebase `sinaldesk`; domínio `https://sinal.app.br`.

## Entrega
- Notificações in-app e Web Push para novos sinais e mensagens.
- PWA instalável, suporte offline e aviso persistente de nova versão com botão Atualizar agora.
- Correções 1.3.1/1.3.2: erro offline amigável, menu estável, validação de textos e supressão de toasts históricos no login.

## Publicação
1. Revisar esta branch/PR e publicar `firestore.rules` no Firebase PRD.
2. Implantar as duas funções em PRD (`notifyNewTicket`, `notifyNewMessage`) e confirmar gatilhos Firestore ativos.
3. Integrar a branch na `main` e confirmar GitHub Pages/HTTPS em `sinal.app.br`.
4. Realizar smoke test de notificações, dispositivos, sinal novo, mensagens e deep link.

**Atenção:** Este PR não implanta funções nem regras automaticamente.
