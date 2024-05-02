//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Índice de Massa Corporal (IMC) - parte 2 --

Agora vamos fazer um programa mais completo de IMC. Nesse programa calcule o Índice de Massa Corporal
(IMC) de uma pessoa e indique sua classificação de peso. O programa deve solicitar primeiro o peso em
quilogramas e depois a altura em metros. A relação entre IMC e a classificação é dado a seguir: Menor
que 18,5 - Abaixo do peso; Maior ou igual 18,5 e menor que 25 - Peso normal; Maior ou igual 25,0 e
menor que 30 - Sobrepeso; Maior ou Igual à 30 - Obesidade.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 50                  | Abaixo do peso    |
| 1.8                 |                   |
|---------------------|-------------------|
| 60                  | Peso normal       |
| 1.6                 |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
11132 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let mas = parseFloat(prompt("Insira o valor da sua massa em KG:"));
let alt = parseFloat(prompt("Insira a sua altura em metros:"));

var imc = mas / Math.pow(alt, 2);

if (imc >= 30.0) {
  alert("Obesidade");
}
if (imc < 30.0 && imc >= 25.0) {
  alert("Sobrepeso");
}
if (imc < 25.0 && imc >= 18.5) {
  alert("Peso normal");
}
if (imc < 18.5) {
  alert("Abaixo do peso");
}
