type Idade = number
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: corPreferida;
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type corPreferida = CorRGB | CorCMYK

const pessoa: Pessoa = {
    nome: 'leander',
    idade: 19,
    salario: 120_000,
}

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
    return {...pessoa, corPreferida: cor}
}

console.log(setCorPreferida(pessoa, 'Ciano'))
console.log(pessoa)

export default pessoa