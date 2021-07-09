const isFetching: boolean = true;
const isLoading: boolean = false

let int: number = 42;

const message: string = 'hello ts'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['hello', 'world']

const contact: [string, number] = ['alex', 112312124]

let variable: any = 42
variable = 'hi'

console.log(variable);


// function
function sayMyName(name: string): void {
  console.log(name);
}
console.log('alex');

function throwErr(msg: string): never {
  throw new Error(msg)
}

// type
type Login = string

const login: Login = 'admin'

type ID = string | number
const id1: ID = 12
// const id3: ID = []

interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 20,
    height: 30
  },
  color: 'ccc'
}

// function
function add(a: number, b: number): number {
  return a + b
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

interface MyPosition {
  x: number | undefined
  y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a? :number, b?: number) {
  if (!a && !b) {
    return {x: undefined, y: undefined}
  }

  if (a && !b) {
    return {x: a, y: undefined, default: a.toString()}
  }

  return {x: a, y: b}
}

console.log('empty ', position());
console.log('one param ', position(42));
console.log('two param ', position(10, 12));




