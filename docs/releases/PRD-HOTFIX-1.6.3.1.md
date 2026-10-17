# Release PRD v1.6.3.1 — Notificações conscientes da conversa

**Homologação:** aprovada em HML em 17/10/2026.
**Origem:** PR #39 de `Walterudisson/sinal-HML`.
**Destino:** `Walterudisson/sinal` (PRD).

## Escopo
- Detectar a conversa visível e em primeiro plano.
- Não apresentar toast redundante para mensagem da conversa visualizada.
- Registrar a notificação como lida com proteção contra operações duplicadas.
- Continuar avisando sobre mensagens de outros sinais.
- Manter Firebase de PRD, Firestore Rules, funções e configuração de notificações.

## Verificação pós-publicação
1. Conferir PRD v1.6.3.1 em Mais.
2. Com duas contas e conversa aberta, receber nova mensagem sem toast redundante.
3. Receber mensagem em outro sinal e verificar toast.
4. Sair da conversa e retornar, conferir indicador de notificações.
5. Testar Chrome no Android e PWA instalada sem limpar dados.
6. Confirmar autenticação e segurança do projeto `sinaldesk`.

A validação do site ao vivo é posterior ao merge e não deve ser presumida.
