//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 22/03/2024. ECT - UFRN

//Enunciado:
/* -- Perímetro de raio R --

Implemente um programa que recebe um valor real referente a um raio R e calcula:
O perímetro do círculo de raio R. Considere PI = 3.14159265. Nessa questão você terá que fixar as
casas decimais após a virgula em apenas 2 casas. Para isso você vai usar a função de impressão toFixed( ).
Sua sintaxe é: x.toFixed(n), onde x é numero que você quer reduzir as casas decimais e n é quantidade para qual
você vai reduzir. Se x = 4.45678, ao usar x.toFixed(2), o valor impresso de x seria 4.45. Você deve usar
o toFixed( ) de preferencialmente na hora da saída, ou seja, usar ela dentro do alert( ).

P = 2∗π∗R

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 5                   | 31.42             |
|---------------------|-------------------|
| 13                  | 81.68             |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
9718 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let r = parseFloat(prompt("Insira o valor do raio para calcular a circunferência:"));
let pi = 3.14159265;

var p = 2 * pi * r;

console.log(p.toFixed(2));
