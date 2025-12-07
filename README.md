# Projeto Cypress – SauceDemo

Testes automatizados E2E utilizando **Cypress** na aplicação **SauceDemo**.

## Tecnologias

- **Node.js 20+**
- **Cypress 15.7.1**
- **Mochawesome Reporter**
- **JUnit Reporter**
- **GitHub Actions**
- **GitLab CI/CD**

## Instalação

```bash
npm install
```

## Como executar

### Rodar testes no modo interativo

```bash
npm run cy:open:chrome
```

### Rodar testes no modo headless

```bash
npm run cy:run:chrome
```

### Rodar com configurações específicas

#### Ambiente Dev

```bash
npm run cy:open:dev
```

#### Ambiente QA

```bash
npm run cy:open:qa
```

## Relatórios

Os relatórios são gerados automaticamente após a execução dos testes:

- **Mochawesome HTML** — `cypress/reports/html/index.html`
- **JUnit XML** — `cypress/reports/junit/results-[hash].xml`

Para visualizar o relatório HTML após a execução:

```bash
npx open cypress/reports/html/index.html
```

## Estrutura

```
ProjetoCY/
├── cypress/
│   ├── e2e/
│   │   ├── carrinho.cy.js      — testes do carrinho
│   │   └── login.cy.js          — testes de autenticação
│   ├── fixtures/                — dados de teste
│   ├── pages/                   — Page Objects
│   │   ├── cart/
│   │   ├── header/
│   │   ├── inventory/
│   │   └── login/
│   ├── screenshots/             — capturas em falhas
│   └── support/                 — comandos customizados
├── .github/
│   └── workflows/
│       └── ci.yml               — pipeline GitHub Actions
├── cypress.config.js            — configuração principal
├── config-dev.js                — config ambiente Dev
└── config-qa.js                 — config ambiente QA
```

## CI/CD

O projeto está configurado com **GitHub Actions** para execução automática dos testes em:

- Push nas branches `main` e `develop`
- Pull Requests para `main` e `develop`
- Execução manual via `workflow_dispatch`

Os testes rodam em paralelo nos navegadores:

- Chrome
- Firefox
- Edge

Artifacts gerados:

- **Relatórios** (30 dias de retenção)
- **Vídeos** (7 dias - apenas em falhas)
- **Screenshots** (7 dias - apenas em falhas)
