//Only change code below this line
var myNestedArray = [["Toblerone", 5], ["Milka", 3]];
function myNestedFunction(arr) {
var myNestedArray = [...arr];
return myNestedArray;
}
//Only change code above this line
console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;
