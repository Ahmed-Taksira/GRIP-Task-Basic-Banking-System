const express = require('express');
const router = express.Router();

const Customer = require('../../models/Customer');

router.get('/test', (req, res) => res.send('book route testing!'));

router.get('/', (req, res) => {
    Customer.find()
      .then(c => res.json(c))
      .catch(err => res.status(404).json({ nocustomersfound: 'No Customers found' }));
  });

  router.post('/', (req, res) => {
    Customer.create(req.body)
      .then(customer => res.json({ msg: 'Customer added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this customer' }));
  });

  router.patch('/transfer', (req, res)=>{
    const senderID=req.body['sender']._id
    const receiverID=req.body['receiver']._id
    delete req.body['sender']._id;
    delete req.body['receiver']._id;

    Customer.findByIdAndUpdate(senderID, req.body['sender'])
    .then(()=>Customer.findByIdAndUpdate(receiverID, req.body['receiver']))
    .then(customer => res.json({ message: 'Updated successfully.' }))
    .catch(err =>
      res.status(400).json({ message: 'Unable to update the Database.' })
    );
  })

  module.exports = router;