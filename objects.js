var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed*time);
    }
    this.logDriver = function(){
        console.log("driver's name is " + driver);
    };
}

var myCar1 = new Car(70, "Ninja");
var myCar2 = new Car(40, "Humpty Dumpty");
var myCar3 = new Car(10, "Shaun");
var myCar4 = new Car(90, "James Bond");

myCar1.drive(30, 2);
myCar3.logDriver();

/* DATES */

myDate = new Date();
myPastDate = new Date(1989, 11, 2);
myFutureDate = new Date(2021, 0, 31, 23, 18);

console.log(myDate);
console.log(myPastDate);
console.log(myFutureDate);