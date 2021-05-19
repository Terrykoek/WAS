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
    reporting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
}, 

{
    timestamps: true,
}
);

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;