// configuration of the mongodb connection
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.DB_NAME
        });
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.error('MongoDB connection FAIL : ', error);
        process.exit(1);
    }
    }
    
module.exports = connectDB;