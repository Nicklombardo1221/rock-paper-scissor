// function camelize(str) {
//     return str.replace(/-+(.)?/g, function(match, chr) {
//         return chr ? chr.toUpperCase() : '';
//     });
// }

function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}


console.log(camelize("background-color") )
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))

const string = "Streaming/GetVotingEligibility/42745b97-8448-f011-877e-000d3a593383/eb10cfa5-24eb-ef11-a734-000d3a593383/100000002";
const splitParts = string.split(/\//);
console.log(splitParts);