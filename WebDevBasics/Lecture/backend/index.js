const express = require('express');
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


app.listen(port, () => console.log(`Listening on port ${port}!`));

