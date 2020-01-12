function getAverage(a,b,c){
    var average = (a+b+c)/3;
    return average;
}

var myResult = getAverage(827,3894,28203);

function logResult(){
    console.log("the average is: " + myResult);
}

logResult();