// const ArrayO: object[] = [{nome: 'leander'}, {nome: 'ana'}]

// ArrayO.forEach(p => {
//     console.log(p.nome)
// })

const pessoa: {
  readonly chaveA: string; //Apenas leitura
  chaveB: string;
  chaveC?: string; // opcional
  [key: string]: unknown; // chave do tipo string e valor do tipo string
} = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};

console.log(pessoa);
pessoa.chaveB = "Outra coisa";
pessoa.chaveD = "valor D";
pessoa[999] = "dadan"; // nao sei pq
console.log(pessoa);

export { pessoa };

const tes = "leanod";
export { tes };
