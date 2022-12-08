"use strict"

//capturas

//capturas para acionar classes
const postInicial = document.getElementsByClassName("plus")[0];
const popUp = document.getElementsByClassName("post-modal")[0];


//Funções

//acionar modal
postInicial.addEventListener("click", acionar);
function acionar (){
    popUp.style.display = "flex";
}

function desacionar(){
  popUp.style.display = "none";

}

//fechar modal
popUp.addEventListener('click', function(e) {
  if (e.target == this) fecha();
});
function fecha() {
    popUp.style.display = 'none';
}
//impedir carregamneto
// window.addEventListener("beforeunload"),function(e){
//   e.preventDefault()
// }

//comandos para novo post
var botaoPostagem = document.getElementsByClassName("postar")[0];
botaoPostagem.addEventListener('click', novoPost)

function novoPost(e){
e.preventDefault()
const novoPostSempre = document.createElement('article');
novoPostSempre.className = "novaInteraçao";
const fazerComentario = document.getElementsByClassName('comentario-form')[0];
const partePosts = document.querySelector('.secao-posts');
novoPostSempre.innerHTML = `<article class="post">
<div class="post-info">
  <div class="usuario-info">
    <div class="avatar"></div>
    <div class="nome-hora">
      <p class="nome">Joana da Silva Peixoto</p>
      <p class="hora">00 horas atrás</p>
    </div>
  </div>
  <p class="comentario">
    ${fazerComentario.value}
    </p>
    </div>
    <img class="post-imagem" src="/imgs/pordosol.jpg" alt="perfil" />
          <div class="post-interacoes">
    <div class="post-interacoes">
      <div class="container-like">
        <img class="like-btn" src="/imgs/like.svg" alt="like" onclick='curtir(event)'/>
        <p class="descricao-like">Curtir</p>
      </div>
      <div class="container-coment">
                  <img class="coment-btn" src="/imgs/comentario.svg" alt="like" />
                  <p class="descricao-comentario">Comentários</p>
                </div>
              </div> `
        
        partePosts.appendChild(novoPostSempre);

        desacionar()
}

const inputImagem = document.querySelector('#campo-foto');
inputImagem.addEventListener("change", carregaImagem)

function carregaImagem(){
  let urlImage = e.target.files[0].name;
  const imagem = document.createElement('img');
  imagem.setAttribute("src", `${urlImage}`);
  imagem.classList.add("imagem-form");

  const containerImagem = document.querySelector(".container-imagem");
  inputImg.style.display = 'none';
  containerImagem.appendChild(imagem)
}

function curtir(e) {
  const buttons = document.querySelectorAll('.like-btn')
  e = e || window.event;
  var target = e.target || e.srcElement;

  if (target.classList.contains('liked')){
    target.classList.remove('liked')
    target.src = '/imgs/like.svg'
  }else {
    target.classList.add('liked')
    target.src = '/imgs/like-solid.svg'
  }
}

