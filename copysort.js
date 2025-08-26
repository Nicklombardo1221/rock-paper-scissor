let arr = ["HTML", "JavaScript", "CSS"];

copySorted = (arr) => arr.slice().sort();

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)