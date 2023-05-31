const express = require('express')
const app = express();
const router1 = require('./routes/home')



app.use('/',router1)

//start the server
const port = 4000
app.listen(port,()=>{
    console.log(`server is connected on ${port}`)
})