//Only change code below this line
function myMutation(arr) {
var firstString = arr[0].toLowerCase();
var secondString = arr[1].toLowerCase();
    for (var i = 0; i < secondString.length; i++) {
        if (firstString.indexOf(secondString[i]) < 0) {
            return false;
        }
    
    }
    return true;
}

//Only change code above this line

console.log(myMutation(["hello", "Hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zywvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation("voodoo", "no"));
module.exports = myMutation;