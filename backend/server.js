const express = require('express');
const dotenv = require('dotenv');
const usersRoute = require('./routes/usersRoute');
const employeeRouter = require('./routes/employeeRoutes');
const leaveRouter = require('./routes/leaveRoutes');

dotenv.config();
require('./config/dbConnect')();

const app = express();

//this is a method built in express to recognize the incoming request object as a json object
app.use(express.json());

//Routes
//Users
app.use('/api/users', usersRoute);
//employees
app.use('/api/employees', employeeRouter);
//leaves
app.use('/api/leaves', leaveRouter);


//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is up and runing ${PORT}`);
});