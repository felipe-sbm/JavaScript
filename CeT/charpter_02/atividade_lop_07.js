//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 21/03/2024. ECT - UFRN

//Enunciado:
/* -- Convertendo pés, jardas e milhas. --

Escreva um programa que recebe um número real referente a uma medida em metros e imprima esta medida em: pés,
jardas e milhas. Considere que um pé equivale à 0.3048 metros; Uma jarda equivale à 0.9144 metros; Uma milha equivale à 1604.38 metros.
Nessa questão, você deverá imprimir uma resposta de saída abaixo da outra. Para isso, use o comando +"\n" dentro do alert( ),
exatamente no final do texto que você vai escrever. Por exemplo: alert("alo mundo"+"\n"); que vai exibir a frase seguida de um pulo
de linha, tal como o efeito do ENTER.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída:             |
|---------------------|-------------------------------|
| 1                   | pes: 3.280839895013123        |
|                     | jardas: 1.0936132983377078    |
|                     | milhas: 0.0006232937334048044 |
|---------------------|-------------------------------|
| 35                  | pes: 114.82939632545931       |
|                     | jardas: 38.276465441819774    |
|                     | milhas: 0.02181528066916815   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´

11595 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let metros = parseFloat(prompt("Insira o valor em metros para ser convertido:"));

var pes = metros / 0.3048;
var jardas = metros / 0.9144;
var milhas = metros / 1604.38;

alert("pes: " + pes +"\n" + "jardas: " + jardas +"\n" + "milhas: " + milhas);
