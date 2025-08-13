import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between h-15 shadow items-center bg-gray-300'>
       <div className='w-[10%] h-full flex items-center'>
          <h1 className='font-bold text-zinc-800 m-2'>CRUD Operation</h1>
       </div>
       <div className='w-[20%] h-full flex'>
          <ul className='flex w-full gap-6 list-none items-center text-zinc-800 font-medium '>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
          </ul>
       </div>
    </div>
  )
}

export default Navbar