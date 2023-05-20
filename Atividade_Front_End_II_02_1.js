function calcularSuprimento(idade, quantidadeLanchesDia, precoLanche) {
  const idadeMaxima = 85;
  const diasPorAno = 365;
  const totalDias = (idadeMaxima - idade) * diasPorAno;
  const quantidadeTotal = totalDias * quantidadeLanchesDia;
  const custoTotal = quantidadeTotal * precoLanche;

  console.log(
    `Você precisará de R$${custoTotal} para ter um suprimento de lanche até ${idadeMaxima} anos.`
  );
}

// exemplo que foi pedido no exercídio.
calcularSuprimento(30, 2, 5.5);
