const express = require("express");
const mysql = require("mysql2/promise");
const path = require("path");

const app = express();
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "senacrs",
  database: "jogosdb",
});

// ── CATEGORIAS ─────────────────────────────────────────
app.get("/categorias", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM categorias");
  res.json(rows);
});

app.get("/categorias/:id", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM categorias WHERE id = ?", [req.params.id]);
  if (!rows.length) return res.status(404).json({ erro: "Categoria nao encontrada" });
  res.json(rows[0]);
});

app.post("/categorias", async (req, res) => {
  const { id, nome } = req.body;
  await db.query("INSERT INTO categorias VALUES (?, ?)", [id, nome]);
  res.status(201).json(req.body);
});

app.put("/categorias/:id", async (req, res) => {
  const { nome } = req.body;
  await db.query("UPDATE categorias SET nome=? WHERE id=?", [nome, req.params.id]);
  res.json({ id: req.params.id, nome });
});

app.delete("/categorias/:id", async (req, res) => {
  await db.query("DELETE FROM categorias WHERE id=?", [req.params.id]);
  res.json({ deleted: req.params.id });
});

// ── JOGOS ──────────────────────────────────────────────
app.get("/jogos", async (req, res) => {
  const [rows] = await db.query(`
    SELECT jogos.*, categorias.nome AS categoria
    FROM jogos
    LEFT JOIN categorias ON jogos.categoria_id = categorias.id
  `);
  res.json(rows);
});

app.get("/jogos/:id", async (req, res) => {
  const [rows] = await db.query(`
    SELECT jogos.*, categorias.nome AS categoria
    FROM jogos
    LEFT JOIN categorias ON jogos.categoria_id = categorias.id
    WHERE jogos.id = ?
  `, [req.params.id]);
  if (!rows.length) return res.status(404).json({ erro: "Jogo nao encontrado" });
  res.json(rows[0]);
});

app.post("/jogos", async (req, res) => {
  const { id, nome, genero, categoria_id } = req.body;
  await db.query("INSERT INTO jogos VALUES (?, ?, ?, ?)", [id, nome, genero, categoria_id]);
  res.status(201).json(req.body);
});

app.put("/jogos/:id", async (req, res) => {
  const { nome, genero, categoria_id } = req.body;
  await db.query("UPDATE jogos SET nome=?, genero=?, categoria_id=? WHERE id=?", [nome, genero, categoria_id, req.params.id]);
  res.json({ id: req.params.id, nome, genero, categoria_id });
});

app.delete("/jogos/:id", async (req, res) => {
  await db.query("DELETE FROM jogos WHERE id=?", [req.params.id]);
  res.json({ deleted: req.params.id });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(3001, () => console.log("Rodando em http://localhost:3001"));
