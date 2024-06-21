import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
     <div className="navbar">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" href='/'>Blink of an Eye</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li><a>About</a></li>
      <li><a>Content</a></li>
      <li>
        <a>Subscribe</a>
      </li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar;
