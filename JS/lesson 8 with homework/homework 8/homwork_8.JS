// let a = [1, 4, 65, 232,11 ,234, 64321]

// let filter = function(arr){
//     let filtered = []
//     let i = 0
//     arr.forEach(function(val){i
//         if(val % 2 !== 0){
//         filtered[i] = val
//         i = i + 1
//         }
//     });
//     return filtered;

// };
// alert(filter([231, 54,127, 34321, 121, 645]))
const arr = [123, 32, 2 , 61 ,3 ,12, 4 ,9, 333]

function filter (array, callback) {
    const filtered = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (callback(element)) {
            filtered.push(element)
        }
    }
    return filtered
}

console.log(filter(arr, (num) => num < 10));
