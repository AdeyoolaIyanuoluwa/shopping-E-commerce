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

                <Link className='nav-link' to="/products">CATALOGUE</Link>
                <li className='nav-link'>FASHION</li>
                <li className='nav-link'>FAVOURITE</li>
                <li className='nav-link'>LIFESTYLE</li>
                <li className='nav-link'>
                    <Link className='nav-link btn' to="/signup">SIGN UP</Link>
                    
                </li>
                
            </ul>
         </nav>
            
         {/* <nav class="navbar navbar-expand-lg ">
                <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation ">
                        <span class="navbar-toggler-icon"></span>
                        </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className='Navbar'>
                        <li><img className='image' src={logo} alt="" /></li>
                        <li>
                            <Link className="nav-link" >CATALOGUE</Link>
                        </li>
                        <li>
                            <Link className="nav-link">FASHION</Link>
                        </li>
                        <li>
                            <Link className="nav-link">FAVOURITE</Link>
                        </li>
                        <li>
                            <Link className="nav-link">LIFESTYLE</Link>
                        </li>
                        <li className='nav-link'>
                            <Link className='nav-link btn' to="/signup">SIGN UP</Link>
                        </li>
                    </ul>   
                </div>
                </div>
            </nav> */}

    </div>
  )
}

export default Navbar