//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Encontrando números pares --

(questão 3) Faça um programa que recebe um número e informa se ele é par. Todos os números
pares são divisíveis por 2. Você pode encontrar um número divisível por outro usando o operador %.
Se o resto da divisão de um número por outro for igual a 0, então o numerador dessa divisão é
divisível pelo denominador. Então depois de receber o número, divida ele por 2 usando o operador %.
para verificar se essa divisão vai dar exatamente 0, use o operador de comparação ==, que serve para
comparar dois valores. Siga a estrutura abaixo:

if (num%2 == 0) {
    alert("par");
}
​
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 4                   | par               |
|---------------------|-------------------|
| 6                   | par               |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
6229 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let par = parseFloat(prompt("Insira um número:"));

if (par%2 === 0){
    alert("Par");
}