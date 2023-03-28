## 2. Pré-requisitos

Antes de executar o projeto, você precisará ter as seguintes ferramentas instaladas em seu computador:

 - [Node.js](https://nodejs.org/en)
 - [Yarn](https://classic.yarnpkg.com/lang/en/docs/)
 - [PostgreSQL](https://www.postgresql.org/download/)

Além disso, é necessário ter um arquivo .env na API contendo as informações de configuração do banco de dados e outras informações de ambiente.

Um arquivo .env.example é fornecido no projeto como modelo.

## 3.Instalação

Para instalar as dependências do projeto, acesse tanto a pasta do APP quando a da API e execute o seguinte comando no terminal:

```
  yarn
```

## 4.Como iniciar a API

Na pasta da API, execute o seguinte comando no terminal:

```
  yarn typeorm migration:run -d ./src/data-source.ts
```
Isso irá rodar as migrações do projeto. Depois, use o seguinte comando no terminal:

```
yarn dev
```
Isso irá rodar a API.

## 5.Como iniciar o APP

É necessario rodar primeiro a API para o projeto rodar corretamente.

Na pasta do APP, execute o seguinte comando no terminal:

```
  yarn start
```
Logo após aperte y
