# Sinal — Promoção PRD da Sprint 1.0

**Data:** 2026-09-28  
**Origem:** `Walterudisson/sinal-HML`  
**Destino:** `Walterudisson/sinal`

## Versão promovida

Sprint 1.0 — **Mandar um sinal**

## Funcionalidades promovidas

- autenticação;
- sessão persistente;
- contexto multi-tenant;
- shell mobile-first;
- abertura real de sinal;
- gravação no Firestore;
- listagem de `Meus sinais`;
- atualização em tempo real;
- toast no canto superior direito.

## Alterações exclusivas de PRD

- Firebase: `sinaldesk`;
- indicadores HML removidos;
- `CNAME` com `sinal.app.br`;
- documentação adaptada ao UID PRD.

## Melhoria registrada para sprint futura

No mobile, quando o composer estiver aberto, o botão físico/gesto de voltar do dispositivo deve fechar o composer antes de navegar para fora da aplicação.

A implementação deverá integrar o overlay ao histórico da SPA (`history.pushState` / `popstate`).

## Smoke test

1. carregar `https://sinal.app.br`;
2. autenticar;
3. validar contexto;
4. criar um sinal de teste;
5. confirmar persistência no Firestore PRD;
6. validar logout.
