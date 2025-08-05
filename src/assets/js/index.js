// menu hamburgão
let ocultar = document.getElementById("header")
let headerLogo = document.getElementById("headerLogo")
let textLogo = document.getElementById("textLogo")
let buttonsHeader = document.getElementById("buttonsHeader")
let abrir = document.getElementById("abrirHamburger");
let hamburger = document.getElementById("hamburger");
let shape = document.getElementById("menuShape");
let fechar = document.getElementById("fecharHamburger");

abrir.addEventListener("click", () => {
  headerLogo.style.display = "none";
  textLogo.style.display = "none";
  buttonsHeader.style.display = "none";
  hamburger.style.display = "none";
  shape.style.display = "block";
  document.body.classList.add("bodylockScroll");
  new Promise((chamar) => {
    setTimeout(() => {
      chamar();
    }, 200);
  }).then(() => {
    shape.style.left = "-15px";
  });
  // shape.style.position = "fixed";
});
fechar.addEventListener("click", () => {
  headerLogo.style.display = "flex";
  textLogo.style.display = "flex";
  buttonsHeader.style.display = "flex";
  shape.style.left = "-300px";
  hamburger.style.display = "flex";
  document.body.classList.remove("bodylockScroll");
  new Promise((tirar) => {
    setTimeout(() => {
      tirar();
    }, 1000);
  }).then(() => {
    shape.style.display = "none";
  });
});
