import React from 'react'
import "../Button/button.css"

const PrimaryButton = ({children, handleSignup}) => {
  return (
    <div>
        <button className='primary-button' onClick={handleSignup} >{children}</button>
    </div>
  )
}

export default PrimaryButton