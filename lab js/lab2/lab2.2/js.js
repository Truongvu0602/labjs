const language = "Vietnamese";
const isIsland = false;
const country = "VietNam";
let population = 90000000;
console.log(isIsland);
console.log(language);
console.log(country);
console.log(population);
// thử thay đổi giá trị dân số khi sử dụng les
population = 988000000;
console.log(population);
// thử thay đổi giá trị của biến được khai báo bằng const
country = "Japan";
// Uncaught TypeError: Assignment to constant variable. nó sẽ hiện ra lỗi này
