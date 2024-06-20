// Atividade de lógica da programação, 17/06/2024, Escola de ciência & tecnologia

/* -- Números de Lucas --

Os números de Lucas são uma sequência de números inteiros onde o i​-ésimo termo é dado
por:              L(i)=L(i−1)+L(i−2)L(i) = L(i-1) + L(i-2)L(i)=L(i−1)+L(i−2) para i≥2i
e 2i≥2​, sendo:    L(0)=2L(0)=2L(0)=2​ e L(1)=1L(1) = 1L(1)=1​.
Escreva um programa que lê um inteiro positivo i​ e imprime o i primeiros termos da sequência de Lucas.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída:        |
|---------------------|--------------------------|
| 4                   | 2,1,3,4                  |
|---------------------|--------------------------|
| 10                  | 2,1,3,4,7,11,18,29,47,76 |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
287 Alunos visualizaram a atividade.
Autor(a): thalesaguiar21@gmail.com */

let Inumero = Math.abs(parseInt(prompt("Eaí essa galera, informe o i-nésimo termo para o programa:")));
const numeros = [];

for (let i = 0; i < Inumero; i++) {
  if (i === 0) {
    numeros.push(2);
  } else if (i === 1) {
    numeros.push(1);
  } else {
    let numero = numeros[i - 1] + numeros[i - 2];
    numeros.push(numero);
  }
}

console.log(numeros.join(","));
