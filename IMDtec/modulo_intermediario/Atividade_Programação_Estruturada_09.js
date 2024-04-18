function getMaiorFrase(arr) {
    if (arr.length === 1) {
      return arr[0];
    } else {
      let fraseAtual = arr[0];
      let maiorFrase = getMaiorFrase(arr.slice(1));
      return fraseAtual.length > maiorFrase.length ? fraseAtual : maiorFrase;
    }
  }