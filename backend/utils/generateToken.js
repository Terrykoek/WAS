// generate a token and fo the password
const jwt = require('jsonwebtoken');

//create token if userid is matched
const generateToken = (userId) => {
   return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '30d',
    });
};

module.exports = generateToken;