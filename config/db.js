const mongoose = require('mongoose');
const config = require('config');
const dotenv = require('dotenv')
dotenv.config()

const db =  "mongodb+srv://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@cluster0.gsla6.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;