function addOrConcat(a: number | string, b: number | string): number | string {
    if(typeof a === 'number' && typeof b === 'number') return a + b
    return `${a}${b}`
}

console.log(addOrConcat(10, 2))
console.log(addOrConcat('a', 'cb'))
console.log(addOrConcat('10', 20))
console.log(addOrConcat(90, 'oaoa'))