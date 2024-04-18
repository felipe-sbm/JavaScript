//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 27/03/2024. ECT - UFRN

//Enunciado:
/* -- Troca de dígitos UCD --

Implemente um programa que recebe um número de 3 dígitos no formato CDU e o reescreve no formato UCD.
Exemplo: 123 deve ser reescrito como 312.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 123                 | 312               |
|---------------------|-------------------|
| 482                 | 248               |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
10897 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */
let CDU = parseInt(prompt("Insira um número de 100 à 999, para transcrever ao formato UDC:"));

if (CDU < 1000 && CDU > 99) {
    var DC = Math.floor(CDU / 10);
    var UN = (CDU % 10) * 100;
    
    console.log(UN + DC);
} else {
    console.log("O número inserido é inválido! :-(");
}
