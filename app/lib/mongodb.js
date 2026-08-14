


import mongoose from "mongoose";

async function connectDB() {
    if(mongoose.connection.readyState >= 1){
        console.log("Already connected to DB")
        return
    }

    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "Shortify",
            // tls: true,
            // authSource: 'admin',
            // serverSelectionTimeoutMS: 10000
        })
        console.log('Server is connected to DB')
    }catch(err){
        console.log('Database is not connected', err)
        process.exit(1)
    }
}

export default connectDB