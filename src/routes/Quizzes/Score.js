import React from "react";
import { LangContext } from "../../App";
import './../../assets/styles/score.css'

let url3="https://definicion.de/wp-content/uploads/2015/06/adios.jpg"

export default function Score(props) {

    
    
    const stars = []

    var cociente = ~~(props.score/2);
    var resto = (props.score%2);
    console.log(resto);
    console.log(cociente);
    

    if (cociente > 0) {
    for (let i=0; i<cociente ; i++){
        stars.push(<i class="fas fa-star"></i>)
    }
}


    if (resto !== 1){
        
        while (stars.length<5){
            stars.push(<i class="far fa-star"></i>)
        }
    }

    if (resto===1) {
        stars.push(<i class="fas fa-star-half-alt"></i>)
        while (stars.length<5){
            stars.push(<i class="far fa-star"></i>)
        
        }
    }

    




    return (
        <LangContext.Consumer>
            {(context) => {
                return <div>
                <h6>{context.dictionary["end"]}</h6>
                <div className="gracias">
                    <img src= {context.dictionary["urlThankYou"]}/>
                </div>
                <h2>{context.dictionary["finalScore"]} {props.score}/10</h2>
                <div className="stars">
                    {stars}
                </div>
               <form action="/" method="get" target="_blank">
                   <div className="boton">
                       <button ><i class="fas fa-home"></i> {context.dictionary["backHome"]} </button>
                    </div> 
               </form>
            </div>
    
            }}
        </LangContext.Consumer>
        
    );

}