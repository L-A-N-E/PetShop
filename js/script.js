// Declarando Variaveis
let imagens = ['img/section-banner/web/banner-1-pc.png', 'img/section-banner/web/banner-2-pc.png', 'img/section-banner/web/banner-3-pc.png', 'img/section-banner/web/banner-4-pc.png'];
let index = 0;
let time = 5000;

// Função Slide
function slideShow() {
    document.getElementById('img-banner').style.opacity = '0';
    setTimeout(function() {
        document.getElementById('img-banner').src = imagens[index];
        index++;

        if (index == imagens.length) {
            index = 0;
        }

        document.getElementById('img-banner').style.opacity = '1';
    }, 200);
    setTimeout(slideShow, time);
}
slideShow();

//Função para botão para passar os cards
let lista_produtos = ['#item_1','#item_2','#item_3','#item_4','#item_5','#item_6'];
let index_produtos = 1;

function passarLado(){

    let produtoMostrado = document.querySelector(lista_produtos[index_produtos]);
    produtoMostrado.style.display = 'flex';

    if(index_produtos != 0){
        let produtoMostra = document.querySelector(lista_produtos[index_produtos-1]);
        produtoMostra.style.display = 'none';
    }else{
        let produtoMostra = document.querySelector(lista_produtos[5]);
        produtoMostra.style.display = 'none';
    }

    index_produtos ++;

    if(index_produtos == lista_produtos.length){
        index_produtos = 0;
    }
}

//Modal Cachorro
function abrirModalCachorro(){
    const modalCachorro = document.querySelector('#display-none-c');
    modalCachorro.style.display = 'flex';

    const removerCachorro = document.querySelector('#pets-left');
    removerCachorro.style.display = 'none';

    const removerGato = document.querySelector('#pets-right');
    removerGato.style.display = 'none';
}

function closeModalCachorro(){
    const modalCachorro = document.querySelector('#display-none-c')
    modalCachorro.style.display = 'none'
    
    const removerCachorro = document.querySelector('#pets-left');
    removerCachorro.style.display = 'flex';

    const removerGato = document.querySelector('#pets-right');
    removerGato.style.display = 'flex';
}


//Modal Gato
function abrirModalGato(){
    const modalGato = document.querySelector('#display-none-g');
    modalGato.style.display = 'flex';

    const removerCachorro = document.querySelector('#pets-left');
    removerCachorro.style.display = 'none';

    const removerGato = document.querySelector('#pets-right');
    removerGato.style.display = 'none';
}

function closeModalGato(){
    const modalCachorro = document.querySelector('#display-none-g')
    modalCachorro.style.display = 'none'
    
    const removerCachorro = document.querySelector('#pets-left');
    removerCachorro.style.display = 'flex';

    const removerGato = document.querySelector('#pets-right');
    removerGato.style.display = 'flex';
}

