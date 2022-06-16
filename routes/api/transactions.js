const express = require('express');
const router = express.Router();

const Transaction = require('../../models/Transaction');

router.get('/test', (req, res) => res.send('route testing!'));

router.get('/', (req, res) => {
    Transaction.find()
      .then(t => res.json(t))
      .catch(err => res.status(404).json({ notransactionsfound: 'No Transactions found' }));
  });

  router.post('/', (req, res) => {
    Transaction.create(req.body)
      .then(transaction => res.json({ msg: 'Transaction added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this transaction' }));
  });

  module.exports = router;