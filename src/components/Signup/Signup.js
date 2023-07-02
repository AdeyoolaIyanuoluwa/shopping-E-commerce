import React, {useState} from 'react'
import Input from '../Input/input'
import "../Signup/signup.css"
import image from "../Assets/Images/image 12.png"
import PrimaryButton from '../Button/primary'
import { useNavigate } from 'react-router-dom'
import { Validation } from './validation'

const Signup = () => {
    
    const [user, setUser] = useState({ 
        firstname:"", 
        lastname:"",
        email: "",
        password:""})
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    
        const handleChange = (e) =>{
            const name = e.target.name;
            const value = e.target.value;
            setUser({...user, [name]: value})
            setErrors(Validation(user))
        }

        const handleSignup=(e)=>{
            e.preventDefault()
            setErrors(Validation(user))
            localStorage.setItem("key", JSON.stringify(user))
            Object.values(Validation(user))?.length === 0 && navigate("/products")
                    
        }

  return (
    <div className='container'>
        <div>
            <img className='yellow-girl' src={image} alt="" />
            
        </div>
        <div className='container2'>
            <h1 className='sign-up'>SIGN UP</h1>

          <form onSubmit={handleSignup}>
                <Input onChangeinp={handleChange} placeholder="Firstname" name='firstname' value={user.firstname} type='text' />
                {errors.firstname && <p style={{color: "red"}}>{errors.firstname}</p>}

                <Input onChangeinp={handleChange} placeholder="Lastname" name='lastname' value={user.lastname} type='text' />
                {errors.firstname && <p style={{color: "red"}}>{errors.firstname}</p>}

                <Input onChangeinp={handleChange} placeholder="Email" name='email' value={user.email} type='text' />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                <Input onChangeinp={handleChange} placeholder="Password" name='password' value={user.password} type='text' />
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                <div>
                    <PrimaryButton children="SIGN UP" type="submit"/>
                    {/* {message} */}
                </div>
          </form>
        </div>
    </div>
  )
}

export default Signup