//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 22/03/2024. ECT - UFRN

//Enunciado:
/* -- Raízes de uma equação de segundo grau --

Faça um programa que recebe os coeficientes a, b e c de uma equação de segundo grau e calcula suas raízes.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 1                   | 1 -9              |
| 8                   |                   |
| -9                  |                   |
|---------------------|-------------------|
| 4                   | 3 -2              |
| -4                  |                   |
| -24                 |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
14728 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let a = parseFloat(prompt("Insira o valor de A:"));
let b = parseFloat(prompt("Insira o valor de B:"));
let c = parseFloat(prompt("Insira o valor de C:"));

var func = Math.pow(b, 2) - 4 * a * c;

var x1 = (-b + Math.sqrt(func)) / (2 * a);
var x2 = (-b - Math.sqrt(func)) / (2 * a);

console.log(x1, x2);
