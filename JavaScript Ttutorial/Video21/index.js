console.log("This Tutorial is of Object Oriented Programing(Oops)");

//objects Literal for creating Object
let car = {
  name: "camero",
  topSpeed: "speed- " + 150,
  run: function () {
    console.log("Car is running at topSpeed");
    return this.topSpeed; // returns the top speed of the car
  },
};

//Creating a constractor for car's

//constractor
function genralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} is running at top speed`);
    return `${this.topSpeed}`; // returns the top speed of the car
  };
  /*this.analyze = function(){
          console.log(`This car is slower by ${200 - this.topSpeed} KM/H than BMW`)
   }*/ //-- This function is only for analyzing which car is slower thab BMW
  //-- In-short this function is only used for analyzing between all the constructor we have created
}

car1 = new genralCar("Honda", "speed- " + 190);
console.log(car1);

car2 = new genralCar("lamborgini", "speed- " + 390);
console.log(car2);

car3 = new genralCar("BMW", "speed- " + 400);
console.log(car3);
