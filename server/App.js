const express = require('express')
require('dotenv').config();

const cors = require('cors')
const mainRoute = require('./routes/MainRoute')

const app = express();
//use cors, and mainRoute
app.use(cors())
app.get('/',mainRoute)


//start the server
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is connected on ${PORT}`)
})