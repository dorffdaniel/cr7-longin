let senha = document.querySelector('.senha');
let usuario = document.querySelector('.user')
const btn = document.querySelector('.btn');
let conteudoBtn = document.querySelector('.contBtn');
let resul = document.querySelector('.res');

let removerIcon = document.getElementById('removerIcon');

let img = document.querySelector('.img-troca');

senha.addEventListener('click', ()=>{
    img.src='img/02.png';
    removerIcon.classList.add('hidden');
})

senha.addEventListener('blur', () => {
    removerIcon.classList.remove('hidden'); 
});

usuario.addEventListener('click',()=>{
    img.src='img/01.png';
})

btn.addEventListener('click', ()=>{
    let senha = document.querySelector('.senha').value;
    let usuario = document.querySelector('.user').value;
    

    if(usuario === 'cr7' && senha === 'thebest'){
        conteudoBtn.innerHTML= 'siuuuuuu';
        img.src='img/03.png';
        removerIcon.classList.add('hidden');
    }else{
        resul.classList.add('mostrar');
        img.src='img/04.png';
        setTimeout(() => {
            voltarParaOlongin();
        }, 4000);
    }

    
})

const fazerCadastro = document.querySelector('.cadastro');
const containerPrincipal = document.querySelector('.container');
const containerSecundario = document.querySelector('.container2');

fazerCadastro.addEventListener('click',()=>{
    containerPrincipal.style.display = 'none';
    containerSecundario.style.display = 'flex';
})

const voltarLongin = document.querySelector('.voltarLonginn');

voltarLongin.addEventListener('click', ()=>{
    containerSecundario.style.display = 'none';
    containerPrincipal.style.display = 'flex';

    voltarParaOlongin();
})

function voltarParaOlongin(){
    img.src='img/01.png';
    resul.classList.remove('mostrar');
}