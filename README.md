# ✅ TaskList

![Continuous Integration](https://github.com/vitorhugcunnha/taskList/actions/workflows/ci.yml/badge.svg)

Aplicação web para gerenciamento de tarefas desenvolvida com **React e TypeScript**, com foco na aplicação prática de conceitos de **Gestão de Configuração de Software, Git, testes automatizados, Integração Contínua e Entrega Contínua (CI/CD)**.

O projeto foi desenvolvido como parte de uma atividade acadêmica de Gestão e Configuração de Software.

---

## 📌 Sobre o projeto

O **TaskList** permite organizar tarefas pessoais de forma simples, armazenando os dados diretamente no navegador.

Além das funcionalidades da aplicação, o projeto também aplica práticas de desenvolvimento e DevOps, como:

- versionamento com Git;
- estratégia de branches;
- Conventional Commits;
- Pull Requests;
- testes automatizados;
- análise estática com ESLint;
- integração contínua com GitHub Actions;
- deploy automatizado com GitHub Pages;
- versionamento semântico de releases.

---

## ✨ Funcionalidades

- ✅ Criar tarefas
- ✏️ Editar tarefas
- 🗑️ Excluir tarefas
- ✔️ Marcar tarefas como concluídas
- 📅 Definir data para conclusão
- 🏷️ Categorizar tarefas
  - Estudo
  - Trabalho
  - Pessoal
- 🔎 Pesquisar tarefas pelo título
- 📋 Filtrar todas as tarefas
- 📆 Filtrar tarefas do dia
- ✅ Filtrar tarefas concluídas
- 💾 Persistir tarefas utilizando Local Storage
- 📱 Interface responsiva

---

## 🚀 Aplicação publicada

A aplicação é publicada automaticamente no **GitHub Pages** após alterações aprovadas na branch `main`.

🔗 **TaskList:**  
https://vitorhugcunnha.github.io/taskList/

> O endereço ficará disponível após a primeira execução bem-sucedida do workflow de deploy na branch `main`.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia            | Finalidade                          |
| --------------------- | ----------------------------------- |
| React                 | Construção da interface             |
| TypeScript            | Tipagem estática                    |
| Vite                  | Build e ambiente de desenvolvimento |
| Lucide React          | Ícones da interface                 |
| Local Storage         | Persistência das tarefas            |
| Vitest                | Testes automatizados                |
| React Testing Library | Testes de componentes React         |
| ESLint                | Análise estática do código          |
| Git                   | Controle de versão                  |
| GitHub                | Hospedagem do repositório           |
| GitHub Actions        | CI/CD                               |
| GitHub Pages          | Hospedagem da aplicação             |

---

## 📁 Estrutura do projeto

```text
taskList/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── EditTaskModal.tsx
│   │   ├── TaskForm.tsx
│   │   └── TaskForm.test.tsx
│   │
│   ├── test/
│   │   └── setup.ts
│   │
│   ├── types/
│   │   └── Task.ts
│   │
│   ├── utils/
│   │   ├── taskStorage.ts
│   │   └── taskStorage.test.ts
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Executando o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/vitorhugcunnha/taskList.git
```

### 2. Entre na pasta

```bash
cd taskList
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibirá um endereço local semelhante a:

```text
http://localhost:5173
```

---

## 🧪 Testes automatizados

O projeto utiliza **Vitest** e **React Testing Library**.

Para executar os testes:

```bash
npm test
```

Para executar os testes continuamente durante o desenvolvimento:

```bash
npm run test:watch
```

A suíte atual possui testes relacionados a:

- carregamento de tarefas;
- armazenamento de tarefas;
- tratamento de dados inválidos no Local Storage;
- renderização do formulário;
- criação de tarefas;
- validação contra tarefas vazias.

---

## 🔍 Análise de código

O ESLint é utilizado para identificar problemas no código antes que uma alteração seja integrada.

Execute:

```bash
npm run lint
```

---

## 🏗️ Build de produção

Para validar e gerar a versão de produção:

```bash
npm run build
```

Os arquivos gerados ficam disponíveis em:

```text
dist/
```

---

## 🌿 Estratégia de branches

O projeto utiliza uma estratégia baseada em branches de desenvolvimento e integração.

```text
feature/*
    │
    ▼
   dev
    │
    ▼
   main
    │
    ▼
Production
```

### `main`

Representa a versão estável da aplicação.

Alterações nessa branch podem gerar uma nova implantação em produção.

### `dev`

Branch utilizada para integração e validação das funcionalidades antes da produção.

### `feature/*`

Branches criadas para desenvolvimento isolado de funcionalidades.

Exemplos utilizados durante o desenvolvimento:

```text
feature/delete-task
feature/edit-task
feature/local-storage
feature/search-tasks
```

Também foram utilizadas branches específicas para qualidade e infraestrutura:

```text
test/task-manager
ci/github-actions
ci/github-pages
docs/readme
```

---

## 📝 Padrão de commits

O projeto utiliza **Conventional Commits**.

Alguns exemplos:

```text
feat: add task editing

feat: add task search

test: add task form and storage tests

style: add task edit modal

chore: configure ESLint

ci: add GitHub Actions workflow

ci: add GitHub Pages deployment
```

Os principais tipos utilizados são:

| Tipo    | Finalidade              |
| ------- | ----------------------- |
| `feat`  | Nova funcionalidade     |
| `fix`   | Correção                |
| `test`  | Testes                  |
| `style` | Alterações visuais      |
| `chore` | Configuração/manutenção |
| `docs`  | Documentação            |
| `ci`    | Pipeline e automação    |

---

## 🔄 Processo de desenvolvimento

Uma alteração normalmente segue o seguinte fluxo:

```text
Criar Issue / identificar alteração
            ↓
Criar feature branch
            ↓
Desenvolvimento
            ↓
Commit
            ↓
Push
            ↓
Pull Request para dev
            ↓
GitHub Actions
            ↓
Lint + Tests + Build
            ↓
Merge em dev
            ↓
Validação
            ↓
Pull Request dev → main
            ↓
GitHub Actions
            ↓
Deploy no GitHub Pages
```

---

## 🔁 Integração Contínua — CI

O projeto possui um workflow de **Continuous Integration** configurado em:

```text
.github/workflows/ci.yml
```

A pipeline é executada automaticamente em Pull Requests e alterações nas branches principais.

As etapas executadas são:

```text
Checkout repository
        ↓
Setup Node.js
        ↓
npm ci
        ↓
npm run lint
        ↓
npm test
        ↓
npm run build
```

Uma alteração deve passar pelas verificações antes de ser considerada válida para integração.

---

## 🚀 Entrega Contínua — CD

O processo de publicação está configurado em:

```text
.github/workflows/deploy.yml
```

Quando uma alteração aprovada chega à branch `main`, o workflow realiza:

```text
main
  ↓
Install dependencies
  ↓
Lint
  ↓
Automated tests
  ↓
Production build
  ↓
Upload artifact
  ↓
GitHub Pages
```

Dessa forma, a aplicação publicada corresponde ao código versionado na branch de produção.

---

## 💾 Persistência de dados

O TaskList não utiliza banco de dados externo.

As tarefas são armazenadas utilizando a API de **Local Storage** do navegador.

A chave utilizada é:

```text
tasklist:tasks
```

Os dados são armazenados em formato JSON.

Exemplo:

```json
[
  {
    "id": "example-id",
    "title": "Estudar React",
    "completed": false,
    "dueDate": "2026-09-30",
    "category": "study"
  }
]
```

---

## 📦 Versionamento

O projeto utiliza **Semantic Versioning (SemVer)**.

O formato utilizado é:

```text
MAJOR.MINOR.PATCH
```

Exemplo:

```text
v1.0.0
```

Onde:

- **MAJOR** representa mudanças incompatíveis;
- **MINOR** representa novas funcionalidades compatíveis;
- **PATCH** representa correções compatíveis.

A versão `v1.0.0` representa a primeira versão estável do TaskList.

---

## 🔐 Segurança e credenciais

O projeto não necessita de credenciais, tokens ou chaves de API para seu funcionamento.

Nenhum segredo é armazenado diretamente no código-fonte.

O deploy utiliza as permissões fornecidas pelo próprio GitHub Actions.

---

## 👨‍💻 Autor

**Vitor Hugo da Cunha**

Projeto desenvolvido para fins acadêmicos, aplicando conceitos de desenvolvimento de software, Gestão de Configuração de Software e práticas DevOps.
