import React from 'react'
import logo from "../Assets/Images/logo.png"
import "../navbar/navbar.css"

const Navbar = () => {
  return (
    <div>
         <nav>
            <ul className='Navbar'>
                <li><img className='image' src={logo} alt="" /></li>

                <li className='nav-link'>CATALOGUE</li>
                <li className='nav-link'>FASHION</li>
                <li className='nav-link'>FAVOURITE</li>
                <li className='nav-link'>LIFESTYLE</li>
                <li className='nav-link'><button className='btn'>SIGN UP</button></li>
                
            </ul>
         </nav>
            

    </div>
  )
}

export default Navbar