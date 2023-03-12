const students = ["Sirle", "Alvaro", "Victoria", "Engo", "Haldi", "Kalle", "Eva", "Kasper", "Doris", "Madis"];

function getRandomStudent() {
    const randomIndex = Math.floor(Math.random() * students.length);
    return students(randomIndex);
}

function getAllStudents() {
    return students;
}

function getStudentByOrderNumber(orderNumber) {
    if (orderNumber > students.length) {
        return "null";
    } else {
        return students[orderNumber - 1];
    }
}

module.exports = {
    students,
    getRandomStudent,
    getAllStudents,
    getStudentByOrderNumber,
};