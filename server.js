const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8800;


app.use(morgan('tiny'));

app.get('/', (req, res) => {
    const data = "<h1>Welcome to the Creatively API</h1> "
    res.send(data);
})

app.get('/api', (req, res) => {
    const data = {
        username: "Bhavik Ardeshna",
        age: 56
    };
    res.json(data);
})


app.listen(PORT, () => {
    console.log(`Server is running at PORT : ${PORT} `);
});
