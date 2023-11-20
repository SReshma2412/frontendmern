import {Link} from "react-router-dom";
function Quizzes(){
    const backgroundImageUrl = "https://ays-pro.com/images/articles/208/online-quiz-for-learning.png";
    const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    minHeight: "100vh", 

  };
    return(
            // <CreateQuiz />
            <div style={containerStyle} >
                <nav className="navbar bg-info" >
                <Link to="/" className="navbar-brand mx-3">Quizzes</Link>
            <div className="nav">
                <Link to="/admin" className="nav-link">Admin</Link>
                <Link to="/userquiz-list" className="nav-link">Attend Quiz</Link>
                <Link to="/home" className="nav-link">Logout</Link>
            </div>
          </nav>
            </div>    
    )
}
export default Quizzes;