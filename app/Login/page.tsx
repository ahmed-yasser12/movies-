import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../_utils/ProviderOptions'

async function Login() {
    const session =await getServerSession(authOptions)
    console.log(session+"alllsllsl")
  return <>

  
  </>
}

export default Login