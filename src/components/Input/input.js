import React from 'react'
import "../Input/input.css"

const Input = ({ onChangeinp, name,value,type,placeholder}) => {
  return (
    <div className='body'>
     
        <input className="inputs" onChange={onChangeinp} name={name} value={value} type={type} placeholder={placeholder}/>
    </div>
  )

  // const [user, setUser] = useState({})
  //       useEffect(() => {
  //           localStorage.setItem("key", JSON.stringify(user))
           
  //          }, [user])
  //     return JSON.parse(SavedDetails)

  //     const SavedDetails=()=>{localStorage.getItem("key")
  //     if(!SavedDetails) 
  //     return{
  //         firstname:"", 
  //         lastname:"", 
  //         email: "", 
  //         password:""
  //     };
  // }
}


export default Input