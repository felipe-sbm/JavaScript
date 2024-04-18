//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 27/03/2024. ECT - UFRN

//Enunciado:
/* -- Troca de dígitos UDC --

Implemente um programa que recebe um número de 3 dígitos no formato CDU e o reescreve no formato UDC.
Exemplo: 123 deve ser reescrito como 321.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 123                 | 321               |
|---------------------|-------------------|
| 765                 | 567               |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
9096 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com*/

let UDC = parseInt(prompt("Insira um número de 100 à 999, para transcrever ao formato UDC:"));

if (UDC < 1000 && UDC > 99) {
    var CEN = Math.floor(UDC / 100);
    var DZN = (UDC % 100) - (UDC % 10);
    var UNI = (UDC % 10) * 100;
    
    console.log(UNI + DZN + CEN);
} else {
    console.log("O número inserido é inválido! :-(");
}
