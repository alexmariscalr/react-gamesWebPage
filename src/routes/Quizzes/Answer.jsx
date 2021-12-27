import React from "react";
import { LangContext } from "../../App";
import './../../assets/styles/answer.css'

export default function Answer(props) {

    function setInput() {
        
        let inputs = JSON.parse(JSON.stringify(props.answers))
        console.log(inputs)
        document.getElementById("respuesta").value = inputs[props.currentQuiz]
        props.setInputInfo(inputs)

        if (inputs[props.currentQuiz]==""){
            alert("No se ha introducido respuesta")
        }
    }

    

    return (
        <LangContext.Consumer>
            {(context) => {
                return  <div className="answer">
                            <input className='input' type="text" id="respuesta" placeholder={context.dictionary["enter"]} />
                            <button className='mostarRespuesta' onClick={setInput} >{context.dictionary["showAnswer"]} <i class="fas fa-eye"></i></button>
                        </div>
            }}
        </LangContext.Consumer>
    );
}

