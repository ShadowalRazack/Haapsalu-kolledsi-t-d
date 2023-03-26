const express = require('express');
const students = require('./students');

const app = express();
const port = 3000;

app.get('/students', (req, res) => {
    const list = students.getAllStudents();
    return res.send(list);
});

app.get('/random', (req, res) => {
    const randomName = students.getRandomStudent();
    return res.send(randomName);
});

app.get('/students/:orderNumber', (req, res) => {
    const orderNumber = req.params.orderNumber;
    const name = students.getStudentByOrderNumber(orderNumber);
    if (name === null) {
        return res.send('Sellise järjekorranumbriga üliõpilast ei ole.');
    }
    return res.send(name);
});

app.listen(port, () => {
            console.log(`Listening on port: ${port}`);