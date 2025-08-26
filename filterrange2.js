filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
    return;
}


let arr = [5, 3, 8, 1, 2, 7, 2.5, 4, 20, 25, 40, 10];

filterRangeInPlace(arr, 1, 4); // removes the numbers except from 1 to 4

console.log(arr); // [3, 1]