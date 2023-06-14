import React from 'react'
import "../Header/header.css"
import girl from "../Assets/Images/beautiful-girl.png"

const Header = () => {
  return (
    <div>
        <div className='main-box'>
           <div className='header-text'>
                <h1 className='text1'>LET'S EXPLORE UNIQUE CLOTHES.</h1>
                <p className='text2'>Live for Influencial and Innovative fashion!</p>
                <button>SHOP NOW</button>
           </div>
           <div>
                <img className='img' src={girl} alt="" />
           </div>
        </div>
        <div className='rectangle'>

        </div>
    </div>
  )
}

export default Header