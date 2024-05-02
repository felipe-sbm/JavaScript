//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Divisível por 3 e por 4 - versão ainda mais complexa --

(questão 11) Nessa nova versão, você vai informar se ele é divisível por 3 e por 4 ao mesmo tempo.
Se não for divisível, você vai ter que dizer: se não foi divisível por 3, mais foi por 4; se ele foi
divisível por 3, mas não foi divisível por 4; se ele não foi divisível por nenhum dos dois.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída:       |
|---------------------|-------------------------|
| 12                  | divisível por 3 e por 4 |
|---------------------|-------------------------|
| 24                  | divisível por 3 e por 4 |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
7955 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com  */

let num = parseFloat(prompt("Insira um número:"));

if (num % 3 === 0 && num % 4 === 0) {
  alert("divisível por 3 e por 4");
}
if (num % 3 === 0 && num % 4 !== 0) {
  alert("divisível por 3, mas não por 4");
}
if (num % 3 !== 0 && num % 4 === 0) {
  alert("não é divisível por 3, mas é por 4");
}
if (num % 3 !== 0 && num % 4 !== 0) {
  alert("não é divisível por 3 e nem por 4");
}
