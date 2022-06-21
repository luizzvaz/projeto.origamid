const paramentros = new URLSearchParams(location.search);
function ativarProduto(paramentro){
    const elemento = document.getElementById(paramentro)
    if(elemento){
        elemento.checked = true
        console.log(elemento)
    }
}

paramentros.forEach(ativarProduto)