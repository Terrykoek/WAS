const express = require('express');
const dotenv = require('dotenv');
const error = require('./middlewares/errorMiddlewareHandler');
const usersRoute = require('./routes/usersRoute');
const employeeRouter = require('./routes/employeeRoute');

dotenv.config();
require('./config/dbConnect')();

const app = express();

//need express to render data to backend
app.use(express.json());


//Routes
//Users
app.use('/api/users', usersRoute);
//emloyee
app.use('/api/employees', employeeRouter);
console.log(process.env.MY_NAME);

//Error middleware
app.use(error.errorMiddlewareHandler);

//Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is up and running ${PORT}`);
});


