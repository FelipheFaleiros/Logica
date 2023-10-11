let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = randomNumber();
let tentativas = 1 ;
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número Secreto';

// let selecao = document.querySelector('p');
// selecao.innerHTML = 'selecione um numero em 1 e 10';

//Refatoração 
function exibirTextoNaTela(tag, txt){
    let campo = document.querySelector(tag);
    campo.innerHTML = txt;
    responsiveVoice.speak(txt, 'Brazilian Portuguese Female', {rate:1.2});  //gracas a biblioteca importada responsiveVoice
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', 'selecione um número em 1 e 10');
}
mensagemInicial();

/*                          EXPLICAÇÃO           
 var -> Function Scoped(vive até a final da função)=>criação de variável global 
 let -> Block Scoped => criação de variável que funciona apenas aquele bloco 
 const funciona com o mesmo escopo de let, funcionando apenas naquele bloco, porem não pode ser reatribuir valor a constant que ja fui inicializada ; porem essa mesma pode ser modificada quanto for um array, objeto   */

let verificaChute = function() {
    var chute = document.querySelector('input').value;

    // console.log(randomNumber);

    if(numeroSecreto == chute){
        if (tentativas == 1){
            var palavraTentativa = "tentativa"
        }else palavraTentativa = "tentativas"
        let mensagemTentativas = `Acerto o valor com ${tentativas} ${palavraTentativa} !`
        exibirTextoNaTela('h1', 'SUCCESS');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
        exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparInput();
    }
}

function randomNumber(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeElementList = listaDeNumerosSorteados.length;

    if(quantidadeElementList == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return randomNumber();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }

}

function limparInput(){
    chute = document.querySelector('input');
    chute.value = '';
    console.log('limpo')
}

function reiniciarJogo(){
    numeroSecreto = randomNumber();
    limparInput();
    tentativas = 1;    
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
