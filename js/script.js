//Menu Hamburguer
// Abrir Menu 
function openMenu(){
    const open = document.querySelector('.menu');
    open.style.display = 'flex'
    open.style.animationName = 'slideFromRight';
}

// Fechar Menu
function closeMenu(){
    const close = document.querySelector('.menu');
    close.style.animationName = 'slideToRight'; 
    setTimeout(() => {
        close.style.display = 'none'; 
    }, 300); 
}

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
//Abrir Modal do Cachorro
function abrirModalCachorro(){
    const modalCachorro = document.querySelector('#display-none-c');
    modalCachorro.style.display = 'flex';

    const removerCachorro = document.querySelector('#pets-left');
    removerCachorro.style.display = 'none';

    const removerGato = document.querySelector('#pets-right');
    removerGato.style.display = 'none';
}
//Fechar Modal do Cachorro
function closeModalCachorro(){
    const modalCachorro = document.querySelector('#display-none-c')
    modalCachorro.style.display = 'none'
    
    const removerCachorro = document.querySelector('#pets-left');
    removerCachorro.style.display = 'flex';

    const removerGato = document.querySelector('#pets-right');
    removerGato.style.display = 'flex';
}


//Modal Gato
//Abrir Modal do Gato
function abrirModalGato(){
    const modalGato = document.querySelector('#display-none-g');
    modalGato.style.display = 'flex';

    const removerCachorro = document.querySelector('#pets-left');
    removerCachorro.style.display = 'none';

    const removerGato = document.querySelector('#pets-right');
    removerGato.style.display = 'none';
}
//Fechar Modal do Gato
function closeModalGato(){
    const modalCachorro = document.querySelector('#display-none-g')
    modalCachorro.style.display = 'none'
    
    const removerCachorro = document.querySelector('#pets-left');
    removerCachorro.style.display = 'flex';

    const removerGato = document.querySelector('#pets-right');
    removerGato.style.display = 'flex';
}


//Validação de Campo Formulário
function enviarFormulario(){
    let contato_nome = document.getElementById("campo-nome").value
    let contato_email = document.getElementById("campo-email").value
    let contato_telefone = document.getElementById("campo-telefone").value
    let contato_interesse = document.getElementById("campo-interesse").value
    if(contato_nome == "" || contato_email == "" || contato_telefone == "" || contato_interesse == ""){
        Swal.fire({
            title: "Preencha os Campos",
            icon: "error",
            width: 600,
            padding: "3em",
            color: "#5282B3",
            background: "#fff",
        })
    }else{
        Swal.fire({
            title: "Formulário Enviado",
            icon: "success",
            width: 600,
            padding: "3em",
            color: "#5282B3",
            background: "#fff",
            backdrop: `
                rgba(0,0,123,0.4)
                url("../img/contato/nyan-cat.gif")
                center top
                no-repeat`
        })
    }
}

