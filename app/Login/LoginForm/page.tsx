"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import {  useRouter } from "next/navigation";

export default async function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid credentials");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>

      <div className="flex items-center my-4">
        <div className="border-t border-gray-300 flex-grow"></div>
        <span className="mx-2 text-gray-400">or</span>
        <div className="border-t border-gray-300 flex-grow"></div>
      </div>

      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
      >
        Sign in with Google
      </button>
    </div>
  );
}
