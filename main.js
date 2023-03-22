const { getRandomStudent, getAllStudents, getStudentByOrderNumber, getStudentsCount, addStudent } = require("./students");

console.log("Õpilaste arv: ", getStudentsCount());
const students = [
    "Sirle",
    "Alvaro",
    "Victoria",
    "Engo",
    "Haldi",
    "Kalle",
    "Eva",
    "Kasper",
    "Doris",
    "Madis"
]

function getStudentsCount() {
    return students.length;
}

function getRandomStudent() {
    const randomIndex = Math.floor(Math.random() * students.length);
    return students[randomIndex];
}

function getAllStudents() {
    return students;
}

function getStudentByOrderNumber(orderNumber) {
    try {
        if (orderNumber < 0 || orderNumber >= students.length) {
            return null;
        }
        return students[orderNumber - 1];
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

function addStudent(name) {
    students.push(name);
    return students.length;
}


module.exports = {
    getRandomStudent,
    getAllStudents,
    getStudentByOrderNumber,
    addStudent,
    getStudentsCount
};