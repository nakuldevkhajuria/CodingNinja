const express = require('express')
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv').config();

const cors = require('cors')
const mainRoute = require('./routes/MainRoute');


const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json())

//use cors, and mainRoute

app.use('/api/user',mainRoute)
// app.get('/api/user/helo',(req,res)=>{
//     res.send('helo')
// })


//start the server
const PORT = process.env.PORT;
app.listen(PORT,async()=>{
    await dbConnect();
    console.log(`server is connected on ${PORT}`)
})