
import Quiz from './Quiz';
import {Link} from "react-router-dom";
function Practice(){
    return(
        
       <div>
        <nav className="navbar bg-info">
        <Link to="/" className="navbar-brand mx-3">Practice</Link>
        <div className="nav">
          <Link to="/home" className="nav-link">Logout</Link>
        </div>
      </nav>
         <div class="bg-light vh-100">
            <h1>Practice session...</h1>
            <div class="container bg-info text-center" style={{ width: '350px',height:'300px' }}>
                <h2>In this practice session 3 quizes are available </h2>
                <Link to="/quiz" class="btn btn-warning">
                   go to practice
                </Link>
            </div>
            {/* <Quiz /> */}

        </div>
       </div>
    )
}
export default Practice;