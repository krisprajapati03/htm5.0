require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const v1 = require('./routes/v1.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.use('/v1', v1);

app.use('*', (req, res) => {
    res.status(404).json({ message: 'Resource not found' });
});

mongoose.connect('mongodb://localhost:27017/HTM')
        .then(() => console.log('Mongoose connected to Database'))
        .catch((e) => console.error('Mongoose connection error: ' + e))

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

