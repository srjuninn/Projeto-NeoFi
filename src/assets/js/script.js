let arrowColorWhite = document.getElementById("setaBranca");
let arrowColorBlack = document.getElementById("setaPreta");
let btnReturn = document.getElementById("btnComing");

btnComingSoon.addEventListener("mouseover", () => {
  arrowColorWhite.style.display = "none";
  arrowColorBlack.style.display = "block";
});
btnComingSoon.addEventListener("mouseout", () => {
  arrowColorWhite.style.display = "block";
  arrowColorBlack.style.display = "none";
});
const clicar = () => {
  btnReturn.addEventListener("click", (event) => {
    // resolver o porquê não ta indo da pagina 
    // coming soon pro index.html
    window.location.href = "../../../index.html";
    event.preventDefault();
  });
};
clicar();
