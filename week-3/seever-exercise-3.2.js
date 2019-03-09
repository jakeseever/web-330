/*
============================================
; Title:  seever-exercise-3.2.js
; Author: Jake Seever
; Date:   09 March 2018
; Description: Factory Pattern Example
;===========================================
*/

var header = require("../seever-header.js");
console.log(header.display("Jake", "Seever", "Exercise 3.2"));
console.log('\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program

//function with the properties to create a Postgres database.
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

// function with the properties to create a MySql database.
function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

// function with the properties to create an Oracle database.
function Oracle(properties) {
  this.username = properties.username || 'admin';
  this.password = properties.password || '0-s3cret';
  this.server = properties.server || 'localhost:8454';
  this.version = properties.version || '10g';
}

// function with the properties to create an Informix.
function Informix(properties) {
  this.username = properties.username || 'admin';
  this.password = properties.password || 'in-s3cret';
  this.server = properties.server || 'localhost:3030';
}

// to create a database.
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;

// function to create a database by checking its type and assigning it a class.
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === 'MySql') {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === 'Oracle') {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === 'Informix') {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
// function to create a mySql database.
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

var oracleFactory = new DatabaseFactory();
//function used to create an oracle database
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "Jake",
  password: "p@ssword"
});

var informixFactory = new DatabaseFactory();
// function to create an Informix database
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "Seever",
  password: "pa$$word"
});

// output to the console window
console.log("Oracle { \n username: '" + oracle.username + "',\n password: '" + oracle.password +
"',\n server: '" + oracle.server + "', \n version: '" + oracle.version + "'\n }\n"
);

// output to the console window
console.log("Informix { \n username: '" + informix.username + "',\n password: '" + informix.password +
"',\n server: '" + informix.server + "\n }\n"
);


// end program
