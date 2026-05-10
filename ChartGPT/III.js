let member
let vip
let billOver500
let firstVisit
let sameProvince

// ให้ส่วนลดถ้า
// เป็นสมาชิก และ ยอดเกิน 500
let discount = member && billOver500;

// แจกของแถมถ้า
// เป็น VIP หรือ มาครั้งแรก
let freeGift = vip || firstVisit;

// ให้ที่จอดรถพิเศษถ้า
// VIP และ ไม่ใช่มาครั้งแรก
let specialParking =  vip && !firstVisit:

// แจกเครื่องดื่มถ้า
// มาจากต่างจังหวัด หรือ มาครั้งแรก
let freeDrink = !sameProvince || firstVisit;

// ลูกค้าจะได้ ส่วนลดใหม่ ถ้า         
// มีส่วนลดเดิม
// และ ไม่ได้ของแถม
let newDiscount = discount && !freeGift