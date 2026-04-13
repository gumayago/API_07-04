    
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) window.location.href = "index.html";

async function carregarCategoriasSelect(categoria_id_atual) {
  const response = await fetch(`http://localhost:3001/categorias`);
  const data = await response.json();
  const select = document.getElementById("jogo-categoria_id");
  select.innerHTML = data
    .map(c => `<option value="${c.id}" ${c.id === categoria_id_atual ? "selected" : ""}>${c.nome}</option>`)
    .join("");
}

async function carregarJogo() {
  const response = await fetch(`http://localhost:3001/jogos/${id}`);
  if (!response.ok) {
    alert("Jogo não encontrado.");
    window.location.href = "index.html";
    return;
  }
  const data = await response.json();
  document.getElementById("jogo-nome").value = data.nome;
  document.getElementById("jogo-genero").value = data.genero;
  await carregarCategoriasSelect(data.categoria_id);
}

document.getElementById("update-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = document.getElementById("jogo-nome").value;
  const genero = document.getElementById("jogo-genero").value;
  const categoria_id = +document.getElementById("jogo-categoria_id").value;

  const response = await fetch(`http://localhost:3001/jogos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, genero, categoria_id })
  });

  if (response.ok) {
    alert("Jogo atualizado!");
    window.location.href = `jogo.html?id=${id}`;
  } else {
    alert("Erro ao atualizar jogo.");
  }
});

carregarJogo();