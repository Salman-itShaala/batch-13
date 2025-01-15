"use strict";

// Data types --> 8

// number

let age = 48;

let percentage = 55.5;

// bigint

let population = 99999999n;

console.log(typeof population);

// boolean

const isValid = false;
const isAllowed = true;

console.log(typeof isValid);

// string

const firstName = "salman";

const lastName = "shaikh";

// backticks / string template
const fullName = `salman shaikh`;

console.log(typeof fullName);

// undefined

let city; // undefined

console.log(typeof city);

// error -
// string - 5
// undefined - 1
// null -
// object

// null

let state = null;

console.log(typeof state);
// typeof null --> object --> bug

// object

let person = {
  firstName: "Ajay",
  lastName: "Devgan",
  age: 50,
  city: "Mumbai",
};

console.log(typeof person);

// symbol --> unique values

let unique1 = Symbol("unique value");

console.log(typeof unique1);
