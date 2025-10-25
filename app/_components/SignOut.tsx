"use client"
import { signOut } from "next-auth/react";
import React from "react";

function SignOut() {
  return (
    <button
      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
      onClick={() => signOut({ redirect: true, callbackUrl: "/Login" })}
    >
      Sign Out
    </button>
  );
}

export default SignOut;
