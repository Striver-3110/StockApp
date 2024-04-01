import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [link,setLink] = useState('Dashboard')

    const handleClick = (l) =>{
        setLink(l);
    }
  return (
    <nav className='bg-richblack-700 shadow shadow-gray-300 w-100 px-8 md:px-auto'>
      <div className='md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-center flex-wrap md:flex-nowrap'>
        <div className='text-gray-500 order-3 w-full md:w-auto md:order-2'>
          <ul className='flex font-semibold justify-between'>
            <Link to="/">
              <li style={{ transition: 'background-color 0.3s, color 0.3s' }} onClick={()=>setLink('Dashboard')} className={`md:px-4 md:py-2 text-indigo-500 ${link == 'Dashboard' ?'p-2 bg-richblack-800 rounded-lg' : ''}`}>
                <a href='#'>Dashboard</a>
              </li>
            </Link>
            <Link to="/search">
            <li style={{ transition: 'background-color 0.3s, color 0.3s' }} onClick={()=>setLink('Search')} className={`md:px-4 md:py-2 text-indigo-500 ${link == 'Search' ?'p-2 bg-richblack-800 rounded-lg' : ''}`}>
              <a href='#'>Search</a>
            </li>
            </Link>
            <Link to="/Explore">
            <li style={{ transition: 'background-color 0.3s, color 0.3s' }} onClick={()=>setLink('Explore')} className={`md:px-4 md:py-2 text-indigo-500 ${link == 'Explore' ?'p-2 bg-richblack-800 rounded-lg' : ''}`}>
              <a href='#'>Explore</a>
            </li>
            </Link>
            <Link to="/About">
            <li style={{ transition: 'background-color 0.3s, color 0.3s' }} onClick={()=>setLink('About')} className={`md:px-4 md:py-2 text-indigo-500 ${link == 'About' ?'p-2 bg-richblack-800 rounded-lg' : ''}`}>
              <a href='#'>About</a>
            </li>
            </Link>
            <Link to="/contact">
            <li style={{ transition: 'background-color 0.3s, color 0.3s' }} onClick={()=>setLink('Contact')} className={`md:px-4 md:py-2 text-indigo-500 ${link == 'Contact' ?'p-2 bg-richblack-800 rounded-lg' : ''}`}>
              <a href='#'>Contact</a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
