async function carregarCategorias() {
  const response = await fetch(`http://localhost:3001/categorias`);
  const data = await response.json();

  document.getElementById("categorias-list").innerHTML = data
    .map(c => `
      <li>
        <span>#${c.id} ${c.nome}</span>
        <a href="update_categoria.html?id=${c.id}" class="edit-icon" title="Editar categoria">
          <i class="bi bi-pencil-square"></i>
        </a>
      </li>`)
    .join("");
}

async function carregarJogos() {
  const response = await fetch(`http://localhost:3001/jogos`);
  const data = await response.json();

  document.getElementById("jogos-list").innerHTML = data
    .map(j => `
      <li>
        <a class="jogo-link" href="jogo.html?id=${j.id}">#${j.id} ${j.nome}</a>
        <span class="jogo-meta">(${j.genero}) - ${j.categoria || "sem categoria"}</span>
        <a href="update_jogo.html?id=${j.id}" class="edit-icon" title="Editar jogo">
        <i class="bi bi-pencil-square"></i>
         <a href="update_jogo.html?id=${j.id}" class="edit-icon" title="Editar jogo">
        <i class="bi bi-x-circle-fill"></i>
        </a>
      </li>`)
    .join("");
}

carregarCategorias();
carregarJogos();
/*
      

        <button><a href="https://i.pinimg.com/originals/d7/3e/f6/d73ef6f4186be91e27ef96ee375acc3f.png">Saiba Mais </a></button>
        <button>    <a href="./jogo.html">saiba mais</a> </button>  */