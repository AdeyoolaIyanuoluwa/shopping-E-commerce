import React from 'react'
import "../Header/header.css"
import girl from "../Assets/Images/beautiful-girl.png"
import logos from "../Assets/Images/logos.png"
import PrimaryButton from '../Button/primary'

const Header = () => {
  return (
    <div>
        <div className='main-box'>
           <div className='header-text'>
                <h1 className='text1'><span className='let'>LET'S</span> EXPLORE <span className='unique'>UNIQUE</span> CLOTHES.</h1>
                <p className='text2'>Live for Influencial and Innovative fashion!</p>

                <PrimaryButton children="SHOP NOW"/>
                {/* <button className='shop-btn'>SHOP NOW</button> */}
           </div>
           <div>
                <img className='img' src={girl} alt="" />
           </div>
        </div>
        <div className='rectangle'>
                <img className='logos' src={logos} alt="" />
        </div>
    </div>
  )
}

export default Header