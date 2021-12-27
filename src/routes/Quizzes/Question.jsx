import React from "react";

export default function Question(props) {
    
    
    return (
        <div className="pregunta">
            {props.currentQuiz + 1}. {props.pregunta.question}
        </div>
    )
}