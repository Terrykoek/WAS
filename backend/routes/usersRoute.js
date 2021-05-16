const express = require('express');
const asynHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const usersRoute = express.Router();


//Register
usersRoute.post(
    '/register',
asynHandler(async (req, res) => {
const {name, email, password} = req.body;

const userExists = await User.findOne({ email: email });
if(userExists) {
    throw new Error('User Exist');
}

const userCreated = await User.create({email, name, password});
res.json({
    _id: userCreated.id,
    name: userCreated.name,
    password: userCreated.password,
    email: userCreated.password,
    token: generateToken(userCreated._id),
});
})
);


//login
usersRoute.post(
    '/login', 
    asynHandler(async (req, res) => {
        const {email, password} = req.body;

        const user = await User.findOne({ email });

        if (user ) {
            //set status code
            //res.status(200)

            res.json({
                _id: user.id,
                name: user.name,
                password: user.password,
                email: user.password,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new Error('Invalid credentials');
        }
    })
);

//update user
usersRoute.put('/update', (req, res) => {
    res.send('Update Route');
});

//delete user
usersRoute.delete('/:id', (req, res) => {
    res.send('Delete Route');
});

//fetch user
usersRoute.get('/', authMiddleware, (req, res) => {
    console.log(req.headers);
    res.send(req.user);
});


module.exports = usersRoute;