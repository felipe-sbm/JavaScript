//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 21/03/2024. ECT - UFRN

//Enunciado:
/* -- Cálculo do IMC --

Agora vamos fazer nosso primeiro aplicativo de fato. Será um programa que é capaz de calcular o
Índice de Massa Corporal (IMC) de uma pessoa. Ele recebe na entrada a massa em quilos e a altura em metros de uma pessoa.
A resposta de saída deve seguir o formato exato do quadro a direita do enunciado (onde está o exemplo de entrada e saída).
O IMC é calculado pela fórmula abaixo.

​iMC = m / h²

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída:       |
|---------------------|-------------------------|
| 90                  | IMC: 31.14186851211073  |
| 1.70                |                         |
|---------------------|-------------------------|
| 70                  | IMC: 21.604938271604937 |
| 1.80                |                         |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
11051 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */
let massa = parseFloat(prompt("Informe a sua massa:"));
let altura = parseFloat(prompt("Informe a sua altura:"));

var imc = massa / Math.pow(altura, 2);

console.log("IMC: " + imc);
