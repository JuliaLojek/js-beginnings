function getAverage(a,b,c){
    var average = (a+b+c)/3;
    return average;
}

var myResult = getAverage(827,3894,28203);

function logResult(){
    console.log("the average is: " + myResult);
}

logResult();


var a = "7";
var b = 5;

function normal(){
    console.log(a*b);
}

normal();



var myArray = [];

myArray[0] = 25;
myArray[1] = true;
myArray[2] = "hello";

console.log(myArray);