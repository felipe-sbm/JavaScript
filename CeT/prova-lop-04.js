// Atividade de lógica da programação, 17/06/2024, Escola de ciência & tecnologia

/* -- Vetor de Dobra --

Escreva um programa que lê um número inteiro n e, em seguida, os n valores de um vetor de reais v.

Após a leitura, você deve verificar se o vetor informado é um vetor de dobra. Um vetor é dito de
dobra quando, ao dobrá-lo na metade, seus valores coincidem. Ou seja, eles possuem na sua metade
da direita os valores invertidos da sua metade da esquerda.

Por exemplo, o vetor v = [1, 2, 3, 3, 2, 1] é um vetor de dobra. O vetor u = [4, 5, 8, 9, 8, 5, 4] também
é um vetor de dobra. Entretanto, o vetor t = [1, 2, 3, 4, 5, 6] não é um vetor de dobra.

Exemplo de entrada	Exemplo de saída
6
1
2.5
3
3
2.5
1	Vetor de dobra
6
1
2
3
1
2
3	Vetor comum
231
Autor(a): thalesaguiar21@gmail.com */

function vetores() {
  const n = parseInt(prompt("Digite um número n:"));
  const v = Array.from({ length: n }, () => parseFloat(prompt("Digite um valor para v:")));

  const esquerda = v.slice(0, Math.floor(v.length / 2));
  const direita = v.slice(-Math.floor(v.length / 2));

  return esquerda.join("") === direita.reverse().join("");
}

if (vetores()) {
  console.log("Vetor de dobra");
} else {
  console.log("Vetor comum");
}
