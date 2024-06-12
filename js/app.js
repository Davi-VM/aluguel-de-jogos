let jogosAlugados = 0;

//Função que exibe o número de jogos alugados no console
function exibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

//Função que realiza a mudança do texto, imagem e cor do botão
function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let button = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if(button.classList.contains('dashboard__item__button--return')){
        //Confirm utilizado para não precisar colocar texto igual o prompt, apenas escolhe entre ok e cancelar
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            imagem.classList.remove('dashboard__item__img--rented')
            button.classList.remove('dashboard__item__button--return')
            button.textContent = 'Alugar'
            jogosAlugados--;
        }
        
    }
    else{
        imagem.classList.add('dashboard__item__img--rented')
        button.classList.add('dashboard__item__button--return')
        button.textContent = 'Devolver'
        jogosAlugados++;
    }

    exibirJogosAlugados()
    
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    exibirJogosAlugados();
});