// GENERICS

type strArray = Array<string>
type numArray = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1]

// const l1 = last[1]
// console.log(l1)

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]
const l3 = lastT([1, 2, 3]);
const l4 = lastT(['a', 'b']);
console.log(l4)
