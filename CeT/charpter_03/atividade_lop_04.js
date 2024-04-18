//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 22/03/2024. ECT - UFRN

//Enunciado:
/* -- Área e Volume do círculo de raio R --

Implemente um programa que recebe um valor real referente a um raio R e calcula: A área do círculo
de raio R; O volume da esfera de raio R. Considere PI = 3.14159265. Arredonde o resultado com duas
casas de precisão utilizando o toFixed( ).

A = π · R²
    &
V = 4/3 · π · R³

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 5                   | 78.54 523.60      |
|---------------------|-------------------|
| 13                  | 530.93 9202.77    |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
9068 alunos visualizaram a atividade.
Autor(a): orivaldo@gmail.com */

let r = parseFloat(prompt("Insira o valor do raio para calcular a área e o volume:"));
let pi = 3.14159265;

var area = pi * Math.pow(r, 2);
var volume = (4/3) * pi * Math.pow(r, 3);

console.log(area.toFixed(2) + " " + volume.toFixed(2));
