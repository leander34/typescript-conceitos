export function multiplicaArgs(...args: number[]): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperC(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaString("a", "b", "c");
const upper = toUpperC("a", "b", "c");

console.log(result);
console.log(concatenacao);
console.log(upper);
