//* Objects
let myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2002,
}

let car: {
  make: string
  model: string
  year: number
} = myCar

//? A function that prints info about a car to stdout
function printCar(car: {
  make: string
  model: string
  year: number
  chargeVoltage?: number
}) {
  let str = `${car.make} ${car.model} (${car.year})`
  car.chargeVoltage
  if (typeof car.chargeVoltage !== 'undefined')
    str += `// ${car.chargeVoltage}v`
  console.log(`${car.make} ${car.model} (${car.year})`)
}

printCar(car)

//* Optional properties
printCar({
  //? original fn works
  make: 'Honda',
  model: 'Accord',
  year: 2017,
})

printCar({
  //? optional property works too!
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  chargeVoltage: 220,
})

//* Excess property checking
/**
 printCar({
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  color: 'RED', //? EXTRA PROPERTY
})

Typescript did not like this because the `color` property is not defined in the type of the `printCar` function. This is called excess property checking.
 */

const myArg = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  color: 'RED', //? EXTRA PROPERTY
}

printCar(myArg)

// This is a way to get around the excess property checking. It's not recommended because it's not type-safe.
// Typescript doesnt perform excess property checking on objects that are first assigned to a variable.
// It just checks that the object has the required properties.

//* Index signatures

//? Dictionary of phone #s
const phones: {
  [k: string]:
    | {
        country: string
        area: string
        number: string
      }
    | undefined
} = {
  home: { country: '+1', area: '211', number: '652-4515' },
  work: { country: '+1', area: '670', number: '752-5856' },
  fax: { country: '+1', area: '322', number: '525-4357' },
}


//? Model as an index signature
// Any property key of type string will have a value specified by the type { country: string, area: string, number: string }

//*  Array Types


const fileExtensions = ["js", "ts"]
//        ^? string[]   can also do this Array<string> but <> will clash with JSX

const cars = [ //? Let's look at an array of objects
    {
        make: "Toyota",
        model: "Corolla",
        year: 2002,
    },
]

// TypeScript infers the type of the cars array based on the objects inside it.


//* Tuples

let myCar2 = [
    2002,     // Year
    "Toyota", // Make
    "Corolla" // Model
]
const [year, make, model] = myCar2 //✔️ Destructuring

//? Inference doesn't work very well for tuples

myCar2 = ["Honda", 2017, "Accord", "Sedan"] //! Wrong convention

let myCar3: [number, string, string] = [
    2002,
    "Toyota",
    "Corolla",
]
// myCar3 = ["Honda", 2017, "Accord"] //! Wrong convention
// myCar3 = [2017, "Honda", "Accord", "Sedan"] //! Too many elements


//*  `readonly` tuples

const numPair: [number, number] = [4, 5]; //✔️ Valid
const numTriplet: [number, number, number] = [7]; //! Invalid

[101, 102, 103].length //? number[].length
numPair.length //? [number, number] length

numPair.push(6) // [4, 5, 6]
numPair.pop() // [4, 5]
numPair.pop() // [4]
numPair.pop() // []

numPair.length  //! ❌ DANGER ❌

const roNumPair: readonly [number, number] = [4, 5]
roNumPair.length
roNumPair.push(6) // [4, 5, 6] //! Not allowed
roNumPair.pop() // [4, 5] //! Not allowed

let twoDArray: string[][] = [['a', 'b'], ['c', 'd']]

/**/

export default {}
