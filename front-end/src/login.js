import React, { useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [action,setAction] = useState("LOGIN");
  const[formdata,setformdata]=useState({
    username:"",
    email:"",
    password:""
  })
const changeHandler =  (e)=>{
  setformdata({...formdata,[e.target.name]:e.target.value});
}

  const login = async()=>{
    console.log("Login Executed",formdata);
    let responsedata;
    
    await fetch('https://shop4u-1.onrender.com/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formdata)
    }).then((response)=> response.json()).then((data)=>responsedata=data)
    if(responsedata.success){
      localStorage.setItem('auth-token',responsedata.token);
      window.location.replace('/home');
    }
    else{
      alert(responsedata.errors);
    }


  }

  const signup = async()=>{
    console.log("Signup Executed",formdata);
    let responsedata;
    
    await fetch('https://shop4u-1.onrender.com/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formdata)
    }).then((response)=> response.json()).then((data)=>responsedata=data)
    if(responsedata.success){
      localStorage.setItem('auth-token',responsedata.token);
      window.location.replace('/home');
    }
    else{
      alert(responsedata.errors);
    }

  }

  return (
    <div className='loginbody'>
      
      <div className='container'>
      <div><h1 className='loginheading'>{action}</h1>
      <p className='dash'></p></div>
      {
        action==="SIGN UP" ?  <div><h2 className='reviews'>Enter Your Name</h2>
        <input name='username' value={formdata.username} onChange={changeHandler} className='lgnipt' type="email" placeholder=' Enter your Name...' required /></div>
        : <div></div>
      }
        <h2 className='reviews'>Enter Your Email</h2>
        <input name='email' value={formdata.email} onChange={changeHandler} className='lgnipt' type="email" placeholder=' Enter your Email...' required />
        <h2 className='reviews'>Enter Your Password</h2>
        <input name='password' value={formdata.password} onChange={changeHandler} className='lgnipt' type="password" placeholder=' Enter your Password...' required/> <br/>
        {
          action==="SIGN UP" ? <p></p> :<p className='reviews'>Forget Password ? <Link className='forget' to=''>Click here.!</Link></p>
        }

        {
          action === "LOGIN"  ? 
            <button className='enter' onClick={()=>{login()}}>Shop Now </button>
            :
            <button className='enter' onClick={()=>{signup()}}>Register</button>
        }
        
        <div className='lgnsignup'>
        <button type="submit" className={action==="LOGIN"? "submitlgn" : "submitsignup"} onClick={()=>{setAction("LOGIN")}}>Login</button>
        <button type="submit" className={action==="SIGN UP"? "submitlgn" : "submitsignup"} onClick={()=>{setAction("SIGN UP")}}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
