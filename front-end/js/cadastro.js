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














/*
botao = document.getElementById("cabra")

botao.addEventlsitenner ( SubmitEvent) {
 
}

const formulario = document.getElementById('meuFormulario');

formulario.addEventListener('submit', function(event) {
    // 1. Impede o recarregamento da página (comportamento padrão)
    event.preventDefault();

    // 2. Cria um objeto FormData para pegar todos os dados facilmente
    const formData = new FormData(formulario);

    // 3. Converte os dados para um objeto literal ou manipula
    const dados = Object.fromEntries(formData);
    console.log(dados); // {nome: "...", email: "..."}

    // A partir daqui, você pode enviar os dados com fetch(), etc.
    alert('Dados capturados: ' + JSON.stringify(dados));
}); */