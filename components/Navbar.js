import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-slate-700 flex justify-between items-center  text-white px-10'>
        <div className="logo font-bold text-lg">
            BitLinks
        </div>
        <ul className=' flex justify-center items-center gap-4'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/generate'><li>Shorten</li></Link>
            <Link href='/contact'><li>Contact US</li></Link>
            <li className='flex gap-3'>
                <Link href='/generate'><button className='bg-slate-500 p-3 py-1 font-bold rounded-lg shadow-xl'>Try Now</button></Link>
                <Link href='/github'><button className='bg-slate-500 p-3 py-1 font-bold rounded-lg shadow-xl'>Github</button></Link>

            </li>
        </ul>
    </nav>
  )
}

export default Navbar
