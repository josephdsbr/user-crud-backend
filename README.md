<h1 align="center">CRUD de Usuário</h1>
<p align="center">Projeto desenvolvido para ser utilizado como base para o processo de cadastramento, consulta e gerenciamento de usuários.</p>

Tabela de Conteúdos
===================
<p align="center">
    <a href="#informacoes">Informações</a>
    <a href="#features">Features</a>
    <a href="#pre-requisito">Pré-requisito</a>
    <a href="#instalacao">Instalação</a>
    <a href="#como-usar">Como usar</a>
    <a href="#tecnologias">Tecnologias</a>
    <a href="#autor">Autor</a>
</p>

<h4 align="center">Em Desenvolvimento.</h4>

### Informações

Esta api está hospeada neste [link](https://crud-user-example.herokuapp.com) e sua documentação está na pasta `github/files/user-crud-insomnia.json`. Caso você não utilize o Insominia, pode utilizar o [API Transfomer](https://www.apimatic.io/transformer/) para realizar a conversão para outro REST Client.

### Features

- [x] Implementação e Configuração do Sequelize.
- [x] Autenticação via JWT.
- [x] Cadastro de Usuário.
- [x] Consulta dos Detalhes do Usuário.
- [x] Atualização de Usuário.
- [x] Implementação dos Validadores de Dados.
- [ ] Implementação dos Testes Unitários.


### [Pré-requisitos](#pre-requisito)

Antes de começar você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/)
- Um Package Manager ([NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/))
- [Git](https://git-scm.com/)

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

Antes de startar o projeto, será necessário ter um banco de dados SQL ([Postgres](https://www.postgresql.org/), [MySQL](https://www.mysql.com/), etc) e uma secret para o JWT.

Essas informações deverão ser inseridas no arquivo `.env` considerando, como exemplo, as variáveis que estão no arquivo `.env.example`.

```bash
# Executar o sequelize para criar o banco de dados, caso ainda não exista.

$ npx sequelize db:create

# Execute a aplicação em modo de desenvolvimento

$ npm run start

# Por padrão, o servidor está configurado para inicar na porta 3000, contudo isto pode ser configurado alterando a variável PORT no arquivo `.env` - acesse <http://localhost:3000>
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

<a href="https://github.com/josephdsbr">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/42288345?s=460&u=3173ac53eabc99366999615e7a2623bcb6b1560f&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>José Vinícius Santos de Melo</b></sub></a> <a href="https://github.com/josephdsbr" title="Josephdsbr">🚀</a>

Feito com ❤️ por José Vinícius 👋🏽 Entre em contato!

* **Instagram** - [@pajebr](https://www.instagram.com/pajebr/)
* **Linkedin** -  [josephdsbr](https://www.linkedin.com/in/josephdsbr)
* **GitHub** - [josephdsbr](https://github.com/josephdsbr)