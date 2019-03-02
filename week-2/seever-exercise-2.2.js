/*
============================================
; Title:  seever-exercise-2.2
; Author: Jake Seever
; Date:   28 February 2019
; Description: Prototypes
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

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

// Create prototype for the person objects.
var person =
{
  getAge: function()
  {
    return this.age;
  }
}

// Create a person object with age and fullName functions
var jake = Object.create(person, {
  "age":
  {
    "value" : "36"
  },
  "fullName" :
  {
    "value" : "Jake Seever"
  }
});

//jake.getAge();

// output the person objects age and full name to the console.
console.log("The person's full name is: '%s'", jake.fullName);
console.log("The person's age is: '%s'", jake.getAge());



// end program



