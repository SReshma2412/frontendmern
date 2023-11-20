import { useEffect } from 'react';
import QuizForm from './QuizForm';
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
function EditQuiz(){
    const {id} =useParams();
    const [initialValue,setInitialValue]=useState({question:"",option1:"",option2:"",option3:"",option4:"",answer:""});
    const [newData,setNewData]=useState([]);
//https://crud-backend-intern.onrender.com/quizRoute/update-quiz/
    //http://localhost:3001/quizRoute/update-quiz/
    //http://localhost:3001/quizRoute/update-quiz/
    //https://crud-backend-intern.onrender.com/quizRoute/update-quiz/
    useEffect(()=>{
        Axios.get("http://localhost:3001/quizRoute/update-quiz/"+id)
        .then((res)=>{
            if(res.status===200)
             {
                const {question,option1,option2,option3,option4,answer}= res.data;
                setInitialValue({question,option1,option2,option3,option4,answer});
             }
            else
              Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id])
    const getState=(childData)=>{
        setNewData(childData);
    }
    const handleSubmit=()=>{
        const data={question:newData[0],option1:newData[1],option2:newData[2],option3:newData[3],option4:newData[4],answer:newData[5]};
        Axios.put("http://localhost:3001/quizRoute/update-quiz/"+id,data)
        .then((res)=>{
            if(res.data===200)
             alert("Record updated successfully");
            else 
              Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return(
        
       <div>
        <nav className="navbar bg-info">
        <div className="nav">
        <Link to="/quiz-list" className="nav-link">quizlist</Link>
          <Link to="/quizzes" className="nav-link">Logout</Link>
        </div>
      </nav>
         <form onSubmit={handleSubmit} >

      <QuizForm  getState={getState}
           questionValue={initialValue.question}
           option1Value={initialValue.option1}
           option2Value={initialValue.option2}
           option3Value={initialValue.option3}
           option4Value={initialValue.option4}
           answerValue={initialValue.answer} >
            Edit Quiz
            </QuizForm>
      </form>
       </div>
    )
}
export default EditQuiz;