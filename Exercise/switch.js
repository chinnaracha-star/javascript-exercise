// A → "Excellent"
// B → "Good"
// C → "Average"
// D → "Poor"
// F → "Fail"


function getGrade(grade){
    grade = grade.toUpperCase(); // 👈 แปลงเป็นตัวใหญ่ก่อน
    switch(grade){
    case "A" :
        return "Excellent";
    case "B" :
        return "Good";
    case "C" :
        return "Average";
    case "D" :
        return "Poor";
    case "F" :
        return "Fail";
    default :
        return "Invalid grade"
    }
}

console.log(getGrade("A"));
console.log(getGrade("b")); 
console.log(getGrade("Z")); 