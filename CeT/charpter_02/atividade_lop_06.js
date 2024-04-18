//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 21/03/2024. ECT - UFRN

//Enunciado:
/* -- Convertendo de metros para polegadas --

Escreva um programa que recebe um número real referente a uma medida em metros e imprima esta medida em: polegadas.
Considere que uma polegada equivale à 0.0254 metros. Na hora de imprimir a resposta siga o seguinte modelo: 

polegadas: 39.37007874015748

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída:            |
|---------------------|------------------------------|
| 1                   | polegadas: 39.37007874015748 |
|---------------------|------------------------------|
| 0.0254              | polegadas: 1                 |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´

10545 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let metros = parseFloat(prompt("Insira o valor em metros para ser convertido em polegadas:"));

var polegadas = metros / 0.0254;

console.log("polegadas: " + polegadas);
