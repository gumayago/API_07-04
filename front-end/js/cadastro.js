async function carregarCategoriasSelect() {
    const response = await fetch("http://localhost:3001/categorias")
    const data = await response.json()
    const select = document.getElementById("jogo-categoria_id");
    select.innerHTML = data
        .map(c => `<option value="${c.id}">${c.nome}</option>`)
        .join("");
}

carregarCategoriasSelect()

document.getElementById("categoria-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("categoria-nome").value;

    const response = await fetch("http://localhost:3001/categorias", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome })
  });

  if (response.ok) {
    alert("Categoria cadastrada!");
    e.currentTarget.reset();
    carregarCategoriasSelect();
  } else {
    alert("Erro ao cadastrar categoria.");
  }
});

document.getElementById("jogo-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("jogo-nome").value;
  const genero = document.getElementById("jogo-genero").value;
  const categoria_id = +document.getElementById("jogo-categoria_id").value;

  const response = await fetch(`http://localhost:3001/jogos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, genero, categoria_id })
  });

  if (response.ok) {
    alert("Jogo cadastrado!");
    e.currentTarget.reset();
  } else {
    alert("Erro ao cadastrar jogo.");
  }
});








