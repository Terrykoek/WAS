const express = require('express');
const User = require('../models/User');

const usersRoute = express.Router();

//Register
usersRoute.post('/register', async (req, res)=> {
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
usersRoute.post('/login', (req, res) => {
    res.send('login route');
});

//update user
usersRoute.put('/update', (req, res) => {
    res.send('Update Route');
});

//delete user
usersRoute.delete('/:id', (req, res) => {
    res.send('Delete Route');
});

//fetch user
usersRoute.get('/', (req, res) => {
    res.send('Fetch users');
});


module.exports = usersRoute;