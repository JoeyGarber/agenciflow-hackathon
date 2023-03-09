import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp, signIn } from '../../api/auth.js';
import { useAuth } from '../../providers/authProvider.js';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const onSignUp = (event) => {
    event.preventDefault();

    signUp({ email, password, passwordConfirmation })
      .then(() => signIn({ email, password, passwordConfirmation }))
      .then((response) => setUser(response.data.user))
      .then(() => console.log('Sign-up success! User now signed-up and logged-in'))
      .then(() => navigate('/'))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold mb-8'>Sign Up</h1>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='text'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 font-bold mb-2' htmlFor='password'>
            Confirm Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='password'
            name='password'
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder='Confirm Password'
          />
        </div>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
          onClick={onSignUp}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
