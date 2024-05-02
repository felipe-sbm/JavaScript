//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Calcular Índice de Massa Corporal (IMC) - parte 1 --

O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.
Você já pode ter visto o cálculo do IMC em outra questão. Mas depois que o IMC é calculado, o valor sozinho
não quer dizer nada. Com esse valor você pode tomar uma decisão e informar algo útil no programa.
Escreva agora, um programa que recebe primeiro a altura em metros e depois a massa em quilos de uma pessoa
e calcula seu Índice de Massa Corporal (IMC). O programa deve ainda indicar se o imc está
acima do normal (imc >24.9) ou abaixo do normal.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 1.5                 | acima             |
| 180                 |                   |
|---------------------|-------------------|
| 1.73                | abaixo            |
| 67                  |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
12046 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let alt = parseFloat(prompt("Insira a sua altura em metros:"));
let mas = parseFloat(prompt("Insira o valor da sua massa em KG:"));

var imc = mas / Math.pow(alt, 2);

if (imc > 24.9){
    alert("acima");
} else {
    alert("abaixo");
}