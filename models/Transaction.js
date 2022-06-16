const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);