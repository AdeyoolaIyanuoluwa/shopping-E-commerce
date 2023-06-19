import React from 'react'
import "../Button/button.css"

const PrimaryButton = ({children}) => {
  return (
    <div>
        <button className='primary-button'>{children}</button>
    </div>
  )
}

export default PrimaryButton