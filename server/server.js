const express = require('express')
const dotenv = require('dotenv')

const connectDB = require('./config/db')

const logger = require('./middleware/logger')
const errorHandler = require('./middleware/error')



// load env vars
dotenv.config({ path: './config/config.env' })

// connect to datatbase
connectDB()


// get routes
const fewos = require('./routes/fewos')


const app = express();

// body parser to use it with req.body
app.use(express.json())


// middleware

if (process.env.NODE_ENV === "development") {
    app.use(logger)
}

app.use(errorHandler)

app.use('/api/v1/fewos', fewos)






const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => { console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`) })

// handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1))
})