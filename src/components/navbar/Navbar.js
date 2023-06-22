import React from 'react'
import logo from "../Assets/Images/logo.png"
import "../navbar/navbar.css"
import { Link } from 'react-router-dom'
// import PrimaryButton from '../Button/primary'
// import SecondaryButton from '../Button/secondary'

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
                <li className='nav-link'>
                    <Link className='nav-link btn' to="/signup">SIGN UP</Link>
                    
                </li>
                
            </ul>
         </nav>
            

    </div>
  )
}

export default Navbar