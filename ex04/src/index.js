//Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];

//End of monitorsListArray array 
function myMonitorsFunction(arr) {
    var monitorsList = [];
    var newMonitorsList = [...arr];
    //Only change code below this line
    var number = 1;   
    for (var i = 0; i < newMonitorsList.length; i++) {
           monitorsList.push([monitorsListArray[i], number++]);
        }
        return monitorsList;
    //Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;