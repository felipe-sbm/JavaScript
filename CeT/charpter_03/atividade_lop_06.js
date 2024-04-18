//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 27/03/2024. ECT - UFRN

//Enunciado:
/* -- Comissão do garçom no restaurante --

Escreva um programa que, dado o valor da conta de uma refeição realizada em um restaurante,
calcule a comissão do garçom (10% do valor da conta) e exiba: o subtotal, a comissão do garçom e o total,
todos em reais, seguindo o exemplo ao lado. Se precisar pular uma linha na impressão lembre de usar +"\n".

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 100                 | Subtotal: 100     |
|                     | Comissao: 10      |
|                     | Total: 110        |
|---------------------|-------------------|
| 50                  | Subtotal: 50      |
|                     | Comissao: 5       |
|                     | Total: 55         |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
8864 alunos realizaram a atividade.
Autor(a): orivaldo@gmail.com */

let conta = parseFloat(prompt("Insira o valor da conta:"));

var sub = conta;
var com = conta / 10;
var tot = sub + com;

console.log("Subtotal: " + sub + "\n" + "Comissao: " + com + "\n" + "Total: " + tot);
