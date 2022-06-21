type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

// Pega o elemento comum em todos os types
type AB = "A" | "B";
type AC = "A" | "C";
type AD = "A" | "D";
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: "leander",
  sobrenome: "silveira",
};

console.log(pessoa);

export { pessoa };
