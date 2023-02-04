//function, array, object

// Lesson 4 (Array and Array methods)

// // 2

// let first = array[0]
// let last = array[array.length-1]
// let fruits = ['Apple', 'Banana', 'Watermelon']
// let backpack = ['Matem', 'Hayoc lezu', 'Fizika']
// console.log(fruits)
// console.log(' fruits[0]==>', fruits[0])
// console.log(' fruits[1]==>', fruits[1])
// console.log(' fruits[2]==>', fruits[2])
// console.log(' last ==>', fruits[fruits.length - 1])
// // // Apple

// // let last = fruits[fruits.length - 1]
// // // Banana

// // push()
// // fruits.push('Orange')
// console.log(fruits)
// let newLength = fruits.push('Orange')
// console.log(newLength)
// console.log(fruits, 'push ')
// // // ["Apple", "Banana", "Orange"]

// // pop()
// let last = fruits.pop() // remove Orange (from the end)
// // // ["Apple", "Banana"]
// console.log(fruits, 'pop ')
// console.log(last, 'returned value')

// shift()
// let first = fruits.shift() // remove Apple from the front
// // ["Banana"]

// unshift()
// let newLength = fruits.unshift('Strawberry') // add to the front
// // ["Strawberry", "Banana"]

// indexOf()
let fruits = ['Strawberry', 'Banana', 'Mango']
console.log('🚀 ~ file: index.js:45 ~ fruits', fruits)
let pos = fruits.indexOf('Strawberry')
console.log('🚀 ~ fruits.indexOf("Strawberry")', pos)
// // 1

// splice()
let fruits2 = ['Strawberry', 'Banana', 'Mango']
// let removedItem = fruits.splice(1, 2) // this is how to remove an item
// console.log('🚀  ~ removedItem', fruits.splice(1, 1))
// // ["Strawberry", "Mango"]

// slice()
// let shallowCopy = fruits.slice(0, 2) // this is how to make a copy
// console.log('🚀 ~ file: index.js:58 ~ shallowCopy', shallowCopy)
// // ["Strawberry", "Mango"]

// concat()
const array1 = ['a', 'b', 'c', 'd']
const array2 = ['d', 'e', 5]
const array3 = array1.concat(array2)

console.log(array3)
// // expected output: Array ["a", "b", "c", "d", "e", "f"]

// reverse()
const reversed = array1.reverse()
console.log('reversed:', reversed)
// // expected output: "reversed:" Array ["three", "two", "one"]

// join()
const elements = ['Fire', 'Air', 'Water']

console.log(elements.join(' '))
// // expected output: "Fire,Air,Water"
'Anna','Alla',"Bob"
// console.log(elements.join(''));
// // expected output: "FireAirWater"

// console.log(elements.join('valod'));
// // expected output: "Fire-Air-Water"
