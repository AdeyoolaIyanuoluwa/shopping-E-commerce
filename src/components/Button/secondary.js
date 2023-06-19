import React from 'react'
import "../Button/button.css"

const SecondaryButton = ({parent}) => {
  return (
    <div>
        <button className='secondary-button'>{parent}</button>
    </div>
  )
}

export default SecondaryButton