import React from 'react'
import { LangContext } from '../../../App'
import './../../../assets/styles/buttons.css'




export default function Submit(props) {

    function confirmar() {
        var resultado= window.confirm('¿Are you sure?');
        if(resultado === true){
            submit()
        }
        else {
            return;
        }
    }
    
    function addAnswer() {
        let answersCopy =  JSON.parse(JSON.stringify(props.answers))
        let newAnswer = document.getElementById("respuesta").value
        answersCopy[props.currentQuiz] = newAnswer
        props.setAnswers(answersCopy)
    }


    function checkAnswers() {
        let aciertos = 0
        for (let i=0; i < props.preguntas.length; i++) {
            if (props.answers[i] === props.preguntas[i].answer) {
                aciertos++
            }
        }
        props.setScore(props.score + aciertos)
    }

    function submit() {
        addAnswer()
        props.setFinished(true)
        checkAnswers()
    }



    return (
        <LangContext.Consumer>
            {(context) => {
                return <div className='comprobar'>
                    <p><button id='submit' onClick={confirmar}>{context.dictionary["submit"]} <i class="far fa-check-square"></i></button></p>
                    
                </div>
            }}
        </LangContext.Consumer>

    );
}
