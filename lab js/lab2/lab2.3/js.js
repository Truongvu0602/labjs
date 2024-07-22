const language = "Vietnamese";
const isIsland = false;
const country = "VietNam";
let population = 90000000;
let phanLan = 6000000;
let danSotb = 33000000;
//  1. Nếu quốc gia của bạn bị chia cắt làm hai miền, mỗi miền gồm một nửa dân số của quốc gia, vậy sẽ có bao nhiêu người sống ở mỗi miền? Hãy sử dụng giá trị từ biến population để hoàn thành yêu cầu này, in ra màn hình console giá trị của population chia 2.
let separatePopulation = population / 2;
console.log(separatePopulation);
// 2. Tăng giá trị của biến population thêm 1 và in kết quả ra console.
population++;
console.log(population);
// 3. Phần Lan có dân số là 6 triệu người. Kiểm tra xem quốc gia bạn có nhiều dân hơn so với Phần Lan không? Bạn cần in ra console xem giá trị population có lớn hơn 6 triệu không?
let soSanh = population > phanLan;
console.log(soSanh);
// 4. Dân số trung bình của một quốc gia là 33 triệu người. Kiểm tra xem quốc gia bạn có ít dân hơn so với các mức dân số trung bình không?
let ssDstb = population == danSotb;
console.log(ssDstb);
// 5. Dựa trên các biến bạn đã tạo, hãy tạo một biến mới là  'description', trong đó có chứa một string có định dạng sau: '<country> and its <population> million people speak <language>'. Bạn cần thay thế các giá trị trong <> thành các biến tương ứng.

let description =
  country + " and its" + population + " million people speak " + language;
console.log(description);
