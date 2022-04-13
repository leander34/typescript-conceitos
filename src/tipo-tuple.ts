// tuple
const dadosClientes1: readonly [number, string] = [34, 'leander']
const dadosClientes2: [number, string, string] = [1, 'Ana', 'Xitsa']
const dadosClientes3: [number, string, string?] = [2, 'Maria']
const dadosClientes4: [number, string, ...string[]] = [3, 'Bia', 'Paula', 'Gabi']

// dadosClientes1[0] = 12
// dadosClientes1[1] = 'kdand'


console.log(dadosClientes1)
console.log(dadosClientes2)
console.log(dadosClientes3)
console.log(dadosClientes4)

// readonly array

const array1: readonly string[] = ['leander', 'rafael', 'lucas']
const array2: ReadonlyArray<string> = ['pedro', 'gilmar', 'hugo']


console.log(array1)
console.log(array2)