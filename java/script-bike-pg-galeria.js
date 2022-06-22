const galeria =document.querySelectorAll(".bicicleta-img img")
const galeriaConteianer =document.querySelector(".bicicleta-img")

function trocarImg(event){
    const imagem =event.currentTarget;
    const media = matchMedia("(min-width: 1000px )").matches
    if(media){
        galeriaConteianer.prepend(imagem)

    }
}

function eventGaleria(img){
    img.addEventListener("click", trocarImg)
}

galeria.forEach(eventGaleria)