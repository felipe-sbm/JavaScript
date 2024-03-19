// Aqui ele define o número de atletas
const numAtletas = 3;

// Vetor para armazenar os nomes dos atletas
const atletas = [];

// Matriz para armazenar as notas dos jurados
const notas = [];

// Nessa parte é o loop para ler os dados dos atletas e notas
for (let i = 0; i < numAtletas; i++) {
  // Lê o nome do atleta e adiciona no vetor
  const nomeAtleta = prompt(`Digite o nome do atleta ${i+1}:`);
  atletas.push(nomeAtleta);

  // Vetor para armazenar as notas do atleta
  const notasAtleta = [];

  // Loop para ler as notas dos jurados
  for (let j = 0; j < 5; j++) {
    const nota = parseFloat(prompt(`Digite a nota do jurado ${j+1} para o atleta ${nomeAtleta}:`));
    notasAtleta.push(nota);
  }

  // Adiciona o vetor de notas do atleta na matriz de notas
  notas.push(notasAtleta);
}

// Aqui ordena o vetor de atletas em ordem alfabética
atletas.sort();

// Vai imprimir a lista de atletas
console.log('Lista de atletas:');
for (const atleta of atletas) {
  console.log(atleta);
}

// Novamente imprime a média de notas de cada atleta
console.log('Média de notas de cada atleta:');
for (let i = 0; i < numAtletas; i++) {
  const notasAtleta = notas[i];
  const somaNotas = notasAtleta.reduce((soma, nota) => soma + nota);
  const mediaNotas = somaNotas / notasAtleta.length;
  console.log(`${atletas[i]}: ${mediaNotas.toFixed(2)}`);
}
