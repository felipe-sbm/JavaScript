//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Idades e permissões --

Faça um programa que recebe a idade de uma pessoa e informa se ela pode votar, mas não dirigir
(idade>=16 e idade<18), pode dirigir e votar (idade>=18) ou não pode nenhum dos dois (idade<16).
Veja que quem está com 16 ou 17 vota mas não dirige. Veja com cuidado nos exemplos de teste
como é o texto que deve ser impresso em cada saída.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída:           |
|---------------------|-----------------------------|
| 16                  | pode votar, mas não dirigir |
|---------------------|-----------------------------|
| 17                  | pode votar, mas não dirigir |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
6321 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let ida = parseFloat(prompt("Insira a sua idade:"));

if (ida >= 16 && ida < 18) {
  alert("pode votar, mas não dirigir");
}
if (ida >= 18) {
  alert("pode votar e dirigir");
}
if (ida < 16) {
  alert("não pode votar e nem dirigir");
}
