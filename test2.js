// // sum of tripled evens
// function sumOfTripledEvens(array) {
//     let sum = 0;
//     for (num of array) {
//         if (num % 2 ===0) {
//             sum += num * 3;
//         }
//     }
//     console.log(sum);
//     return sum;
    
// }

// sumOfTripledEvens([1,2,4]); 


const arr = ["1", "2", "3", "4", "5"];
const mappedArr = arr
    .map(num => parseInt(num))
    .filter(num => num % 2 === 0)
    .map(num => num * 3);

const sum = mappedArr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);