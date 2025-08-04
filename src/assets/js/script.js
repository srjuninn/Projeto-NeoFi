let arrowColorWhite = document.getElementById("setaBranca");
let arrowColorBlack = document.getElementById("setaPreta");
let btnReturn = document.getElementById("btnComing");

btnReturn.addEventListener("mouseover", () => {
  arrowColorWhite.style.display = "none";
  arrowColorBlack.style.display = "block";
});
btnReturn.addEventListener("mouseout", () => {
  arrowColorWhite.style.display = "block";
  arrowColorBlack.style.display = "none";
});
btnReturn.addEventListener("click", (event) => {
  window.location.href = "../../../index.html";
  event.preventDefault();
});

