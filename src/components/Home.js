import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const backgroundImageUrl = "https://c1.wallpaperflare.com/preview/224/215/805/learning-education-word-letters-thumbnail.jpg";
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", 
  };

  return (
    <div style={containerStyle}>
      <nav className="navbar bg-info">
        <Link to="/" className="navbar-brand mx-3">Language Learning</Link>
        <div className="nav">
          <Link to="/lessons" className="nav-link">Lessons</Link>
          <Link to="/quizzes" className="nav-link">Quizzes</Link>
          <Link to="/practice" className="nav-link">Practice</Link>
          <Link to="/register" className="nav-link">Logout</Link>
        </div>
      </nav>
    </div>
  );
}

export default Home;