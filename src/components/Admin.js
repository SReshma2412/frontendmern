import { useState } from "react";
import { Link } from "react-router-dom";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "kani@gmail.com" && password === "kani@123") {
      setLoggedIn(true); 
    } else {
      console.log("Invalid email or password");
    }
  };
  const backgroundImageUrl = "https://weblizar.com/wp-content/uploads/2018/08/background.jpg";
  const containerStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: "cover",
  // backgroundPosition: "center",
  minHeight: "100vh", 

};

  return (
    <div style={containerStyle}>
        <div className="form" >
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="Enter email"
              className="form-control rounded-0"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control rounded-0"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-outline-success text-center " style={{margin:"5px",width:"200px"}}>
            Login
          </button>
        </form>
      ) : (
        <Link to="/create-quiz" className="btn btn-outline-success">
          Go to Create Quiz
        </Link>
      )}
    </div>
    </div>
  );
}

export default Admin;