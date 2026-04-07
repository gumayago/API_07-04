# API de Jogos

API REST com Express e MySQL para gerenciar jogos e categorias.

## Como rodar

```bash
npm install
node index.js
```

Servidor sobe em `http://localhost:3001`

> Certifique-se de ter o MySQL rodando com o banco `jogosdb` criado. Use o arquivo `banco.sql` para isso.

---

## Rotas

### Categorias

| Método | Rota               | Descrição                  |
|--------|--------------------|----------------------------|
| GET    | /categorias        | Lista todas as categorias  |
| GET    | /categorias/:id    | Busca uma categoria por ID |
| POST   | /categorias        | Cria uma nova categoria    |
| PUT    | /categorias/:id    | Atualiza uma categoria     |
| DELETE | /categorias/:id    | Remove uma categoria       |

### Jogos

| Método | Rota          | Descrição               |
|--------|---------------|-------------------------|
| GET    | /jogos        | Lista todos os jogos    |
| GET    | /jogos/:id    | Busca um jogo por ID    |
| POST   | /jogos        | Cria um novo jogo       |
| PUT    | /jogos/:id    | Atualiza um jogo        |
| DELETE | /jogos/:id    | Remove um jogo          |
