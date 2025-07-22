'use client'
import React, { useState, useEffect } from 'react'


const page = () => {
    const [links, setlinks] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(() => {
        const fetchLinks = async () => {

            try {

                const res = await fetch('/api/all_links')
                const data = await res.json()
                if (data.success) {
                    setlinks(data.data)
                }
            }
            catch (err) {
                console.log("failed to fetch Links", err)
            }

            finally {
                setloading(false)
            }


        }
        fetchLinks()
    }, [])


    
    console.log("Links from DB:", links)

    return (

        <div className="p-6 flex flex-col gap-6">
  <h1 className="text-3xl text-center font-extrabold tracking-wide text-gray-800">
    Dashboard: All Shortened Links
  </h1>

  <div className="box  max-h-[75vh] overflow-y-auto space-y-4 py-5 px-4 scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100">
    {links
      .filter(link => link.url && link.shorturl)
      .map((link) => (
        <div
          key={link._id}
          className="bg-purple-50 shadow-2xl rounded-xl border-2 hover:scale-105 transition-transform  duration-200 ease-in-out  border-purple-950 p-6 max-w-3xl mx-auto"
        >
          <div className="mb-2">
            <p className="text-xs  font-medium text-gray-500">Original URL</p>
            <p className="text-sm font-bold text-gray-800 break-words">{link.url}</p>
          </div>
 
          <div>
            <p className="text-xs font-medium text-gray-500">Shortened URL</p>
            <a
              href={`/${link.shorturl}`}
              target="_blank"
              className=" font-bold text-purple-600 hover:underline text-sm"
            >
              {`http://localhost:3000/${link.shorturl}`}
            </a>
          </div>
        </div>
      ))}
  </div>
</div>

    )
}

export default page
