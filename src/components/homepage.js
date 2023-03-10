import React from 'react'
import fishinsea from '../assets/fishinsea.png'

function Homepage () {
  return (
    <div className='homepage flex flex-col items-center'>
      <h1 className='text-4xl font-bold'>Welcome to FishInSea</h1>
      <p className='p-3 text-2xl'>We think you're going to like it here</p>
      <img src={fishinsea} className='p-4' alt="AgenciFlow logo" />
    </div>
  )
}

export default Homepage