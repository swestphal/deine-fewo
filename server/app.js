const express = require('express');
const app = express();
const dotenv = require('dotenv');

// set up config.env 
dotenv.config({ path: './config/config.env' })


// importing all routes
const fewos = require('./routes/fewos');


app.use('/api/v1', fewos)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})