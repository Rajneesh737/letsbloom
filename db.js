const mongoose = require("mongoose");
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://mrajneesh723:w9r9GZzbhCD2mpRI@cluster0.sm4cmr4.mongodb.net/`, {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  module.exports = connectDB;