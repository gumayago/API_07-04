const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) window.location.href = "index.html";

const resultado = document.getElementById("resultado");

async function carregarJogo() {
  try {
    const response = await fetch(`http://localhost:3001/jogos/${id}`);

    if (!response.ok) {
      resultado.innerHTML = "<p>Jogo não encontrado.</p>";
      return;
    }

    const data = await response.json();
    resultado.innerHTML = `
      <div class="detail-header">
        <h3>${data.nome}</h3>
        <a href="update_jogo.html?id=${data.id}" class="edit-icon" title="Editar jogo">
          <i class="bi bi-pencil-square"></i>
        </a>
      </div>
      <p><strong>ID:</strong> ${data.id}</p>
      <p><strong>Genero:</strong> ${data.genero}</p>
      <p><strong>Categoria:</strong> ${data.categoria || "sem categoria"}</p>
    `;
  } catch {
    resultado.innerHTML = "<p>Erro ao conectar com a API. Verifique se o servidor está rodando.</p>";
  }
}

carregarJogo();