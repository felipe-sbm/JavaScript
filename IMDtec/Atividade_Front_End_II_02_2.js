function calcularQuadrado(lado) {
  const lado = propriedade.lado;
  return lado * lado;
}
function calcularCirculo(raio) {
  const raio = propriedade.raio;
  return Math.PI * raio * raio;
}
const areaQuadrado = calcularQuadrado({ lado: 5 }, calcularQuadrado);
console.log("Área do quadrado:", areaQuadrado);

const areaCirculo = calcularCirculo({ raio: 2 }, calcularCirculo);
console.log("Área da circunferência:", areaCirculo);
