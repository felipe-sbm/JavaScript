// Aqui ele cria a matriz de notas com 4 alunos e 4 notas cada
let notas = [
    [7, 8, 6, 7],
    [5, 6, 8, 9],
    [9, 9, 9, 8],
    [6, 7, 5, 6]
  ];
  
  // Já aqui itera sobre as linhas da matriz (os alunos)
  for (let i = 0; i < notas.length; i++) {
    // Soma as notas do aluno atual usando reduce
    let soma = notas[i].reduce(function(total, nota) {
      return total + nota;
    });
  
    // Nessa parte ele calcula a média do aluno
    let media = soma / 4;
  
    // Já nessa, ele verifica se a média é maior ou igual a 6
    if (media >= 6) {
      console.log("Aluno " + (i+1) + " teve média " + media);
    }
  }
  