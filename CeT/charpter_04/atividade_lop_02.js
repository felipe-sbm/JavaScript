//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 05/04/2024. ECT - UFRN

//Enunciado:
/* -- Altura abaixo da média --

Já conseguimos fazer um programa que informa sobre uma altura acima da média. Vamos agora fazer
um para alertar para uma altura abaixo da média. A estatura média do Brasil é 1.73. Para uma 
altura abaixo da média seria uma inequação como está (altura<1.73). Para tomar a decisão no 
código use a estrutura If.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 1.72                | Abaixo da media   |
|---------------------|-------------------|
| 1.80                |                   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
6587 alunos visualizaram a atividade.
Autor(a): rudsondant@gmail.com */

let alt = parseFloat(prompt("Insira o valor da sua altura em metros:"));

if (alt < 1.73) {
    alert("Abaixo da media");
}
