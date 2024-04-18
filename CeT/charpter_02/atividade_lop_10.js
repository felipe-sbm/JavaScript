//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 21/03/2024. ECT - UFRN

//Enunciado:
/* Calculando expressões com raiz

Considerando os seguintes valores para as variáveis a = 1.5, b = 4, c = 2,
implemente um programa que determine e exiba os valores da expressão abaixo. Fique atento a precedência
de operadores: as funções de potência e a raiz são resolvidas antes da multiplicação/divisão.
Para o calculo da raiz quadrada use a função Math.sqrt( x), onde x é um número cuja raiz quadrada será extraída.
Se você fizer x = Math.sqrt(4) o resultado na variável x será sempre 2.

-b+√b²-4ac /2

9914 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let a = 1.5;
let b = 4;
let c = 2;

var calculo = (-b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c)))/ 2;

console.log(calculo);
