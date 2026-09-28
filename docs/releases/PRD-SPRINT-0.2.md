# Sinal — Promoção PRD da Sprint 0.2

**Data:** 2026-09-28  
**Origem:** `Walterudisson/sinal-HML`  
**Destino:** `Walterudisson/sinal`

## Conteúdo promovido

Primeira experiência funcional do Sinal:

- login Firebase;
- persistência de sessão;
- recuperação de senha;
- logout;
- interface mobile-first.

## Alterações exclusivas de ambiente

- Firebase alterado de `sinaldesk-hml` para `sinaldesk`;
- indicadores visuais `HML` removidos;
- domínio de produção definido como `sinal.app.br`;
- arquivo `CNAME` incluído para GitHub Pages.

## Smoke test após publicação

Após o DNS e GitHub Pages estarem ativos em produção:

1. Abrir `https://sinal.app.br`.
2. Confirmar carregamento sem indicação HML.
3. Realizar login com conta válida de PRD.
4. Atualizar a página e confirmar persistência da sessão.
5. Realizar logout.
6. Confirmar retorno à tela de login.

Este smoke test não substitui a homologação funcional já executada em HML.
