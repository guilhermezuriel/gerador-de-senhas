const css$ = require('./assets/css/style.css');
const geradores = require('./modules/geradores.js');

const divsenha = document.querySelector('.senha-gerada');
const quantidade = geradores.quantidade;
const geraSenha = geradores.geraSenha;


const capturaSubmit = () => {
    document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('inpt-copia')) {
            copiaSenha();
        }

        if(el.classList.contains('gera-senha')){
            limitSenha(quantidade);
            if(!quantidade.value || quantidade.value > 50) return;
            divsenha.innerHTML = geraSenha(quantidade.value);
            if (document.querySelector('.inpt-copia')) return
            adicionaCopyBtn();
        }
    })
}

function copiaSenha(){
    let copyText = document.getElementsByClassName('senha-gerada');
    navigator.clipboard.writeText(copyText[0].innerText);
}

function adicionaCopyBtn(){
    if (!quantidade.value) return;

    let img = document.createElement("input");

    img.type = "image";
    img.src = "./assets/img/84185.png";
    img.className = "inpt-copia";
    
    divsenha.insertAdjacentElement('afterend',img);
}

function limitSenha(quantidade){
    if(quantidade.value > 50){
        quantidade.style.color = 'red';
        divsenha.innerHTML = "A senha precisa ter no máximo 50 caracteres"
        setTimeout(()=>{
            quantidade.style.color = 'black';
            divsenha.innerHTML = "";
        },3000)
    }
    return
}

capturaSubmit();