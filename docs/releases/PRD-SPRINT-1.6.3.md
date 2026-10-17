# Sinal — Release de produção v1.6.3

**Data:** 17/10/2026  
**Origem homologada:** `Walterudisson/sinal-HML`, PR #38  
**Destino:** `Walterudisson/sinal`, `main` após aprovação e merge  
**Escopo:** correções de estabilidade da v1.6.2.2

## Alterações
- Central reinicializa contexto, filtros e notificações ao mudar de usuário no mesmo navegador.
- Persistência de filtros torna-se opcional quando `sessionStorage` está bloqueado.
- Início não conserva contadores e sinais do login anterior.
- Logout limpa contadores visuais de notificações e marcadores de mensagens da Central.
- Botão Assumir volta ao estado original após falha.
- PWA tolera armazenamento restrito no fluxo de atualização.
- Versão e cache PWA identificados como `1.6.3` em PRD.
- Testes legados alinhados à release e novos testes de regressão.

## Preservação de ambiente
- `js/config/firebase.js` **não deve ser modificado** e segue no projeto `sinaldesk`.
- `js/config/notifications.js` **não deve ser modificado**.
- `service-worker.js`: somente cache alterado; credenciais/configuração de Firebase Messaging de PRD permanecem intactas.
- `index.html`, `firestore.rules`, `firebase.json`, `functions/` e modelos de dados sem modificações nesta release.

## Checklist de smoke test após merge
1. Abrir https://sinal.app.br e conferir `PRD v1.6.3` no menu Mais e na barra lateral.
2. Entrar como solicitante: Início, Meus sinais, conversa e avisos.
3. Entrar como atendente: Central, filtros, busca, Início e Assumir.
4. Alternar entre contas no mesmo navegador e confirmar ausência de dados visuais da outra conta.
5. Validar PWA instalada no Android, versão atualizada sem limpeza de dados.
6. Confirmar notificações e que Firebase permanece apontado a `sinaldesk`.

**Observação:** merge de código não substitui a conferência de publicação do GitHub Pages nem teste funcional com usuários reais. Homologação anterior foi feita em HML.
