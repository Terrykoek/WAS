  
const express = require('express');
const User = require('../models/User');
//Generate token used from uttils folder 
const generateToken = require('../utils/generateToken');
//express routeer to handle routing
const usersRoute = express.Router();

//Register
usersRoute.post(
  '/register',
//use async await for asynchronous code
  async (req, res) => {
    //define 4 data object as req.body
    const { name, email, password, admin } = req.body;
    //use email to find user in database
    const userExists = await User.findOne({ email: email });
    //if email exist in database, throw error
    if (userExists) {
      throw new Error('User Exist');
    }
    //create user base on the 4 objets
    const userCreated = await User.create({ email, name, password, admin });
    //sends a JSON response    
    res.json({
      _id: userCreated._id,
      name: userCreated.name,
      password: userCreated.password,
      email: userCreated.email,
      admin: userCreated.admin,
  //Generate token using JWT
      token: generateToken(userCreated._id),
    });
  })


//Login
usersRoute.post(
  '/login',
  async (req, res) => {
    const { email, password } = req.body;
//check for email
    const user = await User.findOne({ email });
    if (user && (await user.isPasswordMatch(password))) {
      //set status code is 200 means its ok, then send id, name,passord, email
      res.status(200);
      res.json({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.email,
        admin: user.admin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error('Invalid credentials');
    }
  })



module.exports = usersRoute;