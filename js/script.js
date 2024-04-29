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


//Modal
function abrirModalCachorro(){
    const modal = document.querySelector('#modal-cachorro');
    modal.style.display = 'flex';
}

function closeModalCachorro(){
    const modal = document.querySelector('#modal-cachorro')
    modal.style.display = 'none'
}

