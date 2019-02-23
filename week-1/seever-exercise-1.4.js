/*
============================================
; Title:  seever-exercise-1.3
; Author: Jake Seever
; Date:   22 February 2019
; Description: Duck Typing, A.K.A. "Interfaces" Example
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 1.4"));
console.log('\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

// Constructor to create a car object.
function Car(model)
{
  this.model = model;
}

// prototype function to start the car objects.
Car.prototype.start = function()
{
  console.log("Car added to the racetrack!");

}

// Constructor to create a truck object;
function Truck(model, year)
{
  this.model = model;
  this.year = year;
}
// prototype function to start the truck objects.
Truck.prototype.start = function()
{
  console.log("Truck added to the racetrack!");

}

// Constructor to create a jeep object.
function Jeep(model, year, color)
{
  this.model = model;
  this.year = year;
  this.color = color;
}

// prototype function to start the jeep objects.
Jeep.prototype.start = function()
{
  console.log("Jeep added to the racetrack!");

}

// creat an array to hold vehicles for the race.
var racetrack = [];

function driveIt(vehicle)
{
  vehicle.start();

  racetrack.push(vehicle);
}

// create three test vehicle objects.
var celica = new Car("Celica");
var fordF150 = new Truck("F150", "2018");
var wrangler = new Jeep("Wrangler", "2016", "White");

console.log("");

// call the drive it method for the vehicle objects
driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);

console.log('\n-- The following vehicles have been added to the racetrack --');

//Loop over the race track and output the vehicle objects.
for (var x = 0; x < racetrack.length; x++)
{
  console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

// end program



