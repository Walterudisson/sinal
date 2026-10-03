# Release Sinal 1.4.3: promoção HML → PRD

**Origem homologada:** HML, 7/7 verificações visuais aprovadas pelo responsável; 13 testes de interface/versionamento e 6 testes de notificações aprovados na branch de HML. Não assumir que testes de PRD estão aprovados até executá-los nesta branch.

## Escopo
- Remover card Organização da tela Início e manter indicadores de tickets e Central.
- Mover organização e perfil para Mais, com ambiente e versão.
- Exibir ambiente e versão no rodapé do menu lateral desktop.
- Versionamento centralizado em `js/config/version.js`, versão `1.4.3`.
- Renovar cache de produção para `sinal-shell-prd-1.4.3`.
- Preservar configurações PRD `js/config/firebase.js`, `js/config/notifications.js`, `functions/index.js`, `service-worker.js` (exceto cache), Firestore e dependências de produção.

## Testes antes da publicação
A partir da raiz de `Walterudisson/sinal` na branch `release/1.4.3-home-version`:
```bash
nvm use 22
node --test tests/ux1.test.cjs tests/release-prd.test.cjs tests/release-1.4.3.test.cjs
cd functions
npm ci
npm audit
npm test
```
Não fazer deploy das funções nem das regras do Firestore nesta manutenção de interface.

## Implantação
Após todos os testes passarem, **perguntar ao responsável se a janela de migração PRD é adequada**, antes de qualquer merge. Com autorização explícita, integrar o PR à `main` e acompanhar a atualização do GitHub Pages; recarregar/abrir nova sessão da PWA para atualizar cache.

## Smoke test PRD
1. Início sem card Organização, Meus sinais e Central preservados.
2. Mais: organização/perfil e Produção (PRD), v1.4.3.
3. Sidebar desktop: PRD e v1.4.3.
4. Celular/PWA: informações no Mais e navegação preservada.
5. Criar/assumir um sinal de teste para verificação de regressão.

Sem mudanças de regras ou funções no deploy 1.4.3.
