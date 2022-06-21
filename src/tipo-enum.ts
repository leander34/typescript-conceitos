enum Cores {
  VERMELHO, //0
  AZUL = 100,
  AMARELO = 200,
}

enum Cores {
  ROXO = "ROXO",
  VERDE = 201,
  ROSA,
}

console.log(Cores);
console.log(Cores.AZUL);
console.log(Cores[Cores.AZUL]);
console.log(Cores[0]);
console.log(Cores["ROXO"]);
console.log(Cores.ROXO);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.VERDE);
