import React, {useState} from 'react'

const Signup = () => {
        const [user, setUser] = useState({firstname:"", lastname:"", email: "", password:""})
        const [array, setArray] = useState([])
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value})
            console.log(user);
    }
    const handleSignup=()=>{
            setArray([...array, user])
            console.log(array);
    }
  return (
    <div>
        <div>
            <input onChange={handleChange} placeholder='Firstname' name='firstname' value={user.firstname} type='text'/>
            <input onChange={handleChange} placeholder='Lastname' name='lastname' value={user.lastname} type='text'/>
            <input onChange={handleChange} placeholder='Email' name='email' value={user.email} type='email'/>
            <input onChange={handleChange} placeholder='Password' name='password' value={user.password} type='password'/>
        </div>
        <div>
            <button onClick={handleSignup} type='submit'>SIGN UP</button>
        </div>
    </div>
  )
}

export default Signup