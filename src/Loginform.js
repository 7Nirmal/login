import {useState} from "react";
import "./loginform.css";
import { useNavigate } from "react-router-dom";
export default function Loginform() {
    const [user,setUser] = useState({username:"",password:""})
    const navigate = useNavigate();
  const handlechange = (e) =>{
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user,[name]:value});
  }

  const handlesubmit = () =>{
    console.log(user);
    navigate("/booking");
  }
  return (
    <div className="login-container" >
    <div className='side-bar'>
      <div className='text'>
      <h1>Welcome to Flight-booking APP!</h1>
      <p>Login to Book tickets</p>
      </div>

    </div>
  <div className="App">
    <div className="login-form">
      <input type="text" placeholder="username" onChange={handlechange} name="username"/>
      <input type="password" placeholder="password"  onChange={handlechange} name="password"/>
      <button onClick={handlesubmit}>Submit</button>
      <button onClick={()=>navigate("/signup")}>Signup</button>

    </div>
  </div>
  </div>
  )
}
