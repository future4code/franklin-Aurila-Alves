### Exercício 1
a) CREATE TABLE: comando para criar uma tabela
   PRIMARY KEY: identificador necessário    
   VARCHAR(255) : aceita strings de no máximo 255 caracteres
   DATE: aceita datas no formato aaaa-mm-dd
   NOT NULL: não aceita valores nulos

b) SHOW DATABASES: exibe o banco de dados
   SHOW TABLES: exibe as tabelas no atual banco de dados

c) DESCRIBE Actor: mostra informações sobre a estrutura da tabela Actor como tipo de dados, a chave primária, se pode ser nulo

### Exercício 2
b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY': valor duplicado para a chave primária. Como definimos os id como chave primária, não podemos ter mais de um elemento usando um valor de id.

c) Error Code: 1136. Column count doesn't match value count at row 1: os nomes das colunas que serão inseridas não é o mesmo número de campos da tabela. para resolver: adicionar os nomes dos campos "birthday" e "gender", ou apagar todos os nomes pois o número de dados está correto.

d) Error Code: 1364. Field 'name' doesn't have a default value: está faltando os dados da coluna "name", que não pode ser nula. Resolver adicionando um nome e adicionando o parâmetro "name" ou apagando todos os parâmetros do Insert.

e) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1: o valor para "birthday_date" não está na forma correta, deve estar entre aspas.

f) INSERT INTO Actor VALUES(  "006",     "Rodrigo Santoro",     200000,     "1975-08-22",     "male" )	1 row(s) affected	0.203 sec
   INSERT INTO Actor VALUES(  "007",     "Regina Duarte",     100000,     "1947-02-05",     "female" )	1 row(s) affected	0.203 sec

### Exercício 3
a) SELECT * from Actor WHERE gender = "female"
b) SELECT salary from Actor WHERE name = "Tony Ramos";
c) SELECT * from Actor WHERE gender = "invalid"; : Retornou uma linha com "NULL" em todos os campos pois não foi informado ator com esse valor como parâmetro para gender;
d) SELECT id, name, salary from Actor WHERE salary <= 500000;
e) Error Code: 1054. Unknown column 'nome' in 'field list': a coluna "nome" não existe, corrigir para "name". SELECT id, name from Actor WHERE id = "002";


