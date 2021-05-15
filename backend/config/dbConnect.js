const mongoose = require('mongoose');

const dbConnect = () => {
    
//connect DB
mongoose.connect('mongodb+srv://terrykoek:mongodb@cluster0.ypcf4.mongodb.net/was', {
   //connect DB
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlPaser: true,
}).then(()=> console.log('DB connected')).catch(err => console.log(err));
};

module.exports = dbConnect;