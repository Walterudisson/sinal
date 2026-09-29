# Sinal — Promoção PRD da Sprint 1.1

**Data:** 2026-09-28  
**Origem:** `Walterudisson/sinal-HML`  
**Destino:** `Walterudisson/sinal`

## Versão promovida

Sprint 1.1 — **Central de atendimento e assumir um sinal**

## Funcionalidades promovidas

- Central de atendimento;
- visibilidade da Central por papel;
- indicadores:
  - Novos;
  - Meus;
  - Sem responsável;
- filtros da fila;
- detalhe do sinal;
- ação `Assumir sinal`;
- atualização de `open` para `in_progress`;
- identificação do responsável;
- atualização em tempo real;
- toast `Sinal assumido`;
- suporte ao botão/gesto nativo `Voltar` para fechar:
  - composer;
  - detalhe do sinal.

## Alterações exclusivas de PRD

- Firebase: `sinaldesk`;
- UID PRD: `9yY4oQdd4oTzXMuj8GuUhkfZNMg2`;
- indicadores HML removidos;
- `CNAME` preservado como `sinal.app.br`;
- documentação de promoção adaptada para PRD.

## Smoke test recomendado

1. autenticar em `https://sinal.app.br`;
2. confirmar contexto do tenant;
3. abrir `Central`;
4. validar indicadores;
5. abrir um sinal;
6. assumir o sinal;
7. conferir atualização em tempo real;
8. conferir Firestore;
9. testar botão/gesto `Voltar` com detalhe aberto em smartphone;
10. logout.
