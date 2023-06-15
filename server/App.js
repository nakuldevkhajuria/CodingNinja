const express = require('express')
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv').config();

const cors = require('cors')
const mainRoute = require('./routes/MainRoute');

const corsOptions = {
    origin: 'https://coding-ninja-frontend-pi.vercel.app',
  };
const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://coding-ninja-frontend-pi.vercel.app');
    next();
  });
app.use(cors({  origin: corsOptions}));
app.use(express.json())

//use cors, and mainRoute
app.get('/api',(req,res)=>{
    res.send('this is the yp')
})
app.get('/api', (req, res) => {
    res.send('This is the homepage');
  });
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