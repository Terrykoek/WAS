const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//schema

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    },
});

//populating employee the user created it
UserSchema.virtual('employees', {
    ref: 'Employee',
    foreignField: 'reporting',
    localField: '_id',
});

UserSchema.set('toJSON', { virtuals: true });

//hashpassword
UserSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
        next();
    }
  //We only want to do this if the password is sent or modified, this is because when a user later update their password this will run and the user cannot login
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    // console.log(this.password);
    next();

});

//verify password
UserSchema.methods.isPasswordMatch = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model('User', UserSchema);

module.exports = User;