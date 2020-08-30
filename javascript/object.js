const pessoa1 = {
  nome: 'Vinicius',
  sobrenome: 'Prudencio',
  idade: 23,
  ano: 2020,

  fala() {
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}. A minha idade atual é ${this.idade} em ${this.ano}.`);
  },

  incrementaIdadeEano() {
    this.idade++;
    this.ano++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdadeEano();
pessoa1.fala();
pessoa1.incrementaIdadeEano();
pessoa1.fala();
pessoa1.incrementaIdadeEano();
pessoa1.fala();