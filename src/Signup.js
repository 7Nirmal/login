import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./signup.css";

export default function Signup() {
    const [user,setUser] = useState({username:"",password:"",email:""})
    const navigate = useNavigate();
    const handlechange = (e) =>{
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value});
      }
      const handlesubmit = (e) =>{
        e.preventDefault();
        console.log(user);
        navigate("/booking");
      }
      

  return (
    <div className='signup-conatiner'>
        <div className='side-bar'>
      <div className='text'>
      <p style={{"color":"black","font-size":"50px"}}>Signup!</p>
      </div>
    </div>
    <section className='signup-form'>
        <form onSubmit={handlesubmit} className="form">
            <label>Username</label>
            <input type="text" placeholder="username" onChange={handlechange} name="username"/>
            <label>Password</label>
            <input type="text" placeholder="password" onChange={handlechange} name="password"/>
            <label>Email</label>
            <input type="email" placeholder="email" onChange={handlechange} name="email"/>
            <button type="submit">submit</button>
 
        </form>
    </section>
      
    </div>
  )
}
