const express = require('express');
const router1 = express.Router();

router1.get('/',(req,res)=>{
    res.send('helo my router')
})

module.exports = router1;