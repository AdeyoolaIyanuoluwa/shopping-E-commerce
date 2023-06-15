import React from 'react'

const Input = ({ onChange}) => {
  return (
    <div>
        <input onChange={onChange} name={firstname} value={user.firstname} type='text'/>
    </div>
  )
}

export default Input