//validação do usuario adm para aparecer o bortão de delete e  edit dos livros:
/*
const cliente = { adm: true };

if (cliente.adm) {
    document.getElementById('btn-delete').style.display = 'block';
    document.getElementById('btn-edit').style.display = 'block';
} else {
    document.getElementById('btn-delete').style.display = 'none';
    document.getElementById('btn-edit').style.display = 'none';
}


// função de validação e envio de dados ao back-end do cadastro:


// 2. O CONTROLLER DO DOM (Captura de inputs no HTML)
// Selecionando os campos que o usuário preenche:
const inputNome = document.getElementById('nome');
const inputCpf = document.getElementById('cpf');
const inputEmail = document.getElementById('email');
const inputTelefone = document.getElementById('telefone');
const inputRua = document.getElementById('rua');
const inputNumero = document.getElementById('numero');
const inputBairro = document.querySelector('bairro');
const inputImg = document.querySelector('img');
const inputSenha = document.querySelector('bairro');
const botaoEnviar = document.querySelector('botão');

// 3. O EVENTO DE CLIQUE (Ação do usuário)
// Toda a lógica de envio deve estar DENTRO do "escutador" de eventos.
botaoEnviar.addEventListener('click', async () => {
    
    // Pegando os valores reais digitados pelo usuário no momento do clique
    const nome = inputNome.value;
    const cpf= inputCpf.value;  
    const 

    // Validação inicial (Se o campo estiver vazio, pare aqui)
    if (!nome || !cpf || !email || telefone ) {
        alert("⚠️ Por favor, digite o nome e a patente!");
        return; 
    }

    // 4. Instanciando o objeto com os dados capturados
    const novoPiloto = new Piloto(nomeForm, patenteForm);
    console.log("Objeto criado para envio:", novoPiloto);

    try {
        // 5. O FETCH (O Mensageiro que leva os dados ao Back-end)
        // Usamos 'await' para esperar a resposta do servidor.
        const resposta = await fetch('http://localhost:3000/pilotos', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(novoPiloto) // Convertendo o objeto em texto JSON
        });

        // 6. Verificando o retorno do Servidor
        if (resposta.ok) {
            const dadosRetornados = await resposta.json();
            
            alert(`✅ Sucesso! Piloto ${dadosRetornados.nome} foi salvo no banco.`);
            window.location.href = "pilotos.html"
            // Limpando os campos do HTML após o sucesso
            inputNome.value = '';
            inputPatente.value = '';
        } else {
            // Caso o Back-end retorne algum erro (Ex: 404, 500)
            const erroApi = await resposta.json();
            alert("❌ Erro do servidor: " + (erroApi.erro || "Falha desconhecida"));
        }

    } catch (erro) {
        // Caso o servidor esteja desligado ou a URL esteja errada
        console.error("Erro na conexão:", erro);
        alert("🚫 Não foi possível conectar ao servidor. Verifique se o Back-end está rodando!");
    }
});
*/


//carregar categorias
async function carregarCategorias() {
    const response = await fetch("http://localhost:3001/categorias")
    const data = await response.json()
    const select = document.getElementById("jogo-categoria_id");
    select.innerHTML = data
        .map(c => `<option value="${c.id}">${c.nome}</option>`)
        .join("");
}

carregarCategoriasSelect()


//cadastrando cliente:
document.getElementById("categoria-form").addEventListener("submit", async (e) => {
    e.preventDefault();

const nome = document.getElementById("categoria-nome").value;
const cpf = document.getElementById('cpf').value;
const email = document.getElementById('email').value;
const telefone = document.getElementById('telefone').value;
const endereco = document.getElementById('endereco').value;
const numero = document.getElementById('numero').value;
const bairro = document.querySelector('bairro').value;
const imagem = document.querySelector('img').value;
const senha = document.querySelector('bairro').value;

    const response = await fetch("http://localhost:3001/cliente", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, cpf,email, telefone, endereco, numero, bairro, imagem, senha })
  });

  if (response.ok) {
    alert("Cliente cadastrado!");
    e.currentTarget.reset();
    carregarCategoriasSelect();
  } else {
    alert("Erro ao cadastrar cliente.");
  }
});


//

