import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fishinsea from '../assets/fishinsea.png'

function Navbar() {
  return (
    <nav class="p-2 dark:bg-agencyGrey w-screen">
      <ul class="w-screen container flex flex-wrap items-center justify-between mx-auto">
        <li class="flex justify-between items-center gap-12">
        <Link to='/'>
          <img src={fishinsea} className='w-6 m-1' alt="AgenciFlow logo" />
        </Link>
        <Link to='/'>
          <h1 class="font-bold text-xl text-white">FishInSea</h1>
        </Link>
        </li>
        <li class="flex justify-between items-center gap-12 mr-1 mb-1 p10">
          <Link to='/' className="hover:border-black cursor-pointer rounded outline-none text-white">
            Dashboard
          </Link>
          <Link to='/chat' className="hover:border-black cursor-pointer rounded outline-none text-white">
            Chat
          </Link>
          <Link to='/clientmanagement' className="hover:border-black cursor-pointer rounded outline-none text-white">
            Clients
          </Link>
          <Link to='/list' className="hover:border-black cursor-pointer rounded outline-none text-white">
            Task List
          </Link>
          <Link to='/kanban' className="hover:border-black cursor-pointer rounded outline-none text-white">
            Task Board
          </Link>
          <Link to='/stripe' className="hover:border-black cursor-pointer rounded outline-none text-white">
            Stripe
          </Link>
          <Link to='/invoices' className="hover:border-black cursor-pointer rounded outline-none text-white">
            Invoices
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;