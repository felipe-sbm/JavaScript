//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Divisível por 3 e por 4 - versão mais complexa --

Vamos voltar a questão dos divisíveis por 3 e por 4. Ela parece simples na forma que foi apresentada
na versão anterior. Contudo, nessa versão os casos de testes foram mudados, e dependendo da forma que
você fez a versão anterior, se você copiar e colar o mesmo código, a questão talvez não funcione com
100% de corretude. Nessa nova versão, você vai informar se ele é divisível por 3 e por 4 ao mesmo tempo.
Se não for divisível, você vai ter que dizer se não foi divisível por 3 ou se não foi divisível por 4.
Caso não seja divisível pelos dois, então diga que "não é divisível por 3 e 4".

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída:       |
|---------------------|-------------------------|
| 12                  | divisível por 3 e por 4 |
|---------------------|-------------------------|
| 24                  | divisível por 3 e por 4 |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
10532 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let num = parseFloat(prompt("Insira um número:"));

if (num % 3 === 0 && num % 4 === 0) {
  alert("divisível por 3 e por 4");
}
if (num % 3 === 0 && num % 4 !== 0) {
  alert("não é divisível por 4");
}
if (num % 3 !== 0 && num % 4 === 0) {
  alert("não é divisível por 3");
}
if (num % 3 !== 0 && num % 4 !== 0) {
  alert("não é divisível por 3 e 4");
}
