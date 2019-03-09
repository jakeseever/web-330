/*
============================================
; Title:  seever-exercise-3.3.js
; Author: Jake Seever
; Date:   09 March 2018
; Description: Demonstrates the use of the Singleton Pattern using JavaScript
;===========================================
*/

var header = require("../seever-header.js");
console.log(header.display("Jake", "Seever", "Exercise 3.3"));
console.log('\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function() {
  var instance;

  function createInstance() {
    // create a new database object and return it.
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function() {
      // check if an instance exists
      if (!instance) {
        // if it doesn't exist create it.
        instance = createInstance();
      }
      //return the instance
      return instance;
    }
  };
})();

function databaseSingletonTest()
{
  // get the database instances
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();

  // output whether the databases are a match
  console.log("Same database instance? %s ", oracle === postgres);

}

// call the databaseSingletonTest function
databaseSingletonTest();


// end program
