async function carregarCategorias() {
    const response = await fetch ("http://localhost:3001/categorias")
    const data = await response.json()
    console.log(data);
    const list= document.getElementById("categorias-list")
    list.innerHTML = data.map (categoria =>
    `
    <li>${categoria.nome}</li>
        create.innerHTML


    `

     ).join("")
};


async function carregarJogos() {
    const respostaApi = await fetch ("http://localhost:3001/jogos") //resposta da api (objeto q ela retorna)
    const dados = await respostaApi.json() // da resposta vinda pegue apenas o objeto 
    const lista = document.getElementById("jogos-list")
    lista.innerHTML = dados.map ( qualquerCoisa => 
    `
   <div class="card">
        <h3>${qualquerCoisa.nome}</h3>
        <p id="jorge"> <span>${qualquerCoisa.genero} </span></p>
        <button><a href="https://i.pinimg.com/originals/d7/3e/f6/d73ef6f4186be91e27ef96ee375acc3f.png">Saiba Mais </a></button>
        <button><a href="/front-end/index.html"> Saiba Mais </a></button>
    </div>

    `

        

    )
}

carregarJogos()
carregarCategorias()