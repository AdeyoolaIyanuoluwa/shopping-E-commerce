import React from 'react'
import "../Input/input.css"

const Input = ({ onChangeinp, name,value,type,placeholder}) => {
  return (
    <div className='body'>
     
        <input className="inputs" onChange={onChangeinp} name={name} value={value} type={type} placeholder={placeholder}/>
    </div>
  )
}

export default Input