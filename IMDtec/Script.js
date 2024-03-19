function showSaoPauloInfo() {
  const infoDiv = document.getElementById("sao-paulo-info");
  if (infoDiv.style.display === "none") {
    infoDiv.style.display = "block";
  } else {
    infoDiv.style.display = "none";
  }
}
const btnSaoPaulo = document.getElementById("btn-sao-paulo");
btnSaoPaulo.addEventListener("click", showSaoPauloInfo);
