//Atividade de Lógica da programação, Feita por: Felipe SBM, data: 27/03/2024. ECT - UFRN

//Enunciado:
/* --Custo ao consumidor de um carro novo --

O custo ao consumidor de um carro novo é a soma do preço de fábrica com o percentual de lucro
do distribuidor e com os impostos, em que o lucro e os impostos são calculados com base no preço de fábrica.
Implemente um programa que receba o preço da fábrica de um veículo, o percentual de lucro do distribuidor
e o percentual de imposto, nesta ordem, calcule e mostre:

• O valor correspondente ao lucro do distribuidor;
• O valor correspondente aos impostos;
• O preço final do veículo.

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| 33000               | 6600              |
| 20                  | 8250              |
| 25                  | 47850             |
|---------------------|-------------------|
| 20000               | 6000              |
| 30                  | 8000              |
| 40                  | 34000             |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
8735 alunos vlsializaram a atividade.
Autor(a): orivaldo@gmail.com */
let CAR = parseInt(prompt("Insira o valor do preço de fábrica:"));
let LCR = parseInt(prompt("Insira o valor do lucro sob o carro:"));
let IMP = parseInt(prompt("Antes de fazer o L, insira o valor dos impostos:"));

function carro(CAR, LCR, IMP) {
    
    var lcr = CAR * (LCR / 100);
    var imp = CAR * (IMP / 100);
    var car = imp + lcr + CAR;
    
    return {lcr, imp, car};
}

let final = carro(CAR, LCR, IMP);

console.log(final.lcr + "\n" + final.imp + "\n" + final.car);
