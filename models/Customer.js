const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);