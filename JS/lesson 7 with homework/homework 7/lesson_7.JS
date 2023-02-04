let a = [4, 6, 7, 8]

let foo = function(array, callback) {
    
    let i = 0
    while (i < array.length) {
        callback(a[i], i, array)
        i++
    }
}
