const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Employee = require('../models/Employee');
const authMiddleware = require('../middlewares/authMiddleware');
const employeeRouter = express.Router();

//Create Employee
employeeRouter.post('/', expressAsyncHandler(async(req, res) => {
const employee = await Employee.create(req.body);

if (employee){
    res.status(200);
    res.json(employee);
}else{
    res.status(500);
    throw new Error('No employees created');
}

}
));

//fetch
employeeRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const employees = await Employee.find({})
      //Compare password
      if (employees) {
        res.status(201);
        res.send(employees);
      } else {
        res.status(401);
        throw new Error('there are no employees');
        }
    })
);



//update
employeeRouter.put('/:id',  authMiddleware, 
expressAsyncHandler(async (req, res) => {

    const employee = await Employee.findById(req.params.id);

    if (employee) {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(200);
        res.json(updatedEmployee);
    } else {
        res.status(500);
        throw new Error('Update failed');
    }
})

);


module.exports = employeeRouter;


