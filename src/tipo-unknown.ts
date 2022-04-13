// um 'any' mais seguro
// para valores desconhecidos

let x: unknown
x = 100
x = 'leander'
x = 900
x = 10
// x = '10'
const y = 800

if(typeof x === 'number') console.log(x + y)