
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
}); 