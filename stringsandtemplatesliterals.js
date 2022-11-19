/*const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
const jonas =
  "I'm " + firstName + " , a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string....`);
console.log("String wirh \n\
mulriple \n\
lines");

console.log(`String
multiple
lines`);
*/
const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is ${yearsLeft} younger , wait ${yearsLeft} years`);
}
// replacing the value of age with any integers above or equal to 18 we will get the statement in console, if not the console.log command doesnot get executed

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const PsyCho = "2" + "2" - "2";
console.log(PsyCho);
