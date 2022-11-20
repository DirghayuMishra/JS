const markKg = 75;
const markHeight = 1.6;
let markBMI = markKg / markHeight ** 2;
console.log(markBMI);

const johnKg = 80;
const johnHeight = 1.86;
let johnBMI = johnKg / johnHeight ** 2;
console.log(johnBMI);

if (markBMI > johnBMI) {
  console.log(
    `Mark has a higher BMI (${markBMI}) than John's BMI (${johnBMI})`
  );
} else {
  console.log(
    `John has a higher BMI (${johnBMI}) than Mark's BMI (${markBMI})`
  );
}

/*const bmiCompare = (name1, name1Kg, name2, name2Kg) => {
  const bmi1Calc = name1Kg / name1 ** 2;
  const bmi2Calc = name2Kg / name2 ** 2;

  if (bmi1Calc > bmi2Calc) {
    console.log(
      `Mark has a higher BMI (${bmi1Calc}) than John's BMI (${bmi2Calc})`
    );
  } else {
    console.log(
      `John has a higher BMI (${bmi2Calc}) than Mark's BMI (${bmi1Calc})`
    );
  }
};

bmiCompare(markHeight, markKg, johnHeight, johnKg);
*/
