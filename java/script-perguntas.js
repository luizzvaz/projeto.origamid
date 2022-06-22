const pergunta = document.querySelectorAll(".perguntas button");

function respostaAtivar(event){
 const resposta1 = event.currentTarget;
 const control = resposta1.getAttribute("aria-controls");
 const Resposta = document.getElementById(control);


 Resposta.classList.toggle("ativo");
 const ativ=Resposta.classList.contains("ativo")
 resposta1.setAttribute("aria-expanded", ativ);
 console.log(Resposta);
}

function ativarResposta(resposta){
    resposta.addEventListener("click", respostaAtivar);
    
}


pergunta.forEach(ativarResposta)