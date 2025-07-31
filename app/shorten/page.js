"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Shorten = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setGenerated] = useState("");

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/Login");
    }
  }, [status, router]);

  // While checking auth
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold">Checking session...</h1>
      </div>
    );
  }

  // After loading, but still no session (maybe edge case)
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-bold">Unauthorized</h1>
      </div>
    );
  }

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ url, shorturl });

    fetch("/api/generate", {
      method: "POST",
      headers: myHeaders,
      body: raw,
    })
      .then((res) => res.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        seturl("");
        setshorturl("");
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-xl flex flex-col gap-4">
      <h1 className="font-bold text-2xl text-center">Generate your short URLs</h1>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={url}
          className="border p-2 focus:outline-purple-600 rounded-xl"
          placeholder="Enter your URL"
          onChange={(e) => seturl(e.target.value)}
        />

        <input
          type="text"
          value={shorturl}
          className="border p-2 focus:outline-purple-600 rounded-xl"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setshorturl(e.target.value)}
        />

        <button
          onClick={generate}
          className="bg-purple-800 p-3 py-1 my-3 text-white font-bold rounded-lg shadow-xl"
        >
          Generate
        </button>
      </div>

      {generated && (
        <>
          <span className="font-bold text-lg">Your Link</span>
          <code>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default Shorten;
