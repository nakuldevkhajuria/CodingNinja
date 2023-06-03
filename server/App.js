const express = require('express')
const app = express();
const cors = require('cors')
const router = require('./routes/MainRoute')

app.use(cors())
app.get('/',router)


//start the server
const port = 4000
app.listen(port,()=>{
    console.log(`server is connected on ${port}`)
})