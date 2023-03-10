import React from 'react'

// import { useAuth } from '../providers/authProvider'

function Homepage () {
  // const { user } = useAuth()
  return (
    <div className='homepage flex flex-col items-center'>
      <h1 className='text-4xl font-bold'>Welcome to FishInSea</h1>
      <p>...Get it? Yeah you get it.</p>
    </div>
  )
}

export default Homepage