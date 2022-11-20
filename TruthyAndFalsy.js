//  Falsy values are tha values that are not completely fasle but will tend to become false, There are 5 faulty values in JS, they are : 0, '', undefined, null, NaN

//  Any number that isnot zero or an unempty strinf tends to become trye so they are truthy values
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}
let height;
if (height) {
  console.log("YAY height is defined");
} else {
  console.log("NO height is undefined");
}
