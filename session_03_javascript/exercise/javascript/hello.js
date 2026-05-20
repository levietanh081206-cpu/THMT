// ===== LET — biến có thể thay đổi =====
let ten = "Minh";
let tuoi = 20;
let laSinhVien = true;

console.log("Tên:", ten);        // "Tên: Minh"
console.log("Tuổi:", tuoi);      // "Tuổi: 20"
console.log("Sinh viên:", laSinhVien); // "Sinh viên: true"

// Thay đổi giá trị
tuoi = 21;
console.log("Tuổi mới:", tuoi);  // "Tuổi mới: 21"

// ===== CONST — hằng số, KHÔNG thể thay đổi =====
const PI = 3.14159;
const TEN_TRUONG = "Đại học Thủy Lợi";

console.log("PI =", PI);
console.log("Trường:", TEN_TRUONG);

// ❌ Thử thay đổi const sẽ bị lỗi:
// PI = 3.14;  // TypeError: Assignment to constant variable

// ===== VAR — cách cũ, ít dùng =====
var monHoc = "CSE391";
console.log("Môn:", monHoc);

// bài tập con 0.3
let tenMonHoc = "Nguyên lý lập trình web";
let soTinChi = 3;
let coBatBuocKhong = true;
let diemSo = 7.5;

console.log(tenMonHoc);
console.log(soTinChi);
console.log(coBatBuocKhong);
console.log(diemSo);

// bài tập con 0.4
let sanPham = "Laptop";
let soLuong = 2;
let donGia = 15000000;

// TODO: Tạo chuỗi template hiển thị:
// "Hóa đơn: 2 x Laptop = 30,000,000 VNĐ"
console.log(`${soLuong} x ${sanPham} = ${donGia*soLuong}`);

//bài tập con 0.5
const Pi = 3.14159;
let banKinh = 5;

// TODO: Tính diện tích = PI * r^2
// TODO: Tính chu vi = 2 * PI * r
// TODO: In kết quả ra console

console.log(`${Pi} * ${banKinh} =`, Pi*(banKinh**2));

// bài tập con 0.6
let diem = 7.5;
let diemChuyenCan = 9;

// TODO: Kiểm tra và in ra:
// 1. Điểm >= 5 VÀ điểm chuyên cần >= 8 → "Đạt"
// 2. Ngược lại → "Không đạt"
// 3. Điểm >= 8.5 → "Giỏi"
// 4. Điểm >= 7 → "Khá"
// 5. Điểm >= 5 → "Trung bình"
// 6. Ngược lại → "Yếu"

if(diem >= 5 && diemChuyenCan >= 8) {
    console.log("Đạt");
    if(diem >= 8.5) console.log("Là học sinh Giỏi!");
    else if(diem >= 7) console.log("Là học sinh Khá!");
    else if(diem >= 5) console.log("Là học sinh Trung bình");
    else console.log("Yếu!");
} else {
    console.log("Không đạt!");
}