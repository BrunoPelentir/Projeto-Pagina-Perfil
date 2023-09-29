const editarperfil = document.querySelector('#editarperfil');

function openInNewTab(url) {
    const face = window.open(url, 'blank');
}

editarperfil.addEventListener('click', () => {
    openInNewTab('formulario.html');
});

function atualizarInformacoes(nome, idade, status, cidade, profissao) {
    const nomeElement = document.getElementById('nome');
    const informacoesElement = document.getElementById('informacoes');
    const profissaoElement = document.getElementById('profissao');

    nomeElement.textContent = nome;
    informacoesElement.textContent = $;{idade} anos, $;{status} $;{cidade};
    profissaoElement.textContent = profissao;
}