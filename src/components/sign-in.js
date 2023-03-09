import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../api/auth'

import { useAuth } from '../providers/authProvider'

function SignIn () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const onSignIn = (event) => {
    event.preventDefault()

    signIn({ email, password })
    .then((response) => setUser(response.data.user))
    .then(() => console.log('Sign-In success!'))
    .then(() => navigate('/'))
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className='sign-up-form'>
      <h1>Sign In</h1>
      <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='bg-blue-500 rounded-md p-1' type='submit' onClick={onSignIn}>Submit</button>
    </div>
  )
}

export default SignIn