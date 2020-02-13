// Require Mongoose
const mongoose = require('mongoose');

// Establish connection
const connectDB = async () => {
  try {
    // replace 'mongodb://localhost/DBNameHere' with remote connection such as Atlas if desired
    await mongoose.connect('mongodb://localhost/DBNameHere', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
