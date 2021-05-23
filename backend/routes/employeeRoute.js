const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Employee = require('../models/Employee');
const authMiddleware = require('../middlewares/authMiddleware');
const employeeRouter = express.Router();

//Create Employee
employeeRouter.post('/',
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    //Grab the user from the req.user

    const userId = req.user._id

    const employee = await Employee.create({
      name: req.body.name,
      designation: req.body.designation,
      experience: req.body.experience,
      reporting: userId,
    });

    if (employee) {
      res.status(200);
      res.json(employee);
    } else {
      res.status(500);
      throw new Error('employee created failed');
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
employeeRouter.put('/:id', authMiddleware,
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

//delete
employeeRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(employee);
    } catch (error) {
      res.json(error);
    }
  })
);

module.exports = employeeRouter;


