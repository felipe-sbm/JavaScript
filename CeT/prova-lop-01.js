// Atividade de lógica da programação, 11/03/2024, Escola de ciência & tecnologia
/* -- Caixa Eletrônico --

Escreva um programa que lê um valor inteiro positivo e exibe a quantidade mínima de cédulas a qual o valor pode ser trocado. Considere que as cédulas disponíveis possuem os valores: 200, 100, 50, 20, 10, 5, 2, 1.

Exemplo de entrada	Exemplo de saída
576	2 de 200
1 de 100
1 de 50
1 de 20
0 de 10
1 de 5
0 de 2
1 de 1
11257	56 de 200
0 de 100
1 de 50
0 de 20
0 de 10
1 de 5
1 de 2
0 de 1
364
Autor(a): thalesaguiar21@gmail.com */

let grana = parseInt(prompt("Insira o valor que quer receber:"));
const cedulas = [200, 100, 50, 20, 10, 5, 2, 1];
const quantidadeCedulas = Array(cedulas.length).fill(0);

if (grana > 0) {
    for (let i = 0; i < cedulas.length; i++) {
        while (grana >= cedulas[i] && quantidadeCedulas[i] < cedulas[i] + 1) {
            quantidadeCedulas[i]++;
            grana -= cedulas[i];
        }
    }

    let resultado = "";
    for (let i = 0; i < cedulas.length; i++) {
        if (quantidadeCedulas[i] > -1) {
            resultado += `${quantidadeCedulas[i]} de ${cedulas[i]} \n`;
        }
    }

    console.log(resultado.slice(0, -1));
}
