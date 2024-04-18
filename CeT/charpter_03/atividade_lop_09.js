//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 27/03/2024. ECT - UFRN

//Enunciado:
/* -- Separando em Dezena e Unidade --

Fazer um programa para:
1. Ler, via teclado, um número inteiro. Assuma que o usuário vai digitar um número entre 10 e 99.
2. Imprimir no monitor os dígitos deste número (1 dígito em cada linha). Exemplo: Se o usuário digitar 29, imprimir: 2 9

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 29                  | 2                 |
|                     | 9                 |
|---------------------|-------------------|
| 51                  | 5                 |
|                     | 1                 |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
9628 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let num = parseInt(prompt("Insira um número inteiro (de 10 à 99) para separação:"));

if (num < 100 && num > 9) {
    var dez = Math.floor(num / 10);
    var dec = num%10;
    
    console.log(dez + "\n" + dec);
} else {
    console.log("O número informado é incorreto! :-(");
}
