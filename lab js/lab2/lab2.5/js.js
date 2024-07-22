const language = "Vietnamese";
const isIsland = false;
const country = "VietNam";
let population = 90000000;
let danSotb = 33000000;

let ifSs;
if (population > danSotb) {
  ifSs = `${country} population is above average`;
} else {
  ifSs = `${country}  population is  ${33 - population} million below average`;
}
console.log(ifSs);

// thay đổi giá trị để xem kết quả
//
population = 13;
if (population > danSotb) {
  ifSs = `${country} population is above average`;
} else {
  ifSs = `${country}  population is  ${33 - population} million below average`;
}
console.log(ifSs);
//
population = 130;
if (population > danSotb) {
  ifSs = `${country} population is above average`;
} else {
  ifSs = `${country}  population is  ${33 - population} million below average`;
}
console.log(ifSs);
