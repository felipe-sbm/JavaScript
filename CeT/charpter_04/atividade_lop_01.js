//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Altura acima de média --

Bem vindo. Nessa lista iremos trabalhar com estruturas de decisão. Essa estrutura permite que você use
uma inequação para que o programa decida se o resultado desta inequação é verdadeiro ou falso.
Para ilustrar o uso das estruturas de decisão, nós iremos ao longo desta aula construir um programa que calcula
IMC de uma pessoa e diz o que aquele IMC significa. Já calculamos o IMC em uma lista anterior. Caso não lembre,
volte nas listas passadas. Para chegar nesse aplicativo que calcula o IMC vamos começar com um programa que verifica
se uma determinada altura está acima da média de altura no Brasil. A estatura média do Brasil é 1.73. Vamos começar
fazendo um código que recebe como entrada uma valor real que representa uma altura, e diz se ele está acima da média
(altura>1.73). Para tomar a decisão no código use a estrutura If. Veja a sintaxe abaixo.

if(altura>1.73){
    alert("Acima");
}
​
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 1.80                | Acima da media    |
|---------------------|-------------------|
| 1.65                |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
9556 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let alt = parseFloat(prompt("Insira o valor da sua altura em metros:"));

if (alt > 1.73) {
    alert("Acima da media");
}