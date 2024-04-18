//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 21/03/2024. ECT - UFRN

//Enunciado:
/* -- Calculando expressões - parte 4 --

Agora, considerando os seguintes valores para as variáveis a = 1.5, b = 4, c = 2, d = 3, e = 1.2 e f = 4.3,
implemente um programa que determine e exiba os valores da seguinte expressão (fique atento à precedência de operadores):

b×(e+f) / a×(c+d)

9021 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let a = 1.5;
let b = 4;
let c = 2;
let d = 3;
let e = 1.2;
let f = 4.3;

var calculo = (a * (c + d)) /(b* (e + f));

console.log(calculo);
