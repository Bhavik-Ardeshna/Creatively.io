const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');

require('./db/connect');

require('./models/auth');

const app = express();
const PORT = process.env.PORT || 8800;

app.use(express.json());

// app.use(morgan('tiny'));

app.use('/auth',require('./routes/auth'));

app.listen(PORT, () => {
    console.log(`Server is running at PORT : ${PORT} `);
});
