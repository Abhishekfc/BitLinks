"use client"; // ✅ This is required to use hooks like useSession

import React from 'react'
import Link from 'next/link'
import LoginBtn from './LoginBtn' // ✅ Import LoginBtn here

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-950 flex justify-between items-center  text-white px-10'>
        <div className="logo font-bold text-lg">
            <Link href='/'>BitLinks</Link>
        </div>
        <ul className=' flex justify-center items-center gap-4'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/dashboard'><li>Dashboard</li></Link>
            <Link href='/contact'><li>Contact US</li></Link>
            <li className='flex gap-3'>
                <Link href='/shorten'><button className='bg-purple-200 p-3 py-1 cursor-pointer text-black font-bold rounded-lg shadow-xl hover:scale-105 transition-transform  duration-200 ease-in-out'>Try Now</button></Link>
                <Link href='/github'><button className='bg-purple-200 p-3 py-1 cursor-pointer text-black font-bold rounded-lg shadow-xl hover:scale-105 transition-transform  duration-200 ease-in-out'>Github</button></Link>
                <LoginBtn /> {/* ✅ Add login button here */}
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
