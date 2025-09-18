# ProjetoCY - Cypress E2E Testing

Este projeto contém testes automatizados end-to-end (E2E) utilizando Cypress para validar funcionalidades da aplicação SauceDemo.

## 🎯 Sobre o Projeto

Este projeto implementa testes automatizados para validar as principais funcionalidades de um e-commerce (SauceDemo), incluindo:
- Autenticação de usuários
- Gerenciamento de carrinho de compras
- Validação de cenários de sucesso e erro

## 🛠️ Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** - Framework de testes E2E
- **[cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)** - Relatórios HTML detalhados
- **[cypress-multi-reporters](https://www.npmjs.com/package/cypress-multi-reporters)** - Múltiplos formatos de relatório
- **[mocha-junit-reporter](https://www.npmjs.com/package/mocha-junit-reporter)** - Relatórios JUnit XML

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/                          # Arquivos de teste
│   ├── carrinho.cy.js           # Testes do carrinho
│   └── login.cy.js              # Testes de login
├── fixtures/                    # Dados de teste
│   └── example.json
├── reports/                     # Relatórios gerados
│   ├── html/                    # Relatórios HTML
│   │   └── index.html
│   └── junit/                   # Relatórios JUnit XML
├── screenshots/                 # Screenshots dos testes
│   ├── carrinho.cy.js/
│   └── login.cy.js/
└── support/                     # Arquivos de configuração
    ├── commands.js              # Comandos customizados
    └── e2e.js                   # Configurações globais
```

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/ucgfilho/ProjetoCY.git
cd ProjetoCY
```

2. Instale as dependências:
```bash
npm install
```

## 🧪 Execução dos Testes

### Modo Interativo (Cypress Test Runner)
```bash
npm run cy:open:chrome
```

### Modo Headless (Linha de Comando)
```bash
npm run cy:run:chrome
```

### Executar arquivo específico
```bash
npx cypress run --spec "cypress/e2e/login.cy.js" --browser chrome
```

## 📊 Relatórios

O projeto gera dois tipos de relatórios automaticamente após a execução dos testes:

### Relatório HTML (Mochawesome)
- **Localização**: `cypress/reports/html/index.html`
- **Características**:
  - Interface visual atraente
  - Screenshots incorporadas
  - Gráficos de resultados
  - Título personalizado: "Relatório de testes"

### Relatórios JUnit XML
- **Localização**: `cypress/reports/junit/`
- **Formato**: `results-[hash].xml`
- **Uso**: Integração com ferramentas de CI/CD

## 🔧 Comandos Customizados

O projeto inclui comandos customizados definidos em `cypress/support/commands.js`:

### `cy.login()`
Realiza login com credenciais válidas:
- **Usuário**: `standard_user`
- **Senha**: `secret_sauce`

### `cy.loginError()`
Realiza tentativa de login com credenciais inválidas:
- **Usuário**: `user.invalido`
- **Senha**: `senha.invalida`

## ⚙️ Configurações

### `cypress.config.js`
Principais configurações:
- **Relatórios**: Múltiplos reporters habilitados
- **Segurança**: `chromeWebSecurity: false`
- **Screenshots**: Incorporadas nos relatórios
- **Assets**: Inline para portabilidade
```

## 📈 Resultados dos Últimos Testes

- **Total de Testes**: 4
- **Sucessos**: 4 ✅
- **Falhas**: 0 ❌
- **Taxa de Sucesso**: 100%
- **Duração Total**: ~14.4 segundos

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

**Desenvolvido com ❤️ usando Cypress**
