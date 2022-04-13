// funções que retornam void (nada)

function semRetorno(...args: string[]): void {
    console.log(args.join(' '))
}

semRetorno('leander', 'silveira')

const pessoa = {
    nome: 'leander',
    sobrenome: 'santos',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome)
    }
}

pessoa.exibirNome()

export { pessoa }