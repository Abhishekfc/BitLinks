"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // If user is already logged in, redirect to homepage or dashboard
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // or "/dashboard"
    }
  }, [status, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center space-y-4">
        <h1 className="text-2xl font-bold">Welcome to BitLinks</h1>
        <p className="text-gray-600">Please sign in to continue</p>
        <button
          onClick={() => signIn("google")}
          className="bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-900 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
