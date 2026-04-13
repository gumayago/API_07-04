const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) window.location.href = "index.html";

async function carregarCategoria() {
  const response = await fetch(`http://localhost:3001/categorias/${id}`);
  if (!response.ok) {
    alert("Categoria não encontrada.");
    window.location.href = "index.html";
    return;
  }
  const data = await response.json();
  document.getElementById("categoria-nome").value = data.nome;
}

document.getElementById("update-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = document.getElementById("categoria-nome").value;

  const response = await fetch(`http://localhost:3001/categorias/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome })
  });

  if (response.ok) {
    alert("Categoria atualizada!");
    window.location.href = "index.html";
  } else {
    alert("Erro ao atualizar categoria.");
  }
});

carregarCategoria();