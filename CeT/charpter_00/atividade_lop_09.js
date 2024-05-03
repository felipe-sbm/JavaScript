//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 12/04/2024. ECT - UFRN

//Enunciado:
/* -- Menor --

Escreva um programa que solicita números ao usuário até que ele digite 2. Seu programa deve exibir
a quantidade de números pares e o menor número digitado. Quando o primeiro número digitado for 2,
o programa não deve exibir nada.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 1                   | Menor: -2         |
| 1.5                 | Pares: 2          |
| 20                  |                   |
| -2                  |                   |
| 2	                  |                   |
|---------------------|-------------------|
| 2	                  |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
186 alunos visualizaram a atividade.
Autor(a): thalesaguiar21@gmail.com */

let numP = 0;
let numM = 0;
let numU = parseFloat(prompt("Insira um número:"));

if (numU !== 2){
    while (numU !== 2) {
        if (numU%2 === 0 && numU !== 2) {
        numP ++;
        }
        if (!numM || numU < numM) {
            if (numM !== 2 && numU !== 2) {
            numM = numU;
            }
        }
        numU = parseFloat(prompt("Insira um número:"));
    }
    console.log("Menor: " + numM);
    console.log("Pares: " + numP);
}
