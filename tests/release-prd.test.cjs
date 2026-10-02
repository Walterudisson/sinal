const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const root = join(__dirname, '..');
const read = (file) => readFileSync(join(root, file), 'utf8');
const html = read('index.html');
const main = read('js/main.js');
const sw = read('service-worker.js');
const config = read('js/config/firebase.js');
const functions = read('functions/index.js');
const rules = read('firestore.rules');

test('identidade e Firebase são os de produção', () => {
  assert.match(html, /<title>Sinal\.<\/title>/);
  assert.match(html, />Produção</);
  assert.doesNotMatch(html, /Homologação \(HML\)/);
  assert.match(config, /projectId:\s*'sinaldesk'/);
  assert.match(sw, /projectId:\s*'sinaldesk'/);
  assert.doesNotMatch(sw, /sinaldesk-hml/);
  assert.match(sw, /sinal-shell-prd-1\.4\.2-ux1/);
});

test('a UX-1 e resolução foram conectadas ao app PRD', () => {
  assert.match(html, /id="ticket-conversation-view"/);
  assert.match(html, /id="ticket-resolution-view"/);
  assert.match(html, /id="open-conversation-button"/);
  assert.match(main, /onResolve:\s*async/);
  assert.match(main, /onObserveStatusEvents:/);
});

test('funções conservam domínio e região de produção', () => {
  assert.match(functions, /APP_BASE_URL = 'https:\/\/sinal\.app\.br\/'/);
  assert.doesNotMatch(functions, /walterudisson\.github\.io|sinal-HML/);
  assert.match(functions, /exports\.notifyTicketStatus/);
  assert.match(functions, /document: 'tenants\/\{tenantId\}\/tickets\/\{ticketId\}', region: 'southamerica-east1'/);
  assert.match(functions, /document: 'tenants\/\{tenantId\}\/tickets\/\{ticketId\}\/messages\/\{messageId\}', region: 'southamerica-east1'/);
});

test('regra de resolução mantém dados técnicos privados', () => {
  assert.match(rules, /resolutionPath/);
  assert.match(rules, /statusEventPath/);
  assert.match(rules, /getAfter/);
});
