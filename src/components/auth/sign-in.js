import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../api/auth.js'
import { useAuth } from '../../providers/authProvider'

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
    .then(() => navigate('/chat'))
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className='max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg'>
      <h1 className='text-2xl font-bold mb-6'>Sign In</h1>
      <form onSubmit={onSignIn}>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input className='border border-gray-400 p-2 w-full' type='text' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input className='border border-gray-400 p-2 w-full' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline' type='submit'>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn
