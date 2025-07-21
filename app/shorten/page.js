"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'


const Shorten = () => {
  const generate = (params) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {

        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")

        console.log(result)
        alert(result.message)

      })
      .catch((error) => console.error(error));
  }




  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")
  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-xl flex flex-col gap-4'>
      <h1 className='font-bold text-2xl text-center'>Generate your short URLs</h1>

      <div className='flex flex-col gap-2' >

        <input type="text"
          value={url}
          className='border p-2   focus:outline-purple-600 rounded-xl'
          placeholder='Enter your URL'
          name="" id=""
          onChange={e => { seturl(e.target.value) }} />

        <input type="text"
          value={shorturl}
          className='border p-2 focus:outline-purple-600 rounded-xl'
          placeholder='Enter your prefered short URL text'
          onChange={e => { setshorturl(e.target.value) }} />
        <button onClick={generate}
          className='bg-purple-800 p-3 py-1 my-3 text-white font-bold rounded-lg shadow-xl'>Generate</button>
      </div>

      {generated && <><span className='font-bold text-lg'> Your Link</span><code> <Link target="_blank" href={generated}>{generated}</Link>
      </code> </>}
    </div>
  )
}

export default Shorten
