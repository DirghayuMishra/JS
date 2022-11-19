// An operator allows us to transform or combine multiple values
// Mathematical, logical , assgnment operaters are present
// MATHEMSTICAL OPERSTORS
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
const firstName = "Jonas";
const lstName = "Mishra";
console.log(firstName + " " + lstName);
console.log(typeof firstName);
//  Assignment Operators
let x = 10 + 5;
console.log(x);
// x + = 12 --- This means x= x+10
x += 10;
console.log(x);
x *= 4; // x= x*4 is what it means
console.log(x);
x++; //x=x+1 is what x+= means
console.log(x);
x--; // x=x-1 is what this means
x--;
console.log(x);
// COMPARISON OPERATORS -- USED TO CREATE BOOLEAN VALIUES
console.log(ageJonas > ageSarah); // gives results as true or false in the console
console.log(ageSarah >= 18); // >= means greater or equal
console.log(ageSarah < 18);
const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log(now - 1991 > now - 2018);
