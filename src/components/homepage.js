import React from 'react'

import { useAuth } from '../providers/authProvider'

function Homepage () {
  const { user } = useAuth()
  return (
    <div className='homepage'>
      <h1>Homepage</h1>
      <p>This will be the landing page</p>
      <button className='bg-blue-500 rounded-md p-1' onClick={() => console.log(user)}>Log user</button>
    </div>
  )
}

export default Homepage