//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Categorias de natação --

(questão 9) Vamos nos encaminhando para o fim da lista. Agora as questões tem poucas dicas.
Nesse exemplo você vai fazer um programa que recebe a idade de um nadador e exiba sua categoria
segundo as regras: Júnior (5 até 7 anos); Infantil (8 até 12 anos); Pré (13 até 18).

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 5                   | Júnior            |
|---------------------|-------------------|
| 8                   | Infantil          |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
6580 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let ida = parseFloat(prompt("Insira a idade do nadador:"));

if (ida >= 5 && ida <= 7) {
  alert("Júnior");
}
if (ida >= 8 && ida <= 12) {
  alert("Infantil");
}
if (ida >= 13 && ida <= 18) {
  alert("Pré");
}
