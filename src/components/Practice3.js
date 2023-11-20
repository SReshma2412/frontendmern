import React from "react";
import {QuizData3} from "../Data/QuizData3";
import QuizResult from './QuizResult';
import {useState} from "react";
import {Link} from "react-router-dom";
function Practice3(){
    const [currentQuestion,setcurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const changeQuestion=()=>{
        updateScore();
        if(currentQuestion<QuizData3.length-1){
            setcurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }
        else{
            setShowResult(true)
        }
        
    }
    const updateScore=()=>{
        if(clickedOption===QuizData3[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
                setShowResult(false);
                setcurrentQuestion(0);
                setClickedOption(0);
                setScore(0);
       }
    return(
        <div>
             <nav className="navbar bg-info">
             <Link to="/" className="navbar-brand mx-3">practice3</Link>
        <div className="nav">
          <Link to="/practice" className="nav-link">Logout</Link>
        </div>
      </nav>
         <p className="heading-txt">Quiz App</p>
        <div>
        <div className="container">
            {showResult ?(
                <QuizResult score={score} totalScore={QuizData3.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}.</span>
                <span id="question-text">{QuizData3[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData3[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn" 
                        className={`option-btn ${
                            clickedOption==i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                            {option}
                        </button>
                    )
                })}
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
         </div>
        
        </div>
        <div style={{ float: "right", marginRight: "20px" }}>
        <Link to="/practice" className="btn btn-outline-primary m-3 text-decoration-none">
          Stop
        </Link>
      </div>
      <div style={{ float: "left", marginLeft: "20px" }}>
      <Link to="/practice2" className="btn btn-outline-primary m-3 text-decoration-none">
          prev
        </Link>
      </div>
        </div>
        
    )
}
export default Practice3;