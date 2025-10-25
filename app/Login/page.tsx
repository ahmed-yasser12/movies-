import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../_utils/ProviderOptions'
import { redirect } from "next/navigation";
import LoginForm from './LoginForm/page';
async function Login() {
    const session =await getServerSession(authOptions)
  // If already logged in, redirect
  if (session) {
    redirect("/");
  }

  // Otherwise, render login form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
}

export default Login