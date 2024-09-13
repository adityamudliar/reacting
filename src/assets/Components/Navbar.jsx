
import React from 'react'
import { Link } from "react-router-dom";



function Navbar() {
  return (
    <div className='main'>
      <div className="left">
        <h1 className='logo_text'>Navbar</h1>
      </div>
      <div className="right">
        <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/Header'}><li>Header</li></Link>
        <Link to={'/contact'}><li>Contact</li></Link>
          
        </ul>
      </div>

    </div>
  )
}

export default Navbar