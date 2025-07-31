"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p className="flex justify-center items-center">Hi, {session.user.name} </p>
        <button className="bg-purple-200 p-3 py-1 cursor-pointer text-black font-bold rounded-lg shadow-xl hover:scale-105 transition-transform  duration-200 ease-in-out" onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return <button className='bg-purple-200 p-3 py-1 cursor-pointer text-black font-bold rounded-lg shadow-xl hover:scale-105 transition-transform  duration-200 ease-in-out'   onClick={() => signIn("google") }>Sign In</button>;
}
