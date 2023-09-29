const salvaredicao = document.getElementById('salvaredicao');

salvaredicao.addEventListener('click', () => {
    const nome = document.getElementById('inputNome').value;
    const idade = document.getElementById('inputIdade').value;
    const status = document.getElementById('inputStatus').value;
    const cidade = document.getElementById('inputCidade').value;
    const profissao = document.getElementById('inputProfissao').value;

    const frase1 = document.getElementById('inputFrase1').value;
    const frase2 = document.getElementById('inputFrase2').value;
    const frase3 = document.getElementById('inputFrase3').value;
    const frase4 = document.getElementById('inputFrase4').value;

    window.opener.atualizarInformacoes(nome, idade, status, cidade, profissao);

    window.opener.document.getElementById('frase1').textContent = frase1;
    window.opener.document.getElementById('frase2').textContent = frase2;
    window.opener.document.getElementById('frase3').textContent = frase3;
    window.opener.document.getElementById('frase4').textContent = frase4;

    window.close();
});