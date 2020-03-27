# Omnistack11

Implementação da semana Omnistack 11.0 com o tema *Be The Hero*. O projeto foi realizado com node.js no Backend,
React.js no Frontend, e uma aplicação mobile com React Native. O projeto *Be The Hero* consiste em uma aplicação que
visa facilitar o cadastro de *ONG'S* sem fim lucrativos, a fim de arrecadar fundos para estes projetos sociais.

### Dia 1 ##

Nesta estapa foram explicados o porquê as tecnologias em Javascript fazem tanto sentido juntas em uma mesma Stack.
Bem como a superioridade de aplicações *SPA* (Single Page Applications) sobre as aplicações tradicionais.
Por fim, um exemplo "Hello World" foi implementado tanto no Backend quanto no Frontend da aplicação.

### Dia 2 ###
 Nesta etapa foram utilizados os principais módulos do desenvolvimento com Node.js, Nodemon, Cors e Knex.js. O Banco de Dados utilizado foi o banco relacional sqlite, que por sua se comunica com a aplicação através do módulo Knex.js. Também foi mostrado como fazer a comunicação com o banco de dados, utilizando conceitos como paginação e relacionamento entre tabelas. Para testar a aplicação foi utilizado o Insomnia, um *Software* que envia requisições htttp para testar uma API Restful. Os seguinte métodos foram implementados:
 > POST - "/ongs". Cria uma ong na aplicação através de um json no body da requisição e retorna um id da ONG criada
 
 > GET - "/ongs". Lista o total de ongs
 
 > POST - "/incidents". Cria um caso na aplicação através de um json no body da requisição uma id da ONG na Header Authorization, a aplicação retorna o id referente ao caso
 
 > GET - "/incidents". Lista o total de casos e retorna a quantidade de casos na header da aplicação
 
 > DELETE - "/incidents/:id". Deleta o id do caso através de uma query na URL e o id da ong na Header Authorization.
 
 > POST - "/sessions". Faz login da ONG através do id da ONG dentro de um json no body da requisição e retorna o nome da ONG.
 
 > POST - "/profile". Retorna o caso através do id da ONG na Header Authorization.
 
 ### Dia 3 ###
 Nesta etapa o frontend da aplicação foi finalizado. Foram introduzidos os conceitos principais do desenvolvimento React.js, Components, useState, useEffect, entre outros. Foram utilizadas algumas dependências, como o React Router Dom e Axios para tornar a aplicação mais dinâmica e comunicar com o Backend, respectivamente. Uma dependência de ícones foi instalada para ser usada na interface da aplicação.

### Dia 4 ###
 Nesta etapa a parte mobile da aplicação foi finalizada, foram apresentados os conceitos de View, Text, Button, FlatList, TouchableOpacity, entre outros. Foram utilizadas as dependências React Router DOM, React Navigation, Expo/Vector_Icons, e por fim, a dependência Axios, para comunicar com o Backend da aplicação. A aplicação foi feita com React Native, utilizando a plataforma Expo, que facilita o desenvolvimento com conceitos com o Live Reload.
