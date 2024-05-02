//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Menor de 3 números --

Vamos fazer um programa que que leia três valores e determine qual o menor deles. Esse é um
programa bem util pois permite determinar qual o menor elemento de um conjunto. Você novamente
vai ter que testar condições. O grande problema dessa questão é como testar duas condições ao
mesmo tempo. Supondo que temos 3 números chamados aqui de x, y e z. Para x ser o menor dos 3 ele
deve ser menor que y e menor z. Como testar duas condições ao mesmo tempo? Você pode colocar
um if dentro de outro if. Veja o exemplo abaixo. A linha de comando que estiver dentro do segundo
if só será executada se os dois if tiverem Verdade como resultado. Se você entendeu experimente
agora construir o programa para descobrir o menor dentre 3.


,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 1                   | 1                 |
| 2                   |                   |
| 3                   |                   |
|---------------------|-------------------|
| 111                 | 23                |
| 23                  |                   |
| 73                  |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
8742 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let num1 = parseInt(prompt("Insira um número:"));
let num2 = parseInt(prompt("Insira um número:"));
let num3 = parseInt(prompt("Insira um número:"));

if (num1 < num2 && num1 < num3) {
  alert(num1);
}
if (num2 < num1 && num2 < num3) {
  alert(num2);
}
if (num3 < num1 && num3 < num2) {
  alert(num3);
}
