//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 27/03/2024. ECT - UFRN

//Enunciado:
/* -- Troca de valores entre variáveis --

Faça um programa que recebe 2 valores e os armazena em duas variáveis inteiras ,a e b.
Em seguida o programa deve efetuar a troca dos valores de forma que a variável 'a' passe a possuir
o valor da variável 'b' e que a variável 'b' passe a possuir o valor da variável 'a'. Apresente os valores
iniciais e os valores finais de a e b. Cuidado: sempre que você usa x = y o valor que antes estava
em x se perde e a variável passa a ter uma cópia do valor de y.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 7                   | Inicial: 7 2      |
| 2                   | Final: 2 7        |
|---------------------|-------------------|
| 45                  | Inicial: 45 23    |
| 23                  | Final: 23 45      |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
9106 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let a = parseInt(prompt("Insira o primeiro valor inteiro:"));
let b = parseInt(prompt("Insira o segundo valor inteiro:"));

if (a > b) {
    console.log("Inicial: " + a + " " + b + "\n" + "Final: " + b + " " + a);
} else {
    console.log("Inicial: " + b + " " + a + "\n" + "Final: " + a + " " + b);
}
