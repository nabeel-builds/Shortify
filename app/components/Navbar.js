import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-4 items-center text-white'>
        <Link href="/"><button className='logo font-bold text-2xl cursor-pointer'>
            Shortify
        </button></Link>
        <ul className='flex justify-center items-center gap-4'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-3'> 
                <Link href="/shorten"><button className='cursor-pointer bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>Try Now</button></Link>
                <Link target='_blank' href={"https://github.com/nabeel-builds"}><button className='cursor-pointer bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1'>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar