// dữ liệu 1
let markKg = 78;
let markm = 1.68;
let johnKg = 92;
let johnm = 1.95;
console.log(markKg, markm, johnKg, johnm);
//
let markBMI1 = markKg / (markm * markm);
let johnBIM1 = johnKg / (johnm * johnm);
let markHigherBMI = markBMI1 == johnBIM1;
console.log("dữ liệu BMI mark", markBMI1);
console.log("dữ liệu BMI john", johnBIM1);
console.log("Mark has higher BMI than John:", markHigherBMI);
//dữ liệu 2
let markKg2 = 95;
let markm2 = 1.88;
let johnKg2 = 85;
let johnm2 = 1.76;
console.log(markKg2, markm2, johnKg2, johnm2);
//
let markBMI2 = markKg2 / (markm2 * markm2);
let johnBIM2 = johnKg2 / (johnm2 * johnm2);
let markHigherBMI2 = markBMI2 == johnBIM2;
console.log("dữ liệu BMI mark", markBMI2);
console.log("dữ liệu BMI john", johnBIM2);
console.log("Mark has higher BMI2 than John:", markHigherBMI2);
// phần so sánh 2.6.2
// ss dữ liệu 1
let BMI;
if (markBMI1 > johnBIM1) {
  BMI = `Mark's BMI ${markBMI1} is higher than John's ${johnBIM1}`;
} else {
  BMI`John's BMI ${johnBIM1} is higher than Mark's ${markBMI1}`;
}
console.log(BMI);
//ss dữ liệu 2
let BMI2;
if (markBMI2 > johnBIM2) {
  BMI2 = `Mark's BMI ${markBMI2} is higher than John's ${johnBIM2}`;
} else {
  BMI2 = `John's BMI ${johnBIM2} is higher than Mark's ${markBMI2}`;
}
console.log(BMI2);
