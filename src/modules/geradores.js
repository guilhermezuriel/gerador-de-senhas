const quantidade = document.querySelector('.quantidade');


const rand = (min, max) => Math.floor(Math.random()*(max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolos = '.~^!@#$%_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];


function geraSenha(qtd){
    const senhaArray = {
        maiusculas: geraMaiuscula,
        minusculas: geraMinuscula,
        numeros: geraNumero,
        simbolos: geraSimbolo
    };
    
    const selecionados = capturaSelecionados();
    qtd = Number(qtd);
    let senhaGerada = [];
    for (let i = 0 ; i < qtd ; i++){
        const randProperty = selecionados[Math.floor(Math.random()*selecionados.length)];
        senhaGerada.push(senhaArray[randProperty]);
    }
    senhaGerada = senhaGerada.map(valor => valor());
    return senhaGerada.join('');
}

const container = document.querySelector('.container');

function capturaSelecionados(){
    let selecionados = [];
    for(let campo of container.querySelectorAll('input')){
        if (campo.checked) selecionados.push(campo.className.slice(4,campo.length))
    }
    return selecionados
}

module.exports = {geraSenha, quantidade};