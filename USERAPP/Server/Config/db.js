const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/yourdbname';

const dbConnect = async () => {
    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};

module.exports = dbConnect;
