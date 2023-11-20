import { useState,useEffect} from "react";
import {Link} from "react-router-dom";
function QuizForm(props)
{
    const [question,setquestion] = useState(props.questionValue);
    const [option1,setoption1] = useState(props.option1Value);
    const [option2,setoption2] = useState(props.option2Value);
    const [option3,setoption3] = useState(props.option3Value);
    const [option4,setoption4] = useState(props.option4Value);
    const [answer,setanswer] = useState(props.answerValue);

    useEffect(()=>{
        setquestion(props.questionValue);
        setoption1(props.option1Value);
        setoption2(props.option2Value);
        setoption3(props.option3Value);
        setoption4(props.option4Value);
        setanswer(props.answerValue);
    },[props.questionValue,props.option1Value,props.option2Value,props.option3Value,props.option4Value,props.answerValue]);
    const arr = [question,option1,option2,option3,option4,answer];
    const handleClick=()=>{
        props.getState(arr);
    }
   
return(

   <div>
     
     <div style={{maxWidth:"40%",margin:"0px auto"}}>
    <input  defaultValue={props.questionValue} onChange={(event)=>setquestion(event.target.value)} class="form-control my-3" placeholder="Enter question" />
    <input  defaultValue={props.option1Value} onChange={(event)=>setoption1(event.target.value)} class="form-control my-3" placeholder="Enter option1" />
    <input  defaultValue={props.option2Value} onChange={(event)=>setoption2(event.target.value)} class="form-control my-3" placeholder="Enter option2" />
    <input  defaultValue={props.option3Value} onChange={(event)=>setoption3(event.target.value)} class="form-control my-3" placeholder="Enter option3" />
    <input  defaultValue={props.option4Value} onChange={(event)=>setoption4(event.target.value)} class="form-control my-3" placeholder="Enter option4" />
    <input  defaultValue={props.answerValue} onChange={(event)=>setanswer(event.target.value)} class="form-control my-3" placeholder="Enter answer" />
   <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
   </div>
   </div>
)
}
export default QuizForm;