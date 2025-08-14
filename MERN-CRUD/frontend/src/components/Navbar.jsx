import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between h-auto md:h-15 shadow items-center bg-gray-300 p-3">
      
      {/* Logo Section */}
      <div className="w-full md:w-[30%] flex items-center justify-center md:justify-start">
        <h1 className="font-bold text-zinc-800 text-lg md:text-xl">
          CRUD Operation
        </h1>
      </div>

      {/* Menu Section */}
      <div className="w-full md:w-[50%]">
        <ul className="flex flex-col md:flex-row w-full gap-4 md:gap-6 list-none items-center justify-center md:justify-end text-zinc-800 font-medium">
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Home</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">About</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
