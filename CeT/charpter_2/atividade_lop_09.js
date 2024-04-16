//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 21/03/2024. ECT - UFRN

//Enunciado:
/*

Calculo de expressão com expoente

Considerando os seguintes valores para as variáveis a = 1.5, b = 4, c = 2, d = 3, e = 1.2 e f = 4.3,
implemente um programa que determine e exiba os valores da expressão abaixo. Fique atento à precedência de operadores
(1º multiplicação e divisão, 2º soma e subtração). Use a função Math.pow( ) para calcular as potências. A sintaxe é:
Math.pow( b, x), onde b representa um número que é a base e x representa o expoente ao qual a base será elevada.
Para elevar uma variável chamada b ao quadrado, use Math.pow( b, 2).

[a + (c+d)²/b² d]1/c

10584 alunos realizaram a atividade.
Autor(a): orivaldo@gmail.com

*/

let a = 1.5;
let b = 4;
let c = 2;
let d = 3;
let e = 1.2;
let f = 4.3;

var calculo = ((Math.pow((c + d), 2)) / Math.pow(b, 2) * d + a) * 1/c;

console.log(calculo);
