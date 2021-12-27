import React from "react";
import '../../assets/styles/game.css';
import { LangContext } from "../../App";

export default function Game (props) {

return( 
        <LangContext.Consumer>
            {(context) => {
                return <div className="juego">
                     <div id="numeropregunta">
                         {context.dictionary["number"]} {props.currentQuiz + 1}
                     </div>
                     <div id="pregunta">
                        {props.pregunta.question}
                     </div>
                     
                     

                     <br />
                    
                    
                </div>
            }}
        </LangContext.Consumer>
    
    
        );
}