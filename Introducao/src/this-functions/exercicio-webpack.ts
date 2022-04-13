export function funcao(this: Date, nome: string, idade: number): void {
    console.log(this)
    console.log(nome)
    console.log(idade)
}

funcao.call(new Date(), 'leander', 19)
funcao.apply(new Date(), ['leander', 19])