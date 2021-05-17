const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Employee is required']
    },

    designation: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    reporting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, 

{
    timestamps: true,
}
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;