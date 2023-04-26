# STORE MANAGER

## Sobre o Projeto!

Eu desenvolvi a minha primeira API usando a arquitetura MSC (model-service-controller)!

A API que eu construí é um sistema de gerenciamento de vendas em dropshipping, onde é possível criar, visualizar, deletar e atualizar produtos e vendas. Para gerenciar os dados, utilizei o banco de dados MySQL. Além disso, fiz questão de que a API fosse RESTful.

## Habilidades Desenvolvidas:

- Desenvolvimento de API usando a arquitetura MSC.
- Arquitetura MSC dividindo as responsabilidades entre as camadas do sistema.
- Programação com MySQL: habilidade para usar o banco de dados MySQL para criar e gerenciar tabelas, e executar consultas para obter dados de forma eficiente.
- Operações de CRUD(criação, leitura, atualização e exclusão) em uma API.

## Métodos utilizados:

- Sequelize(CRUD);
- Arquitetura em camadas;
- Node.js;
- Express;
- MSQL;
- Docker;

## Como executar:
 
 ```bash
 # clone o repositorio
 
- git clone git@github.com:bruna270498/Project-Tryunfo.git

# Rode os serviços node e db

- docker-compose up -d --build

# Entre no docker

- docker exec -it blogs_api bash

# Instale as dependências

- npm install.

# Rode o comando

- npm run dev

# Sem docker

- env $(cat .env) npm run dev

```
