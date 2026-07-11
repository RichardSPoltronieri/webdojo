# Automação de Testes - WebDojo

Projeto de automação de testes End-to-End (E2E) desenvolvido com **Cypress** para validar os principais fluxos da aplicação **WebDojo**.

## 📋 Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Chrome Browser

---

## 🚀 Pré-requisitos

Antes de iniciar, certifique-se de possuir instalado:

- Node.js
- NPM ou Yarn
- Google Chrome

---

## 📦 Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd webdojo
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando a Aplicação

A aplicação **WebDojo** está localizada no mesmo repositório deste projeto.

Antes de executar os testes automatizados, inicie a aplicação:

```bash
npm run dev
```

O comando acima irá disponibilizar a aplicação na porta **3000**.

---

## 🧪 Executando os Testes

### Executar toda a suíte de testes

```bash
npm test
```

Comando executado:

```bash
npx cypress run --browser chrome --config viewportWidth=1440,viewportHeight=900
```

---

### Executar apenas os testes de Login

```bash
npm run test:login
```

Comando executado:

```bash
npx cypress run --browser chrome --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900
```

---

### Executar os testes de Login em resolução Mobile

```bash
npm run test:login:mobile
```

Comando executado:

```bash
npx cypress run --browser chrome --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896
```

---

## 📁 Estrutura do Projeto

```text
.
├── cypress
│   ├── downloads
│   │
│   ├── e2e
│   │   ├── alerts.cy.js
│   │   ├── cep.cy.js
│   │   ├── consultancy.cy.js
│   │   ├── drop.cy.js
│   │   ├── github.cy.js
│   │   ├── hover.cy.js
│   │   ├── iframe.cy.js
│   │   ├── links.cy.js
│   │   ├── login.cy.js
│   │   ├── studio.cy.js
│   │   └── superconsultancy.cy.js
│   │
│   ├── fixtures
│   │   ├── cep.json
│   │   ├── consultancy.json
│   │   └── document.pdf
│   │
│   └── support
│       ├── actions
│       │   └── consultancy.actions.js
│       ├── commands.js
│       ├── e2e.js
│       └── utils.js
│
├── dist
├── node_modules
├── .github
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
├── yarn.lock
└── README.md
```

---

## 📂 Organização das Pastas

### `cypress/e2e`

Contém os cenários automatizados organizados por funcionalidade.

| Arquivo | Descrição |
|----------|-----------|
| alerts.cy.js | Validação de alertas |
| cep.cy.js | Consulta de CEP |
| consultancy.cy.js | Fluxos de consultoria |
| drop.cy.js | Testes de Drag and Drop |
| github.cy.js | Integração com GitHub |
| hover.cy.js | Eventos de Hover |
| iframe.cy.js | Manipulação de iFrames |
| links.cy.js | Validação de links |
| login.cy.js | Fluxos de autenticação |
| studio.cy.js | Funcionalidades da página Studio |
| superconsultancy.cy.js | Fluxos avançados de consultoria |

---

### `cypress/fixtures`

Armazena arquivos utilizados como massa de dados durante a execução dos testes.

Exemplos:

- Arquivos JSON
- Documentos para upload
- Dados mockados

---

### `cypress/support`

Contém arquivos compartilhados entre toda a suíte de testes.

#### `actions/`

Responsável por concentrar ações reutilizáveis utilizadas pelos cenários.

#### `commands.js`

Comandos customizados do Cypress registrados através de:

```javascript
Cypress.Commands.add()
```

#### `utils.js`

Funções auxiliares utilizadas pelos testes.

#### `e2e.js`

Arquivo carregado automaticamente antes da execução dos testes.

---

## 📱 Resoluções Utilizadas

### Desktop

```text
1440 x 900
```

### Mobile

```text
414 x 896
```

---

## 📜 Scripts Disponíveis

| Script | Descrição |
|----------|-----------|
| `npm run dev` | Inicializa a aplicação WebDojo |
| `npm test` | Executa toda a suíte de testes |
| `npm run test:login` | Executa apenas os testes de login |
| `npm run test:login:mobile` | Executa os testes de login em resolução mobile |

---

## 🔄 Fluxo de Execução

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar a aplicação

```bash
npm run dev
```

### 3. Executar os testes

Suíte completa:

```bash
npm test
```

Ou apenas login:

```bash
npm run test:login
```

Ou login mobile:

```bash
npm run test:login:mobile
```

---

## ✅ Boas Práticas Adotadas

- Organização dos testes por funcionalidade
- Reutilização de ações através da pasta `actions`
- Utilização de fixtures para massas de teste
- Comandos customizados do Cypress
- Separação de responsabilidades
- Estrutura escalável para crescimento da suíte

---

## 👨‍💻 Autor

**Richard Soares**

Quality Assurance Engineer