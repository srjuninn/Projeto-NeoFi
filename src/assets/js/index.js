// menu hamburgão
let abrir = document.getElementById("abrirHamburger");
let hamburger = document.getElementById("hamburger");
let shape = document.getElementById("menuShape");
let fechar = document.getElementById("fecharHamburger");

abrir.addEventListener("click", () => {
  hamburger.style.display = "none";
  shape.style.display = "block";
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
  shape.style.left = "-300px";
  hamburger.style.display = "flex";
  new Promise((tirar) => {
    setTimeout(() => {
      tirar();
    }, 1000);
  }).then(() => {
    shape.style.display = "none";
  });
});
