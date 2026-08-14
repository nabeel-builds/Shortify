import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";

export async function POST(req) {

    try {

        const body = await req.json()

        await connectDB()

        const db = mongoose.connection.db

        const collection = db.collection("url")
        const data = await collection.find({}).toArray()

        //Check if the short url exists
        const doc = await collection.findOne({shorturl: body.shorturl})
        if(doc){
            return Response.json({
                message: "URL already exists"
            })
        }

        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        })

        return Response.json({
            message: 'Url Generated Successfully', result, data
        })

    } catch (err) {
        return Response.json({
            error: err.message
        })
    }

}