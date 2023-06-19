import React from 'react'
import Input from '../Input/input'

const Login = () => {
  return (
    <div className='container'>
        <div>
            <h1>LOGIN HERE</h1>
        </div>
        <Input placeholder="Email"/>
        <Input placeholder="Password" type="password"/>
    </div>
  )
}

export default Login