//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Média com 3 situações de decisão --

(questão 5) Faça agora o calculo da média de duas notas e informe aprovado se a média for
maior ou igual que 5, em recuperação com media menor que 5 e maior ou igual a 3, e reprovado
caso seja menor que 3. Para tomar uma decisão com valores num intervalo como menor que 5 e maior
ou igual a 3 (5 > media >=3), você deve usar um if dentro de outro if. Isso é chamado na lógica de
programação de estrutura aninhada (uma estrutura dentro de outra). Quando você tem um if dentro de
outro, você está perguntando se duas condições são verdade ao mesmo tempo. Nesse caso se média < 5
ao mesmo tempo em que media >=3. Veja como fica o if aninhado no exemplo abaixo.
  
if (media < 5) {
    if (media >=3) {
        alert("REC");
    }
}​
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 5                   | APR               |
| 5                   |                   |
|---------------------|-------------------|
| 4                   | REC               |
| 4                   |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
9045 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let p1 = parseFloat(prompt("Insira o primeiro valor:"));
let p2 = parseFloat(prompt("Insira o segundo valor:"));

var med = (p1 + p2) / 2;

if (med >= 5) {
  alert("APR");
}
if (med < 5 && med >= 3) {
  alert("REC");
}
if (med < 3) {
  alert("REP");
}
