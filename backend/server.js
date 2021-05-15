const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
require('./config/dbConnect')();

const app = express();

//need express to render data to backend
app.use(express.json());

//Routes
//Users routes


//Register
app.post('/api/users/register', async (req, res)=> {
    try {
        // console.log(req.body);
        const {name, email, password} = req.body;
        const user = await User.create({name, email, password});
        console.log(user);
        res.send(user);
    } catch (error) {
    console.log(error);
    }
});

//login
app.post('/api/users/login', (req, res) => {
    res.send('login route');
});

//update user
app.put('/api/users/update', (req, res) => {
    res.send('Update Route');
});

//delete user
app.delete('/api/users/:id', (req, res) => {
    res.send('Delete Route');
});


//fetch user
app.get('/api/users', (req, res) => {
    res.send('Fetch users');
})
//Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is up and running ${PORT}`);
});


