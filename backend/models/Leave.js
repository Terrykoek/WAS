const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [false, 'Employee is required']
    },
    type: {
        type: String,
        required: [false, 'leave is required']
    },

    dateOne: {
        type: String,
        required: false
    },
    dateTwo: {
        type: String,
        required: false
    },

},

    {
        timestamps: true,
    }
);

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;