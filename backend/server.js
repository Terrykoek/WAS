const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const usersRoute = require('./routes/usersRoute');
require('./config/dbConnect')();
const app = express();

//need express to render data to backend
app.use(express.json());

//Routes
app.use('/api/users', usersRoute);


//Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is up and running ${PORT}`);
});


