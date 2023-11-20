import {Link} from "react-router-dom";
function French() {
    return (
        <div>
            <div className="d-flex flex-column bg-light vh-100" style={{ backgroundImage: "url('le.jpg')" }}>
            <nav class="navbar bg-info">
      <Link to="/" class="navbar-brand mx-3">Language Learning</Link>
     <div class="nav ">
           <Link to="/home" class="nav-link">Logout</Link>
      </div>
      </nav>
                <div class="d-flex flex-wrap justify-content-center">
                <div className="my-3 mx-3" style={{ width: "300px", height: "300px", border: "1px solid grey",borderRadius: '8px'}}>
                    <img src="https://img.freepik.com/premium-photo/back-school-supplies-office-accessories-blackboard-background-top-view-design_254791-1324.jpg" alt="French Image" style={{ width: "100%", height: "50%" }} />
                    <h1 class="justify-content-center align-items-center">Lesson 1</h1>
                    {/* <Link to="/frenchLesson"  class="btn btn-outline-primary>
                     Read Lessons
                    </Link> */}
                    <Link to="/frenchLesson" className="btn btn-outline-primary m-3 text-decoration-none">
                      Read Lessons
                </Link>
                <Link to="/fvideo1" className="btn btn-outline-warning m-3 text-decoration-none">
                      Watch video
                </Link>
                    {/* <button type="submit" class="btn btn-outline-warning m-3">Watch video</button> */}
                </div>
                <div className="my-3 mx-3" style={{ width: "300px", height: "300px", border: "1px solid grey",borderRadius: '8px'}}>
                    <img src="https://img.freepik.com/premium-photo/back-school-supplies-office-accessories-blackboard-background-top-view-design_254791-1324.jpg" alt="French Image" style={{ width: "100%", height: "50%" }} />
                    <h1 class="justify-content-center align-items-center">Lesson 2</h1>
                    <Link to="/frenchLesson2" className="btn btn-outline-primary m-3 text-decoration-none">
                      Read Lessons
                </Link>
                    <button type="button" class="btn btn-outline-warning m-3">Watch video</button>
                </div>
                <div className="my-3 mx-3" style={{ width: "300px", height: "300px", border: "1px solid grey",borderRadius: '8px'}}>
                    <img src="https://img.freepik.com/premium-photo/back-school-supplies-office-accessories-blackboard-background-top-view-design_254791-1324.jpg" alt="French Image" style={{ width: "100%", height: "50%" }} />
                    <h1 class="justify-content-center align-items-center">Lesson 3</h1>
                    <Link to="/frenchLesson3" className="btn btn-outline-primary m-3 text-decoration-none">
                      Read Lessons
                </Link>
                    <button type="button" class="btn btn-outline-warning m-3">Watch video</button>
                </div>
                <div className="my-3 mx-3" style={{ width: "300px", height: "300px", border: "1px solid grey",borderRadius: '8px'}}>
                    <img src="https://img.freepik.com/premium-photo/back-school-supplies-office-accessories-blackboard-background-top-view-design_254791-1324.jpg" alt="French Image" style={{ width: "100%", height: "50%" }} />
                    <h1 class="justify-content-center align-items-center">Lesson 4</h1>
                    <Link to="/frenchLesson4" className="btn btn-outline-primary m-3 text-decoration-none">
                      Read Lessons
                </Link>
                    <button type="button" class="btn btn-outline-warning m-3">Watch video</button>
                </div>
                <div className="my-3 mx-3" style={{ width: "300px", height: "300px", border: "1px solid grey",borderRadius: '8px'}}>
                    <img src="https://img.freepik.com/premium-photo/back-school-supplies-office-accessories-blackboard-background-top-view-design_254791-1324.jpg" alt="French Image" style={{ width: "100%", height: "50%" }} />
                    <h1 class="justify-content-center align-items-center">Lesson 5</h1>
                    <Link to="/frenchLesson5" className="btn btn-outline-primary m-3 text-decoration-none">
                      Read Lessons
                </Link>
                    <button type="button" class="btn btn-outline-warning m-3">Watch video</button>
                </div>
                <div className="my-3 mx-3" style={{ width: "300px", height: "300px", border: "1px solid grey",borderRadius: '8px'}}>
                    <img src="https://img.freepik.com/premium-photo/back-school-supplies-office-accessories-blackboard-background-top-view-design_254791-1324.jpg" alt="French Image" style={{ width: "100%", height: "50%" }} />
                    <h1 class="justify-content-center align-items-center">Lesson 6</h1>
                    <Link to="/frenchLesson6" className="btn btn-outline-primary m-3 text-decoration-none">
                      Read Lessons
                </Link>
                    <button type="button" class="btn btn-outline-warning m-3">Watch video</button>
                </div>
                               
                <div className="my-3 mx-3" style={{ width: "300px", height: "300px", border: "1px solid grey",borderRadius: '8px'}}>
                    <img src="https://img.freepik.com/premium-photo/back-school-supplies-office-accessories-blackboard-background-top-view-design_254791-1324.jpg" alt="French Image" style={{ width: "100%", height: "50%" }} />
                    <h1 class="justify-content-center align-items-center">Lesson 7</h1>
                    <Link to="/frenchLesson7" className="btn btn-outline-primary m-3 text-decoration-none">
                      Read Lessons
                </Link>
                    <button type="button" class="btn btn-outline-warning m-3">Watch video</button>
                </div>
                <div className="my-3 mx-3" style={{ width: "300px", height: "300px", border: "1px solid grey",borderRadius: '8px'}}>
                    <img src="https://img.freepik.com/premium-photo/back-school-supplies-office-accessories-blackboard-background-top-view-design_254791-1324.jpg" alt="French Image" style={{ width: "100%", height: "50%" }} />
                    <h1 class="justify-content-center align-items-center">Lesson 8</h1>
                    <Link to="/frenchLesson8" className="btn btn-outline-primary m-3 text-decoration-none">
                      Read Lessons
                </Link>
                    <button type="button" class="btn btn-outline-warning m-3">Watch video</button>
                </div>

                <div className="my-3 mx-3" style={{ width: "300px", height: "300px", border: "1px solid grey",borderRadius: '8px'}}>
                    <img src="https://img.freepik.com/premium-photo/back-school-supplies-office-accessories-blackboard-background-top-view-design_254791-1324.jpg" alt="French Image" style={{ width: "100%", height: "50%" }} />
                    <h1 class="justify-content-center align-items-center">Lesson 9</h1>
                    <Link to="/frenchLesson9" className="btn btn-outline-primary m-3 text-decoration-none">
                      Read Lessons
                </Link>
                    <button type="button" class="btn btn-outline-warning m-3">Watch video</button>
                </div>

                <div className="my-3 mx-3" style={{ width: "300px", height: "300px", border: "1px solid grey",borderRadius: '8px'}}>
                    <img src="https://img.freepik.com/premium-photo/back-school-supplies-office-accessories-blackboard-background-top-view-design_254791-1324.jpg" alt="French Image" style={{ width: "100%", height: "50%" }} />
                    <h1 class="justify-content-center align-items-center">Lesson 10</h1>
                    <Link to="/frenchLesson10" className="btn btn-outline-primary m-3 text-decoration-none">
                      Read Lessons
                </Link>
                    <button type="button" class="btn btn-outline-warning m-3">Watch video</button>
                </div>
                
                </div>
            </div>
        </div>
    );
}

export default French