//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Par ou impar --

(questão 4) Já descobrimos se um número era par. Como podemos fazer para verificar se ele é impar?
Sabemos que se ele é divisível por 2 (num%2==0) ele será par. Senão for par, ele é impar. Portanto,
pense um pouco e faça um programa que recebe um número e informa se ele é par ou impar.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 4                   | par               |
|---------------------|-------------------|
| 6                   | par               |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
6740 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let par = parseFloat(prompt("Insira um número:"));

if (par%2 === 0){
    alert("par");
} else {
    alert("impar");
}