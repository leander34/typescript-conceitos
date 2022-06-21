type MapStringCallback = (item: string) => string;
// ou callback: MapStringCallback
export function mapStrings(
  array: string[],
  callback: (item: string) => string
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callback(item));
  }

  return newArray;
}

const abc = ["a", "b", "c"];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMapped);

type Objeto = {
  nome: {
    primeiro: string;
  };
};

interface Props {
  func: (item: string) => void;
  number: number;
  string?: string;
  obj: Objeto;
}

const pessoa: Props = {
  func(item: string) {
    console.log("opda");
  },
  number: 9,
  string: "leander",
  obj: {
    nome: {
      primeiro: "lead",
    },
  },
};
