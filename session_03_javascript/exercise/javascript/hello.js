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

// ===== STRING — Chuỗi =====
let hoTen = "Nguyễn Văn A";     // Dùng dấu ""
let diaChi = 'Hà Nội';          // Dùng dấu ''
let loiChao = `Xin chào ${hoTen}`; // Dùng backtick (template literal)

console.log(typeof hoTen);      // "string"
console.log(loiChao);           // "Xin chào Nguyễn Văn A"

// ===== NUMBER — Số =====
let soNguyen = 42;
let soThuc = 3.14;
let am = -10;
let voCuc = Infinity;

console.log(typeof soNguyen);   // "number"

// ===== BOOLEAN — Đúng/Sai =====
let laTrue = true;
let laFalse = false;

console.log(typeof laTrue);     // "boolean"

// ===== NULL & UNDEFINED =====
let giaTriNull = null;          // "không có gì" (cố tình)
let chuaGanGiaTri;              // undefined (chưa gán)

console.log(typeof giaTriNull);   // "object" (bug nổi tiếng của JS!)
console.log(typeof chuaGanGiaTri); // "undefined"

// ===== Kiểm tra kiểu =====
console.log("42 là:", typeof 42);          // number
console.log("'42' là:", typeof "42");      // string
console.log("true là:", typeof true);      // boolean

// bài tập con 0.3
let tenMonHoc = "Nguyên lý lập trình web";
let soTinChi = 3;
let coBatBuocKhong = true;
let diemSo = 7.5;

console.log(tenMonHoc);
console.log(soTinChi);
console.log(coBatBuocKhong);
console.log(diemSo);

let ho = "Nguyễn";
let ten = "Minh";
let tuoi = 20;
let diem = 8.5;

// ❌ Cách cũ — nối chuỗi bằng dấu +
let cau1 = "Tên: " + ho + " " + ten + ", Tuổi: " + tuoi;
console.log(cau1);

// ✅ Cách mới — Template Literal (backtick `)
let cau2 = `Tên: ${ho} ${ten}, Tuổi: ${tuoi}`;
console.log(cau2);

// Tính toán trong template literal
let cau3 = `${ho} ${ten} được ${diem} điểm. Năm sau ${ten} sẽ ${tuoi + 1} tuổi.`;
console.log(cau3);

// In nhiều dòng
let thongBao = `
=== THÔNG TIN SINH VIÊN ===
Họ tên : ${ho} ${ten}
Tuổi    : ${tuoi}
Điểm    : ${diem}
Xếp loại: ${diem >= 8 ? "Giỏi" : diem >= 6.5 ? "Khá" : "Trung bình"}
===========================
`;
console.log(thongBao);

// bài tập con 0.4
let sanPham = "Laptop";
let soLuong = 2;
let donGia = 15000000;

// TODO: Tạo chuỗi template hiển thị:
// "Hóa đơn: 2 x Laptop = 30,000,000 VNĐ"
console.log(`${soLuong} x ${sanPham} = ${donGia*soLuong}`);

let a = 15;
let b = 4;

// Phép cộng, trừ, nhân, chia
console.log(`${a} + ${b} =`, a + b);    // 19
console.log(`${a} - ${b} =`, a - b);    // 11
console.log(`${a} * ${b} =`, a * b);    // 60
console.log(`${a} / ${b} =`, a / b);    // 3.75
console.log(`${a} % ${b} =`, a % b);    // 3 (chia lấy dư)
console.log(`${a} ** ${b} =`, a ** b);  // 50625 (lũy thừa)

// Phép gán kết hợp
let x = 10;
x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6
console.log("x =", x);  // 6

// Tăng/giảm 1
let dem = 0;
dem++;     // dem = dem + 1 → 1
dem++;     // → 2
dem--;     // dem = dem - 1 → 1
console.log("dem =", dem);  // 1

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

// bài tập con 0.7
// TODO: Tạo mảng 5 món ăn yêu thích
// 1. In ra món đầu tiên và cuối cùng
// 2. Thêm 1 món vào đầu
// 3. Xóa món cuối cùng
// 4. Duyệt mảng và in "Món i: ten mon"
// 5. Kiểm tra "Phở" có trong mảng không?

let menu = ["Sườn xào chua ngọt","Bò xào lá lốt","Trứng chiên","Cơm rang dưa bò","Gà luộc"];

