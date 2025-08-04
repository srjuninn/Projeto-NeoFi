// menu hamburgão
let abrir = document.getElementById("abrirHamburger");
let hamburger = document.getElementById("hamburger");
let shape = document.getElementById("menuShape");
let fechar = document.getElementById("fecharHamburger");

abrir.addEventListener("click", () => {
  hamburger.style.display = "none";
  shape.style.display = "block";
  shape.style.left = "0";
});
fechar.addEventListener("click", () => {
  shape.style.left = "-300px";
  hamburger.style.display = "flex";
});
