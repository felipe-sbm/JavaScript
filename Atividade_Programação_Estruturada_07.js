// ele vai criar um objeto que recebe a enquete
const enquete = {
    opcoes: ['Windows Server', 'Linux', 'Mac OS', 'Outro'],
    votos: [0, 0, 0, 0],
    totalVotos: 0,
    calcularPercentual: function(votos) {
      return ((votos / this.totalVotos) * 100).toFixed(2);
    },
    exibirResultados: function() {
      for (let i = 0; i < this.opcoes.length; i++) {
        const percentual = this.calcularPercentual(this.votos[i]);
        console.log(`${this.opcoes[i]}\ntotal de votos: ${this.votos[i]}\npercentual ${percentual}%\n`);
      }
      console.log(`TOTAL DE VOTOS: ${this.totalVotos}`);
    }
  };
  
  // essa é a função que lê os votos e atualiza o objeto da enquete
  function lerVotos() {
    const numVotos = parseInt(prompt("Quantos votos serão informados?"));
    
    for (let i = 0; i < numVotos; i++) {
      const voto = parseInt(prompt(`Informe o voto ${i + 1}: (1 - Windows Server, 2 - Linux, 3 - Mac OS, 4 - Outro)`));
      
      if (voto >= 1 && voto <= 4) {
        enquete.votos[voto - 1]++;
        enquete.totalVotos++;
      } else {
        console.log("Opção inválida. Voto não contabilizado.");
      }
    }
  }
  
  // aqui executa o programa
  lerVotos();
  enquete.exibirResultados();
  