const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [false, 'Employee is required']
    },

    designation: {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: false
    },
    projects: {
        type: String,
        required: false
    }

},

    {
        timestamps: true,
    }
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;