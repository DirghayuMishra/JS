const age = "18";
if (age === 18) {
  console.log("You just became an adult");
}
//  === is called stict euality operator, it doesnot do any type coersion
// == is called loose equality operator, it doesnot do any type coersion

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What is your favorite number?"));
console.log(favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is a cool number");
} else {
  alert("The number entered isn't cool");
}
if (favourite !== 23) alert("WHY NOT 23");
