/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x=10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

// Coding Challange

// Mark and John are trying to compare their BMI ( Body Mass Index ), which is calculated by using the formula : BMI = mass/height ** 2 = mass/heinght * height (mass in kg annd height in meter)

//  For Test Data 1

let dataMark = 78;
let dataMarkHeight = 1.69;
let dataJohn = 92;
let dataJohnHeight = 1.95;
let bmiJohn = dataJohn / dataJohnHeight ** 2;
let bmiMark = dataMark / dataMarkHeight ** 2;
console.log(
  dataMark,
  dataMarkHeight,
  dataJohn,
  dataJohnHeight,
  bmiMark,
  bmiJohn
);
let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
// For Test Data 2

let weightMark = 95;
let heightMark = 1.88;
let markBmi = weightMark / heightMark ** 2;
console.log(markBmi);

let weightJohn = 85;
let heightJohn = 1.76;
let johnBmi = weightJohn / heightJohn ** 2;
console.log(johnBmi);
let higherMarkBMI = markBmi > johnBmi;
console.log(higherMarkBMI);
