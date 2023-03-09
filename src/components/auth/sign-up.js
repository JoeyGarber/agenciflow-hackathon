import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp, signIn } from '../../api/auth.js'

import { useAuth } from '../../providers/authProvider.js'

function SignUp () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const onSignUp = (event) => {
    event.preventDefault()

    signUp({ email, password, passwordConfirmation })
    .then(() => signIn({ email, password, passwordConfirmation }))
    .then((response) => setUser(response.data.user))
    .then(() => console.log('Sign-up success! User now signed-up and logged-in'))
    .then(() => navigate('/'))
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className='sign-up-form'>
      <h1>Sign Up</h1>
      <input type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
      <input type='password' name='password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder='Confirm Password'/>
      <button className='bg-blue-500 rounded-md p-1' type='submit' onClick={onSignUp}>Submit</button>
    </div>
  )
}

export default SignUp