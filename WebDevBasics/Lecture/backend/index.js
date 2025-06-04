const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

let employees = [{
    id: 1, name: 'John Doe', age: 25, gender: 'Male'
}];

let nextId = 2;

app.get('/employees', (req, res) => {
    res.send(employees);
});

app.post('/employees', (req, res) => {
    const employee = req.body;
    employee.id = nextId;
    nextId += 1;
    employees.push(employee);
    res.send(employee);
});

app.put('/employees/:id', (req, resd) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(e => e.id === id);
    if (employee) {
        employee.name = req.body.name;
        employee.age = req.body.age;
        employee.gender = req.body.gender;
        res.send(employee);
    } else req.status
});

app.delete('/employees/:id', (req, res) => {
    const id = 
})


app.listen(port, () => console.log(`Listening on port ${port}!`));

