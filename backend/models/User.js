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
    admin: { type: Boolean, default: false },


});


// hashpassword middleware
// before saving the user, hash the password. takes in 2 argument of save and async function
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    //if password is not modified, continue to hash the password   
    //generate salt for password to be encrypted
    const salt = await bcrypt.genSalt(10);
    //this refers to the instance of the user who is just created.
    //hash takes in new password and pass in the salt
    this.password = await bcrypt.hash(this.password, salt);
    next();

});

//verify password
//use a mongoose method, name our function ispasswordmatch
//password is stored in encrypted form in mongo database, when logging in, we do not use the encrypted form of password but the password itself
//password match method to compare the enteredpassword with the bcrypted password stored in the database
UserSchema.methods.isPasswordMatch = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model('User', UserSchema);

module.exports = User;