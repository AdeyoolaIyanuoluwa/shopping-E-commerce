import React, {useState, useEffect} from 'react'
import Input from '../Input/input'
import "../Signup/signup.css"
import image from "../Assets/Images/image 12.png"


const Getusers = ()=>{
    const SavedDetails=()=>{localStorage.getItem("key")
   if(!SavedDetails) 
   return{
       firstname:"", 
       lastname:"", 
       email: "", 
       password:""
   };
       return JSON.parse(SavedDetails)
}   
}
    
const Signup = () => {
        const [user, setUser] = useState(Getusers)
        // const [array, setArray] = useState([])
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value})
            console.log(user);
    }
    useEffect(() => {
                 localStorage.setItem("key", JSON.stringify(user))
                
                }, [user])
    
    const handleSignup=()=>{
            console.log("submitted");
            // if(!user){
            //     alert("incorrect")
            // }else{
            //     localStorage.setItem("key", JSON.stringify(user))
            // }
    }
  return (
    <div className='container'>
        <div>
            <img className='yellow-girl' src={image} alt="" />
        </div>
        <div>
            <h1>SIGN UP</h1>
            <Input onChangeinp={handleChange} placeholder="Firstname" name='firstname' value={user.firstname} type='text' />

            <Input onChangeinp={handleChange} placeholder="Lastname" name='lastname' value={user.lastname} type='text' />

            <Input onChangeinp={handleChange} placeholder="Email" name='email' value={user.email} type='text' />

            <Input onChangeinp={handleChange} placeholder="Password" name='password' value={user.password} type='text' />
        <div>
            <button onClick={handleSignup} type='submit'>SIGN UP</button>
        </div>
        </div>
    </div>
  )
}

export default Signup