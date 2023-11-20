import QuizForm from './QuizForm';
import {useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
function CreateQuiz(){
    const [arr,setArr]=useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }
    const handleSubmit=(event)=>{
      event.preventDefault();
        const data={question:arr[0],option1:arr[1],option2:arr[2],option3:arr[3],option4:arr[4],answer:arr[5]}
        Axios.post("https://crud-backend-intern.onrender.com/quizRoute/create-quiz",data)
        .then((res)=>{
            if(res.status===200)
              alert("Record added successfully");
            else
              Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset()
    }
    return (
        <div>
            <nav className="navbar bg-info">
            <Link to="/" className="navbar-brand mx-3">create quiz</Link>
        <div className="nav">
          <Link to="/quiz-list" className="nav-link">quizlist</Link>
          <Link to="/quizzes" className="nav-link">Logout</Link>
        </div>
      </nav>
        <form onSubmit={handleSubmit}>
            <QuizForm getState={getState}
            questionValue=""
            option1Value=""
            option2Value=""
            option3Value=""
            option4Value=""
            answerValue="">
              Create Quiz
              </QuizForm>
        </form>
        </div>
    )
}
export default CreateQuiz;