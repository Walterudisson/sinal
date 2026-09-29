# Sinal — Firestore Setup PRD

## Promoção da Sprint 1.1

Ambiente:

`Firebase projectId: sinaldesk`

## 1. Pré-condição

A estrutura PRD da Sprint 1.0 deve continuar existente:

```text
users/9yY4oQdd4oTzXMuj8GuUhkfZNMg2

tenants/sinal-interno

tenants/sinal-interno/members/9yY4oQdd4oTzXMuj8GuUhkfZNMg2
```

Usuário PRD:

- E-mail: `walter.udisson@gmail.com`
- UID: `9yY4oQdd4oTzXMuj8GuUhkfZNMg2`

Se a Sprint 1.0 já está operante em PRD, não é necessário recriar esses documentos.

## 2. Atualizar Security Rules

No Firebase Console de produção:

**Firestore Database → Rules**

Substitua as regras atuais pelo conteúdo do arquivo:

`firestore.rules`

e clique em **Publish**.

## 3. O que muda nesta versão

Perfis `admin`, `supervisor` e `agente` do tenant passam a poder:

- ler os sinais da organização;
- visualizar a Central;
- assumir sinal ainda aberto e sem responsável.

Ao assumir, somente estes campos podem mudar:

- `status`: `open` → `in_progress`
- `assigneeUid`
- `assigneeName`
- `assigneeEmail`
- `updatedAt`

## 4. Resultado esperado ao assumir

No usuário PRD atual:

```text
status: in_progress
assigneeUid: 9yY4oQdd4oTzXMuj8GuUhkfZNMg2
assigneeName: Walter Udisson
assigneeEmail: walter.udisson@gmail.com
updatedAt: <timestamp servidor>
```

## 5. Nenhuma nova coleção manual

Esta sprint não exige criação manual de coleção ou documento adicional.

## 6. Smoke test PRD

Após publicar os arquivos e as Rules:

1. abrir `https://sinal.app.br`;
2. fazer login;
3. abrir `Central`;
4. confirmar que os sinais aparecem;
5. abrir um sinal novo;
6. clicar em `Assumir sinal`;
7. confirmar toast `Sinal assumido`;
8. confirmar que o ticket sai de `Novos` e aparece em `Meus`;
9. conferir os campos no Firestore PRD;
10. validar logout.

A homologação funcional completa já foi executada em HML. Em PRD é necessário apenas o smoke test orientado à promoção.
