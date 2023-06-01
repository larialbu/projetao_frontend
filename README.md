Para fucionar irá precisar baixar algumas dependências

#para ativar o react:
#usar (cd frontend) e add os comandos abaixo:
1- npm install --save react-toastify
2- npm install axios --save
3- npm i styled-components 
4- npm install react-icons
5- npm install react-router-dom

#para ativar o node js:
1- npm install --save yarn

# para criar o banco de dados segue  os codigos:
CREATE TABLE `crud`.`usuarios`(
 `id` INT NOT NULL AUTO_INCREMENT,
 `nome` VARCHAR(255) NOT NULL,
 `descricao` VARCHAR(255) NOT NULL,
 `hora_inicio` DATE NOT NULL,
 `hora_termino` DATE NOT NULL,
 `status` TIME NOT NULL,
 PRIMARY KEY (`id`));