console.log(menu[0]);
console.log(menu[menu.length-1]);
menu.unshift("Đậu sốt cà chua");
menu.pop();

menu.forEach((dish,index) => {
    console.log(`Món ${index + 1}: ${dish}`);
})
 if (monHoc.includes("Phở")) {
    console("Có phở!");
 } else {
    console.log("Không có Phở");
 }

 // ===== SẮP XẾP =====
let so = [3, 1, 4, 1, 5, 9, 2, 6];
so.sort((a, b) => b - a);  // Tăng dần → [1,1,2,3,4,5,6,9]
console.log(so);

// Bài tập con 0.8

// ===== KHAI BÁO OBJECT =====
let sinhVien = {
    hoTen: "Nguyễn Văn Minh",
    tuoi: 20,
    mssv: "20240001",
    diem: [8, 7.5, 9],
    laSinhVien: true
};

// ===== TRUY CẬP THUỘC TÍNH =====
console.log(sinhVien.hoTen);        // "Nguyễn Văn Minh" (dấu chấm)
console.log(sinhVien["tuoi"]);      // 20 (dấu ngoặc vuông)
console.log(sinhVien.diem[0]);      // 8 (truy cập mảng lồng)

// ===== THÊM / SỬA THUỘC TÍNH =====
sinhVien.email = "minh@example.com"; // Thêm mới
sinhVien.tuoi = 21;                  // Sửa
delete sinhVien.laSinhVien;          // Xóa

// ===== DUYỆT OBJECT =====
for (let key in sinhVien) {
    console.log(`${key}: ${sinhVien[key]}`);
}

// ===== OBJECT METHODS =====
console.log(Object.keys(sinhVien));   // ["hoTen", "tuoi", "mssv", "diem", "email"]
console.log(Object.values(sinhVien)); // ["Nguyễn Văn Minh", 21, "20240001", ...]

// TODO: Tạo object "hoSo" chứa:
// - hoTen (string)
// - tuoi (number)
// - nganh (string)
// - soThich (array: 3 sở thích)
// - diaChi (object lồng: { tinh, quan, duong })

// 1. In ra: "Tôi là [hoTen], [tuoi] tuổi, học ngành [nganh]"
// 2. In ra sở thích đầu tiên
// 3. In ra địa chỉ đầy đủ
// 4. Thêm thuộc tính "email"

let hoSo = {
    hoTen: "Lê Việt Anh",
    tuoi: 20,
    nganh: "Software Engineer",
    soThich: ["Video Game", "Novels", "Films"],
    diaChi: {
        tinh: "Ninh Bình",
        quan: "Hà Nam",
        duong: "Lê Hoàn"
    } 
}

console.log(`Tôi là ${hoSo.hoTen}, ${hoSo.tuoi} tuổi, học ngành ${hoSo.nganh}`)

console.log(`Sở thích của tôi là ${hoSo.soThich[0]}`);

let diaChiDayDu = "";

for (let key in hoSo.diaChi) {
    diaChiDayDu += `${key} ${hoSo.diaChi[key]} `;
}

console.log(diaChiDayDu);

hoSo.email = "le.viet.anh@gmail.com";
console.log(hoSo.email);

// bài 0.9
// TODO: Viết các hàm sau:
// 1. maxHaiSo(a, b) → trả về số lớn hơn
// 2. laNamNhuan(nam) → true nếu năm nhuận
//    (chia hết cho 4, không chia hết cho 100, hoặc chia hết cho 400)
// 3. gioiThieu(hoTen, tuoi, nganh) → "Tôi là ..., ... tuổi, học ..."
// 4. tinhGiaBan(giaGoc, giamGia = 0) → giá sau giảm (%)

function maxHaiSo(a, b) {
    return (a>b) ? a : b;
}

function laNamNhuan(nam) {
    if((nam%400 == 0) || (nam%4 == 0 && nam%100 != 0)){
        return true;
    }
    return false;
}

function gioiThieu(hoSon) {
    console.log(`Tôi là ${hoSo.hoTen}, ${hoSo.tuoi} tuổi, học ngành ${hoSo.nganh}`);
}

function tinhGiaBan(giaGoc, giamGia = 0) {
    return giaGoc - giaGoc*(1.0*giamGia/100)
}