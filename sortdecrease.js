let arr = [5, 2, 1, -10, 8];

function sortDecrease(arr) {
    return arr.sort((a, b) => b - a);
}
sortDecrease(arr); // Sorts the array in decreasing order
console.log( arr ); // 8, 5, 2, 1, -10