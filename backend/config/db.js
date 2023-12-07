const mongoose = require('mongoose')

const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.mongodb
        )
        //console.log(`MongoDB connected : ${conn.connection.host}`)
        console.log('mongodb connected')
}catch(err){
    console.log(err)
    process.exit(1) 

    }
}
module.exports = connectDB