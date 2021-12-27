import React from 'react'
import { LangContext } from '../../../App'
import './../../../assets/styles/buttons.css'




export default function Save(props) {


    
    function addAnswer() {
        let answersCopy =  JSON.parse(JSON.stringify(props.answers))
        if (document.getElementById("respuesta").value !== "") {
            let newAnswer = document.getElementById("respuesta").value
            answersCopy[props.currentQuiz] = newAnswer
            props.setAnswers(answersCopy)
            alert("Saved successfully")
        }
        else {
            alert("Nothing to save")
            return
        } 
    }
    return (
        <LangContext.Consumer>
            {(context) => {
                return <div className='add'>
                    <button id='add' onClick={addAnswer}>{context.dictionary["addAnswer"]} <i class="far fa-save"></i></button>
                    
                </div>
            }}
        </LangContext.Consumer>

    );
}
