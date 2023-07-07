import React from 'react'
import "../Button/button.css"

const PrimaryButton = ({children, handleSignup, secondary}) => {
  return (
    <div>
        <button className={secondary ? 'secondary-button' :'primary-button'} onClick={handleSignup} >{children}</button>
    </div>
  )
}

export default PrimaryButton