const express = require('express');
const app = express();
const connection = require('./connection');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const verifyUser = require('./auth');

app.use(cors());

app.use(express.json());

app.get('/customers/:id', async (req, res) => {
  let customer_id = req.params.id;
  try {
    const [results] = await connection.promise().query(
      'SELECT * FROM customers WHERE customer_id = ?', customer_id);

    res.json(results);

  } catch (err) {
    res.json(err);
  }
});


app.post('/customers', async (req, res) => {
  let { name, age, department } = req.body;

  console.log(name, age, department);

  try {
    const [data] = await connection.promise().query(
      'INSERT INTO fsmay25.customers (name, age, department) VALUES (?, ?, ?)', [name, age, department]
    );
    if (data && data.affectedRows > 0) res.json("Record added successfully");
    else res.json("unable to add customer");

  } catch (error) {
    res.json(error);
  }

});


app.delete('/customers/:id', async (req, res) => {
  let customer_id = req.params.id;

  try {
    const [data] = await connection.promise().query(
      'DELETE FROM customers WHERE customer_id=?', customer_id
    );
    if (data && data.affectedRows > 0) res.json("Record deleted successfully");
    else res.json("unable to delete customer");

  } catch (error) {
    res.json(error);
  }
});


app.put('/update_customer/:id', async (req, res) => {
  let customer_id = req.params.id;
  let { name, age, department } = req.body;

  try {
    const [customer] = await connection.promise().query(`SELECT * FROM fsmay25.customers WHERE customer_id = ?`, customer_id);
    if (customer.length > 0) {
      const [data] = await connection.promise().query(`UPDATE fsmay25.customers SET name = ?, age = ?, department =? WHERE customer_id = ?`, [name, age, department, customer_id]);
      res.json(data);
    } else {
      res.json('customer does not exist');
    }

  } catch (error) {
    res.json(error);
  }


  console.log(customer_id);
});


////////////////ANGULAR HTTP REQUESTS BELOW///////////////////


customers = [{"customer_id":1,"name":"DAN","age":26,"department":"Maintenance"},{"customer_id":2,"name":"Homer","age":40,"department":"Accounting"},{"customer_id":3,"name":"Harshvir","age":47,"department":null},{"customer_id":4,"name":"Runda","age":22,"department":null},{"customer_id":5,"name":"Jim","age":88,"department":"Accouting"},{"customer_id":6,"name":"Hailey","age":35,"department":"DUIhlaiushd"},{"customer_id":7,"name":"Paulie","age":68,"department":"Accounting"}]

// /////////////put verifyUser here, before async
app.get('/customers', async (req, res) => {

  try {
    const [results] = await connection.promise().query(
      'SELECT * FROM customers')


    res.json(results);

  } catch (err) {
    res.json(err);
  }
});


app.get('/customers/:id', async (req, res) => {
  let customer_id = req.params.id;
  try {
    const [results] = await connection.promise().query(
      'SELECT * FROM customers WHERE customer_id = ?', customer_id);

    res.json(results);

  } catch (err) {
    res.json(err);
  }
});


app.delete('/customers/:id', async (req, res) => {
  let customer_id = req.params.id;
  try {
    const [results] = await connection.promise().query(
      'SELECT * FROM customers WHERE customer_id = ?', customer_id);

    res.json(results);

  } catch (err) {
    res.json(err);
  }
});



///////////////////SIGN IN + UP//////////////////////////////////////////

app.post('/signup', async (req, res) => {
    let { username, password, confirm_password, status } = req.body;
 
    if(!username || !password || !confirm_password){
        return res.status(401).json('Please provide all the values');
    }
 
    if(password  != confirm_password) return res.status(401).json("Password doesn't match");
 
    if(!status) status = 1;

    const hashedPass = await bcrypt.hash(password, 10);
 
    try {
        const [data] = await connection.promise().query(`INSERT INTO fsmay25.users (username, password, status)
                                    VALUES (?, ?, ?) `, [username, hashedPass, status ]);
        if (data && data.affectedRows > 0) res.json("Record added successfully");
        else res.json("Unable to add the customer");
 
    } catch (error) {
        res.json(error);
    }
})


app.post('/signin', async (req, res) => {
    let { username, password } = req.body;
 
    if(!username || !password) {
        return res.status(401).json('Please provide all the values');
    }
 
    
 
    try {
        const [data] = await connection.promise().query(`SELECT users_id, username, password FROM fsmay25.users WHERE username = ?`, username);
                                    ;
        if (data.length > 0) {
          const passResult = await bcrypt.compare(password, data[0].password)
          if(passResult){
            const token = await jwt.sign({user_id:data[0].user_id}, 'thisismyEncryptionKey', { expiresIn:'1hr'}); 
            res.status(200).json({'token': token});
          } else {
             res.status(401).json("log in failed");
          }
          
        } 
        else {res.json("customer not found");}
 
    } catch (error) {
        res.json(error);
    }
})






app.get('/signin/:id', async (req, res) => {
  let user_id = req.params.id;
  
  try {
    const [results] = await connection.promise().query(
      'SELECT * FROM fsmay25.users WHERE user_id = ?', user_id);

   
    if(results){
       res.json(results);
    }else {
      res.json("no data found");
    }

  } catch (err) {
    res.json(err);
  }
});


app.listen(3000, () => {
  console.log('Listening on port 3000');
});


