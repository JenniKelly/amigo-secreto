//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

// Percorro o array amigos e adiciona cada nome como um elemento <li> dentro de uma lista HTML e mostrar na tela.
function atualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        // Criando um elemento do tipo <li>
        let item = document.createElement('li');
        // Inserindo o texto
        item.textContent = amigos[i];
        // Adicionando à lista HTML
        lista.appendChild(item);
    }
}

function adicionarAmigo(){
    // Obtendo o valor escrito
    let nomeInserido = document.querySelector('input').value;

    if(nomeInserido == ''){
        alert('Erro: Por favor, insira um nome.');
    // Evitando duplicatas
    } else if (amigos.includes(nomeInserido)){
        alert('Erro, este nome já existe!');
    } else {
        // Adicionando o novo nome à lista amigos
        amigos.push(nomeInserido);
        console.log(amigos);
        // Limpando a caixa de escrita
        limpar = document.querySelector('input')
        limpar.value = '';
        // Para atualizar a lista HTML
        atualizarLista();
    }
}

function sortearAmigo(){

    if (amigos.length == 0){
        alert('Ainda não possui nome para sortear.');
        return;
    }    

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    console.log(amigoSorteado);
    document.getElementById('resultado').innerHTML = amigoSorteado;

}    