//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

function adicionarAmigo(){
    let nomeInserido = document.querySelector('input').value;

    if(nomeInserido == ''){
        alert('Erro: "Por favor, insira um nome."');
    } else{
        nomes.push(nomeInserido);
        console.log(nomes);
        limpar = document.querySelector('input')
        limpar.value = '';
    }
}
    
