import React from 'react'
import "../Button/button.css"

const SecondaryButton = ({parent,addtocart}) => {
    const addtocart=()=>{
      
    }
  return (
    <div>
        <button onClick={addtocart} className='secondary-button' >{parent}</button>
    </div>
  )
}

export default SecondaryButton