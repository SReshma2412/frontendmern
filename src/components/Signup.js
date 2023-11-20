import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';
import {useNavigate} from "react-router-dom";
function Signup(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate()
    //http://localhost:3001/register'
    const handleSubmit=(e)=>{
        e.preventDefault()
        Axios.post('http://localhost:3001/register',{name,email,password})
        .then(result=>{console.log(result)
            alert("Register succesfully")
            navigate('/login')
        })
        .catch(err=>console.log(err))
    }
    const backgroundImageUrl = "https://c1.wallpaperflare.com/preview/224/215/805/learning-education-word-letters-thumbnail.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", // Adjust as needed
        backgroundPosition: "center", // Adjust as needed
       
      };
    
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" style={containerStyle}>
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter name" class="form-control rounded-0" 
                        onChange={(e)=>setName(e.target.value)}    />
                    </div>
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
                    type="submit" className="btn btn-success w-100 ">Register</button>
                    <p>Already have an account</p>
                </form>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link>
            </div>
        </div>
    )
}
export default Signup;