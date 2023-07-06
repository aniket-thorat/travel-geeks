const mongoose = require('mongoose') ;

const MONGO_URI = 'mongodb://localhost:27017/mydb' ;
const connectDB = async()=>{
    mongoose.set('strictQuery', true);
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex:true,
        });
        console.log(`MongoDB Connected : ${conn}`);
    } catch (error) {
        console.error(`Error : ${error.message}`) ;
        process.exit() ;
    }

}

module.exports = connectDB ;