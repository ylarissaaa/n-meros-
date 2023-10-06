const numero = document.getElementById('numero')
const botaorandomico = document.getElementById('botaorandomico')

const gerarNumero  = () => {
    const constrandom = Math.floor(Math.random() * 100);

    numero.textContent = constrandom;
}

botaorandomico.addEventListener('click', gerarNumero);

gerarNumero();