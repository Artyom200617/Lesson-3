const array = [1 , 4, 2, 3]
array.sort((a,b) => a-b)
array.map((el) => el * 10)
array.sort((a,b) => b-a)

let sum = [1,3,4,5,6].reduce((aggregate, value) => aggregate + value,0)
console.log(sum);
