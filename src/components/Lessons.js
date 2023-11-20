import '../App.css';
import React from 'react';
import {Link} from "react-router-dom";
function Lessons(){
  const backgroundImageUrl = "https://eslbrains.com/wp-content/uploads/2019/09/how-to-learn-a-language-like-a-hyper-polyglot-473x381.png";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", 
    backgroundPosition: "center",
   
  };

    return(
     <div  style={containerStyle}>
      <div class="d-flex flex-column vh-100">
      <nav class="navbar bg-info">
      <Link to="/" class="navbar-brand mx-3">Language Learning</Link>
     <div class="nav ">
           <Link to="/home" class="nav-link">Logout</Link>
      </div>
      </nav>
      <div class="d-flex justify-content-center align-items-center ">
        <div>
        <h1>Hii Learners..</h1>
        <div class="mb-4">
        <Link to="/french" className="form-control text-decoration-none">
          French
         </Link>
        </div>
        
       </div>
       </div>
    </div>
     </div>
    )
}
export default Lessons;