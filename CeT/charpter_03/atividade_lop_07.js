//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 22/03/2024. ECT - UFRN

//Enunciado:
/* -- Equivalente em dias e horas --

Escreva um programa que recebe um número inteiro de horas e imprime o número equivalente em dias.
Faça com que o programa apresente a parte fracionária em horas. Ex.: 60 horas = 2 dias e 12 horas.
Dica: use o operador “%” (resto da divisão). Outra dica use função parseInt( ) para transformar
o quociente em um número inteiro.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 60                  | 2 dias e 12 horas |
|---------------------|-------------------|
| 72                  | 3 dias e 0 horas  |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
9468 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let hora = parseInt(prompt("Insira o valor de horas para a conversão:"));

var dias = Math.floor(hora / 24);
var rest = hora%24;

console.log(dias + " dias" + " e " + rest + " horas");
