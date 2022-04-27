var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

//função que vai verificar se a ul tem a classe open
function menuShow(){
    if(ul.classList.contains('open')){// se a ul tiver a class open, ele vai remover a class open
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');

    }
}

//Quando o botão for clicado ira executar a função(menuShow()) ele adciona a classe open,e quando ele adciona a classe opne, ele vai colocar o left 0, e quando o left está em 0, ele vai ocupar toda a tela.
