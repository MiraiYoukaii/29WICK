const infoButton = document.getElementById('info-button');
const barraBotoes = document.getElementById('barra-botoes');

// Adicionar um ouvinte de evento de clique ao botão de informações
infoButton.addEventListener('click', function() {
    // Alternar a exibição da barra de botões quando o botão de informações é clicado
    if (barraBotoes.style.display === 'none') {
        barraBotoes.style.display = 'block';
    } else {
        barraBotoes.style.display = 'none';
    }
});