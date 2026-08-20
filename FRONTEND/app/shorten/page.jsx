"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { toast } from "react-toastify";

const Shorten = () => {

    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")


    const generateUrl = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/url/shorten`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        url: url,
                        shorturl: shorturl,
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                toast.error(result.message || "Something went wrong");
                return;
            }

            setGenerated(`${process.env.NEXT_PUBLIC_API_URL}/${shorturl}`);

            setUrl("");
            setShorturl("");

            toast.success("URL Generated Successfully");

       

          

        } catch (error) {
            console.error(error);
            alert("Unable to connect to server");
        }
    };

    return (
        <div className='mx-auto max-w-lg bg-purple-200 my-16 p-8 rounded-lg flex flex-col gap-4 '>


            <h1 className='font-bold text-2xl'>
                Generate your short URLs
            </h1>


            <div className='flex flex-col gap-3'>

                <input
                    type='text'
                    placeholder='Enter your URL'
                    value={url}
                    className='bg-white px-4 rounded-md'
                    onChange={e => { setUrl(e.target.value) }}
                />

                <input
                    type='text'
                    placeholder='Enter your preferred short URL text'
                    value={shorturl}
                    onChange={e => { setShorturl(e.target.value) }}
                    className='px-4 py-2 focus:outline-purple-600 bg-white rounded-md'
                />

                <button onClick={generateUrl} className='cursor-pointer bg-purple-500 shadow-lg p-3 rounded-lg font-semibold py-1 text-white'>Generate</button>

            </div>

            {generated && <><span className='font-bold text-lg'>Your Link:</span> <code>
                <Link target='_blank' href={generated}>{generated}</Link>
            </code></>}

        </div>
    )
}

export default Shorten