import React, { useState } from 'react';

function Script() {
    const questions = [
        {
            question: "Which is the largest animal in the world?",
            answers: [
                { text: "Shark", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: false },
            ]
        },
        // Add other questions similarly...
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const startQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
    };

    const selectAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div>
            {currentQuestionIndex < questions.length ? (
                <div>
                    <div>{`${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}`}</div>
                    <div>
                        {questions[currentQuestionIndex].answers.map((answer, index) => (
                            <button key={index} onClick={() => selectAnswer(answer.correct)}>
                                {answer.text}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div>{`You scored ${score} out of ${questions.length}!`}</div>
                    <button onClick={startQuiz}>Start Quiz Again</button>
                </div>
            )}
        </div>
    );
}

export default Script;