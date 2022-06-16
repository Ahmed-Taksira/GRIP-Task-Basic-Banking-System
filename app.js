const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

const customers = require('./routes/api/customers');
const transactions = require('./routes/api/transactions')

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.use('/api/customers', customers);
app.use('/api/transactions', transactions)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/client/build')))

    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));