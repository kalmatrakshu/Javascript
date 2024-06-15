// server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();




const apiRouter = require('./router/routes');

const port = process.env.PORT;

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api', apiRouter);

app.listen(port, function(err) {
    if (err) {
        console.log('Error in the server:', err);
    } else {
        console.log('Server running at port ' + port);
    }
});

