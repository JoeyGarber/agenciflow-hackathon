import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav class="p-2 bg-white">
      <ul class="container flex flex-wrap items-center justify-between mx-auto border-4 border-black-500">
        <li class="flex justify-between items-center gap-12">
          <img alt="AgenciFlow logo" />
          <a class="font-bold text-xl">AgenciFlow</a>
        </li>
        <li class="flex justify-between items-center gap-12 mr-1 mb-1 p10">
          <Link href="#" class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Dashboard
          </Link>
          <Link href="#" class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Chat
          </Link>
          <Link href="#" class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Projects
          </Link>
          <Link href="#" class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Clients
          </Link>
          <Link href="#" class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Task
          </Link>
          <Link href="#" class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Board
          </Link>
          <Link href="#" class="border border-gray-300 hover:border-black cursor-pointer rounded outline-none">
            Invoices
          </Link>
        </li>
        <ul class="flex items-center">
            <li>
                <button onClick={toggleDropdown}>Profile</button>
                {showDropdown && (
                <button>Logout</button>
                )}
            </li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navbar;