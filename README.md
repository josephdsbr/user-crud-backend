<h1 align="center">CRUD de Usuário</h1>
<p align="center">Projeto desenvolvido para ser utilizado como base para o processo de cadastramento, consulta e gerenciamento de usuários.</p>

Tabela de Conteúdos
===================
<p align="center">
    <a href="#features">Features</a>
    <a href="#pre-requisito">Pré-requisito</a>
    <a href="#instalacao">Instalação</a>
    <a href="#como-usar">Como usar</a>
    <a href="#tecnologias">Tecnologias</a>
    <a href="#autor">Autor</a>
</p>

<h4 align="center">Em Desenvolvimento</h4>

### Features

- [x] Autenticação via JWT
- [x] Cadastro de Usuário
- [x] Consulta dos Detalhes do Usuário
- [x] Atualização de Usuário

### [Pré-requisitos](#pre-requisito)

Antes de começar você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/)
- Package Manager ([NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/))

### Instalação

```bash
# Clone do Repositório

$ git clone <https://github.com/josephdsbr/user-crud-backend.git>

# Acesse a pasta do projeto no terminal/cmd

cd user-crud-backend

# Instale as dependências

$ npm install ou yarn
```

### [Como Usar](#como-usar)

Antes de starta o projeto, será ter um banco de dados SQL ([Postgres](https://www.postgresql.org/), [MySQL](https://www.mysql.com/), etc) e uma secret para o JWT.

Essas informações deverão ser inseridas no arquivo `.env` considerando como exemplo as variáveis que estão no arquivo `.env.example`.

```bash
# Execute a aplicação em modo de desenvolvimento

$ npm run start

# O servidor iniciará na porta 3000 - acesse <http://localhost:3000>
```

### Tecnologias

As seguintes ferramentes foram usadas na construção do projeto;

- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)
- [YUP](https://github.com/jquense/yup)

### Autor
---

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/42288345?s=460&u=3173ac53eabc99366999615e7a2623bcb6b1560f&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>José Vinícius Santos de Melo</b></sub></a> <a href="https://github.com/josephdsbr" title="Rocketseat">🚀</a>

Feito com ❤️ por José Vinícius 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/josephdsbr/)](https://www.linkedin.com/in/josephdsbr/) 

[![Gmail Badge](https://img.shields.io/badge/-tgmarinho@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:josephdsbr@gmail.com)](mailto:josephdsbr@gmail.com)