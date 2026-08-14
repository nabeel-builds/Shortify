import { redirect } from "next/navigation"
import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";

export default async function Page({ params }) {

    const shorturl = (await params).shorturl

    await connectDB()

    const db = mongoose.connection.db

    const collection = db.collection("url")

    const doc = await collection.findOne({ shorturl: shorturl })


    if (doc) {
        let url = doc.url
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url
        }
        redirect(url)

    } else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }


    return <div>My Post: {shorturl}</div>
}