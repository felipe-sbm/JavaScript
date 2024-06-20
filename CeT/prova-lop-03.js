// Atividade de lógica da programação, 17/06/2024, Escola de ciência & tecnologia

/* -- Conta sorrisos --

Ao realizar uma análise de mensagens do twitter, você nota que existe uma certa frequência
de carinhas tristes para uma quantidade de sorrisos. Portanto, você precisa escrever um programa
que conte quantos sorrisos existem para cada 3 carinhas tristes. Logo, seu programa deve parar a
leitura e a contagem sempre que encontrar 3 caras tristes, e continuar caso contrário. Ao final,
seu programa deve exibir a contagem de sorrisos, caretas, e mensagens desconhecidas. :-)

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| SORRISOS: :)    :D     ;-D     :~) |
|------------------------------------|
| CARAS TRISTES: ;(    :<    :}   :] |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
,,.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
| Exemplo de entrada: | Exemplo de saída: |
|---------------------|-------------------|
| :)                  | 5 sorrisos        |
| :<                  | 3 caretas         |
| :}                  | 0 desconhecidos   |
| :D                  |                   |
| ;-D                 |                   |
| ;-D                 |                   |
| :~)                 |                   |
| ;(                  |                   |
|---------------------|-------------------|
| ;(                  | 0 sorrisos        |
| :<                  | 3 caretas         |
| :}	                | 0 desconhecidos   |
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
218 Alunos visualizaram a atividade.
Autor(a): thalesaguiar21@gmail.com */

const carinhasF = [":)", ":D", ";-D", ":~)"];
const carinhasT = [";(", ":<", ":}", ":]"];

let sorrisos = 0;
let caretas = 0;
let desconhecidos = 0;

while (caretas - sorrisos < 3) {
  const carinha = prompt("Digite uma carinha:");

  if (carinhasF.includes(carinha)) {
    sorrisos++;
  } else if (carinhasT.includes(carinha)) {
    caretas++;
  } else {
    desconhecidos++;
  }

  if (caretas === 3) {
    break;
  }
}

console.log(
  sorrisos +
    " sorrisos" +
    "\n" +
    caretas +
    " caretas" +
    "\n" +
    desconhecidos +
    " desconhecidos"
);
