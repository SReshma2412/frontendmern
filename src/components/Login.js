import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Login(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
//http://localhost:3001/login
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/login",{email,password})
        .then(result=>
            {console.log(result)
            if(result.data==="success"){
                alert("login sucessfully")
            navigate('/home')
            }
        })
    .catch((err)=>console.log(err))
}
const backgroundImageUrl = "https://c1.wallpaperflare.com/preview/224/215/805/learning-education-word-letters-thumbnail.jpg";
const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
   
  };

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" style={containerStyle}>
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Enter email" class="form-control rounded-0" 
                        onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder="Enter password" class="form-control rounded-0" 
                        onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button 
                    type="submit" className="btn btn-success w-100 ">Login</button>
                    <p>Already have an account</p>
                </form>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            </div>
        </div>
    )
    
}
export default Login;