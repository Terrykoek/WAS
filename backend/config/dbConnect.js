const mongoose = require('mongoose');

const dbConnect = () => {
    
//connect DB
mongoose
.connect(process.env.MONGODB_URL, {
   //connect DB
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlPaser: true,
}).
then(()=> console.log('DB connected')).catch(err => console.log(err));
};

module.exports = dbConnect;