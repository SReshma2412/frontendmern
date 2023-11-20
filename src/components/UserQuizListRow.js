import React, { useState } from "react";

function UserQuizListRow(props) {
  const { _id, question, option1, option2, option3, option4, answer } = props.obj;

  const [selectedOption, setSelectedOption] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      alert("Please select an option before submitting.");
      return;
    }

    let selectedOptionIndex = 0;

    if (selectedOption === option1) {
      selectedOptionIndex = 1;
    } else if (selectedOption === option2) {
      selectedOptionIndex = 2;
    } else if (selectedOption === option3) {
      selectedOptionIndex = 3;
    } else if (selectedOption === option4) {
      selectedOptionIndex = 4;
    }

    if (selectedOptionIndex === answer) {
      setShowMessage("Your answer is correct!");
    } else {
      setShowMessage("Your answer is incorrect.");
    }

    setSelectedOption("");
  };

  return (
    <div class="quiz">
      <div className="quiz-form">
        <h3>{question}</h3>
        <form>
        <div>
       
       <label>
              <input
                type="radio"
                 value={option1}
                 checked={selectedOption === option1}
                 onChange={handleOptionChange}
                 
               />
               {option1}
              </label>
         </div>
         <div>
         <label>
               <input
                 type="radio"
                 value={option2}
                 checked={selectedOption === option2}
                 onChange={handleOptionChange}
               />
               {option2}
              </label>
         </div>
         <div>
       <label>
               <input
                 type="radio"
                 value={option3}
                 checked={selectedOption === option3}
                 onChange={handleOptionChange}
               />
               {option3}
              </label>
              
         </div>
         <div>
         <label>
               <input
                 type="radio"
                 value={option4}
                 checked={selectedOption === option4}
                 onChange={handleOptionChange}
               />
               {option4}
             </label>
         </div>
        </form>
      </div>
      <div>
        <button className="btn btn-info" style={{ margin: "15px" }} onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {showMessage && <p>{showMessage}</p>}
    </div>
  );
}

export default UserQuizListRow;