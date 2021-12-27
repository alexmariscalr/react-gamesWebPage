import React from "react";
import { LangContext } from "../../../App";
import './../../../assets/styles/buttons.css'

export default function Previous_Next(props) {

    
    
    
    {/* Pregunta anterior */}
    function previousQuestion() {
        if (props.currentQuiz > 0) {
            props.setcurrentQuiz(props.currentQuiz - 1)
        }

        props.clear()

    }

    {/* Siguiente pregunta */}
    function nextQuestion() {
        if (props.currentQuiz < props.preguntas.length-1 ) {
            props.setcurrentQuiz(props.currentQuiz + 1)
        }


        props.clear()
    }

    return (
        <LangContext.Consumer>
            {(context) => {
                return <div id="botones">
                    <button className="anterior" onClick={previousQuestion}> <i class="fas fa-arrow-circle-left"></i> {context.dictionary["previousQuestion"]} </button>
                    <button className="siguiente" onClick={nextQuestion}> {context.dictionary["nextQuestion"]} <i class="fas fa-arrow-circle-right"></i></button>
                </div>
            }}
        </LangContext.Consumer>
    );

    


}