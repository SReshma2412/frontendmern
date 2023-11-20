import React from "react";
import {QuizData2} from "../Data/QuizData2";
import QuizResult from './QuizResult';
import {useState} from "react";
import {Link} from "react-router-dom";
function Practice2(){
    const [currentQuestion,setcurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const changeQuestion=()=>{
        updateScore();
        if(currentQuestion<QuizData2.length-1){
            setcurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }
        else{
            setShowResult(true)
        }
        
    }
    const updateScore=()=>{
        if(clickedOption===QuizData2[currentQuestion].answer){
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
             <Link to="/" className="navbar-brand mx-3">practice2</Link>
        <div className="nav">
          <Link to="/practice" className="nav-link">Logout</Link>
        </div>
      </nav>
         <p className="heading-txt">Quiz App</p>
        <div>
        <div className="container">
            {showResult ?(
                <QuizResult score={score} totalScore={QuizData2.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}.</span>
                <span id="question-text">{QuizData2[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {QuizData2[currentQuestion].options.map((option,i)=>{
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
        <Link to="/practice3" className="btn btn-outline-primary m-3 text-decoration-none">
          Next Practice
        </Link>
      </div>
      <div style={{ float: "left", marginLeft: "20px" }}>
      <Link to="/quiz" className="btn btn-outline-primary m-3 text-decoration-none">
          Prev
        </Link>
      </div>
        </div>
        
    )
}
export default Practice2;