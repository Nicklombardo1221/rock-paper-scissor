const arr = ["1", "2", "3", "4", "5"];
const mappedArr = arr.map((num) => parseInt(num) + 1);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]

const productOfAllNumsMinus10 = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1) -10;
console.log(productOfAllNumsMinus10); // Outputs 110
