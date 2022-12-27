# Boas vindas ao repositório do teste da Cashforce!

 O projeto consiste em uma API que realiza um READ de ordens de notas fiscais. Para criação das tabelas do banco de dados, foi utilizado a técnica de Mapeamento Objeto-Relacional (`ORM`) através do pacote `sequelize` do Node.js.<br />
 A implementação do código foi feita baseada na arquitetura de software MSC (Model-Service-Controller)
 
---

# Tecnologias Usadas
 - Node.js
 - Sequelize
 - Express
 - JavaScript
 - MySQL
 - VUE


### Rodando o Projeto Localmente

1° `git clone git@github.com:albertassihatus/CashforceTest.git` - Clone o repositório para sua máquina<br />

2° `cd CashforceTest` - Entre na pasta do repositório clonado<br />

3° `npm install` - Instale as depedências<br />

4° `npm start` - Execute o programa<br />
**Sugestão: Baixe o programa Insomina para executar cada operação do CRUD: https://snapcraft.io/install/insomnia/ubuntu

#### Conexão com o Banco 

Para que o projeto rode em sua máquina, você deve criar as seguintes variáveis de ambiente:

`host: process.env.HOSTNAME` <br />
`user: process.env.MYSQL_USER`<br />
`password: process.env.MYSQL_PASSWORD` <br />

# Autor
   - Hatus Albertassi
