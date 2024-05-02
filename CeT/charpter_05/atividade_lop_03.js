//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- MC simples com 2 decisões --

Faça um programa que calcule o IMC e informe se ele está normal ou acima do normal.
Se o imc >= 25 imprimir Acima do normal. Se estiver abaixo de 25 imprima Normal.
Use dois comandos if para responder essa questão.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 50                  | Normal            |
| 1.70                |                   |
|---------------------|-------------------|
| 80                  | Acima do normal   |
| 1.70                |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
9627 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let mas = parseFloat(prompt("Insira o valor da sua massa em KG:"));
let alt = parseFloat(prompt("Insira a sua altura em metros:"));

var imc = mas / Math.pow(alt, 2);

if (imc >= 25) {
  alert("Acima do normal");
}
if (imc < 25) {
  alert("Normal");
}
