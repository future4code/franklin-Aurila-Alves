### Exercício 1
a) apaga a coluna "salary".
b) muda o nome da coluna "gender" para "sex".
c) muda o tipo de dado na coluna "gender" para strings de até 255 caracteres.
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 2
a)UPDATE Actor
  SET 
  name = "Moacyr Franco", 
  birth_date = curdate()
  WHERE id = 003;

b)UPDATE Actor
  SET name = UPPER(name) 
  WHERE name = "Juliana Paes";

  UPDATE Actor
  SET name = LOWER(name) 
  WHERE name = "Juliana Paes";

c)UPDATE Actor
  SET
  name = "Ana",
  birth_date = curdate(),
  salary = 70000,
  gender = "female"
  WHERE id = 005;
  
d)UPDATE Actor
  SET
  name = "João",
  birth_date = curdate(),
  salary = 70000,
  gender = "male"
  WHERE id = 010;
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 : não mudou nada na tabela pois não encontrou a chave primária que foi passada como parâmetro.

### Exercício 3
a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### Exercício 4
a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

### Exercício 5
a) Os dados da tabela foram agrupados de acordo com o valor de gênero

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary DESC;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

### Exercício 6
a) ALTER TABLE Filme CHANGE rating rating FLOAT;

b) UPDATE Filme
  SET
    playing_limit_date = "2022-07-31"
  WHERE id = "001";

c) UPDATE Filme
  SET
    playing_limit_date = "2022-12-31"
  WHERE id = "003";

d) DELETE FROM Filme WHERE id = "002";

  UPDATE Filme
  SET
  synopsis = "aasrfth"
  WHERE id = "002"