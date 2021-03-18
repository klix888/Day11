//Create a myPetsArray here
var myPetsArray = ["Dog", "Cat"];

//End of myPetsArray here
function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    //Only change code below this line 
    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets.shift();
    var lastPet = myNewPets.pop();
    myNewPets.unshift("Lion");
    //Only change code above this line
    return myNewPets;
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;