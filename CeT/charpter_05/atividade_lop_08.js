//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Média com 3 situações de decisão - parte 2 --

(questão 6) Refaça agora o algoritmos da média: a média de duas notas e informe aprovado se
a média for maior ou igual que 5, em recuperação (coloque sem acento e sem ç) com media entre
5 e maior que 3, e reprovado caso seja menor que 3. Mas agora você vai refazer usando o else
sempre que possível: sempre ao fechar a chave de um if você pode incluir um else. O else será
executado se o teste no if tiver falso como resultado. Tente realmente fazer um algoritmo
diferente do anterior, ao invés de copiar e colar o código.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 5                   | aprovado          |
| 6                   |                   |
|---------------------|-------------------|
| 5                   | recuperacao       |
| 3                   |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
7679 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let p1 = parseFloat(prompt("Insira o primeiro valor:"));
let p2 = parseFloat(prompt("Insira o segundo valor:"));

var med = (p1 + p2) / 2;

if (med >= 5) {
  alert("aprovado");
}
if (med < 5 && med >= 3) {
  alert("recuperacao");
}
if (med < 3) {
  alert("reprovado");
}
