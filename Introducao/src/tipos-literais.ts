let x = 10
x = 0b1010
const y = 10
// let a = 100 as const // variavel a é do tipo literal 100 e não um number
const a = 100 // melhor fazer assim então

console.log(a)

const pessoa = {
    nome: 'leander' as const,
    sobrenome: 'silveira'
}

// pessoa.nome = 'dknadn' // não consigo fazer isso

function escolhaCor(cor: 'Vermelha' | 'Azul' | 'Amarelo') {
    return cor
}

console.log(escolhaCor("Azul"))
export default pessoa