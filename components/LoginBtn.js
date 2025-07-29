"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Hi, {session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return <button onClick={() => signIn("google")}>Sign in with Google</button>;
}
