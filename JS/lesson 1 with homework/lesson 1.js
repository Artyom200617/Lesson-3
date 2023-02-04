// Lesson 3 (Primitive types methods)

// Metods for string

// concat()
// const concatText = myVar.concat(',', myVar2)
// console.log(concatText)
// console.log(str2.concat(', ', str1));
// // expected output: "World, Hello"
// const bajak = 'kofearax'
// console.log(myVar2.includes('str'))
// console.log(myVar.includes('str'))
// console.log(bajak.includes('kofe'))

// const str = 'To be, or not to be, that is the question.'
// console.log(str.includes('To be'))        // true

// console.log(myVar.indexOf('r'))

// const str = 'Brave new world'
// console.log('Index of first w from start is ' + str.indexOf('w')) // logs 8
// console.log('Index of "new" from start is ' + str.indexOf('new')) // logs 6

// const myVar = 'tsr 1'
// const myVar2 = 'abc 2'
// lastIndexOf()

// let anyString = 'Brave new world'
// console.log('The index of the first w from the end is ' + anyString.lastIndexOf('e'))
// // logs 10

// replace()

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

// console.log(p.replace('dog', 'shnorhavor amanor ev surb cnund'))

// // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

// slice()
// const str = 'The quick brown fox jumps over the lazy dog.'

// console.log(str.slice(31, 35))
// // expected output: "the lazy dog."

// console.log(str.slice(4, 19));
// // expected output: "quick brown fox"

// console.log(str.slice(-4))
// // expected output: "dog."

// console.log(str.slice(-9, -5));
// // expected output: "lazy"

// split()
const str = 'The quick brown fox jumps over the lazy dog.'

// const words = str.split(' ', 4)
// console.log(words)
// // expected output: "fox"

// const chars = str.split('');
// console.log(chars);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);

// toLowerCase(), toUpperCase()
// console.log(str.toUpperCase())
// const ster2 = 'AAAAAAAAA'
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(ster2.toLowerCase())
// // expected output: "the quick brown fox jumps over the lazy dog."

// toString()
// const a = 'ssssss'
// const x = new String('Hello world')
// console.log(x.toString())
// console.log(x.toString()); // logs 'Hello world'

// trim()

const greeting = '   Hello world!   '

console.log(greeting.trim())
// // expected output: "Hello world!";

// Methods for Number

// isNaN()
// Number.isNaN(NaN);        // true
// Number.isNaN(Number.NaN); // true
// Number.isNaN(0 / 0);      // true

// Number.isNaN('NaN');      // false

// isFinite()’

console.log(Number.isFinite(1 / 0))
// // expected output: false

console.log(Number.isFinite(-5))
// // expected output: true

console.log(Number.isFinite(0 / 0))
// // expected output: false

// isInteger()
console.log(Number.isInteger(1.1))
// Number.isInteger(0);         // true
// Number.isInteger(1);         // true
// Number.isInteger(-100000);   // true

// parseInt()
// Number.parseInt(28.2658); // 28

// Math.abs()

Math.abs(-7.25) // 7.25

// Math.floor
// Math.floor(1.6); // 1

// Math.max()

// Math.max(0, 150, 30, 20, 38); // 150

// Math.min()

// Math.min(0, 150, 30, 20, 38); // 0

// Math.random()
console.log(Math.random())
console.log(
	Math.floor(Math.random() * 10 + 1), //; 1-10
)

// Math.floor((Math.random() * 100) + 1); 1-100

// Math.round()

// let a = Math.round(2.60); // 3
// let b = Math.round(2.50); // 3
// let c = Math.round(2.49); // 2
// if (century % 100 === 0) {
// 	alert(century / 100)
//   } else {
// 	alert(Math.floor(century / 100 + 1))
//   }
  // const valuefrom = prompt();
// const myValue = valuefrom 
// ?? 'lav chi'
// console.log(myValue)
// console.log(typeof valuefrom);