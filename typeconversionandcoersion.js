// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
// Here additon of the numbers donot take place instead contatination of strings take place if added without a number function so we use Number Function as i have used in 2nd line
console.log(Number("Jonas")); // we get NAN as a result which means Not A Number
console.log(String(23));
console.log(23);

// Type Coercion
console.log("I" + " am " + String(23) + " years old");
console.log("23" - "10" - 3); // minus operation converts strings to numbers
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");
console.log("2" + "2" - "2");
let n = "1" + 1;
n = n - 1;
console.log(n);
