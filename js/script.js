//CRIANDO SLIDE PARA BANNER
//Declarando Variaveis
let imagens = ['img/section-banner/web/banner-1-pc.png', 'img/section-banner/web/banner-2-pc.png', 'img/section-banner/web/banner-3-pc.png', 'img/section-banner/web/banner-4-pc.png'];
let index = 0;
let time = 10000;

//Função Slide
function slideShow(){
    document.getElementById('img-banner').src=imagens[index];
    index++;

        if(index == imagens.length){
            index = 0;
        }
        setTimeout('slideShow()', time);
}

slideShow();