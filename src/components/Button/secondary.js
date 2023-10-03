import React from 'react'
import "../Button/button.css"

const SecondaryButton = ({parent,addtocart}) => {
  return (
    <div >
        <button onClick={addtocart} className='secondary-button' data-testid="btn">{parent}</button>
    </div>
  )
}

export default SecondaryButton