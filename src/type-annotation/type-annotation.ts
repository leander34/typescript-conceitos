/* eslint-disable */
// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'leander' // Qualquer tipo de strings: '' "" ``
let idade: number = 34 // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true // true ou false
let simbolo: symbol = Symbol('qualquer-symbol') // symbol
// let big: bigint = 10n // bigint


// Arrays

let arrayOfNumbers: Array<number> = [1, 2, 3, 4]
let arrayOfNumbers2: number[] = [5, 6, 7, 8]
let arrayOfStrings: Array<string> = ['a', 'b', 'c']
let arrayOfStrings2: string[] = ['d', 'e', 'f']

// Objeaos

const pessoa: {nome: string; idade: number, adulto?: boolean, cor: 'azul' | 'vermelho'} = {
    nome: 'leander',
    idade: 19,
    cor: "vermelho"
}

// Funções

function soma(x: number, y: number): number {
    return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y
const soma3 = (x: number, y: number): number => x * y

console.log(soma3(3, 8))
console.log(soma2(2, 3))

export { pessoa }