import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fishinsea from '../assets/fishinsea.png'

function Navbar() {
  return (
    <nav class="p-2 bg-white w-screen">
      <ul class="w-screen container flex flex-wrap items-center justify-between mx-auto border-4 border-black-500">
        <li class="flex justify-between items-center gap-12">
        <Link to='/'>
          <img src={fishinsea} className='w-6 m-1' alt="AgenciFlow logo" />
        </Link>
        <Link to='/'>
          <h1 class="font-bold text-xl">FishInSea</h1>
        </Link>
        </li>
        <li class="flex justify-between items-center gap-12 mr-1 mb-1 p10">
          <Link to='/' class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Dashboard
          </Link>
          <Link to='/chat' class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Chat
          </Link>
          <Link to='/clientmanagement' class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Clients
          </Link>
          <Link to='/list' class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Task List
          </Link>
          <Link to='/kanban' class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Task Board
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;