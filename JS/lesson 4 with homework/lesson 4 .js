const arr = [1, 2]
while (arr[arr.length - 1] < 1000) {
    const numToAdd = arr[arr.length - 1] + arr[arr.length - 2]
    if (numToAdd > 1000) {
        break
    }
    arr.push(numToAdd)
}
console.log(':ракета: arr', arr)