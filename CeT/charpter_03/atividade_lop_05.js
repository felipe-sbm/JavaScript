//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 22/03/2024. ECT - UFRN

//Enunciado:
/* -- Resto da divisão inteira --

Escreva um programa que recebe dois números inteiros e mostra o resto da divisão.
Para calcular o resto use o operador %. Se você usar código x = m%y em x ficaria o resto da divisão de m por y.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 7                   | 1                 |
| 2                   |                   |
|---------------------|-------------------|
| 15                  | 0                 |
| 5                   |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
7623 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com*/

let x = parseInt(prompt("Insira o valor para o primeiro número:"));
let y = parseInt(prompt("Insira o valor para o segundo número:"));

var resto = x%y;

console.log(resto);
