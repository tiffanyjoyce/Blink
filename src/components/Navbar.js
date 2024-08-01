import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
     <div className="navbar">
  <div className="flex-1">
    <a className="home-text btn btn-ghost text-xl" href='/'>Blink of an Eye</a>
  </div>
  <div className="flex-none">
    <ul className="nav-list menu menu-horizontal px-1">
    {/* <li><a className='about-text'href="/about">About</a></li> */}
      <li><a className="content-text"href='/content'>Content</a></li>
      <li>
        <a className="subscribe-text"href='/subscribe'>Subscribe</a>
      </li>
    </ul>
  </div>
  {/* <div className="nav-dropdown navbar-end">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>About</a></li>
        <li><a>Content</a></li>
        <li><a>Subscribe</a></li>
      </ul>
    </div>
  </div> */}
</div>
    </div>
  )
}

export default Navbar;
