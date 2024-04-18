// Atividade de logíca da programação, 11/03/2024, Escola de ciência & tecnologia

let massa = parseFloat(prompt("Informe a sua massa em quilogramas:"));
let altura = parseFloat(prompt("Informe a sua altura em metros"));

var imc = massa / Math.pow(altura, 2);

console.log("O seu IMC é " + imc);