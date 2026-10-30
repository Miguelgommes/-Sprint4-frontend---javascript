# JOVI STUDY CAM

Landing Page do **JOVI STUDY CAM**: a câmera de celular com IA integrada que transforma qualquer conteúdo fotografado (página de livro, slide, anotação, quadro) em resumo e quiz, mostrando ao final os pontos fortes e fracos do estudante.

Projeto da **Sprint 4 – Front-End Design + Web Development**. É a evolução da Landing Page entregue na Sprint 3 (HTML + CSS puro), agora integrada ao **React** e estilizada com **Tailwind CSS**, mantendo a mesma solução da Challenge. Nesta sprint foram acrescentados: **rotas públicas e privadas**, **hooks customizados**, **consumo de API** (quiz e dicas de revisão) e **login** para acessar o painel do estudante.

## 🔗 Links

- [Deploy na Vercel](https://sprint4-frontend-javascript.vercel.app/)
- [Repositório Git](https://github.com/Miguelgommes/-Sprint4-frontend---javascript.git)

## 🛠️ Tecnologias utilizadas

- [React 19](https://react.dev/) – componentização da interface
- [Vite 7](https://vite.dev/) – servidor de desenvolvimento e build
- [React Router 7](https://reactrouter.com/) – rotas públicas e privadas
- [Tailwind CSS 4](https://tailwindcss.com/) – estilização (plugin oficial `@tailwindcss/vite`)
- Git + [Vercel](https://vercel.com/) – versionamento e publicação

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) **20.19 ou superior** (ou 22+), que já inclui o `npm`

Para conferir: `node -v` e `npm -v`.

## 📦 Como instalar as dependências

Dentro da pasta do projeto (onde está o `package.json`):

```bash
npm install
```

## ▶️ Como executar o projeto

```bash
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

Para gerar e testar a versão de produção:

```bash
npm run build
npm run preview
```

## 🖥️ Como executar os servidores

O projeto **não possui Back-End**: é uma aplicação somente Front-End. Basta o `npm run dev`. A "API" consumida é própria e estática: os arquivos JSON ficam em `public/api/` e são servidos junto com o site (`/api/quiz.json` e `/api/revisao.json`), então não é preciso subir nenhum servidor extra.

## 🔐 Usuários e senhas para teste

O projeto possui uma autenticação simulada (sem Back-End; a sessão fica no `localStorage`). Usuários de teste:

| E-mail | Senha |
|---|---|
| `aluno@jovi.com` | `jovi123` |
| `professor@fiap.com.br` | `fiap2026` |

## 🗺️ Rotas

| Rota | Tipo | Descrição |
|---|---|---|
| `/` | Pública | Landing Page (Hero, Solução, Público-Alvo, Galeria, Equipe e Contato) |
| `/quiz` | Pública | Quiz com perguntas carregadas da API; mostra pontos fortes e fracos ao final |
| `/login` | Pública | Tela de login |
| `/painel` | **Privada** | Painel do estudante: histórico de quizzes, desempenho por tema e o que revisar. Sem login, redireciona para `/login` e volta ao painel depois de entrar |
| `*` | Pública | Página 404 |

A proteção é feita pelo componente `ProtectedRoute` (`src/routes/ProtectedRoute.jsx`).

## 🪝 Hooks

- **Nativos do React:** `useState`, `useEffect`, `useMemo`, `useCallback`, `useContext`, `createContext`.
- **Do React Router:** `useNavigate`, `useLocation`.
- **Customizados** (`src/hooks/`):
  - `useFetch(url)`: consome a API e devolve `{ dados, carregando, erro }`.
  - `useLocalStorage(chave, valorInicial)`: estado sincronizado com o `localStorage`.
  - `useAuth()`: acesso ao usuário logado e às funções `entrar` e `sair` (usa o `AuthContext`).

## 🌐 Consumo de API

- `GET /api/quiz.json`: perguntas do quiz (página `/quiz`).
- `GET /api/revisao.json`: dicas de revisão por tema (página `/painel`).

Ambas são consumidas pelo hook `useFetch`, com estados de carregamento e de erro tratados na tela.

## 📱 Responsividade

O layout foi construído com a abordagem *mobile-first* do Tailwind, usando os breakpoints `sm` (≥640px), `md` (≥768px) e `lg` (≥1024px):

| Dispositivo | Comportamento |
|---|---|
| Mobile | Menu em formato hambúrguer, seções em 1 coluna, botão do formulário em largura total |
| Tablet | Grids de 2 colunas (público-alvo, galeria, equipe), menu horizontal a partir de 768px |
| Desktop | Grids de 3–4 colunas, Hero em duas colunas (texto + vídeo) |

## 🧩 Estrutura do projeto

```
projeto/
├── public/images/        # imagens e vídeo do projeto
├── public/api/           # API própria (JSON): quiz e dicas de revisão
├── vercel.json           # reescrita para o React Router funcionar na Vercel
├── src/
│   ├── components/       # Layout, Header, Hero, Solution, Audience, Gallery, Team, Contact, Footer, QuestionCard, ThemeBars + Section e Button (reutilizáveis)
│   ├── pages/            # Home, Quiz, Login, Dashboard (privada) e NotFound
│   ├── routes/           # ProtectedRoute (rota privada)
│   ├── context/          # AuthContext (login)
│   ├── hooks/            # useFetch, useLocalStorage, useAuth
│   ├── utils/            # cálculo de desempenho por tema
│   ├── data/             # content.js (textos) e users.js (usuários de teste)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         # import do Tailwind e tema (cores e fontes)
├── index.html
├── vite.config.js
├── package.json
├── README.md
└── INTEGRANTES.TXT
```

## 🤖 Uso de Inteligência Artificial

A IA (Claude, da Anthropic) foi utilizada na **migração da Landing Page da Sprint 3 (HTML/CSS) para React + Tailwind CSS** (conversão das seções em componentes, tradução do CSS original para classes do Tailwind e ajuste da responsividade) e na **implementação dos requisitos da Sprint 4**: configuração das rotas públicas e privadas com React Router, criação dos hooks customizados, do login simulado, da página de quiz e do painel do estudante. O conteúdo, a solução e as telas do protótipo JOVI STUDY CAM são da própria equipe. Todo o código gerado foi revisado e testado pelo grupo.

## 🚀 Deploy (Git + Vercel)

1. Suba o projeto para um repositório no GitHub (`git init`, `git add .`, `git commit`, `git push`).
2. Na Vercel, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta o Vite automaticamente (Build Command: `npm run build` · Output Directory: `dist`). O arquivo `vercel.json` já faz as rotas (`/quiz`, `/login`, `/painel`) funcionarem ao recarregar a página.
4. Clique em **Deploy** e copie o link gerado para a seção "Links" acima.

## 👥 Integrantes

Veja o arquivo `INTEGRANTES.TXT`.
