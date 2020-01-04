// Packages
const mongoose = require('mongoose');

// Schema Definitions
const ExampleSchema = new mongoose.Schema({
  field1: {
    type: String,
    required: true
  },
  field2: {
    type: Number
  },
  field3: {
    type: Boolean
  },
  field4: {
    type: Date,
    default: Date.now
  }
});

module.exports = Example = mongoose.model('example', ExampleSchema);
