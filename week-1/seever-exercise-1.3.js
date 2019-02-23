/*
============================================
; Title:  seever-exercise-1.3
; Author: Jake Seever
; Date:   22 February 2019
; Description: Class refresher
;===========================================
*/

var header = require('../seever-header.js');
// pass in the firstName, lastName, and assignment parameters required for the header and output.
console.log(header.display("Jake", "Seever", "Exercise 1.3"));
console.log('\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

// function constructor to create a cell phone object.
function cellPhone(manufacturer, model, color, price){
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  // return the cellPhone price
  this.getPrice = function()
  {
    return this.price;
  }

  // return the cellPhone model
  this.getModel = function()
  {
    return this.model;
  }

  // return the cellPhone details as a string.
  this.getDetails = function()
  {
    return "Manufacturer: " + this.manufacturer + "\nModel: " + this.model + "\nColor: " + this.color + "\nPrice: " + this.price;
  }
}

// Create a cellPhone test object.
var iPhone = new cellPhone("Apple", "iPhone 7 Plus", "Space Gray", "399.99");

// Output to the console.
console.log("-- DISPLAYING CELL PHONE DETAILS --")
console.log(iPhone.getDetails());

// end program
