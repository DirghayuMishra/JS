let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

// Number Stirng and BOlloean are the main types of datat types that are highly used

let year;
console.log(year);
console.log(typeof year);
//dynamic typing --- changing year to 1991 , while performing dynamic typing donot use If

year = 1991;
console.log(typeof null); // this is a bug results in console must giveout NULL as a result instead we get OBJECT as a result
// let and const and var are used to declare variables
// var is a bit different

let age = 30;
age = 31;
// let can be used to MUTATE variable as well as Dynamic Typing
//const is assigned where the value is universallt true and never changes again

/* const birthYear = 1991;
birthYear = 1991;*/

// The code written above doesnot make sense for a const function

// Var should be completely avoided

var job = "programmer";
job = "teacher";

let lastName = "Mishra";
console.log(lastName);
