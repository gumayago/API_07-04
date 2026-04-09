async function carregarCategoriasSelect(){
    const response = await fetch ("http://localhost:3001/categorias")
    const data = await response.json()
    console.log(data);
    const select = document.getElementById("jogo-categoria_id");
    select.innerHTML = data
        .map(c => `<option value=${c.id}">${c.nome}</option>`)
        .join("")
}

carregarCategoriasSelect()

document.getElementById('categoria-form').addEventListener('submit', async (e) =>{
    e.preventDefault();

    const nome = document.getElementById('categoria-nome').value;

    const response = await fetch("http://localhost:3001/categorias", {
        method: "POST",
        headers: {"content-type": "aplication/json"},
        body: JSON.stringify( { nome })
    });

    if (response.ok){
        alert("categoria cadastrada!");
        e.currentTarget.reset();
        carregarCategoriasSelect();
    } else{
        alert("erro ao cadastrar categoria. ")
    }
});













