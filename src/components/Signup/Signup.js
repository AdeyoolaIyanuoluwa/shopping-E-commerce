import React, {useState} from 'react'
import Input from '../Input/input'
import "../Signup/signup.css"
import image from "../Assets/Images/image 12.png"
import PrimaryButton from '../Button/primary'

const Signup = () => {
    
    const [user, setUser] = useState([])
         
        const handleChange = (e) =>{
            const name = e.target.name;
            const value = e.target.value;
            setUser({...user, [name]: value})
                console.log(user);
        }
    
        const handleSignup=()=>{
            localStorage.setItem("key", JSON.stringify(user))
                // firstname:"" 
                // lastname:""
                // email: ""
                // password:""

            // const SaveDetails=()=>{localStorage.getItem("key")
            // if(!SaveDetails) 
            // return{
            //     firstname:"", 
            //     lastname:"", 
            //     email: "", 
            //     password:""
            // };
            //  return JSON.parse(SaveDetails)
            //  }
            
            }

  return (
    <div className='container'>
        <div>
            <img className='yellow-girl' src={image} alt="" />
        </div>
        <div className='container2'>
            <h1 className='sign-up'>SIGN UP</h1>
            <Input onChangeinp={handleChange} placeholder="Firstname" name='firstname' value={user.firstname} type='text' />

            <Input onChangeinp={handleChange} placeholder="Lastname" name='lastname' value={user.lastname} type='text' />

            <Input onChangeinp={handleChange} placeholder="Email" name='email' value={user.email} type='text' />

            <Input onChangeinp={handleChange} placeholder="Password" name='password' value={user.password} type='text' />
        <div>
            <PrimaryButton handleSignup={() => handleSignup()} children="SIGN UP" type="submit"/>
        </div>
        </div>
    </div>
  )
}

export default Signup