# Sinal — Firestore Setup PRD

## Promoção da Sprint 1.0

Este roteiro configura somente o ambiente de produção:

`Firebase projectId: sinaldesk`

---

## Usuário PRD

- E-mail: `walter.udisson@gmail.com`
- UID PRD: `9yY4oQdd4oTzXMuj8GuUhkfZNMg2`

## Perfil global

Crie, se ainda não existir:

`users/9yY4oQdd4oTzXMuj8GuUhkfZNMg2`

Campos:

- `displayName`: `Walter Udisson`
- `email`: `walter.udisson@gmail.com`
- `platformRole`: `superadmin`
- `status`: `active`
- `defaultTenantId`: `sinal-interno`
- `createdAt`: timestamp atual
- `updatedAt`: timestamp atual

## Tenant inicial

Crie, se ainda não existir:

`tenants/sinal-interno`

Campos:

- `name`: `Sinal`
- `slug`: `sinal-interno`
- `status`: `active`
- `plan`: `internal`
- `createdAt`: timestamp atual
- `updatedAt`: timestamp atual

## Membership PRD

Crie:

`tenants/sinal-interno/members/9yY4oQdd4oTzXMuj8GuUhkfZNMg2`

Campos:

- `displayName`: `Walter Udisson`
- `email`: `walter.udisson@gmail.com`
- `role`: `admin`
- `status`: `active`
- `joinedAt`: timestamp atual

## Security Rules

Publique o arquivo raiz:

`firestore.rules`

em:

**Firestore Database → Rules**

## Tickets

Não crie manualmente a coleção `tickets`.

O primeiro sinal em produção criará:

`tenants/sinal-interno/tickets/{ticketId}`

## Smoke test PRD

Após DNS/HTTPS estarem disponíveis:

1. abrir `https://sinal.app.br`;
2. fazer login;
3. confirmar tenant `Sinal`;
4. criar um sinal de teste;
5. conferir o documento no Firestore PRD;
6. realizar logout.
