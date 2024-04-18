//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 21/03/2024. ECT - UFRN

//Enunciado:
/* -- Fórmula de Bháskara --

Faça um programa que calcula a fórmula de Bháskara para os seguintes valores de
 a = 1, b = 8, c = -9. Considere que a primeira resposta é para o valor positivo e a segunda
  é para o valor negativo da raiz de delta.

-b±√b²-4·a·c /2·a
​
,,,,,,,,,,,,,,,,,,,,,
| Exemplo de saída: |
|-------------------|
| 1 -9              |
´´´´´´´´´´´´´´´´´´´´´
15113 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let a = 1;
let b = 8;
let c = -9;

var delta = Math.pow(b, 2) - 4 * a * c;

var x1 = (-b + Math.sqrt(delta)) / (2 * a);
var x2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log(x1, x2);
