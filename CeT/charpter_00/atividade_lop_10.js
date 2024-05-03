//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 12/04/2024. ECT - UFRN

//Enunciado:
/* -- Quente ou Frio --

Escreva um programa que solicita números do usuário até que ele acerte um determinado valor. 
Seu programa deve exibir "quente" quando a diferença entre o número digitado e o número real 
for de 10 (tanto para menos ou para mais), e "frio" caso contrário. Exiba a mensagem "acertou" 
quando o usuário adivinhar o número;

Seu programa deve ler um número inteiro, representando o número a ser adivinhado. Em seguida,
deve ler números até que o usuário acerte o número.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 15                  |                   | <====
| 14                  | quente            |      \\
| 5                   | quente            |       ||
| 4                   | frio              |       ||
| 25                  | quente            |       || ==> NOTE: os primeiros valores inseridos,
| 26                  | frio              |       || não exibem nada, somente depois do 2°.
| 15                  | acertou           |       ||
|---------------------|-------------------|       ||
| 15                  |                   |       //
| 15	                | acertou           | <====
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
106
Autor(a): thalesaguiar21@gmail.com */

let temp = parseInt(prompt("Insira um número inteiro:"));
let acertou = false;

while (acertou === false) {
    let numb = parseFloat(prompt("Insira um número:"));
    if (numb === temp) {
        console.log("acertou");
        acertou = true;
    } else if (Math.abs(numb - temp) <= 10) {
        console.log("quente");
    } else {
        console.log("frio");
    }
}
