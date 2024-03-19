let massa = parseFloat(prompt("Informe a sua massa em quilogramas:"));
let altura = parseFloat(prompt("Informe a sua altura em metros"));

var imc = massa / Math.pow(altura, 2);

console.log("O seu IMC é " + imc);