const mongoose = require('mongoose')

const dbConnect = async()=>{
try {
await mongoose.connect(process.env.MONGODB_CONNECT)
console.log('database is connected successfully')
} 
catch (error) {
    console.log('data base error is' + error)
}
}

module.exports = dbConnect;