CREATE DATABASE IF NOT EXISTS jogosdb;
USE jogosdb;

CREATE TABLE IF NOT EXISTS categorias (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS jogos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  genero VARCHAR(100) NOT NULL,
  categoria_id INT,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Categorias
INSERT IGNORE INTO categorias VALUES (1, 'Ação');
INSERT IGNORE INTO categorias VALUES (2, 'RPG');
INSERT IGNORE INTO categorias VALUES (3, 'Aventura');
INSERT IGNORE INTO categorias VALUES (4, 'Esporte');
INSERT IGNORE INTO categorias VALUES (5, 'Estratégia');

-- Jogos
INSERT IGNORE INTO jogos VALUES (1, 'God of War', 'Ação', 1);
INSERT IGNORE INTO jogos VALUES (2, 'The Witcher 3', 'RPG', 2);
INSERT IGNORE INTO jogos VALUES (3, 'Zelda: Breath of the Wild', 'Aventura', 3);
INSERT IGNORE INTO jogos VALUES (4, 'FIFA 24', 'Futebol', 4);
INSERT IGNORE INTO jogos VALUES (5, 'Age of Empires IV', 'Estratégia', 5);
INSERT IGNORE INTO jogos VALUES (6, 'Dark Souls III', 'Ação', 1);
INSERT IGNORE INTO jogos VALUES (7, 'Elden Ring', 'RPG', 2);
INSERT IGNORE INTO jogos VALUES (8, 'Red Dead Redemption 2', 'Aventura', 3);
